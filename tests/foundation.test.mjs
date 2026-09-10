import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("workspace declares pnpm package manager", async () => {
  const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
  assert.match(pkg.packageManager, /^pnpm@/);
});

test("all app lanes have production scripts and shared workspace dependencies", async () => {
  const root = new URL("../", import.meta.url);
  const lanes = [
    ["contextual-columns", ["@miki-labs/monday-client", "@miki-labs/ui"]],
    ["automation-preflight", ["@miki-labs/automation-ir", "@miki-labs/monday-client", "@miki-labs/ui"]],
    ["automation-policy", ["@miki-labs/automation-ir", "@miki-labs/monday-client", "@miki-labs/ui"]],
  ];

  for (const [lane, dependencies] of lanes) {
    const pkg = JSON.parse(await readFile(new URL(`apps/${lane}/package.json`, root), "utf8"));
    assert.equal(pkg.scripts.build, "vite build");
    assert.equal(pkg.scripts.typecheck, "tsc --noEmit");
    for (const dependency of dependencies) assert.equal(pkg.dependencies[dependency], "workspace:*");
  }
});

test("monday API version is pinned in the shared client", async () => {
  const source = await readFile(new URL("../packages/monday-client/src/index.ts", import.meta.url), "utf8");
  assert.match(source, /MONDAY_API_VERSION\s*=\s*["']2026-07["']/);
  assert.match(source, /monday-sdk-js/);
});
