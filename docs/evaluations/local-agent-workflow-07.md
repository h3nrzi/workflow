# Ticket 07 — v2 release, recovery and responsibility handoff

Date: 2026-10-29. Branch: `codex/local-workflow-07`, integration base `47d757c`. Scope: website guidance and independent prompt controls. No website/customer deployment, domain/secrets change, service purchase or financial commitment performed. Browser QA and human acceptance remain pending.

## First action and reproducible feature evaluation

From repository root run `python3 -m http.server 8000`, then open **http://localhost:8000/v2/phases/phase-4.html** and choose «انتشار و تحویل». Record browser, viewport, date/revision, action, expected result and actual observation here or in ticket 07 comments. The following is a website-content evaluation; do not execute generated deployment commands against a customer product as part of it.

| Feature | Preconditions/data and action | Expected checkpoint | Actual preflight |
| --- | --- | --- | --- |
| Versioned entry and history | Enter from phase-4 forward link and v2 overview; open migration and old phase-8 guide/workshop. | New phase 5 is release/handoff, old phase 8 stays historical. v1:CP-8 maps to v2:CP-5 without converting old evidence to new release success. | Static destinations/fragments Passed; rendered navigation Not Tested |
| Input and publication authority | Read guide `#goal`, start/continue/execute/one previews. | v2:CP-4 supplies connected version, main behaviors, evidence, issues and release authority. Map/design/connected-product completion alone is not permission or release evidence; planning commands don't publish. | Content self-review Passed; human understanding pending |
| Environments and repeatability | Read `#environments`, `#domain`, `#pipeline`. | Separate envs/secrets, no privileged browser keys, domain owner/HTTPS/API-origin checks, traceable CI artifact and failing-check stop, justified repeatable manual alternative. Every nonapplicable concern has a reason. | Content self-review Passed; operational execution Not Tested |
| Data recovery and rollback | Read `#data` and `#rollback`; follow conditional TaskFlow failures. | Isolated backup restore checks data relations and main flow, not only command exit. Rollback considers schema compatibility and new writes; restoring code alone isn't recovery. Stop criteria and authorized responsible owner are explicit. | Content self-review Passed; no actual restore/deployment claimed |
| Monitoring and real product checks | Read `#observability` and `#real-environment`. | Logs protect sensitive data; controlled failure/alert/recovery has a receiver. Main flows and security/performance/a11y/mobile evaluated on actual release version; mocked/dev success isn't production evidence. | Content self-review Passed; browser Not Tested |
| Responsibility and support | Read `#ownership`, `#checkpoints`, `#next`. | Accepted operator, secure access/ability, repeatable release/troubleshooting/recovery runbook and agreed support scope+duration. v2:CP-5 has current version/evidence/issues; human acceptance pending. Future feature roadmap isn't added. | Content self-review Passed; human understanding pending |
| Seven independent commands | In workshop enter different Persian multiline values in all inputs, e.g. `سلام <نمونه> & "نقل"` newline `$& $1 $$ {{INPUT}}`; open every preview. | Only its corresponding preview changes; literals/newlines preserved, no submission/storage. wayfinder start+continue, to-spec, to-tickets, implement-spec, implement and evaluation-without-skill retain scope. | Source wiring reviewed; rendered interaction Not Tested |
| Copy and failure recovery | Copy each command and paste into scratch editor; separately deny clipboard access/use unavailable-copy environment and retry. | Exact preview copied; failure opens details, focuses/selects readonly text, announces manual recovery, re-enables button and preserves input. | Not Tested; parent coordinated browser QA |
| Keyboard/responsive | At 1440px, 768px and 390px traverse skip link, TOC, navigation, labels/inputs, details and copy controls with keyboard; open mobile TOC and select section. | Visible unobscured focus, live copy status, readable Persian, local table scrolling, no page overflow or inaccessible controls. | Not Tested; parent coordinated browser QA |
| Metadata correction | Open phase-3 guide/workshop and inspect browser title. | «و قرارداد اتصال» appears once; no content/history changes outside metadata. | Source review Passed; rendered title Not Tested |

## Actual preflight evidence

Environment: local macOS worktree, Python 3 standard-library checker. User-approved test seams: local destinations/fragments/duplicate IDs plus browser rendered behavior. Parent coordinates browser QA; source review is not rendered evidence.

1. TDD red: `python3 scripts/check-links.py v2/phases/phase-5.html` exited 1 with `Missing page: v2/phases/phase-5.html` before route creation.
2. Green: `python3 scripts/check-links.py v2/phases/phase-5.html v2/phases/workshops/phase-5.html` passed **2 HTML pages, 94 local references**.
3. Full check: `python3 scripts/check-links.py` passed **34 HTML pages, 1815 local references**, no missing destinations/fragments or duplicate IDs. Network URLs, browser layout/keyboard/copy and generated-prompt Agent behavior aren't covered by this check.
4. `git diff --check` passed.
5. Self-review against ticket 07/spec/ADR-0001: retained all useful old phase-8 environment/secrets/DNS/HTTPS/CI/migration/backup/restore/schema-aware rollback/log/alert/actual-env/operator/support guidance, failures and finish criteria. New input is v2:CP-4; v1 evidence explicitly historical, including proposed v1 phase-4 ACs. Commands preserve skill mappings and independent input/preview/copy; execute/one read actual release authority. Other phase edits limited to valid phase-4 forward links and requested duplicate phase-3 title correction. Parent performs final independent Standards+Spec review.
6. UI/UX skill and existing visual-system contract applied: shared Persian typography, guide hero/workshop compact title, native details/input/button/labels, shared visible-focus and responsive rules. No new stylesheet, script or framework introduced.

Exact changed source identity at preflight:

| Source | SHA-256 |
| --- | --- |
| `v2/phases/phase-5.html` | `6b9d53492930069fe1970b89f84b0f5805ca478763412e1f30bf3d75f6aa1e50` |
| `v2/phases/workshops/phase-5.html` | `91c2333351232a7dd999b002b3e1567622f7774b9efcc4307dfe85f6eff64228` |
| `v2/index.html` | `ef0f876d443add7ebd46d47e8fa17d7d0e3a82893baa6f9ac4abf2bdc24b1641` |
| `v2/phases/phase-4.html` | `996bd887f26c1cebec1e318df4a542fb07478ea2fb17e7f51701a59a1ca13649` |
| `v2/phases/workshops/phase-4.html` | `8519d4799db39f2420e9446f3256841ec8a4c40dcfd2f30f469d20e82eba24da` |
| `v2/phases/phase-3.html` | `4784186010ea85a69e63f213773d063740ff6274d1fe60b4ddd3e48a9280d7f9` |
| `v2/phases/workshops/phase-3.html` | `a2b4b814061e42c112609620441d8c0530740d9f9bdbf5833131cc41ac131635` |

## Coverage and limitations

Old phase-8 pages, fragments and historical evaluation records untouched. New guide's examples remain conditional, historical TaskFlow AC-01/02 and TEST-01 remain Not Tested, AC-03/04/05 proposed, DEC-01/02 proposed and OPEN-01 hypothetical. Independent preview/copy wiring reviewed from source; manual-copy failure, exact clipboard content, keyboard and widths require browser observations.

Human acceptance: **pending** until user observations arrive. Browser copy/keyboard/responsive: **Not Tested** at worktree checkpoint. Actual generated-prompt Agent execution, website/customer release and paid commitments: **Not Tested**, outside this ticket's website implementation scope.

## Integration-tip refresh

Merged integration `2916e6c26747b9e72c0969cb6e71ab683add054b` before reporting. A concurrent overview conflict was resolved by preserving integration's phase-2 workshop availability and reapplying phase-5 availability only. Post-merge full link checker passed **34 HTML pages, 1832 local references**; diff check passed. Hash table above identifies pre-merge implementation checkpoint; merged overview has a fresh identity. Browser coverage remains explicitly pending.
