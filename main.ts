// Entry point for the news-image-20261125 make.fun entry.
//
// The entry is one picture: entry.png, a newspaper front page that sums up
// the world news of Wednesday 25 November 2026 — two tankers hitting mines
// in the Strait of Hormuz, the AI sell-off that knocked 7% off Nvidia,
// the Cartagena hostages freed, Riyadh's tallest tower struck again, and
// Pakistan's first astronaut reaching China's space station. The judge
// scores the image itself, so this program only has to hand it over
// untouched: it loads entry.png from beside this file and writes it into
// the output directory, making that directory when needed.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const image = readFileSync(join(here, "entry.png"));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), image);
