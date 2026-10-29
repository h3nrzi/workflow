# Ticket 04 — fresh-session continuation and frontend handoff

Date: 2026-10-29. Branch `codex/local-workflow-04`, based on integration `2916e6c`. Scope: complete phase 2 teaching and all four independent commands. This is guide-site implementation; no real customer product, backend or deployment was started. Human acceptance pending.

## First action and feature evaluation

Serve the repo with `python3 -m http.server 8000`. First open **http://localhost:8000/v2/phases/workshops/phase-2.html#resume**, enter a sample location for the valid repository entry list and open its full preview. Record observations with revision, browser, viewport, date and scenario here or in the issue comments. These are site evaluation steps; actual product use requires the relevant project's valid authority.

| Feature | Prerequisite/data and action | Expected checkpoint | Current preflight |
| --- | --- | --- | --- |
| Continue from repository | Read guide `#resume`, including TaskFlow's changed local SCREEN-02. | Instructions, valid package, decisions, execution authority, actual files and visual-feedback status are read from repository; changes are preserved and old chat isn't required. Existing decisions are not needlessly reopened. | Content self-review Passed; browser Not Tested |
| Authority/conflict recovery | Read resume table: missing authority, document/file conflict, pending visual feedback and old TEST-01 result. | Relevant work is blocked with effect/follow-up; independent authorized work continues. Local changes are preserved, old success isn't projected onto new code, and no authority is inferred from silence. | Content self-review Passed; human understanding pending |
| Four independent previews | Fill the four inputs with the unique fixtures below. Open all previews; change only resume, then evaluate. | Each full approved prompt retains only its own current fixture; other previews remain unchanged. Multiline Persian and special characters stay literal. | Browser Not Tested |
| Four copy actions | Copy each command and paste into separate plain text documents. | Exact corresponding preview text, including fixture and newlines, is pasted; visible status gives success. | Browser Not Tested |
| Failed clipboard | Deny clipboard and prevent fallback copy in browser test context; use resume/evaluate copy. | Corresponding preview opens and text is selected; clear manual-copy feedback and keyboard copying remain available. | Browser Not Tested |
| Concrete human guide | Read `#human-guide`, follow one sample scenario as a paper walkthrough. | Every actual FLOW gets prerequisite/data/action/expected/report destination and first action; AC-01/02, INT-02 and unresolved AC-03/DEC-02 remain distinct. Educational TEST-01 stays Not Tested. | Content self-review Passed; actual product scenario Not Tested |
| Readiness and evidence | Read `#evaluate` and `#readiness`. | Automated evidence, real-user observations, limited owner review and hypotheses are separate; technical ready/conditional/reconsider/stop have reasons and next steps. Missing necessary permission/source/fundamental decision cannot hide as conditional. Human acceptance remains pending without observations. | Content self-review Passed; human understanding pending |
| Backend handoff | Follow guide `#handoff` to phase 3 contract/guide. | v2:CP-2 references behavior, source/run method, data/mock, tests/evidence, open issues and authority. Backend design and real connections do not start automatically. v1:CP-3 retains migration meaning. | Static targets Passed; browser Not Tested |
| Responsive/keyboard | Inspect 1440px, 768px and 390px; Tab/Enter through skip link, menu/index, all inputs/disclosures/copy buttons; mobile Escape. | Visible focus, usable labels/controls, readable Persian, local table scroll, correct fragments and headings below sticky index; no page overflow. | Browser Not Tested |
| Safety | Edit text while observing network; reload and revisit. | Site stores/submits/executes none of the entered product information; only text generation and clipboard interaction occur. | Source self-review Passed; browser Not Tested |

Unique input fixtures (each input gets only its own lines):

```text
طراحی: docs/محصول.md
<design> & $& $$
```

```text
اجرا: docs/ورودی.md
FLOW-01 فقط؛ <execute> & $& $$
```

```text
ادامه: docs/ورودی.md
تغییر محلی SCREEN-02 حفظ شود
<resume> & "نقل" 'متن' $& $$ $` $'
```

```text
ارزیابی: docs/ورودی.md
مشاهدهٔ انسانی: هنوز موجود نیست
<evaluate> & "نقل" 'متن' $& $$ $` $'
```

## Actual preflight and self-review

Environment: local macOS worktree, Python 3 standard-library link checker. Approved seams are browser-rendered behavior and static destinations/fragments/duplicate IDs. Browser QA is coordinated by parent after integration; source review is not passed browser evidence.

1. First TDD red: added public guide handoff to `workshops/phase-2.html#resume`, ran `python3 scripts/check-links.py v2/phases/phase-2.html`; exit 1, missing resume fragment. Implemented resume guide/command; green checker exit 0: **32 pages, 1741 references**.
2. Second red: added guide handoff to `workshops/phase-2.html#evaluate`; same command exited 1, missing evaluate fragment. Implemented evaluation teaching, command and handoff; checker then passed.
3. Final preflight after wording/self-review corrections: `python3 scripts/check-links.py` exit 0: **32 HTML pages, 1767 local references**, no missing destinations/fragments or duplicate IDs. `git diff --check` exit 0.
4. Self-review compared ticket 04, ADR-0001, shared stage/evidence contracts and approved third/fourth prompts. Both approved prompts are complete, followed by separate explicit data-only context blocks. Existing start/execute textarea templates are unchanged; new resume/evaluate IDs, labels, data associations and live status are independent. Shared `prompt.js`, styles and existing input behavior remain unchanged. No new forms, storage, submission, dependencies or external execution were introduced.
5. Content self-review checked preservation of local changes/closed decisions, valid prior authority, visual-feedback recovery, affected-version test validity, per-flow actionable evaluation, distinctions among evidence sources, four outcomes, transferable issue effect/decision/owner/due date, concrete first actions, human pending and no automatic backend. Stable TaskFlow IDs and hypothetical labels are retained. Removed only frontend not-ready claims; site-wide activation remains ticket 08.
6. Existing visual system retained: phase 2 guide hero, compact workshop heading, shared sidebar/index behavior, native disclosure/manual copy and scrollable tables. Final two-axis review is coordinated by parent on integration.

Source identity at this preflight (SHA-256):

| Source | SHA-256 |
| --- | --- |
| `v2/index.html` | `958e46195d9e69984a9288c1fa25ea38f2ef9145264dac4c12fd8da062cdc217` |
| `v2/phases/phase-2.html` | `739d25fb9533d9dfde0e4f7b761d9429f59433bbe16ef8af2b572360fabe5afc` |
| `v2/phases/workshops/phase-2.html` | `112ba86030a438f1691bdb2662767badbbbabc88caf4ae699fda90c931930e46` |

## Remaining observations

Browser visual, responsive, keyboard, literal preview behavior, clipboard readback, copy-failure and four-input independence: **Not Tested** at this worktree checkpoint. Actual independent execution of these commands on a product: **Not Tested**. Human acceptance: **pending**. Keep each earlier ticket's source and browser checkpoint records; availability of all four commands does not retroactively establish their acceptance.
