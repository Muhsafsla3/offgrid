# Offgrid — notes that think on-device

**Offgrid** is an offline-first notebook with hybrid AI, built with
[Firebase AI Logic](https://firebase.google.com/docs/ai-logic) for
**#BuildHybridAI 2026** (Devpost). Your notes are understood on-device
whenever possible — private, free, and working offline — and the app hands
work to Gemini in the cloud only when it matters.

- **On-device first (Gemini Nano, Chrome):** summarize, key points,
  action items, titles, and questions about a note — plus reading a
  whiteboard photo — all run on-device when the model is available.
- **Cloud fallback (Gemini):** long notes and questions across many notes
  are routed to the cloud model automatically.
- **Transparent routing:** every answer shows a badge — *On-device* or
  *Cloud* — plus the reason it was routed there and how long it took.
- **Offline-first:** notes live in IndexedDB and work with zero
  connectivity. Optional Firestore sync + Remote Config for the routing
  threshold.

## How hybrid inference works here

The app uses one SDK call for both worlds:

```js
import { getAI, getGenerativeModel, GoogleAIBackend, InferenceMode } from "firebase/ai";
const ai = getAI(firebaseApp, { backend: new GoogleAIBackend() });
const model = getGenerativeModel(ai, { mode: InferenceMode.PREFER_ON_DEVICE });
model.initializeDeviceModel((p) => showProgress(p)); // after a user gesture
const result = await model.generateContent(prompt);
result.response.inferenceSource; // "on-device" | "in-cloud"
```

Routing rules (`src/router.js`, unit-tested) in Auto mode:

| Situation | Route |
| --- | --- |
| Question across many notes | Cloud (reasons over many notes) |
| Offline | On-device (nothing leaves the device) |
| Note longer than the threshold (Remote Config `routing_long_note_chars`, default 1500) | Cloud (deeper reasoning) |
| Device model ready, short note | On-device (private, free, instant) |
| Device model not ready | Cloud (automatic fallback) |

The user can also force **On-device only** (`ONLY_ON_DEVICE`) or
**Cloud only** (`ONLY_IN_CLOUD`) from the mode switcher.

Key points and action items use **structured JSON output**
(`responseMimeType: "application/json"` + `responseSchema`), which the
on-device model supports. On-device inference is single-turn text
generation only — no multi-turn chat — which is why every AI action in
Offgrid is a single, self-contained request.

## Setup

**Requirements:** Node.js 18+, Chrome 139+ on desktop (for on-device
inference), a Firebase project.

1. **Create a Firebase project** at https://console.firebase.google.com/
   (no Google Analytics needed). Go to **AI Services → AI Logic → Get
   started** and choose the **Gemini Developer API** provider. This
   workflow automatically enforces App Check.
2. **Copy the config template and fill it in:**
   ```sh
   cp src/firebase-config.example.js src/firebase-config.js
   ```
   Get the values from Project settings → Your apps → Web app:
   `apiKey`, `authDomain`, `projectId`, `storageBucket`,
   `messagingSenderId`, `appId`. `src/firebase-config.js` is committed in
   this repo — it holds Firebase *client* values only (the web apiKey is
   not a secret; access is gated by App Check + security rules).
3. **App Check (Fraud Defense / reCAPTCHA Enterprise):** Firebase console
   → App Check → register the app with Fraud Defense, copy the **site
   key** into `recaptchaSiteKey` in `firebase-config.js`. Register your
   hosting domain in the reCAPTCHA admin console. Classic reCAPTCHA v3
   keys are no longer issued by Google — the app uses
   `ReCaptchaEnterpriseProvider`.
4. **Localhost debug token:** run the app with `useAppCheckDebug: true`
   in the config, open DevTools Console, copy the printed
   `AppCheck debug token`, and register it in console → App Check →
   Apps → Manage debug tokens. (Never commit the token.)
5. **Enable the on-device model in Chrome:**
   `chrome://flags/#prompt-api-for-gemini-nano-multimodal-input` → Enabled,
   restart Chrome, then click **Download on-device model** in the app
   (or run `await LanguageModel.create()` in DevTools).
6. **Install & run:**
   ```sh
   npm install
   npm run dev      # http://localhost:5173
   npm run build    # production bundle in dist/
   npm test         # unit tests for the hybrid router
   ```
7. **Optional — Firestore sync:** create a Firestore database, apply
   `firestore.rules`, and enable **Authentication → Anonymous**. The
   in-app **Sync now** button then uploads notes.
8. **Optional — Remote Config:** create the parameter
   `routing_long_note_chars` (default 1500). The app uses its local
   default if the parameter is missing.

## What still needs a real Firebase project

The app is complete and builds cleanly, and it is wired to the real
Firebase project **offgrid-2deda** (Gemini Developer API, App Check via
Fraud Defense). What has not been exercised end-to-end yet: a live
`generateContent` call in Chrome 139+ with the Prompt API flag on — open
the app, click **Download on-device model**, create a note, and run
**Summarize**: the result card must show the **On-device** badge. Paste a
long note (>1500 chars) and the same action must show the **Cloud** badge
with the routing reason. Firestore sync and Remote Config are optional and
not yet enabled in the Firebase project (the app works without them).

## Deploy

```sh
npm run build
# then deploy dist/ — e.g. Firebase Hosting:
#   npm i -g firebase-tools && firebase login && firebase init hosting && firebase deploy
```

## Submission (Devpost #BuildHybridAI 2026)

- Platform: **Web**
- Repo: this repository (public, Apache 2.0)
- Demo video: ≤3 minutes on YouTube (see `../NOTES.md` §6 for the shot list)
- Deadline: **1 Dec 2026 06:00 WITA** (30 Nov 2026 17:00 EST)

## License

Apache License 2.0 — see `LICENSE`.
