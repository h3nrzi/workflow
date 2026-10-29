# Ticket 05 — v2 backend design and contract handoff

Date: 2026-10-29. Branch: `codex/local-workflow-05`, initially based on integration `0f41d66`. Scope: new phase 3 guide/workshop and its own availability entry. No backend/product construction, deployment or customer service connection performed. Technical content prepared; browser QA and human acceptance remain pending.

## First action and evaluation guide

From this checkout run `python3 -m http.server 8000`, then open **http://localhost:8000/v2/index.html#phase-3** and choose «آموزش طراحی بک‌اند و قرارداد اتصال». Record browser, viewport, revision/date, action, expected result and actual observation in this file or ticket 05 comments.

| Feature | Preconditions/data and action | Expected checkpoint | Actual preflight |
| --- | --- | --- | --- |
| New entry and version | Follow phase-3 guide/workshop from v2 overview; read version note and open migration/checkpoint link. | New phase 3 is backend design; old phase 6 remains accessible with its history, v1:CP-6 maps to v2:CP-3 without rewriting evidence. | Link/fragment check Passed; browser Not Tested |
| Frontend handoff | Read guide `#route`, then the referenced phase-2 exit contract. | MVP behavior, flows, source/run instructions, data/mock boundaries, tests, evidence and issues are inputs. Old absent-source example does not block new local frontend construction. | Content self-review Passed; human understanding pending |
| Decision map and design | Read `#wayfinder`, `#domain-model`, `#operations`, `#stack-host`, `#tests-frontend`. Use conditional TaskFlow examples, not customer data. | Map start and one-decision continuation differ; blocking decisions resolved before spec. Domain/data, invariants, operations/errors/access, justified JS/TS stack/monorepo+hosting, frontend changes and test boundaries yield executable contracts. Mock shape is not final architecture. | Content self-review Passed; browser Not Tested |
| Handoff and scope | Read `#gates`; open workshop `#execute` and `#one` previews. | Current v2:CP-3 cites v2:CP-2 and contracts/evidence/issues. Phase execution completes reviewed contracts/documents only; real API/backend/migration remains phase 4 with appropriate authority. Human acceptance pending. | Content self-review Passed; browser Not Tested |
| Seven independent commands | At workshop, enter a different Persian multiline value in each input, for example `سلام <نمونه> & "نقل"` newline `$& $1 $$ {{INPUT}}`. Open every preview. | Only the corresponding preview changes; literal characters and line breaks survive. Start+continue map to wayfinder, then to-spec/to-tickets/implement-spec/implement; evaluate activates no skill. No data is submitted or stored. | Source wiring reviewed; rendered interaction Not Tested |
| Copy and failure recovery | For each command copy and paste into a scratch editor; separately deny clipboard permission or use an environment without clipboard copying and retry. | Copied text exactly matches that command's preview. Failure opens details, focuses/selects preview, announces manual recovery and re-enables button. Input stays intact. | Not Tested; coordinated browser QA after integration |
| Navigation and keyboard | Use Tab/Enter through skip link, navigation, TOC, inputs, details and copy controls. On mobile open TOC and select section; test Escape where supported by shared navigation. | Visible/unobscured focus; labels and live copy status; correct anchors/current page; usable return to guide/v2 overview and old version. | Local destination/ID check Passed; keyboard Not Tested |
| Responsive reading | Repeat guide/workshop at 1440px, 768px and 390px; inspect tables, Persian text and previews. | Shared reading hierarchy; local table scrolling; no page overflow or obscured controls; readable editable text. | Not Tested; coordinated browser QA after integration |

## Actual preflight evidence

Environment: local macOS worktree, Python 3 standard-library checker. Tests at user-approved seams: static local destinations/fragments/duplicate IDs, plus rendered browser controls/navigation/keyboard/responsive behavior (delegated to integration coordinator). Source inspection is not browser evidence.

1. TDD red: `python3 scripts/check-links.py v2/phases/phase-3.html` exited 1, `Missing page: v2/phases/phase-3.html` before implementation.
2. Initial check of linked guide/workshop found `phase-3.html#checkpoints`, inherited from an old phase-3 contract reference. Corrected to shared v2 evidence contract; old source pages unchanged.
3. Green: `python3 scripts/check-links.py v2/phases/phase-3.html v2/phases/workshops/phase-3.html` passed **2 HTML pages, 81 local references**.
4. Full repository check: `python3 scripts/check-links.py` passed **28 HTML pages, 1560 local references**, no missing destinations/fragments or duplicate IDs. This does not validate network URLs, prompt-agent execution, copy, keyboard or visual quality.
5. `git diff --check` passed.
6. Self-review against ticket 05/spec/ADR-0001: retained useful old phase-6 domain/data/API/security/error/hosting/test detail and all seven skill contracts; replaced old phase-3/4/5 input chain with v2:CP-2, qualified historical evidence, preserved JS/TS and full-stack monorepo contracts, and constrained execute/one commands to documents/contracts. Checked labels, readonly previews, button types, data-input/data-status targets, shared assets and route depth. No unresolved scope issue found. Parent performs final independent Standards+Spec review.
7. UI/UX skill targeted search `keyboard focus forms` returned visible focus and avoiding obscured focus guidance. Existing visual-system tokens, Persian Vazirmatn and shared guide/workshop hierarchy retained; no new design system or JavaScript added.

Exact implementation source identity at preflight:

| Source | SHA-256 |
| --- | --- |
| `v2/phases/phase-3.html` | `2c0ab12be6f69e90ed134f304cb2c4426b869caa1c87b555ad1b236c4b5b7d2c` |
| `v2/phases/workshops/phase-3.html` | `28b895f07e500d068ab3ed2fda7d08c68079500115867f09bfdd51569347be7e` |
| `v2/index.html` | `d425b40c2e349924a111dd3f6045fd91c26ccd6478878aaa68110b1041633623` |

## Coverage and limitations

Old `/phases/phase-6.html` and workshop remain unchanged; historical TaskFlow/CP evidence is explicitly historical or conditional. New overview links advertise this phase only. Later phase 4 initially uses the stable overview anchor until its page exists. Shared prompt.js remains unchanged, with independent previews and manual-copy fallback reused.

Human acceptance: **pending** until the user reports observations. Browser interaction, actual clipboard readback/failure, visual/responsive/keyboard QA: **Not Tested** at this worktree checkpoint. Actual Agent execution of generated prompts and backend/customer operations: **Not Tested**, outside website implementation scope.
