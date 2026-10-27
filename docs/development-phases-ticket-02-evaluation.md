# Ticket 02 — تحویل‌گیری و مهاجرت: راهنمای ارزیابی

Date: 2026-10-27. Implementation: `codex/ticket-02`, based on integration commit `bdced96`. This evaluates the static guide and workshop, not migration of a customer product. Human acceptance is **pending** until the user reports observations. TaskFlow is an explicitly conditional teaching example: the phase-two source blocker and Not Tested results are preserved.

## Actual preflight evidence

- TDD public-page seams were approved by the user: navigation/fragments, preview/copy and independent input/failure recovery, keyboard and responsive display. No new test framework was introduced.
- Red: after synchronizing the worktree with the integration tip, phase-three guide did not exist (`test -e phases/phase-3.html` exited 1). Baseline HTML audit: 11 pages, 433 local references, zero errors.
- Green for page availability: HTML audit after adding guide/workshop and phase-two entry links: **13 pages, 539 local references, zero errors**, including one H1 per page, unique IDs, existing local assets/paths/fragments, valid label/copy/status targets and readonly previews. Audit command: `python3 /tmp/workflow-development-phases-qa/audit.py .` (session-local inspection utility; no product dependency).
- Red for empty-input preview: host-managed IAB at `http://127.0.0.1:8012/phases/workshops/phase-3.html` showed literal `{{INPUT}}` in start, spec, tickets, implement-all and implement-one previews before the shared script change. The old script required the legacy single input and returned early.
- Green: after implementing `data-input` bindings and versioning the shared script URL, read-only browser DOM inspection showed **all six previews free of the unresolved token** with empty inputs. The evaluate preview has no input dependency. A plain reload initially retained the earlier script, which is why workshops 0–3 now request `prompt.js?v=independent-1`.
- Content inspection parsed the rendered textarea templates and confirmed all six approved prompt bodies are preserved verbatim as prefixes: start, to-spec, to-tickets, implement-spec, implement, evaluate. Optional context and discovery/ambiguity clarification follow them; no repository-path form is added.
- `node --check assets/prompt.js` and `git diff --check`: passed.
- Code inspection: text is written with `.value` and a replacement callback; independent input changes only refresh their bound preview. Legacy `data-uses-input` continues binding the existing `data-prompt-input`. No network, storage, HTML parsing or Agent execution was added. Clipboard success/failure behavior is retained.
- At this ticket checkpoint, clipboard read-back, controlled failure, filled-input independence, earlier-workshop browser regression, keyboard, and desktop/tablet/mobile visual inspection are **pending integrated browser QA** by the coordinating agent; these are not inferred from static checks or historical evidence. Actual Agent execution with the prompts and customer-product migration are **Not Tested**.
- Integration code review is pending the required end-of-spec review; this guide is prepared while the implementation context is available and will be supplemented by actual review/browser results before final handoff.

## Reproducible feature-by-feature evaluation

Serve the integration checkout with `python3 -m http.server 8000 --bind 127.0.0.1`, then open [phase two](http://127.0.0.1:8000/phases/phase-2.html#prompt-tool). Existing server instances should be reused. Inputs below are disposable teaching data.

| Feature / input | Action | Expected result | Checkpoint |
| --- | --- | --- | --- |
| Phase-two handoff | Follow the phase-three guide and start links from the end of phase two; return to phase two. | Real guide/workshop routes open; incomplete TaskFlow source remains a blocker. | CP-2 → entry-gate |
| Initial-source evidence | Read `baseline`; use the example with absent source or failed installation. | Installation/run/build and service/mock observations have versions and evidence; inability to run blocks completion and is never reported as success. | CP-3 / baseline |
| Technology decision | Compare keeping source, bounded repair, and fundamental rebuild in `technology`. | Reasons, quality, cost and hosting constraints drive the decision; fundamental changes expose the conflict with bounded migration. JS/TS applies to app/tool code; backend choices are not prematurely settled. | DEC-01 |
| Migration scope | Follow `migration-plan` and `execution`. | Monorepo structure/install/run/build only; full E2E/behavior correction/refactor belong to later phases. Before/after comparisons use the same behavior expectations. | CP-3 / execution |
| Checkpoint continuity | Read `checkpoints` and `handoff`; imagine a new chat with no old history. | Same FLOW/SCREEN/INT/AC meanings, decision authority, actual TEST status and OPEN effect/owner/deadline survive; summary updates the valid reference rather than creating a conflicting copy. | CP-2 → CP-3 |
| Independent commands | Open all six previews with empty input. Inspect skill labels and boundaries. | Start only designs with grill-with-docs; spec, tickets, all-ticket execution, one-ticket execution and evaluation remain separate; no unresolved input token; evaluation works without a form field. | start / spec / tickets / implement-all / implement-one / evaluate |
| Literal optional input | Enter `فارسی چندخطی` plus a newline and `$& $$ $1 <script>alert("نمونه")</script> & </textarea>` into the start input. Enter a different value in spec. | Each preview contains its own exact literal value; no script executes, no HTML element appears, other previews stay unchanged. Clear each input and check discoverable-context/ambiguity rules remain. | start-preview / spec-preview |
| Actual clipboard | Copy each command and paste into a temporary text editor; compare with its full preview. | Exact multiline text; success appears only after real copy. Copy evaluate with every input empty as well. | all six status regions |
| Recovery | In an isolated controlled QA environment, deny/mock the external clipboard boundary, then copy. | Honest failure message, expanded preview, selected text, usable focus and manual-copy route; report controlled failure separately from a real permission denial. | prompt status + selection |
| Existing workshop regression | Open phase 0, 1 and 2 workshops; change their handoff/request input, inspect and copy advisor plus independent summary previews. | Existing advisor interpolation and independent summary behavior remain usable. | legacy workshops |
| Keyboard and narrow widths | Use Tab/Shift+Tab/Enter/Space and Escape at desktop, tablet and mobile widths. Open TOC, previews and horizontally scrollable tables. | Visible usable focus, predictable disclosure/navigation, readable RTL prose/inputs/previews, table region contains its scroll; no obscured important content. Inspect visually, not solely through overflow dimensions. | guide and workshop |
| Separate end states | Read `exit-gate` and evaluate command. | Design-ready, actually migrated and human-accepted remain distinct. Deferred issues require decision, effect, owner and date; automated success never creates human acceptance. | CP-3 / pending human observation |

**First user action:** open phase two’s final workshop link, enter phase three, and read the start preview’s “design without migration execution” boundary. Record any missing input or source blocker, then check the preview with the literal test input above. Report the observed result; acceptance remains pending until then.


## Integrated checkpoint — 2026-10-27

Implementation is resolved on `codex/workflow-development-phases`, functional commit `9273de8`. See [the integrated evaluation](development-phases-evaluation.md) for this ticket’s reproducible inputs/actions/expected checkpoints and the final browser evidence: all47 copy controls, controlled recovery, responsive checks, keyboard flow and separate Standards/Spec review. Earlier pending notes above describe that worktree checkpoint; final integration checks are now recorded separately. Human acceptance remains pending; actual prompt execution in an AI agent and customer-product deployment remain Not Tested.
