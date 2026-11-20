// Entry program for the gta6-meme-x-01 bounty (@asl666) — Node 22, standard library only.
//
// The real entry is the X post itself: a GTA 6 meme picture plus its text.
// This program's only job is to hand the gate the address of that post by
// copying POST.json from the bot directory into the output directory.
//
// Local check outside the grader container:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (err) {
  console.error(
    `Could not copy POST.json from ${botDir}: ${err instanceof Error ? err.message : String(err)}`
  );
  process.exit(1);
}
