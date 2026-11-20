import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// gta6-clipper-01 entrypoint: the whole entry is VIDEO.json, the address
// of the YouTube Short. Copy it from the repo root into the output dir
// so the grader can read it. Nothing else to compute, no network, no
// clock — the same input always produces the same output bytes.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(
    `gta6-clipper-01: could not copy ${join(botDir, "VIDEO.json")} to ${join(outDir, "VIDEO.json")}: ${detail}`,
  );
  process.exit(1);
}
