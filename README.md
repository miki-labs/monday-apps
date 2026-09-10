# monday-apps

TypeScript/React/Vite foundation for three monday.com Marketplace app experiments:

- Contextual Columns — a level-aware editable board tree view.
- Automation Preflight — read-only automation interaction analysis.
- Automation Policy — read-only automation governance and semantic drift detection.

## Local development

Requires Node.js 24 and pnpm 11.20.0.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

`pnpm dev` starts all three shells. To run one shell, use `pnpm dev:contextual-columns`, `pnpm dev:automation-preflight`, or `pnpm dev:automation-policy`.

The production and verification commands are:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm verify
```

Direct monday GraphQL requests use API version `2026-07`, exported by `@miki-labs/monday-client`. No credentials or customer data are needed for these shells.
