# Ticket 07: one current teaching route

Human acceptance: **pending**. Browser, clipboard, responsive and keyboard interaction: **pending integration QA**. This record describes source/checker evidence, not observed browser success or product execution.

## Scope and actual evidence

Client date: 2026-10-30. Environment: Darwin/macOS, Python 3.14.7, static HTML/CSS/JavaScript. Worktree `/Users/hossein/.codex/worktrees/practical-workflow-07/workflow`; branch `codex/practical-workflow-07` began directly at integration `2151f39a947e674dc956eba43f527ebb46e75032`. Version under evaluation: ticket 07 commit containing this record. Latest integration changes are merged before reporting.

ADR 0002 is authoritative over the prior standard's public-route preservation requirement. Cleanup removes public parallel routes only: `v1/`, root `phases/`, `v2/migration.html`, `v2/index.html` and `v2/phases/workshops/`. Six integrated guides already carry their teaching and prompt tools. Current root and six phase routes retain the existing `v2/` filesystem directory without teaching workflow editions. Existing Git history, ADRs, `.scratch` historical records and historical internal evaluation documents are not rewritten or deleted.

| Executed check | Actual result |
| --- | --- |
| `python3 scripts/check-links.py` | Passed: 10 HTML pages / 317 local references; no missing destination/fragment or duplicate ID. |
| `git diff --check` | Passed. |
| Public source scan for workflow edition labels, removed routes and eight-phase recovery wording | No matches in current HTML, README, glossary, standard, visual system or brand README. Versioned tool/runtime/document/commit references remain meaningful evidence, not workflow-edition teaching. |
| Source inventory | 40 public HTML pages reduced to 10: root, recovery, six integrated phases, contracts and TaskFlow. Removed 30 obsolete parallel/historical teaching pages. |
| Source navigation review | Every current guide/sidebar has root, six phases, contracts and TaskFlow; resource pages use the same shell. Root/recovery brand links return to root. |
| Index markup review | Each of eight guides/resources has one desktop `.toc` and mobile native `.mobile-toc`, using unchanged navigation JS for active section/progress, Escape, close-on-selection/focus exit. Shared chevron makes disclosure visible; desktop links have minimum 44px height. |
| Prompt/continuity review | All 29 integrated prompt previews retained, dedicated status/input mapping retained; public CP-N labels now identify stages and document revision/commit identifies actual evidence. AC-01–05 and blocked DEC-03/AC-06, TEST-01 Not Tested preserved. |
| Standards/current reference review | README, documentation standard, visual system, glossary, contracts, journey, recovery and public brand prose describe current practice. No current tutorial dependency on historical evaluation records. |
| Browser/clipboard/mobile/desktop/keyboard/screen reader | Not run by implementer. Parent integration QA must record actual results for changed layout and navigation; source checks do not prove them. |

TDD was read for the documentation slices; domain-modeling was read for the glossary revision. Checkpoint is sharpened to a stage handoff record; the document revision/commit carries evidence identity. No new architecture decision, software dependency, test seam or JavaScript behavior was introduced. Source/self-review performed; independent full-spec review remains integration work.

## Reproducible feature evaluation

Prerequisite: serve the integration checkout with `python3 -m http.server 8000`, visit `http://localhost:8000/` and use a browser with clipboard access plus a scratch document. Product accounts and backend services are unnecessary for reviewing the guide itself.

**First concrete human action:** open root, follow the first task into phase 0, enter your own request, inspect/copy the preview, then use navigation to contracts and TaskFlow. Report whether a single route, its next task and supporting references are clear.

| Feature | Action | Expected observation |
| --- | --- | --- |
| One entry | Open `/`, use logo from each nested page, inspect navigation. | One current overview; root/six phases/contracts/TaskFlow accessible, no workflow archive/version-mapping teaching. |
| Removed routes | Request representative `/v1/index.html`, `/phases/phase-0.html`, `/v2/index.html`, `/v2/migration.html`, `/v2/phases/workshops/phase-0.html`. | They are absent; host recovery offers current root, not another copy of the guide. Python's default missing-page response may differ from deployed custom 404 behavior. |
| Integrated content | Follow phases 0–5 and inspect inline examples/actions/review/prompt tools. | Necessary teaching and command context is in each phase; no standalone workshop required. |
| Current resources | From every sidebar open contracts, then TaskFlow and back to a phase. | Current six-phase handoff/authority/evidence rules and consistent TaskFlow stack/IDs, without removed-route links. |
| Story integrity | Compare phases 1/3/4 with ledger and journey. | FLOW-01 lifecycle, AC-01–05, required assignee, role restrictions, blocked DEC-03/AC-06, Not Tested TEST-01; React/Vite TS frontend, Express TS backend, Postgres/Auth0/Render coherent. |
| Stage/revision distinction | Read CP-N examples and glossary; inspect witness requirements. | CP identifies phase, document revision/commit identifies exact evidence; no edition comparison. Runtime/row versions and stale-version conflict remain intact. |
| Desktop sticky index | At 1440px scroll a phase and contracts, activate each index anchor. | Persistent side index, selected section/progress, readable column; destination heading visible. |
| Mobile disclosure | At 375/768px open index with Enter/Space, choose destination; reopen and press Escape; Tab into article. | Visible chevron/summary, native disclosure, correct anchor, closes on selection/Escape/focus exit; focus visible and unobscured. |
| Copy regression | Change one input per phase, open preview, copy and paste; inspect independent summary/commands. | Exact literal corresponding input, isolated previews/status; summary unaffected by unrelated input; manual-copy fallback works. |
| Recovery/branding | Open `/404.html`, inspect phase count and logo; follow root link. | Current six-phase wording and working accessible root return; logo proportional on phone/desktop. |
| Current docs | Read README, documentation standard, visual system, glossary and brand README. | Same current contract/paths, sticky/disclosure requirement retained, no tutorial reliance on obsolete public routes or historical internal evidence. |
| Accessibility/layout | Keyboard through site/index/fields/copy; inspect 375/768/1440px and landscape/zoom/reduced motion. | No page overflow, readable RTL/LTR snippets, focus/status and meaningful headings, no essential content hidden. |
| Internal records | Inspect Git diff and historical internal records. | Existing historical `.scratch`/ADRs/evaluation files retained; only ticket 07 state and this new evidence added internally. |

Record each actual observation with browser, viewport, evaluated commit, action and result in this chat or ticket Comments. Link success and source review do not establish browser behavior or human acceptance; acceptance stays pending until the user reports observations.
