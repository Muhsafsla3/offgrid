// Firebase project "offgrid" (Project ID offgrid-2deda), created 25 Nov 2026
// for #BuildHybridAI 2026. AI Logic via Gemini Developer API (free, no
// billing). These are CLIENT values — safe to embed in a public web app
// (the Firebase apiKey is not a secret; access is gated by App Check +
// Firebase security rules, not by this key).
export const firebaseConfig = {
  apiKey: "AIzaSyCQ48hSbAQ3OHMwVgMjw5PwzJwZKLkSqIk",
  authDomain: "offgrid-2deda.firebaseapp.com",
  projectId: "offgrid-2deda",
  storageBucket: "offgrid-2deda.firebasestorage.app",
  messagingSenderId: "939570123611",
  appId: "1:939570123611:web:d832079a29a9f95f4a807e",
};

// Fraud Defense (reCAPTCHA Enterprise) site key for App Check, registered in
// Firebase console -> App Check. Classic reCAPTCHA v3 keys are no longer
// issued by Google, so the app uses ReCaptchaEnterpriseProvider (see ai.js).
export const recaptchaSiteKey = "6LdaNjAuAAAAAKuMlcVNIuPKlCHqHG_tc0lKgYt1";

// Set to true while developing on localhost so the App Check debug provider
// is used. The debug token printed in the browser console must be registered
// in Firebase console -> App Check -> Apps -> Manage debug tokens.
export const useAppCheckDebug = false;
