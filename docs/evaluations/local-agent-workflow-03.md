# Ticket 03 — approved plan to building and testing flows

Date: 2026-10-29. Branch `codex/local-workflow-03`, based on integration `013fce9`. This ticket adds execution teaching and its independent workshop command. It builds the guide site; no customer product was built or executed. Resume/evaluate commands remain unavailable until ticket 04. Human acceptance is pending.

## First action and feature-by-feature evaluation

Run `python3 -m http.server 8000` from the repository root. First open **http://localhost:8000/v2/phases/phase-2.html#execute** and follow the execution workshop link. Use sample paths in this site's fields; do not send the command to a product agent until the corresponding product's plan and authority are valid. Record browser, width, revision and observations here or in issue comments.

| Feature | Preconditions/data and action | Expected observation | Current preflight |
| --- | --- | --- | --- |
| Approved-plan handoff | Read design gate, then execution guide and workshop. | Design still grants no build permission. Execution reads plan, valid documents and authority; it covers representative flow then ready flows. Resume/evaluate explicitly unavailable. | Static links Passed; browser Not Tested |
| Visual feedback point | Follow `#visual-feedback`; inspect the concrete TaskFlow steps. | Agent gives address, data, appearance/interaction/responsive actions; human reports feedback before visual expansion. Independent authorized work can proceed, and existing confirmed visual basis is reused. | Content self-review Passed; human understanding pending |
| Whole-flow implementation | Read `#flow-loop`. | One user's complete goal includes states, UI, controlled mock, browser test, appropriate logic tests and correction. Expected behavior comes from approved MVP; DEC-02 ambiguity is distinct from code error. | Content self-review Passed; human understanding pending |
| Scope and structure | Read execution authority, data boundary and migration/refactor rows. | No repeated permission per page/ticket; new product decision, scope, access or cost returns to owner. No real backend/auth/payment/send/server persistence. Structure evolves from actual need, and migration/refactor is conditional. | Content self-review Passed; human understanding pending |
| Actual-access blocker | Read `#execution-evidence`, including missing-browser example. | Agent checks available permitted methods, records effect and follow-up, and does independent authorized work. No fake browser success or routine delegation of technical execution. | Content self-review Passed; human understanding pending |
| Two independent inputs | Put design fixture below in `start-input`, execution fixture in `execute-input`; open both previews. Change just execution data. | Each full approved prompt contains only its own current fixture; design preview remains unchanged. Persian, newlines, HTML-like text and dollar patterns stay literal. | Browser Not Tested |
| Copy both commands | Copy each command and paste into separate plain text documents. | Each pasted value exactly matches its corresponding complete preview and fixture; status identifies successful copying. | Browser Not Tested |
| Failed copy | Deny clipboard and prevent fallback copy in the browser test context, then use execute copy. | Preview opens, text is selected, manual-copy feedback appears; keyboard copying is usable. | Browser Not Tested |
| Keyboard/responsive navigation | At 1440px, 768px and 390px, use keyboard through skip link, menu/index, both inputs, disclosures and buttons. | Correct fragment targets, readable Persian, visible focus, accessible controls and local table scroll without page-level overflow. Mobile menu Escape returns focus. | Browser Not Tested |
| Site safety | Edit fields and inspect network; reload. | Input is not stored/submitted/executed; no product agent starts. Copy is a clipboard action only. | Source self-review Passed; browser Not Tested |

Design fixture:

```text
طراحی: docs/محصول.md
نمونه: <design> & $& $$
اختیار: طراحی فقط
```

Execution fixture:

```text
اجرا: docs/ورودی.md
دامنه: FLOW-01 فقط
<execute> & "نقل" 'متن' $& $$ $` $'
مرورگر مجاز؛ بدون سرویس واقعی
```

## Actual preflight and self-review

Environment: local macOS worktree, Python 3 standard library checker. Approved seams are rendered browser interactions and static links/fragments/duplicate IDs. Parent coordinates browser QA after integration. No browser outcome is inferred from source review.

- TDD red: added the public design-gate handoff to `workshops/phase-2.html#execute`, then ran `python3 scripts/check-links.py v2/phases/phase-2.html`. It exited 1 with `missing fragment workshops/phase-2.html#execute` before the command existed.
- Green after implementing that linked execution slice: `python3 scripts/check-links.py` exited 0: **30 HTML pages, 1643 local references**, no missing destinations/fragments or duplicate IDs.
- `git diff --check` exited 0.
- Self-review: compared every ticket 03 acceptance item with the execution sections; checked full approved second prompt from `prompts.md` is retained, with a separate data-only context block. Existing first prompt/textarea is unchanged. `execute-input`, `execute-preview`, `execute-status`, labels, live status and data associations are distinct; shared `assets/prompt.js` remains unchanged. No forms, persistence, submission or new external execution were added.
- Checked representative-flow feedback precedes expansion while independent work proceeds; behavior ambiguity is not patched into test expectations; controlled frontend simulation and later real-service rechecks remain explicit. Historical TEST-01 and OPEN-01 are not reported as newly passed. Preserved existing identifier meanings, phase palettes, single guide hero, compact workshop header, native disclosure/manual copy, sticky indexes and responsive navigation. Parent runs final two-axis review on integration.

Exact source identity at this preflight (SHA-256):

| Source | SHA-256 |
| --- | --- |
| `v2/index.html` | `a98e89b82b9c3f4623c4363d143195b4e38f794a8257f41f4149683740c89d0a` |
| `v2/phases/phase-2.html` | `0c27f13eea3c488adc3c518979bfa72bf33e160e1421d3d59fcf2c46c64fa868` |
| `v2/phases/workshops/phase-2.html` | `47ac211c2a84adaf85f46a824ca8ef27de5f5f944b41258850c2f1d34323b261` |

## Limits

Browser appearance, keyboard, responsive layout, clipboard readback, failed-copy path and cross-command independence: **Not Tested** at this worktree checkpoint. Independent use of these prompts on a real product: **Not Tested**. Human acceptance stays **pending** until observations are reported. A static checker pass establishes destinations and identifiers, not execution quality or acceptance. Ticket 02 checkpoints remain in their own record; this ticket does not rewrite their historical results.
