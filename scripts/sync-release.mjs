import { chmod, copyFile, mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();
const sourceRoot = process.env.NODUS_SOURCE_DIR
  ? path.resolve(process.env.NODUS_SOURCE_DIR)
  : path.resolve(repoRoot, "../nodus");
const rawReleaseTag = process.env.NODUS_RELEASE_TAG ?? process.argv[2];

if (!rawReleaseTag) {
  console.error("missing release tag: set NODUS_RELEASE_TAG or pass a tag argument like v0.5.2");
  process.exit(1);
}

if (!/^v\d+\.\d+\.\d+$/.test(rawReleaseTag)) {
  console.error(`invalid release tag: ${rawReleaseTag}`);
  process.exit(1);
}

const targets = [
  ["install.sh", "public/install.sh"],
  ["install.ps1", "public/install.ps1"],
  ["docs/prompts/README.md", "public/prompts/README.md"],
  ["docs/prompts/README.cn.md", "public/zh-cn/prompts/README.md"]
];

for (const [sourceName, targetName] of targets) {
  const sourcePath = path.join(sourceRoot, sourceName);
  const targetPath = path.join(repoRoot, targetName);

  try {
    await stat(sourcePath);
  } catch {
    console.error(`missing installer source: ${sourcePath}`);
    console.error("Set NODUS_SOURCE_DIR to a nodus checkout before syncing the release.");
    process.exit(1);
  }

  await mkdir(path.dirname(targetPath), { recursive: true });
  await copyFile(sourcePath, targetPath);
}

await chmod(path.join(repoRoot, "public/install.sh"), 0o755);

const siteConfigPath = path.join(repoRoot, "src/site-config.ts");
const siteConfig = await readFile(siteConfigPath, "utf8");
const versionPattern = /latestVersion: "v\d+\.\d+\.\d+"/;

if (!versionPattern.test(siteConfig)) {
  console.error(`could not update latestVersion in ${siteConfigPath}`);
  process.exit(1);
}

const nextSiteConfig = siteConfig.replace(
  versionPattern,
  `latestVersion: "${rawReleaseTag}"`
);

await writeFile(siteConfigPath, nextSiteConfig);

console.log(`synced website release and prompt assets from ${sourceRoot} for ${rawReleaseTag}`);
