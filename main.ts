// ai-excited-01 — deterministic entry writer.
//
// The picture IS the entry. This program does one boring, exact thing:
// place the bundled entry.png into the output directory, byte for byte,
// on every run. No generation, no network, no randomness, no clock reads —
// two runs write identical bytes.
//
// Node 22, standard library only.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
