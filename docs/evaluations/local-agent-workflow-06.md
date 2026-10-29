# Ticket 06 — v2 real integration and MVP completion

Date: 2026-10-29. Branch: `codex/local-workflow-06`, initial integration base `92c9dfc`. Implementation changes only the educational website: phase-4 guide/workshop, own overview availability and valid phase-3 forward links. No customer product build, API/database connection or paid service operation performed. Browser QA and human acceptance remain pending.

## First action and feature evaluation guide

From the repository root run `python3 -m http.server 8000`, then open **http://localhost:8000/v2/phases/phase-3.html** and select «پس از پایان معتبر: فاز ۴، اتصال واقعی و تکمیل محصول». Record browser, viewport, date/revision, action, expectation and observation here or in ticket 06 comments.

| Feature | Preconditions/data and action | Expected checkpoint | Actual preflight |
| --- | --- | --- | --- |
| Connected navigation/version | Enter phase 4 from phase 3 and v2 overview; open migration/checkpoint link and the old phase-7 route. | New phase 4 means real integration; old phase 7 remains historical. v1:CP-7 maps to v2:CP-4 without inheriting a successful result. Return to new phase 3 works. | Static destinations/fragments Passed; rendered navigation Not Tested |
| Input and authority | Read guide `#entry-gate` and start/execute/one previews. | v2:CP-2+3, approved behavior, source/run method, backend contracts, data/mock boundaries, tests and real execution authority are required. Design alone is not permission to connect; unresolved behavior returns to product authority. | Content self-review Passed; human understanding pending |
| First complete user flow | Read `#first-flow`, `#server-data`, `#build-slice`. Compare conditional TaskFlow cycle with an actual approved flow in a future product evaluation. | Choice combines user value and identity/storage/freshness risk; frontend/API/data/access/pending/error and mock replacement are explicit per flow. All backend need not precede first connection. Full-stack monorepo and JS/TS application contracts remain. | Content self-review Passed; no actual product execution claimed |
| Real failures and tests | Read `#verification` and mock-replacement table. | Reuse phase-2 browser scenarios on real API+DB, add risk-based business-rule and integration checks. API down cannot add a fake successful item; unauthorized API mutation or lost persistence blocks completion. Mock tests don't prove real integrity/security. | Content self-review Passed; browser Not Tested |
| Handoff to release | Read `#handoff` and `#exit-gate`, then follow release availability link. | v2:CP-4 identifies product version, evidence, remaining allowed test fixtures, issues and publication authority. No hidden mock-success fallback; incomplete/Not Tested evidence stays explicit. Human acceptance pending; release doesn't auto-start. | Content/self-review and local links Passed; browser Not Tested |
| Six independent commands | At workshop enter distinct Persian multiline text in each input, e.g. `سلام <نمونه> & "نقل"` newline `$& $1 $$ {{INPUT}}`, then open all previews. | Only corresponding preview changes, literal characters/newlines survive, no send/store/execute. Skills: grill-with-docs, to-spec, to-tickets, implement-spec, implement; evaluation activates no skill. | Source wiring reviewed; rendered text preservation Not Tested |
| Clipboard success/failure | Copy each preview and paste into a scratch editor. Separately deny clipboard permission or use an environment where copy fails and retry. | Exact selected command is copied; failure opens details, selects/focuses preview, announces manual-copy instructions and re-enables button; input unchanged. | Not Tested; coordinated parent browser QA |
| Keyboard/responsive | At 1440px, 768px and 390px traverse skip link, TOC, links, input/details/copy using Tab/Enter; on small screen choose TOC sections and test mobile navigation dismissal. | Visible unobscured focus, proper labels/live status, readable Persian, usable controls, locally scrollable tables without page overflow. | Not Tested; coordinated parent browser QA |

## Actual preflight evidence

Environment: local macOS worktree, Python 3 standard-library checker. User-approved seams: local links/fragments/duplicate IDs and rendered browser behavior; browser coverage delegated to integration coordinator. Source review does not establish browser results.

1. TDD red: `python3 scripts/check-links.py v2/phases/phase-4.html` exited 1, `Missing page: v2/phases/phase-4.html`, before creating page.
2. Initial linked-page check found two missing phase-2 guide links because that guide was not yet integrated; linked both to the stable v2 phase-2 contract instead of creating a false dependency or broken destination.
3. Green: `python3 scripts/check-links.py v2/phases/phase-4.html v2/phases/workshops/phase-4.html` passed **2 HTML pages, 87 local references**.
4. Full checker passed **30 HTML pages, 1651 local references**, no missing destinations/fragments or duplicate IDs. Not a visual, network URL, clipboard, keyboard or prompt-agent execution check.
5. `git diff --check` passed.
6. Self-review against ticket 06/spec/ADR-0001: preserved old phase-7 flow selection, server-data decision, complete-slice/mock replacement, security/performance/a11y/mobile and test evidence detail; replaced old test/refactor references with phase-2 contracts, historical checkpoints with explicit v1 provenance/current v2 chain, input and execution authority boundaries, versioned product/permission handoff. Kept six original skill contracts, independent controls and shared script/styles. New phase-3 changes only valid forward links. Parent conducts final independent Standards+Spec review.
7. UI/UX skill and existing visual system remain applied: shared Persian typography, guide hero/workshop compact title, native label/details/buttons, visible focus contract; no new JavaScript/style framework.

Exact changed source identity at preflight:

| Source | SHA-256 |
| --- | --- |
| `v2/phases/phase-4.html` | `1a984ffb0171c9454fab821525f292a7e78a762875689d964149e3ee133d874e` |
| `v2/phases/workshops/phase-4.html` | `88d850ff1fa620c4b6c0ebd8c3e91351c8b8f109e2ae26c96f9a547fd8b2ba9f` |
| `v2/index.html` | `eadd18516b9b86a8b9c05fe8ec805c6fc591a299928095986bea220412da52a2` |
| `v2/phases/phase-3.html` | `a55333d5e5eb43dfb625e42de1bd1fe690e624ca6b4754a01165753bab06ceff` |
| `v2/phases/workshops/phase-3.html` | `467b0578931ed6f3b3d4d4d2e27658c1372461dca267bc4d5ffb07aaf25fb490` |

## Coverage and limitations

Old phase-7 guide/workshop and historical evaluation records untouched. Historical absent-source TaskFlow checkpoint is qualified; it does not prevent new frontend construction from approved behavior. All conditional examples remain unexecuted and AC proposals remain proposals. Source inspection checked independent data-input/data-status/data-copy wiring, labels, readonly previews and button types; clipboard success/failure and responsive/keyboard behavior remain browser obligations.

Human acceptance: **pending** until observations arrive. Browser interaction/clipboard/keyboard/responsive: **Not Tested** at this worktree checkpoint. Actual generated-prompt Agent execution and customer integration: **Not Tested**, outside website implementation scope.
