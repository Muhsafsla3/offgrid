// Unit tests for the hybrid router (src/router.js). Run: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { decide, sourceLabel, DEFAULT_LONG_NOTE_CHARS } from "../src/router.js";

test("manual on-device mode never routes to cloud", () => {
  const d = decide({ noteChars: 9000, task: "ask-many", online: true, deviceStatus: "unavailable", mode: "on-device" });
  assert.equal(d.route, "on-device");
  assert.equal(d.mode, "only_on_device");
});

test("manual cloud mode always routes to cloud", () => {
  const d = decide({ noteChars: 10, task: "summarize", online: false, deviceStatus: "available", mode: "cloud" });
  assert.equal(d.route, "cloud");
  assert.equal(d.mode, "only_in_cloud");
});

test("auto: offline goes on-device", () => {
  const d = decide({ noteChars: 100, task: "summarize", online: false, deviceStatus: "available", mode: "auto" });
  assert.equal(d.route, "on-device");
});

test("auto: long note goes to cloud", () => {
  const d = decide({ noteChars: DEFAULT_LONG_NOTE_CHARS + 1, task: "summarize", online: true, deviceStatus: "available", mode: "auto" });
  assert.equal(d.route, "cloud");
});

test("auto: short note with ready device goes on-device", () => {
  const d = decide({ noteChars: 200, task: "summarize", online: true, deviceStatus: "available", mode: "auto" });
  assert.equal(d.route, "on-device");
  assert.equal(d.mode, "prefer_on_device");
});

test("auto: multi-note question goes to cloud", () => {
  const d = decide({ noteChars: 50, task: "ask-many", online: true, deviceStatus: "available", mode: "auto" });
  assert.equal(d.route, "cloud");
});

test("auto: device not ready falls back to cloud", () => {
  const d = decide({ noteChars: 100, task: "summarize", online: true, deviceStatus: "unavailable", mode: "auto" });
  assert.equal(d.route, "cloud");
});

test("auto: downloading device still counts as ready", () => {
  const d = decide({ noteChars: 100, task: "summarize", online: true, deviceStatus: "downloading", mode: "auto" });
  assert.equal(d.route, "on-device");
});

test("source labels", () => {
  assert.equal(sourceLabel("on-device"), "On-device");
  assert.equal(sourceLabel("in-cloud"), "Cloud");
  assert.equal(sourceLabel("weird"), "Unknown");
});
