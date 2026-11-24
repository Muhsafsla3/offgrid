// Copy this file to firebase-config.js and fill in the values from your
// Firebase console (Project settings -> Your apps -> Web app).
// firebase-config.js is git-ignored: never commit real credentials.
// See NOTES.md section 5 (in the repo root) for the exact steps.
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Fraud Defense (reCAPTCHA Enterprise) site key for App Check (Firebase
// console -> App Check). Required when App Check is enforced (the AI Logic
// setup workflow enforces it). Leave empty to skip App Check init (AI calls
// will then fail with an App Check error until this is set). Classic
// reCAPTCHA v3 keys are no longer issued — use the Enterprise key.
export const recaptchaSiteKey = "";

// Set to true while developing on localhost so the App Check debug provider
// is used. The debug token printed in the browser console must be registered
// in Firebase console -> App Check -> Apps -> Manage debug tokens.
export const useAppCheckDebug = false;
