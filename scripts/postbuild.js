/**
 * Post-build script: Copies static assets and public folder into
 * the standalone output directory so `node .next/standalone/server.js`
 * works correctly.
 *
 * Works on Windows, macOS, and Linux (uses Node.js fs/path only).
 */

const fs = require("fs");
const path = require("path");

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`[postbuild] Source not found, skipping: ${src}`);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursiveSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const standaloneDir = path.join(__dirname, "..", ".next", "standalone");
const staticSrc = path.join(__dirname, "..", ".next", "static");
const staticDest = path.join(standaloneDir, ".next", "static");
const publicSrc = path.join(__dirname, "..", "public");
const publicDest = standaloneDir;

console.log("[postbuild] Copying .next/static -> .next/standalone/.next/static");
copyRecursiveSync(staticSrc, staticDest);

console.log("[postbuild] Copying public -> .next/standalone/");
copyRecursiveSync(publicSrc, publicDest);

console.log("[postbuild] Done!");
