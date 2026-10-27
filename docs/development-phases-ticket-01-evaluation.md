# Ticket 01: prototype handoff evaluation

Implementation date: 2026-10-27. Ticket: `.scratch/workflow-development-phases/issues/01-prototype-handoff.md`. Human evaluation remains **pending** until the user reports observations. This guide and automated checks do not establish acceptance.

## Actual preflight

- Base confirmed: dedicated `codex/ticket-01` branch created from `codex/workflow-development-phases`, commit `3718321`.
- Red → green at the agreed public-page seams, using temporary Python HTMLParser/content probes without adding a test framework:
  - Active hub/tool navigation initially failed on `tools/stitch.html`; passes after removing active links and retiring the old route.
  - Tool-selection/output-inspection content initially failed on the phase-two guide; passes for guide, workshop, hub, and Replit page after adding the contract.
  - TaskFlow handoff initially failed for missing worked source/evidence example; passes for guide and hub after adding simulations, failure, evidence shape, missing-source blocker, and next action.
- Whole-site static pass at this branch: 11 HTML pages, 433 local links/assets/fragments, no missing targets/fragments or duplicate IDs, exactly one h1 per page.
- `node --check assets/prompt.js`: passed. Shared script was not changed.
- `git diff --check`: passed.
- Existing historical evaluations were not rewritten as evidence for this version.
- Browser rendering, keyboard, clipboard success/failure, and prompt-input independence: **not run in this worktree**; assigned to the integration browser pass. Static content probes do not establish those behaviors.
- No prompts executed in an AI agent, no real TaskFlow built, no tool capabilities claimed as currently verified.
- Final integration code review is pending at this checkpoint.

## First action

From the integration checkout, run `python3 -m http.server 8000`, open `http://localhost:8000/phases/phase-2.html#flow-example`, and expand **TaskFlow — بستهٔ تحویل آموزشی**. Keep a scratch text editor available for paste checks.

## Feature checkpoints

| Feature | Input and action | Expected result and checkpoint |
| --- | --- | --- |
| Build-tool route | Open phase-two guide → prototype hub → tools → Replit. Also visit the old `/phases/prototyping/tools/stitch.html` URL directly. | Hub offers vibe coding only; Replit/Base44 are examples without current capability guarantees. No active link leads into Stitch construction; old URL states it is retired and returns to hub. Record routes visited. |
| Selection vs delivery | Read the guide's construction section and both workshop command previews. | Advance source-export feasibility is not a tool-selection/acceptance gate. Actual source and necessary evidence remain readiness requirements. Record any contradictory wording. |
| Real-output inspection | Use a hypothetical prototype containing a real auth service and proprietary dependency; read guide, hub and relevant previews. | Instructions inspect files/dependencies/configuration/network and actual behavior; missing access is Blocked/Not Tested. Noncompliant output goes back for correction to explicit simulations; generated backend is not final architecture. |
| Source decision | Read handoff guidance with an unfamiliar source structure. | No framework/library/quality assumed; acceptable source is preferred, correction/rebuild require reasons and costs; approved MVP behavior remains truth. |
| TaskFlow | Expand the teaching example in guide and hub. | Stable identifiers, local simulations, failed-save behavior, illustrative evidence record, real Not Tested statuses and missing-source Blocked status stay distinct. Missing source prevents readiness; owner and next action are explicit. No fictitious file is presented as a real artifact. |
| Command previews and copy | On workshop and hub, start empty; type `نمونهٔ فارسی` plus newline, `<script>مثال</script>` and `$& $1`. Open both previews, copy each and paste into scratch editor. | Text appears literally in the input-bearing command; independent finish/documentation command stays unchanged. Clipboard matches the selected preview; amended output contract is present in each command. Record each command separately. |
| Clipboard recovery | In a browser where clipboard permission can be denied, deny it and copy a command. | No false success. Expanded, focused, selected preview and readable manual-copy message permit recovery. Record whether genuine denial or controlled failure was used. |
| Navigation and fragments | Activate mobile/desktop indexes and jump to TaskFlow, construction, tools and finish sections. | Correct target heading stays visible; retired tool route has no broken removed-section fragments. |
| Keyboard and viewports | Test guide/workshop/hub/Replit at 1440px, 768px, 390px and 320px; Tab through menus, disclosures, inputs and copy buttons. | Focus visible; disclosures keyboard-operable; long prompts and new example readable; no important content clipped; page-level sideways scroll absent. Record browser, width, observed issue and screenshot where useful. |

Keep observations per feature as Passed / Failed / Blocked / Not Tested. Browser evidence and user observations should be appended as later checkpoints, without changing the historical claims above.


## Integrated checkpoint — 2026-10-27

Implementation is resolved on `codex/workflow-development-phases`, functional commit `9273de8`. See [the integrated evaluation](development-phases-evaluation.md) for this ticket’s reproducible inputs/actions/expected checkpoints and the final browser evidence: all47 copy controls, controlled recovery, responsive checks, keyboard flow and separate Standards/Spec review. Earlier pending notes above describe that worktree checkpoint; final integration checks are now recorded separately. Human acceptance remains pending; actual prompt execution in an AI agent and customer-product deployment remain Not Tested.
