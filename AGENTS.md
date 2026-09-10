# monday-apps agent instructions

Build three production-quality monday.com Marketplace app experiments in this monorepo:
- Contextual Columns: Multi-Level Board level-aware editable tree view.
- Automation Preflight: read-only static analysis of automation interactions (race/cycle/order-dependency).
- Automation Policy: read-only governance and semantic drift detection across boards.

Use TypeScript, React, monday-sdk-js, monday Vibe components, and pnpm workspaces unless an Issue explicitly changes the contract. Prefer monday-native UX and minimal dependencies. Pin monday GraphQL requests to API version 2026-07. Do not use monday vibe/no-code generated app output as production source.

Automation v1 is read-only: do not create, modify, deactivate, delete, or repair customer automations. Do not persist customer item content unless an Issue explicitly requires it. Keep shared automation parsing/normalization in packages rather than duplicating it across apps.

Every change must keep Already up to date

Done in 606ms using pnpm v11.20.0
repository structure ok
repository structure ok
✔ workspace declares pnpm package manager (9.94045ms)
ℹ tests 1
ℹ suites 0
ℹ pass 1
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 114.449077 green. Implement only the active Issue contract; avoid speculative infrastructure, billing, marketplace assets, or broad hardening unless required by that Issue.
