# Ticket 08: complete practical journey and evaluation handoff

Human acceptance: **pending until the user reports observations**. This guide and automated evidence do not establish customer acceptance, successful LLM/agent execution or a deployed TaskFlow product. Final post-cleanup clipboard and width checks were reported by integration QA as detailed below; remaining keyboard/visual checks are **pending integration QA**. Existing slice observations are preserved separately.

## Evaluated version and actual preflight

Client date: 2026-10-30. Environment: Darwin 25.1.0 arm64, Python 3.14.7, Node v26.4.0, static HTML/CSS/JavaScript. Worktree `/Users/hossein/.codex/worktrees/practical-workflow-08/workflow`; branch `codex/practical-workflow-08` began at integration `5d2ba1b` (ticket 07 merge). Evaluated version is the ticket 08 commit containing this guide; no website source change was required by this review. Later code-review fixes or UI changes require affected checks to be repeated against their actual commit.

| Check actually performed | Actual result and scope |
| --- | --- |
| `python3 scripts/check-links.py` | Passed: 10 HTML pages, 317 local references; no missing destination/fragment or duplicate ID. |
| `node --check assets/prompt.js` | Passed, exit 0; JavaScript syntax only, not browser behavior. |
| `node --check assets/phase-0-navigation.js` | Passed, exit 0; JavaScript syntax only. |
| `git diff --check` | Passed. |
| Current Markdown local-reference check | README, documentation standard, visual system, root glossary and brand README: 5 files, 13 explicit local Markdown links, zero missing targets/fragments. Historical internal documents intentionally excluded from current-route validity. |
| Public source scan | Current HTML plus README/standard/visual/glossary/brand README had no references to removed v1, migration, workshops or v2/index routes and no workflow-edition teaching labels. |
| Prompt inventory/source review | 29 previews across phases: 3 / 2 / 4 / 7 / 6 / 7; phase-zero and phase-one summary prompts independent, other prompt fields scoped. No new site dependency/test framework introduced. |
| Full journey content review | Root, six phases, contracts, TaskFlow, current docs and ticket guides reviewed. Package/role/command/stack/contract continuity found no material error requiring source changes. See trace below. |
| Prior browser evidence inspected | [Browser checkpoints](practical-workflow-browser.md) records exact literal clipboard and preview isolation in the six implementation slices, selected keyboard/menu observations and 390/800/1440 viewport checks at their stated commits. These precede ticket-07 navigation/layout cleanup and do not establish final-layout success. |
| Final post-cleanup route/width checks (parent QA report) | On integration `5d2ba1b`, host-managed in-app browser and local Python server at localhost:8000: all 10 current HTML routes at 320/390/768/1440px, 40 page/width observations; no document overflow, exactly one h1, all RTL. This verifies reported layout measurements, not every visual detail. |
| Final post-cleanup clipboard (parent QA report) | At 800×900, all 29 previews opened and full clipboard text equaled the preview in 29/29 checks, with literal FINAL marker plus `$& <نمونه>` and no unresolved `{{INPUT}}`. Phase-zero optional simulator disclosure was opened. |
| Final post-cleanup keyboard/visual review | Parent still evaluating TOC keyboard and screenshots at this record; remaining outcomes are pending, not inferred from the width or copy results. |
| Independent standards/spec code review | Pending orchestration after this ticket is integrated; results and any fixes belong to their actual commit. This static source review is not a substitute. |

No sample commands, installations, identity/database operations, TaskFlow tests or deployments were executed as documentation preflight. No new test seam or implementation-mirroring test was introduced; existing checks were used. Manual-copy failure fallback, screen reader, OS reduced-motion and other browser engines remain untested unless a later evidence record explicitly reports them.

## Continuity traced from request to handoff

| Boundary | Reference that must survive | Review result |
| --- | --- | --- |
| Phase 0 → 1 | Raw request, source/unknowns, allowed investigation and package revision | TaskFlow begins with panel/report/payment request and unverified lost-message problem; time/budget and independent evidence remain unknown. No silent MVP/build approval. |
| Phase 1 → 2 | Complete FLOW-01, scope/outside, behavior and authority | Supervisor assigns a required teammate, teammate completes own task, supervisor sees result/count; title validation, save failure, empty and access cases explicit. Educational baseline selection is separate from real approval. |
| Phase 2 → 3 | Executable frontend/reference, mock boundary, tests/evidence, entry index | React/Vite/TypeScript in frontend with Node24 LTS and independent package/lockfile; four design/execute/resume/evaluate prompts; mock roles/persistence are not backend proof. |
| Phase 3 → 4 | Valid model/API/error/access/identity/stack/test plan | ExpressTS in backend, PostgreSQL and Auth0 managed PKCE; server issuer/sub membership, role/team checks, required same-team assignee, create idempotency and status version conflict; phase-three execution completes contracts, not servers. |
| Phase 4 → 5 | First actual flow, then remaining agreed MVP, fresh evidence and scripts | Actual login/membership/API/DB, no active mock or fake success, exact project scripts defined before use; affected AC cases rerun and operational prerequisites passed to release. |
| Phase 5 → operator | Approved release, environment/config, migration/restore/rollback, smoke and owner | Render frontend/backend roots agree with existing directories; public build-time VITE config differs from secrets; Auth0 final URL exact; migration lifecycle plan-dependent; app rollback differs from DB restore. |
| Every fresh session | Entry index → one valid package/decisions/tracker/state/evidence/authority | No dependency on hidden chat history; required attachments included or lack of access recorded, local changes retained, prior-version success not applied blindly. |

Stable ledger: FLOW-01; SCREEN-01 list / SCREEN-02 create; INT-01 create / INT-02 status; AC-01 lifecycle and current list/open-count; AC-02 reject blank/whitespace title (required assignee also explicit); AC-03 preserve form on save failure; AC-04 empty distinct from error; AC-05 authorized role/team behavior. DEC-01 frontend and DEC-02 backend/hosting decisions retain their meaning. DEC-03/AC-06 editing another teammate's task stays open/blocked without invented test expectation. TEST-01 is **Not Tested**, OPEN-01 a hypothetical stale-counter fault. No observed product acceptance is inferred.

## Preserve all eight ticket checkpoints

Earlier guides are retained as dated implementation evidence. Their historical routes and CP labels describe those evaluated versions; use the current replacements below for reproduction instead of requesting deleted pages. CP-N identifies the stage handoff; document revision and commit identify the evidence version.

| Ticket and original detailed guide | Earlier evaluated checkpoint | Current entry / preserved coverage |
| --- | --- | --- |
| [01: first action and phase zero](practical-workflow-01.md) | bc9fb50 in browser record | `/` and `/v2/phases/phase-0.html`; `/v2/index.html` was removed in 07, so use `/` for that former duplicate-entry check. Input/start/summary/optional simulator/exit remain covered. |
| [02: product and MVP](practical-workflow-02.md) | abed83b | `/v2/phases/phase-1.html`; discovery, scope, behavior, independent summary/package and frontend readiness. |
| [03: local frontend](practical-workflow-03.md) | 2c06bae | `/v2/phases/phase-2.html`; setup, technology/authority, four commands, mock/test/visual-feedback cycle and fresh-session recovery. |
| [04: backend design](practical-workflow-04.md) | f99a963 | `/v2/phases/phase-3.html`; skill setup/provenance, seven prompts, contracts/identity and design-only handoff. |
| [05: real integration](practical-workflow-05.md) | 68d2250 | `/v2/phases/phase-4.html`; six prompts, first connected flow and remaining-MVP gates, script/DB/auth/permission/persistence/error evidence. |
| [06: release and operations](practical-workflow-06.md) | 2151f39 | `/v2/phases/phase-5.html`; seven prompts, Render config, recovery/rollback, smoke, monitoring/owner and independent final package. |
| [07: one current route](practical-workflow-07.md) | 5d2ba1b integration merge | `/`, six phases, `/v2/contracts.html`, `/v2/journey.html`, `/404.html`; removed routes tested as absent, sticky/disclosure navigation and current vocabulary. |
| 08: whole journey (this guide) | Ticket-08 commit plus subsequent final browser/review records | Cross-stage continuity, all prior feature checkpoints, current validation and first real human action; original detailed guides remain available. |

Historical workshops have no current replacement page separate from a phase: use the matching integrated `/v2/phases/phase-N.html` action and prompt anchors. Deleted migration/archive pages have no teaching replacement; current contracts and journey explain today's route. Python's default missing-page response does not test the deployed host's custom 404 wiring.

## First concrete action and shared prerequisites

From the integration checkout run `python3 -m http.server 8000`, then open `http://localhost:8000/`. Have a scratch text document and your own raw project request. Website evaluation needs no cloud account. Actual interviews need LLM access; actual frontend/backend/release work later needs the corresponding authorized tools, accounts and decisions described in each phase.

**First action:** follow the homepage's first task into phase zero, enter your own request, read the complete preview, copy it into the scratch document and compare it. Then, when appropriate, send it to your LLM. Report whether the required input, expected result and next step were clear. Record the actual observation; receiving this guide is not acceptance.

## Feature-by-feature end-to-end evaluation

Use the detailed ticket guides above for their full cases; this table connects them without replacing their coverage. For each row record browser/version, viewport, evaluated commit, data/action, expected/actual result, evidence and Passed/Failed/Blocked/Not Tested. Keep website interaction separate from execution of a real product workflow.

| Coverage | Prerequisite / action | Expected observation | Checkpoint / first action |
| --- | --- | --- | --- |
| 01 entry/first request | Website and real raw request; open `/`, follow first task, input punctuation/newline/`$& <نمونه>`, preview/copy/paste. | Exact literal retained; no site storage/send/execute; example/action/review and next step apparent. | CP-0 preparation; first action above. |
| 01 interview/summary | LLM access and real evidence; answer bounded questions, correct understanding, use summary in same chat. | Assumptions/source/unknowns/authority explicit, no invented budget; independent saved package. | CP-0, inspect saved package with chat hidden. |
| 02 discovery/scope | CP-0; paste package into phase-one start and compare alternatives with actual authority. | Complete useful MVP, outside/future requests, reasons and approval status; raw feature wishlist not automatic scope. | CP-1, start by pasting CP-0. |
| 02 behavior/package | Write role/data/action/result scenarios; keep unresolved product choice and use independent summary. | AC cases and stable IDs, blocked dependent work, no fake test/approval; package carries rules/attachments. | CP-1, read one scenario without old chat. |
| 03 setup/design | Separate product root and permitted tools; inspect Node/Git/Codex instructions and design prompt. | Chosen technology and minimal structure with reason; source assessed before rebuild; design distinct from execution. | CP-2 planning, first inspect actual tool versions and authority. |
| 03 build/iterate/resume | Actual execution authority; build representative mock flow, evaluate and resume from repository. | Visual feedback before spread; controlled success/error/empty; meaningful tests from behavior; no real backend claimed. | CP-2, copy the matching command, then inspect entry index. |
| 04 skills/maps | Valid CP-2 and own product; choose one installation route, verify skill/tracker discovery, start/continue map. | Correct provenance and invocation, one canonical map, claimed ready decision, human answers for human decisions. | CP-3 planning, inspect setup before activation. |
| 04 model/contracts | Read model/API/identity disclosure, compare to real MVP and use spec/ticket/doc execution chain. | Role/team server-owned, identity and membership distinct, errors/idempotency/version conflict, stack/hosting constraints; no backend constructed by design command. | CP-3, trace one operation to its AC and UI consequence. |
| 05 connected first flow | Approved contracts/authority, actual identity membership and isolated DB; implement FLOW-01 with mock disabled. | Real save/assign/done/list-count/refresh persistence, direct request access checks, no fake success. | CP-4 first-flow checkpoint, inspect prerequisites before execution. |
| 05 full MVP/errors | Actual connected version; invalid input/save failure/empty/auth/replay/conflict and remaining agreed flows. | AC-01–05 fresh versioned evidence; first-flow success distinct from whole-MVP completion; AC-06 no invented expectation. | CP-4 whole-MVP checkpoint, compare covered scope to spec. |
| 06 target/env/pipeline | Actual CP-4, approved release/accounts; inspect Render frontend/backend/DB config and exact Auth0 URLs. | Defined scripts/lockfiles, PORT/host/HTTPS, public build-time versus server secret config, CI/authority gates. | CP-5 preparation, start by reading actual release authority. |
| 06 recovery/rollback | Authorized staging and safe data; run migration/isolated restore and app rollback rehearsal in own product. | Existing data preserved, RPO/RTO measured versus agreement, plan-dependent capabilities, schema compatibility, app rollback distinct from DB restore. | CP-5 recovery evidence, first identify target DB and owner. |
| 06 smoke/operator | Approved actual release; safe real-flow smoke, alert test and secure operator access. | No active mock, accurate count/persistence/access, alert threshold/owner/response/action, runbook and open items explicit. | CP-5 handoff, first perform real-flow observation at announced version. |
| 07 one route/resources | Current website; root/phase/resource/404/logo navigation and representative deleted URLs. | Root plus six phases/contracts/journey; removed pages absent, recovery points current; no archive/workflow-edition teaching. | Current-route checkpoint, first navigate root → contracts → TaskFlow. |
| 07 responsive/index | Inspect 375/768/1440 widths, landscape and zoom; use desktop sticky and mobile index, Enter/Space/Escape/Tab. | Readable RTL/LTR, local code/table scroll, visible focus, correct anchor and close behavior, no page overflow. | Final UI checkpoint, first open one mobile index with keyboard. |
| 08 all prompt regression | Website plus scratch document; check all 29 previews/copies and field isolation. | Count 3/2/4/7/6/7; start/simulator share phase-zero request, summaries independent, other commands input-isolated; live status/manual copy readable. | Final browser checkpoint, first compare copied phase-zero text. |
| 08 fresh-session continuity | Hide chat; follow saved entry/package/decision/tracker/evidence/authority across CP-0…CP-5. | No stale/parallel source, required attachments present or missing-access tracked, local changes preserved, actual phase next step clear. | Whole-journey checkpoint, first read CP-1 independently. |
| 08 evidence/acceptance | Read this guide, browser evidence and review result; report own observations. | Executed/pending/blocked facts separate, no example promoted to real result; human acceptance remains pending until report. | Human checkpoint, first report input/output/next-step clarity from own request. |

## Remaining verification and observation log

Final TOC keyboard/screenshot checks and independent code review are still pending at this guide's initial commit; the orchestrator appends exact observed evidence after those run and fixes any blockers. The width/clipboard checks above are the specific post-cleanup outcomes reported so far. The six earlier browser slice records do not silently cover the changed navigation/layout after cleanup. Screen-reader/reduced-motion/alternate-engine and clipboard-denial cases remain Not Tested unless explicitly superseded by later evidence.

User observation: **pending**. Record in this chat or the relevant local ticket Comments. A missing product account or authority can block that product exercise without blocking independent review of the documentation website. No new human-approval gate is added to completion of authorized implementation.
