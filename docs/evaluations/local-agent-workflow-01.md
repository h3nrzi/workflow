# Ticket 01 — versioned entry and migration

Date: 2026-10-29. Branch: `codex/local-workflow-01`, based on integration commit `928d47b22b007dbf34f6e6f1388e173032ad6b2f`.
Technical implementation prepared; browser preflight and human acceptance remain pending. This record does not claim that later phases or the entire spec are complete.

## First action and evaluation guide

From the repository root run `python3 -m http.server 8000`, then open **http://localhost:8000/** and select «نسخهٔ ۲ · مسیر لوکال در حال آماده‌سازی» in the navigation. Record each observation with browser, viewport, date and revision in this file or the issue comments.

| Feature | Preconditions and action | Expected observation | Preflight |
| --- | --- | --- | --- |
| Additive entry | Open the root homepage and follow the secondary v2 entry. | Root still introduces phases 0–8; v2 is clearly marked as a separate six-phase route under preparation. | Static links Passed; rendered browser Not Tested |
| Six-phase map | At `/v2/index.html#phases`, read each phase and follow its contract. | Phases 0–5 map to old 0, 1, 2–5, 6, 7, 8. Unfinished guides/workshops are visibly unavailable, without broken links or claims of completion. | Static links Passed; rendered browser Not Tested |
| Historical deep links | At `/v2/migration.html#fragments`, follow the old guide and workshop examples. | Old guide reaches `phase-3.html#entry-gate`; old workshop reaches `workshops/phase-3.html#start`. Both retain migration content. | Target files/fragments Passed; rendered browser Not Tested |
| Checkpoint distinction | Read `/v2/migration.html#checkpoints`. | v1:CP-3 remains migration; v2:CP-3 is backend design. Mapping never turns old evidence into new success. Stable identifier meanings remain visible. | Content self-review Passed; human understanding pending |
| Shared contracts | Follow `/v2/contracts.html#phase-3`, then `#evidence` and `#readiness`. | Backend design can consume the CP-2 contract independently of workshop completion. Evidence identity/environment/actions/expected/observed/source/result and human pending are explicit. | Content self-review Passed; human understanding pending |
| Keyboard and small screens | At 1440px, 768px and 390px, use Tab/Enter through skip link, navigation, table wrapper and links; on mobile open menu and press Escape. | Visible focus, usable native links, correct menu state/focus, readable Persian and locally scrollable tables without page overflow. | Not Tested; coordinated browser QA after integration |

## Actual preflight evidence

Environment: local macOS workspace, Python 3 standard library checker. Browser checks were explicitly delegated to the integration coordinator; no browser result is inferred from source inspection.

1. TDD red: `python3 scripts/check-links.py v2/index.html` exited 1 with `Missing page: v2/index.html` before creating the route.
2. Initial route check found two missing example fragments (`#route`, `#inputs`). Inspection of historical page IDs identified the correct stable destinations (`#entry-gate`, `#start`); links were corrected without changing old files.
3. Green: `python3 scripts/check-links.py` exited 0: **26 HTML pages, 1475 local references; no missing destinations/fragments or duplicate IDs**. This checks actual source links/assets and HTML/SVG fragment targets; it does not verify visual quality, network URLs, clipboard or browser interaction.
4. `git diff --check` exited 0.
5. Self-review: compared the phase and checkpoint map against ADR-0001 and the approved spec; checked local asset depth, shared CSS/JS reuse, skip link, accessible table wrappers, explicit unfinished status, untouched old routes, and absence of new forms or external execution. No unresolved implementation issue found in this scope. Parent performs final two-axis code review after integration.
6. Design guidance: UI/UX search returned a documentation/minimal reading pattern, keyboard focus and responsive priorities. Existing `docs/visual-system.md` takes precedence for Persian Vazirmatn, colors, spacing and hierarchy; no new palette or typeface was introduced.

Exact source identity at the recorded preflight (SHA-256):

| Source | SHA-256 |
| --- | --- |
| `index.html` | `ea37fc57d196beb293088e0bc7bc51bf80104cbc2680b63efefbb748e4a2d428` |
| `v2/index.html` | `b89045c3bfe38fad64e88c38a906cf1284db9f2f57286233583ba38ee2a3051f` |
| `v2/migration.html` | `eba74df976d1c9d73108cf3c6d962fa65ef86713f5bb9d75f90327710c9ee3a7` |
| `v2/contracts.html` | `c4fce08912e71a9547a3b01b4e5ab46ff701cda699120a5288a1340059252cf2` |
| `scripts/check-links.py` | `a0f2abaea03f076d7ddd5c4563cb17d20c654ec2fc20703cd5292c04b54756b1` |

## Coverage and limitations

Preserved: all existing `/phases/` pages, workshop pages, old fragments, and historical evidence documents. Only a secondary entry was added to the current root homepage. New pages: `/v2/index.html`, `/v2/migration.html`, `/v2/contracts.html`. Future route contract: `/v2/phases/phase-N.html` and `/v2/phases/workshops/phase-N.html`; link only once a page exists. Index phase anchors and contract anchors are `#phase-0` through `#phase-5`.

Human acceptance: **pending** until observations are reported. Browser visual, responsive and keyboard checks: **Not Tested** at this ticket worktree checkpoint. Independent execution of product-building prompts: **Not Tested** and outside this site's static-route check.
