# Ticket 02 — product package to frontend design plan

Date: 2026-10-29. Branch: `codex/local-workflow-02`, based on integration `0f41d66`. Scope: phase 2 design guide and **start/design only** workshop command. Execution, resume and evaluation commands belong to tickets 03/04. Technical implementation prepared; browser preflight and human acceptance pending.

## First action and reproducible guide

Serve the repository with `python3 -m http.server 8000`. First open **http://localhost:8000/v2/index.html#phase-1** and follow «ورود به طراحی فرانت نسخهٔ ۲» with the location of your valid phase 1 package available. Record observations with revision, browser, width and date in this file or ticket comments.

| Feature | Prerequisite/data and action | Expected checkpoint | Current evidence |
| --- | --- | --- | --- |
| Phase 1 handoff | Follow v2 phase 1 package handoff, then workshop link. | Correct versioned design guide and independent design command; historical phase 1 remains available. | Static links Passed; browser Not Tested |
| Read without an agent | Read goal, input and source sections. Compare source-available and source-unavailable routes. | Human can perform the same steps; technical discovery belongs to implementer, product decisions to owner. No external tool requirement or invented hidden behavior. | Content self-review Passed; human understanding pending |
| Design completeness | Read design, TaskFlow, planning and failure sections. | Flow map, states, AC, justified stack, JS/TS and monorepo continuity, minimum structure/state/data boundary, representative flow, responsive direction and test strategy. Existing IDs stay stable; TaskFlow is hypothetical. | Content self-review Passed; browser Not Tested |
| Authority and artifacts | Follow planning and design gate. | Planning produces spec and flow work units together; design grants no implementation permission. Valid repository entry points, blockers and independent work are explicit. | Content self-review Passed; human understanding pending |
| Literal text preview | At workshop `#start`, enter the fixture below; open full preview. | Entire approved design prompt remains, fixture appears exactly as text, including newlines and dollar patterns; no rendered injected element or navigation. | Browser Not Tested |
| Clipboard | Use «کپی متن» and paste into a plain text document. | Pasted text equals the current complete preview, including exact fixture. Success message is visible. | Browser Not Tested |
| Failed clipboard | In browser test context deny clipboard and prevent the fallback copy operation; select copy. | Full preview opens and text is selected; clear manual-copy feedback and usable keyboard copy. | Browser Not Tested |
| Responsive/keyboard | Review 1440px, 768px and 390px; Tab/Enter through skip link, menu, index, input, disclosure and copy. On mobile use menu Escape. | Readable Persian, visible focus, local table scrolling, no page overflow, headings visible below sticky index, usable buttons and native disclosure. | Browser Not Tested |
| Independence and safety | Enter text, reload or navigate away. Inspect network while editing. | No form submit, persistence, or product execution; only page text and clipboard actions. At this ticket only one command exists, later tickets test cross-command independence. | Source self-review Passed; browser Not Tested |

Multiline fixture (paste literally):

```text
بسته: docs/محصول.md
نمونه موجود نیست؛ اختیار: طراحی فقط
<demo> & "نقل" 'متن' $& $$ $` $'
خط آخر: FLOW-01 / AC-02
```

## Actual preflight

Environment: local macOS worktree, Python 3 standard library static checker. Approved test seams: rendered browser behavior and static local links/fragments/duplicate IDs. Parent coordinates browser QA after merge; no unexecuted browser result is claimed here.

- TDD red: `python3 scripts/check-links.py v2/phases/phase-2.html v2/phases/workshops/phase-2.html` exited 1 before implementation, reporting both missing pages.
- Green: `python3 scripts/check-links.py` exited 0: **28 HTML pages, 1541 local references**, no missing destinations/fragments or duplicate IDs.
- `git diff --check` exited 0.
- Self-review: compared guide coverage with ticket 02 and ADR-0001; checked full approved first command from `prompts.md`, escaped textarea content and existing `prompt.js` integration. That script uses literal replacement callback and textarea values; no new execution, storage, submission, JS dependency or forms were added. Visible labels, live status, native disclosure/manual copy, skip link, responsive index and existing route palettes are reused. This source review does not establish browser behavior. Final two-axis review is coordinated by parent on the integration branch.
- Existing visual contract retained: Vazirmatn, route phase-2/workshop-2 palettes, one guide hero, compact workshop heading, shared navigation and locally scrollable tables. No new visual tokens.

Source identity at preflight (SHA-256):

| Source | SHA-256 |
| --- | --- |
| `v2/index.html` | `3dd2497d2b10a00aab619badccbbf9ccef33aaa9508bbc5661e9d2e08e2918c6` |
| `v2/phases/phase-2.html` | `47a823ffc272be73d237d089cc83a7ee10c2dfb408658e5e4c6da9bedca77c07` |
| `v2/phases/workshops/phase-2.html` | `b1c4c40f2489f69b85225a015810c49721ee61aaf766107d4cf0d2e18d734a00` |

## Limits and checkpoint

Old routes, historical evidence and global activation are untouched. Only phase 2 availability and phase 1 package handoff within the v2 entry were updated. The workshop uses the full approved design prompt plus an explicit data-only context block; placeholders must be reviewed against real paths before using it in a product agent. Actual independent execution of that prompt on a product is **Not Tested**. Human acceptance remains **pending** until the user reports observations; static passes and this guide do not constitute acceptance.

## Integration recheck

Merged integration tip `92c9dfc` into this branch before handoff. The v2 entry conflict was resolved by retaining both phase 2 design availability and phase 3 guide/workshop availability. `python3 scripts/check-links.py` then passed: **30 HTML pages, 1626 local references**; `git diff --check` passed. Parent's historical browser record came with integration; it is not a browser result for these new phase 2 pages. Post-merge `v2/index.html` SHA-256: `12fe0bd1d7c915210d7fb3ce0f38198e195f046ba3730c92f0e3ca98a053ea82`. Guide and workshop hashes above remain unchanged.
