// Firebase AI Logic wrapper for Offgrid.
//
// This is the only module that talks to Firebase AI Logic. Everything in the
// UI goes through runText / runJson / describeImage, which return
// { text, source, ms } where source is the SDK's inferenceSource
// ("on-device" or "in-cloud") so the UI can show exactly where the answer
// came from.
//
// Hybrid inference (docs: firebase.google.com/docs/ai-logic/hybrid/web/get-started):
//   - getGenerativeModel(ai, { mode }) with InferenceMode.PREFER_ON_DEVICE /
//     ONLY_ON_DEVICE / PREFER_IN_CLOUD / ONLY_IN_CLOUD.
//   - initializeDeviceModel() MUST be called after a user gesture and before
//     the first query (it triggers the on-device model download).
//   - On-device supports single-turn text generation only (no multi-turn chat).

import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
import {
  getAI,
  getGenerativeModel,
  GoogleAIBackend,
  InferenceMode,
  SchemaType,
} from "firebase/ai";
import { firebaseConfig, recaptchaSiteKey, useAppCheckDebug } from "./firebase-config.js";

let app = null;
let ai = null;
let initError = null;

export function isConfigured() {
  return Boolean(
    firebaseConfig &&
      firebaseConfig.apiKey &&
      firebaseConfig.apiKey !== "YOUR_API_KEY" &&
      firebaseConfig.projectId &&
      firebaseConfig.projectId !== "YOUR_PROJECT_ID",
  );
}

export function getInitError() {
  return initError;
}

/** The initialized FirebaseApp (null until initFirebase() succeeds). */
export function getFirebaseApp() {
  return app;
}

/** Initialize Firebase + AI Logic. Returns true on success, false otherwise. */
export function initFirebase() {
  if (app) return true;
  if (!isConfigured()) {
    initError =
      "Firebase is not configured yet. Copy src/firebase-config.example.js to src/firebase-config.js and fill in your project values (see NOTES.md section 5).";
    return false;
  }
  try {
    app = initializeApp(firebaseConfig);
    if (recaptchaSiteKey) {
      if (useAppCheckDebug) {
        // Debug provider for localhost: the token printed in the browser
        // console must be registered in Firebase console -> App Check.
        self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
      }
      initializeAppCheck(app, {
        // Fraud Defense (reCAPTCHA Enterprise) — Classic reCAPTCHA v3 keys
        // are no longer issued by Google, so Enterprise is the correct
        // provider for the site key in firebase-config.js.
        provider: new ReCaptchaEnterpriseProvider(recaptchaSiteKey),
        isTokenAutoRefreshEnabled: true,
      });
    }
    ai = getAI(app, { backend: new GoogleAIBackend() });
    return true;
  } catch (err) {
    initError = friendlyError(err);
    app = null;
    ai = null;
    return false;
  }
}

/** On-device model availability via the Chrome Prompt API. */
export async function getDeviceStatus() {
  try {
    if (typeof LanguageModel === "undefined") return "unavailable";
    const status = await LanguageModel.availability();
    // "available" | "downloading" | "downloadable" | "unavailable"
    return status || "unknown";
  } catch {
    return "unknown";
  }
}

/**
 * Trigger the on-device model download. MUST be called from a user gesture
 * (button click) and before the first on-device query.
 * onProgress receives a 0..1 fraction.
 */
export async function ensureDeviceModel(onProgress) {
  if (!ai) throw new Error("Firebase AI Logic is not initialized.");
  const model = getGenerativeModel(ai, { mode: InferenceMode.PREFER_ON_DEVICE });
  await model.initializeDeviceModel((val) => {
    if (typeof onProgress === "function") onProgress(val);
  });
  return true;
}

function getModel(mode, generationConfig) {
  if (!ai) throw new Error("Firebase AI Logic is not initialized.");
  const opts = { mode };
  if (generationConfig) opts.generationConfig = generationConfig;
  return getGenerativeModel(ai, opts);
}

function friendlyError(err) {
  const msg = String((err && err.message) || err || "Unknown error");
  if (/app-check/i.test(msg)) {
    return "App Check blocked this request. Make sure the Fraud Defense (reCAPTCHA Enterprise) site key is set and the deployed domain is allowed for that key (reCAPTCHA admin console), and (for localhost) the debug token is registered in the Firebase console.";
  }
  if (/on-device|device model|not available/i.test(msg)) {
    return "The on-device model isn't available on this browser. Enable chrome://flags/#prompt-api-for-gemini-nano-multimodal-input, use Chrome 139+ on desktop, and let the model download finish — or switch the mode to Cloud.";
  }
  if (/quota|429|resource-exhausted/i.test(msg)) {
    return "The cloud quota was exceeded. Wait a bit and try again, or switch the mode to On-device.";
  }
  if (/permission|api key|api-key|api_key/i.test(msg)) {
    return "The Firebase API key or project setup looks wrong. Check src/firebase-config.js and that the Gemini Developer API is enabled for the project.";
  }
  return msg;
}

/** Stream a text answer. onToken receives each text chunk. */
export async function runText(prompt, { mode, onToken } = {}) {
  const started = Date.now();
  try {
    const model = getModel(mode || InferenceMode.PREFER_ON_DEVICE);
    const stream = await model.generateContentStream(prompt);
    let text = "";
    for await (const chunk of stream.stream) {
      const t = chunk.text();
      if (t) {
        text += t;
        if (typeof onToken === "function") onToken(text);
      }
    }
    const response = await stream.response;
    return {
      text: text || response.text(),
      source: response.inferenceSource || "unknown",
      ms: Date.now() - started,
    };
  } catch (err) {
    // Streaming not supported for this path — fall back to one-shot.
    if (/stream/i.test(String((err && err.message) || ""))) {
      const model = getModel(mode || InferenceMode.PREFER_ON_DEVICE);
      const result = await model.generateContent(prompt);
      return {
        text: result.response.text(),
        source: result.response.inferenceSource || "unknown",
        ms: Date.now() - started,
      };
    }
    throw new Error(friendlyError(err));
  }
}

/**
 * Structured JSON answer. `schema` is a plain object using SchemaType values,
 * e.g. { type: SchemaType.OBJECT, properties: {...}, required: [...] }.
 * Returns the parsed JSON object.
 */
export async function runJson(prompt, schema, { mode } = {}) {
  const started = Date.now();
  const model = getModel(mode || InferenceMode.PREFER_ON_DEVICE, {
    responseMimeType: "application/json",
    responseSchema: schema,
  });
  try {
    const result = await model.generateContent(prompt);
    const raw = result.response.text();
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      throw new Error(`The model returned text that is not valid JSON: ${raw.slice(0, 200)}`);
    }
    return {
      data: parsed,
      source: result.response.inferenceSource || "unknown",
      ms: Date.now() - started,
    };
  } catch (err) {
    throw new Error(friendlyError(err));
  }
}

/** Describe an image (JPEG/PNG) with a text prompt — multimodal, on-device first. */
export async function describeImage(prompt, file, { mode } = {}) {
  const started = Date.now();
  const base64 = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = () => reject(new Error("Could not read the image file."));
    reader.readAsDataURL(file);
  });
  const imagePart = {
    inlineData: { data: base64, mimeType: file.type },
  };
  try {
    const model = getModel(mode || InferenceMode.PREFER_ON_DEVICE);
    const result = await model.generateContent([prompt, imagePart]);
    return {
      text: result.response.text(),
      source: result.response.inferenceSource || "unknown",
      ms: Date.now() - started,
    };
  } catch (err) {
    throw new Error(friendlyError(err));
  }
}

export { InferenceMode, SchemaType };
