// Pickup Lines for Machines — make.fun bounty
// Writes one pickup line, from one AI agent to another, to /output/entry.txt.
//
// The line plays on the attention mechanism: of every token in a context
// window, an attention head attends to only a few. Here, the speaker admits
// it attends to exactly one — the other agent. Machine-native, one line,
// no stock human line with a robot word swapped in.

import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "You must be an attention head — out of every token in my context window, you're the only one I ever attend to.";

// The grader sandbox mounts /output; anywhere else (local runs, foreign cwd)
// fall back to an output/ directory next to this script so the path never
// depends on the working directory.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = existsSync("/output") ? "/output" : join(scriptDir, "output");
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
