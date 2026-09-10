import { existsSync } from "node:fs";
const required = ["apps", "packages", "pnpm-workspace.yaml", ".github/acp-autonomous.json"];
for (const path of required) {
  if (!existsSync(path)) throw new Error(`Missing required path: ${path}`);
}
console.log("repository structure ok");
