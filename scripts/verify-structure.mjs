import { existsSync, readFileSync } from "node:fs";

const required = [
  "apps/contextual-columns/src/main.tsx",
  "apps/automation-preflight/src/main.tsx",
  "apps/automation-policy/src/main.tsx",
  "packages/monday-client/src/index.ts",
  "packages/automation-ir/src/index.ts",
  "packages/ui/src/index.tsx",
  "pnpm-workspace.yaml",
  ".github/acp-autonomous.json",
];
for (const path of required) {
  if (!existsSync(path)) throw new Error(`Missing required path: ${path}`);
}

const rootPackage = JSON.parse(readFileSync("package.json", "utf8"));
if (rootPackage.packageManager !== "pnpm@11.20.0") {
  throw new Error("The root packageManager must remain pinned to pnpm@11.20.0");
}
console.log("repository structure ok");
