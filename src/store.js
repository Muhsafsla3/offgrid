// Offline-first notes store backed by IndexedDB. No network, no Firebase
// dependency — notes work even with zero connectivity and no config.

const DB_NAME = "offgrid-notes";
const DB_VERSION = 1;
const STORE = "notes";

function openDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: "id" });
        store.createIndex("updatedAt", "updatedAt", { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function tx(db, mode) {
  return db.transaction(STORE, mode).objectStore(STORE);
}

function request(req) {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export function newNoteId() {
  return `n_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function blankNote() {
  const now = Date.now();
  return {
    id: newNoteId(),
    title: "",
    body: "",
    tags: [],
    imageDataUrl: null,
    imageName: null,
    ai: {}, // { summary, keyPoints[], actionItems[], generatedTitle, answers: [] }
    createdAt: now,
    updatedAt: now,
    syncedAt: null,
  };
}

export async function listNotes() {
  const db = await openDb();
  const all = await request(tx(db, "readonly").getAll());
  return all.sort((a, b) => b.updatedAt - a.updatedAt);
}

export async function getNote(id) {
  const db = await openDb();
  return request(tx(db, "readonly").get(id));
}

export async function saveNote(note) {
  const db = await openDb();
  const copy = { ...note, updatedAt: Date.now() };
  await request(tx(db, "readwrite").put(copy));
  return copy;
}

export async function deleteNote(id) {
  const db = await openDb();
  await request(tx(db, "readwrite").delete(id));
}

export function sampleNote() {
  const note = blankNote();
  note.title = "SAMPLE — Field notes, campus visit";
  note.body = [
    "Visited the campus library at 9am. The reading room was full — students",
    "queue for the group study rooms from 8:30. The librarian said the new",
    "silent zone on floor 3 opens next month.",
    "",
    "Ideas: run a short survey about study-room booking. Ask 10 students what",
    "time slots they miss most. Check if the student council already collects",
    "this data — don't duplicate their work.",
    "",
    "Follow up: email the librarian about the silent zone rules, and ask the",
    "council about their survey results before Friday.",
  ].join("\n");
  note.tags = ["sample", "field-notes"];
  return note;
}
