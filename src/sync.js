// Optional cloud extras: Firestore sync + Remote Config.
// Both are defensive — the app works fully offline without them. Every
// function returns null / falls back to a local default on any failure.

import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { fetchAndActivate, getRemoteConfig, getValue } from "firebase/remote-config";
import { DEFAULT_LONG_NOTE_CHARS } from "./router.js";

let db = null;
let rc = null;
let authReady = false;

export function initCloudExtras(app) {
  try {
    db = getFirestore(app);
    rc = getRemoteConfig(app);
    rc.settings = { minimumFetchIntervalMillis: 3600000 };
    rc.defaultConfig = { routing_long_note_chars: DEFAULT_LONG_NOTE_CHARS };
    return true;
  } catch {
    return false;
  }
}

/** Routing threshold from Remote Config (falls back to the local default). */
export async function getLongNoteThreshold() {
  if (!rc) return DEFAULT_LONG_NOTE_CHARS;
  try {
    await fetchAndActivate(rc);
    const v = Number(getValue(rc, "routing_long_note_chars").asString());
    return Number.isFinite(v) && v > 0 ? v : DEFAULT_LONG_NOTE_CHARS;
  } catch {
    return DEFAULT_LONG_NOTE_CHARS;
  }
}

async function ensureAnonAuth(app) {
  if (authReady) return true;
  try {
    const auth = getAuth(app);
    await signInAnonymously(auth);
    authReady = true;
    return true;
  } catch {
    return false;
  }
}

/**
 * Upload notes to Firestore (collection "notes", one document per note).
 * Requires anonymous auth enabled + rules from firestore.rules.
 * Returns { synced, failed } counts.
 */
export async function syncNotesToFirestore(app, notes) {
  if (!db) return { synced: 0, failed: notes.length, error: "Firestore is not initialized." };
  if (!(await ensureAnonAuth(app))) {
    return { synced: 0, failed: notes.length, error: "Anonymous sign-in failed. Enable Anonymous auth in the Firebase console." };
  }
  let synced = 0;
  let failed = 0;
  let lastError = null;
  for (const note of notes) {
    try {
      await setDoc(doc(db, "notes", note.id), {
        title: note.title || "",
        body: note.body || "",
        tags: note.tags || [],
        updatedAt: serverTimestamp(),
        syncedAt: new Date().toISOString(),
      });
      synced += 1;
    } catch (err) {
      failed += 1;
      lastError = err;
    }
  }
  return { synced, failed, error: lastError ? String(lastError.message || lastError) : null };
}
