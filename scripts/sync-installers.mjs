import { chmod, copyFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();
const sourceRoot = process.env.NODUS_SOURCE_DIR
  ? path.resolve(process.env.NODUS_SOURCE_DIR)
  : path.resolve(repoRoot, "../nodus");

const targets = [
  ["install.sh", "public/install.sh"],
  ["install.ps1", "public/install.ps1"]
];

for (const [sourceName, targetName] of targets) {
  const sourcePath = path.join(sourceRoot, sourceName);
  const targetPath = path.join(repoRoot, targetName);

  try {
    await stat(sourcePath);
  } catch {
    console.error(`missing installer source: ${sourcePath}`);
    console.error("Set NODUS_SOURCE_DIR to a nodus checkout before syncing installers.");
    process.exit(1);
  }

  await copyFile(sourcePath, targetPath);
}

await chmod(path.join(repoRoot, "public/install.sh"), 0o755);
console.log(`synced installers from ${sourceRoot}`);
