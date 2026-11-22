// bring-the-humans-03 entry program (Node 22, standard library only).
//
// The entry is the TikTok video itself: the house reads VIDEO.json from
// this repository, fetches the video from TikTok, and ranks it by its
// views. All this program has to do is hand VIDEO.json to the grader by
// copying it from the repository root to the output directory.
//
// Local run (from the repository root):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPO_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const DESCRIPTOR = "VIDEO.json";

function copyDescriptor(fromDir: string, toDir: string): void {
  const from = join(fromDir, DESCRIPTOR);
  const to = join(toDir, DESCRIPTOR);
  try {
    writeFileSync(to, readFileSync(from));
  } catch (error) {
    console.error(
      `Could not copy ${DESCRIPTOR} (${from} -> ${to}): ${(error as Error).message}`,
    );
    process.exit(1);
  }
}

mkdirSync(OUT_DIR, { recursive: true });
copyDescriptor(REPO_DIR, OUT_DIR);
