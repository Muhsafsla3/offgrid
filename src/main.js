// Offgrid — UI + orchestration.
// All AI calls go through src/ai.js; all routing decisions through
// src/router.js (pure, tested). Notes live in IndexedDB (src/store.js).

import {
  InferenceMode,
  SchemaType,
  describeImage,
  ensureDeviceModel,
  getDeviceStatus,
  getFirebaseApp,
  getInitError,
  initFirebase,
  isConfigured,
  runJson,
  runText,
} from "./ai.js";
import { decide, sourceLabel, DEFAULT_LONG_NOTE_CHARS } from "./router.js";
import {
  blankNote,
  deleteNote,
  getNote,
  listNotes,
  sampleNote,
  saveNote,
} from "./store.js";
import { getLongNoteThreshold, initCloudExtras, syncNotesToFirestore } from "./sync.js";

const $ = (id) => document.getElementById(id);

const state = {
  notes: [],
  currentId: null,
  mode: localStorage.getItem("offgrid-mode") || "auto",
  deviceStatus: "unknown",
  threshold: DEFAULT_LONG_NOTE_CHARS,
  aiReady: false,
  busy: false,
};

// ---------- helpers ----------
function esc(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function setStatus(msg) {
  $("aiStatus").textContent = msg;
}

function badgeHtml(source) {
  const label = sourceLabel(source);
  const cls =
    label === "On-device" ? "badge-device" : label === "Cloud" ? "badge-cloud" : "badge-unknown";
  return `<span class="badge ${cls}">${esc(label)}</span>`;
}

function resultCard(title, bodyHtml, decision, result) {
  const el = document.createElement("div");
  el.className = "result-card";
  const ms = result && typeof result.ms === "number" ? ` · ${result.ms} ms` : "";
  const source = result ? result.source : "unknown";
  el.innerHTML = `<h4>${esc(title)}${badgeHtml(source)}</h4>${bodyHtml}
    <p class="route-reason">${esc(decision.reason)}${ms}</p>`;
  return el;
}

function debounce(fn, ms) {
  let t = null;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

// ---------- notes ----------
async function refreshList() {
  state.notes = await listNotes();
  const q = $("searchInput").value.trim().toLowerCase();
  const list = $("noteList");
  list.innerHTML = "";
  const shown = state.notes.filter(
    (n) =>
      !q ||
      (n.title || "").toLowerCase().includes(q) ||
      (n.body || "").toLowerCase().includes(q),
  );
  if (shown.length === 0) {
    const li = document.createElement("li");
    li.innerHTML = `<div class="nl-snippet">No notes yet.</div>`;
    list.appendChild(li);
    return;
  }
  for (const n of shown) {
    const li = document.createElement("li");
    if (n.id === state.currentId) li.classList.add("active");
    li.innerHTML = `<div class="nl-title">${esc(n.title || "(Untitled)")}</div>
      <div class="nl-snippet">${esc((n.body || "").split("\n")[0] || "Empty note")}</div>`;
    li.addEventListener("click", () => selectNote(n.id));
    list.appendChild(li);
  }
}

function currentNote() {
  return state.notes.find((n) => n.id === state.currentId) || null;
}

async function selectNote(id) {
  const note = await getNote(id);
  if (!note) return;
  state.currentId = id;
  $("emptyState").hidden = true;
  $("editorBody").hidden = false;
  $("titleInput").value = note.title || "";
  $("bodyInput").value = note.body || "";
  $("tagsInput").value = (note.tags || []).join(", ");
  $("charCount").textContent = `${(note.body || "").length.toLocaleString("en-US")} chars`;
  $("imagePreviewWrap").hidden = !note.imageDataUrl;
  if (note.imageDataUrl) {
    $("imagePreview").src = note.imageDataUrl;
    $("imageName").textContent = note.imageName || "Attached photo";
    $("describeBtn").disabled = false;
  } else {
    $("imagePreview").src = "";
    $("imageName").textContent = "";
    $("describeBtn").disabled = true;
  }
  $("aiResults").innerHTML = "";
  $("askManyResult").innerHTML = "";
  renderStoredResults(note);
  await refreshList();
}

function renderStoredResults(note) {
  const box = $("aiResults");
  const ai = note.ai || {};
  if (ai.summary) {
    box.appendChild(
      resultCard("Summary", `<p>${esc(ai.summary)}</p>`, { reason: "Saved from an earlier run." }, { source: ai.summarySource || "unknown" }),
    );
  }
  if (ai.keyPoints && ai.keyPoints.length) {
    box.appendChild(
      resultCard(
        "Key points",
        `<ul>${ai.keyPoints.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`,
        { reason: "Saved from an earlier run." },
        { source: ai.keyPointsSource || "unknown" },
      ),
    );
  }
  if (ai.actionItems && ai.actionItems.length) {
    box.appendChild(
      resultCard(
        "Action items",
        `<ul>${ai.actionItems.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`,
        { reason: "Saved from an earlier run." },
        { source: ai.actionItemsSource || "unknown" },
      ),
    );
  }
}

const persistCurrent = debounce(async () => {
  const note = currentNote();
  if (!note) return;
  note.title = $("titleInput").value;
  note.body = $("bodyInput").value;
  note.tags = $("tagsInput").value
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  $("charCount").textContent = `${note.body.length.toLocaleString("en-US")} chars`;
  await saveNote(note);
  await refreshList();
}, 400);

async function newNote() {
  const note = blankNote();
  await saveNote(note);
  await refreshList();
  await selectNote(note.id);
  $("titleInput").focus();
}

// ---------- device / online status ----------
function updateOnlinePill() {
  const pill = $("onlinePill");
  if (navigator.onLine) {
    pill.textContent = "● Online";
    pill.classList.remove("pill-offline");
  } else {
    pill.textContent = "● Offline";
    pill.classList.add("pill-offline");
  }
}

function updateDevicePill(progress) {
  const pill = $("devicePill");
  const s = state.deviceStatus;
  if (typeof progress === "number") {
    pill.textContent = `Device: downloading ${Math.round(progress * 100)}%`;
    pill.classList.add("pill-muted");
    return;
  }
  if (s === "available") {
    pill.textContent = "Device: Gemini Nano ready";
    pill.classList.remove("pill-muted");
  } else if (s === "downloading" || s === "downloadable") {
    pill.textContent = "Device: model not downloaded yet";
    pill.classList.add("pill-muted");
  } else if (s === "unavailable") {
    pill.textContent = "Device: not available in this browser";
    pill.classList.add("pill-muted");
  } else {
    pill.textContent = "Device: checking…";
    pill.classList.add("pill-muted");
  }
}

// ---------- AI ----------
function requireAi() {
  if (!state.aiReady) {
    setStatus(
      getInitError() ||
        "AI is not ready. Configure Firebase first (see the banner above).",
    );
    return false;
  }
  return true;
}

function currentDecision(task, noteChars) {
  return decide({
    noteChars,
    task,
    online: navigator.onLine,
    deviceStatus: state.deviceStatus,
    mode: state.mode,
    longNoteChars: state.threshold,
  });
}

async function runAiTask(task) {
  const note = currentNote();
  if (!note || !requireAi() || state.busy) return;
  const body = ($("bodyInput").value || "").trim();
  if (!body && task !== "describe-image") {
    setStatus("Write something in the note first.");
    return;
  }
  const decision = currentDecision(task, body.length);
  state.busy = true;
  try {
    if (task === "summarize") {
      setStatus(`Summarizing ${decision.route === "on-device" ? "on-device" : "in the cloud"}…`);
      const out = await runText(
        `Summarize this note in 2-3 short sentences. Keep only facts from the note; do not add new information.\n\nNOTE:\n${body.slice(0, 6000)}`,
        { mode: decision.mode },
      );
      note.ai = { ...(note.ai || {}), summary: out.text, summarySource: out.source };
      await saveNote(note);
      $("aiResults").prepend(
        resultCard("Summary", `<p>${esc(out.text)}</p>`, decision, out),
      );
      setStatus("Done.");
    } else if (task === "key-points" || task === "action-items") {
      const isPoints = task === "key-points";
      const schema = {
        type: SchemaType.OBJECT,
        properties: {
          items: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
        },
        required: ["items"],
      };
      setStatus(
        `Extracting ${isPoints ? "key points" : "action items"} ${decision.route === "on-device" ? "on-device" : "in the cloud"}…`,
      );
      const out = await runJson(
        isPoints
          ? `Extract the 3-6 most important points from this note. Return ONLY the JSON object {"items": ["...", ...]}.\n\nNOTE:\n${body.slice(0, 6000)}`
          : `Extract the concrete action items / follow-ups from this note (3-6 max). Each item is one short imperative sentence. Return ONLY the JSON object {"items": ["...", ...]}.\n\nNOTE:\n${body.slice(0, 6000)}`,
        schema,
        { mode: decision.mode },
      );
      const items = Array.isArray(out.data.items) ? out.data.items : [];
      if (isPoints) {
        note.ai = { ...(note.ai || {}), keyPoints: items, keyPointsSource: out.source };
      } else {
        note.ai = { ...(note.ai || {}), actionItems: items, actionItemsSource: out.source };
      }
      await saveNote(note);
      $("aiResults").prepend(
        resultCard(
          isPoints ? "Key points" : "Action items",
          `<ul>${items.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`,
          decision,
          out,
        ),
      );
      setStatus("Done.");
    } else if (task === "title") {
      setStatus(`Writing a title ${decision.route === "on-device" ? "on-device" : "in the cloud"}…`);
      const out = await runText(
        `Give this note a short title of at most 8 words. Return ONLY the title, no quotes, no punctuation at the end.\n\nNOTE:\n${body.slice(0, 2000)}`,
        { mode: decision.mode },
      );
      const title = out.text.trim().replace(/^["']|["']$/g, "");
      $("titleInput").value = title;
      await persistCurrent.flush?.();
      note.title = title;
      await saveNote(note);
      await refreshList();
      $("aiResults").prepend(
        resultCard("Title", `<p>${esc(title)}</p>`, decision, out),
      );
      setStatus("Done.");
    } else if (task === "ask") {
      const q = $("askInput").value.trim();
      if (!q) {
        setStatus("Type a question first.");
        return;
      }
      setStatus(`Answering ${decision.route === "on-device" ? "on-device" : "in the cloud"}…`);
      const out = await runText(
        `Answer this question using ONLY the note below. If the note does not contain the answer, say so in one sentence.\n\nQUESTION: ${q}\n\nNOTE:\n${body.slice(0, 6000)}`,
        { mode: decision.mode },
      );
      $("aiResults").prepend(
        resultCard(`Answer: ${q}`, `<p>${esc(out.text)}</p>`, decision, out),
      );
      setStatus("Done.");
    }
  } catch (err) {
    setStatus(`Error: ${err.message}`);
  } finally {
    state.busy = false;
  }
}

async function describeImageTask() {
  const note = currentNote();
  if (!note || !requireAi() || state.busy) return;
  const file = $("imageInput").files && $("imageInput").files[0];
  if (!file && !note.imageDataUrl) {
    setStatus("Attach a photo first.");
    return;
  }
  state.busy = true;
  try {
    let out;
    if (file) {
      const decision = currentDecision("describe-image", 0);
      setStatus(`Reading the photo ${decision.route === "on-device" ? "on-device" : "in the cloud"}…`);
      out = await describeImage(
        "Describe what is written or shown in this image. First transcribe any visible text, then summarize it in 2-3 sentences.",
        file,
        { mode: decision.mode },
      );
      $("askManyResult").innerHTML = "";
      $("aiResults").prepend(
        resultCard("Photo description", `<p>${esc(out.text)}</p>`, decision, out),
      );
    }
    setStatus("Done.");
  } catch (err) {
    setStatus(`Error: ${err.message}`);
  } finally {
    state.busy = false;
  }
}

async function askManyTask() {
  if (!requireAi() || state.busy) return;
  const q = $("askManyInput").value.trim();
  if (!q) {
    setStatus("Type a question first.");
    return;
  }
  const notes = state.notes.filter((n) => (n.body || "").trim());
  if (notes.length === 0) {
    setStatus("No notes to ask about yet.");
    return;
  }
  const decision = currentDecision("ask-many", 0);
  state.busy = true;
  try {
    setStatus("Answering across all notes in the cloud…");
    const context = notes
      .slice(0, 12)
      .map((n, i) => `--- Note ${i + 1}: ${n.title || "(Untitled)"}\n${(n.body || "").slice(0, 1500)}`)
      .join("\n\n");
    const out = await runText(
      `Answer this question using ONLY the notes below. If the notes do not contain the answer, say so in one sentence.\n\nQUESTION: ${q}\n\nNOTES:\n${context}`,
      { mode: decision.mode },
    );
    $("askManyResult").innerHTML = "";
    $("askManyResult").appendChild(
      resultCard(`Answer across ${notes.length} note(s): ${q}`, `<p>${esc(out.text)}</p>`, decision, out),
    );
    setStatus("Done.");
  } catch (err) {
    setStatus(`Error: ${err.message}`);
  } finally {
    state.busy = false;
  }
}

// ---------- image attach ----------
function onImageChosen() {
  const file = $("imageInput").files && $("imageInput").files[0];
  const note = currentNote();
  if (!file || !note) return;
  const reader = new FileReader();
  reader.onloadend = async () => {
    note.imageDataUrl = String(reader.result);
    note.imageName = file.name;
    await saveNote(note);
    $("imagePreview").src = note.imageDataUrl;
    $("imagePreviewWrap").hidden = false;
    $("imageName").textContent = file.name;
    $("describeBtn").disabled = false;
  };
  reader.readAsDataURL(file);
}

// ---------- sync / export / delete ----------
async function syncNow() {
  if (!state.aiReady) {
    $("syncStatus").textContent = "Configure Firebase first.";
    return;
  }
  $("syncStatus").textContent = "Syncing…";
  const res = await syncNotesToFirestore(getFirebaseApp(), state.notes);
  $("syncStatus").textContent = res.error
    ? `Sync failed: ${res.error}`
    : `Synced ${res.synced} note(s)${res.failed ? `, ${res.failed} failed` : ""}.`;
  if (!res.error) {
    for (const n of state.notes) n.syncedAt = Date.now();
  }
}

function exportCurrent() {
  const note = currentNote();
  if (!note) return;
  const md = `# ${note.title || "Untitled"}\n\n${note.body || ""}\n\n${(note.tags || []).length ? `Tags: ${note.tags.join(", ")}\n` : ""}`;
  const blob = new Blob([md], { type: "text/markdown" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${(note.title || "note").replace(/[^\w\-]+/g, "-").slice(0, 40) || "note"}.md`;
  a.click();
  URL.revokeObjectURL(a.href);
}

async function deleteCurrent() {
  const note = currentNote();
  if (!note) return;
  if (!confirm(`Delete "${note.title || "Untitled"}"?`)) return;
  await deleteNote(note.id);
  state.currentId = null;
  $("emptyState").hidden = false;
  $("editorBody").hidden = true;
  await refreshList();
}

// ---------- init ----------
async function init() {
  $("modeSelect").value = state.mode;
  $("modeSelect").addEventListener("change", (e) => {
    state.mode = e.target.value;
    localStorage.setItem("offgrid-mode", state.mode);
    $("routeInfo").textContent = `AI mode: ${state.mode}`;
  });
  $("routeInfo").textContent = `AI mode: ${state.mode}`;

  updateOnlinePill();
  window.addEventListener("online", updateOnlinePill);
  window.addEventListener("offline", updateOnlinePill);

  $("newNoteBtn").addEventListener("click", newNote);
  $("sampleBtn").addEventListener("click", async () => {
    const note = sampleNote();
    await saveNote(note);
    await refreshList();
    await selectNote(note.id);
  });
  $("searchInput").addEventListener("input", refreshList);
  $("titleInput").addEventListener("input", persistCurrent);
  $("bodyInput").addEventListener("input", persistCurrent);
  $("tagsInput").addEventListener("input", persistCurrent);
  $("exportBtn").addEventListener("click", exportCurrent);
  $("deleteBtn").addEventListener("click", deleteCurrent);
  $("imageInput").addEventListener("change", onImageChosen);
  $("describeBtn").addEventListener("click", describeImageTask);
  $("askBtn").addEventListener("click", () => runAiTask("ask"));
  $("askInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") runAiTask("ask");
  });
  $("askManyBtn").addEventListener("click", askManyTask);
  $("askManyInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") askManyTask();
  });
  document.querySelectorAll(".ai-btn").forEach((btn) => {
    btn.addEventListener("click", () => runAiTask(btn.dataset.task));
  });
  $("syncBtn").addEventListener("click", syncNow);
  $("downloadModelBtn").addEventListener("click", async () => {
    if (!state.aiReady) {
      setStatus("Configure Firebase first — the on-device model is initialized through Firebase AI Logic.");
      return;
    }
    $("downloadModelBtn").disabled = true;
    setStatus("Downloading the on-device model… (this can take a while the first time)");
    try {
      await ensureDeviceModel((p) => updateDevicePill(p));
      state.deviceStatus = await getDeviceStatus();
      updateDevicePill();
      setStatus("On-device model is ready.");
    } catch (err) {
      setStatus(`Could not download the on-device model: ${err.message}`);
    } finally {
      $("downloadModelBtn").disabled = false;
    }
  });

  await refreshList();
  if (state.notes.length > 0) await selectNote(state.notes[0].id);

  if (!isConfigured()) {
    $("setupBanner").hidden = false;
    updateDevicePill();
    return;
  }
  if (!initFirebase()) {
    $("setupBanner").hidden = false;
    $("setupBanner").innerHTML = `<strong>Firebase failed to initialize:</strong> ${esc(getInitError() || "unknown error")}`;
    return;
  }
  state.aiReady = true;
  initCloudExtras(getFirebaseApp());
  state.deviceStatus = await getDeviceStatus();
  updateDevicePill();
  try {
    state.threshold = await getLongNoteThreshold();
  } catch {
    state.threshold = DEFAULT_LONG_NOTE_CHARS;
  }
  $("routeInfo").textContent = `AI mode: ${state.mode} · long-note threshold: ${state.threshold.toLocaleString("en-US")} chars`;
}

init();
