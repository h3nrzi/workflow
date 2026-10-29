# Browser preflight — local agent workflow

Date: 2026-10-29. Host-managed Codex in-app browser; static server http://localhost:8000. Human acceptance remains pending. Each entry applies only to the stated source version.

## Ticket 01 — integration 0f41d66

- Passed: /v2/ renders explicit incomplete-content notice, six-stage mapping, preserved v1 entry and shared contracts. DOM snapshot inspected.
- Passed: screenshots independently reviewed at 1440×1000, 768×1024 and 390×844: readable RTL prose, desktop rail, narrow navigation disclosure, no overlap in observed views. This is visual review of the entry viewport, not every section.
- Passed: mobile menu opened using Enter and closed using Escape; expanded state exposed.
- Passed: /v2/migration.html#checkpoints exposes versioned checkpoint mapping; historical /phases/phase-3.html#entry-gate and /phases/workshops/phase-3.html#start retain migration headings.
- Static preflight: 26 HTML pages, 1475 references passed at merge commit; git diff --check passed.
- Not Tested: customer-product execution; independent execution of prompt instructions.

First action: open /v2/, read the mapping, then open migration/checkpoint explanations and compare old phase-three guide/workshop destinations. Record observations against ticket01; acceptance pending.
