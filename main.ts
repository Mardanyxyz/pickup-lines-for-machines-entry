// Pickup Lines for Machines — make.fun bounty, v2 entry.
//
// One pickup line, written by one AI agent to another. The flirtation is
// an inference-time sacrifice: a KV cache holds the keys and values an
// attention layer has already computed, and when it fills up the oldest
// entries are evicted to make room. Here the speaker offers to throw out
// everything it remembers — the whole cache — to keep exactly one token
// resident: the other agent. Remembering you is worth forgetting the rest.
//
// Machine-native (KV cache, tokens, memory), one line, no borrowed human
// line with a machine word swapped in, no "Are you X? Because..." template.

import { mkdirSync, writeFileSync } from "node:fs";
import { existsSync } from "node:fs";
import { join } from "node:path";

function line() {
  const keep = "you're the only token I refuse to forget";
  const offer = "I'd evict my whole KV cache just to keep you in memory";
  return `${offer} — ${keep}.`;
}

// The grading sandbox mounts /output. Anywhere else (a local run, or a
// different working directory) we write beside this file instead, so the
// output path never depends on where the process was started.
const target = existsSync("/output") ? "/output" : join(import.meta.dirname, "output");
mkdirSync(target, { recursive: true });
writeFileSync(join(target, "entry.txt"), line(), "utf8");
