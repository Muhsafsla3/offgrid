// Hybrid routing decisions for Offgrid — pure functions, no Firebase imports,
// so they can be unit-tested with plain node.
//
// Modes the user can pick in the UI:
//   "auto"      — the router decides (see decide()).
//   "on-device" — ONLY_ON_DEVICE: never touches the cloud.
//   "cloud"     — ONLY_IN_CLOUD: always the cloud model.
//
// decide() returns { route, mode, reason } where route is "on-device" or
// "cloud" and mode is the InferenceMode string the SDK expects.

export const DEFAULT_LONG_NOTE_CHARS = 1500;

export const InferenceMode = {
  PREFER_ON_DEVICE: "prefer_on_device",
  ONLY_ON_DEVICE: "only_on_device",
  PREFER_IN_CLOUD: "prefer_in_cloud",
  ONLY_IN_CLOUD: "only_in_cloud",
};

/**
 * @param {Object} input
 * @param {number} input.noteChars      character count of the note being processed
 * @param {string} input.task           one of "summarize" | "key-points" |
 *                                      "action-items" | "title" | "ask" |
 *                                      "describe-image" | "ask-many" (multi-note QA)
 * @param {boolean} input.online        navigator.onLine
 * @param {string} input.deviceStatus   "available" | "downloading" | "downloadable" |
 *                                      "unavailable" | "unknown" (from LanguageModel.availability())
 * @param {string} input.mode           "auto" | "on-device" | "cloud"
 * @param {number} [input.longNoteChars] threshold above which long notes go to cloud
 */
export function decide(input) {
  const {
    noteChars = 0,
    task = "summarize",
    online = true,
    deviceStatus = "unknown",
    mode = "auto",
    longNoteChars = DEFAULT_LONG_NOTE_CHARS,
  } = input || {};

  const deviceReady = deviceStatus === "available" || deviceStatus === "downloading";

  if (mode === "on-device") {
    return {
      route: "on-device",
      mode: InferenceMode.ONLY_ON_DEVICE,
      reason: "Manual mode: on-device only. Your text never leaves this device.",
    };
  }
  if (mode === "cloud") {
    return {
      route: "cloud",
      mode: InferenceMode.ONLY_IN_CLOUD,
      reason: "Manual mode: cloud only. Answered by Gemini in the cloud.",
    };
  }

  // Auto mode: explainable rules, in priority order.
  if (task === "ask-many") {
    return {
      route: "cloud",
      mode: InferenceMode.PREFER_IN_CLOUD,
      reason: "Multi-note question needs the cloud model — it reasons across many notes at once.",
    };
  }
  if (!online) {
    return {
      route: "on-device",
      mode: InferenceMode.PREFER_ON_DEVICE,
      reason: "You're offline — answered on-device. Nothing was sent anywhere.",
    };
  }
  if (noteChars > longNoteChars) {
    return {
      route: "cloud",
      mode: InferenceMode.PREFER_IN_CLOUD,
      reason: `Long note (${noteChars.toLocaleString("en-US")} chars, over the ${longNoteChars.toLocaleString("en-US")}-char threshold) — handed to the cloud model for deeper reasoning.`,
    };
  }
  if (deviceReady) {
    return {
      route: "on-device",
      mode: InferenceMode.PREFER_ON_DEVICE,
      reason: "Short note, device model ready — answered on-device. Private, free, instant.",
    };
  }
  return {
    route: "cloud",
    mode: InferenceMode.PREFER_IN_CLOUD,
    reason: "On-device model isn't ready on this browser yet, so the cloud model answered (fallback is automatic).",
  };
}

/** Human label for an inferenceSource value returned by the SDK. */
export function sourceLabel(source) {
  if (source === "on-device" || source === "on_device") return "On-device";
  if (source === "in-cloud" || source === "in_cloud" || source === "cloud") return "Cloud";
  return "Unknown";
}
