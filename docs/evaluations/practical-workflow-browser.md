# Browser checkpoints — practical workflow

Human acceptance: pending. Date: 2026-10-30. Host-managed Codex in-app browser, local macOS, Python 3.14.7 static server at localhost:8000. These observations concern the documentation UI, not execution of TaskFlow or its prompts by an LLM.

## Ticket 01 — bc9fb50

- Phase-zero preview opened after filling `ارزیابی: پیگیری کارهای تیم $& <نمونه>`; clipboard readback contained that exact literal request. Copy success appeared in the status region.
- At 390×844, visual review found readable RTL hero, action index and mobile navigation; document scrollWidth and innerWidth both measured 390.
- At that width, Enter on the preview disclosure expanded it; Enter on copy produced clipboard text containing `ارزیابی موبایل`.
- Homepage reviewed after explicit reload at 1440×1000; current six-phase navigation and first-action link displayed. document scrollWidth and innerWidth both measured 1440. The host screenshot surface clipped part of the emulated desktop viewport, so final screenshot verification should use a size fitting the actual surface.
- Source review checked prompt data/input/status associations, role boundaries and educational-example labeling. No blocking issue found in this slice; full standards/spec review follows the integration.
- Not tested here: screen reader, OS reduced-motion setting, alternate browser engines, LLM interview outcome, manual-copy failure path.

## Ticket 02 — abed83b

- At 800×900, reviewed the integrated product-definition sequence, explicit educational AC-01–05, blocked DEC-03/AC-06, package handoff and phase-two entry. Existing unknown budget/source evidence remains unknown; technology decisions stay in subsequent phases.
- Entered `بستهٔ ارزیابی فاز ۱؛ بودجه نامعلوم`, opened the first preview and copied it. Clipboard readback contained the exact entered package; visual review showed readable RTL input and preview. document scrollWidth and innerWidth both measured 800.
- Source/content review found no blocking issue for this slice. Full standards/spec integration review follows.
- Not tested at this checkpoint: actual LLM discovery/summary, customer approval, screen reader, clipboard failure fallback. User acceptance pending.

## Ticket 03 — 2c06bae

- At 800×900 opened phase two and verified four separately labeled command inputs and previews: start/design, execute, resume, evaluate.
- Filled each with a distinct marker plus literal `$& <آزمون>`, opened its preview and copied. All four clipboard readbacks contained their own exact marker. DOM readback showed each preview contained only its corresponding marker, with no other command input leaking into it.
- Visual review of the input/preview/copy work area was readable in RTL. Source review checked setup against verified sources, frontend-only boundaries, mock scenarios, authority, repository entry and Not Tested example evidence.
- Additional ticket02 mobile check: at 390×844 Enter opened navigation, Escape closed it (`aria-expanded=false`), focus stayed on the menu with solid outline; page width and scrollWidth both 390.
- Not executed: installation/scaffold commands, sample product tests, LLM/Codex prompt execution, real backend/deployment. These are teaching instructions, not documentation-site preflight operations. User acceptance pending.

## Ticket 04 — f99a963

- At 800×900 reviewed the skill-setup/design page and seven command panels (start, continue, spec, tickets, execute, one, evaluate).
- Each panel received a distinct `QA3` marker plus `$& <نمونه>`; each preview opened and clipboard readback retained its exact marker. Each preview contained only its own command marker. Page width and scrollWidth both 800; the copy/input/preview area was visually readable.
- Content review checked identity versus membership, server-owned team/role checks, idempotent create and versioned status update, design-only scope, recorded script prerequisites and transfer to phase four. No blocking slice issue found; final integration review follows.
- Not executed: skill installer, account provisioning, Auth0 login, API or PostgreSQL, product security tests. User acceptance pending.

## Ticket 05 — 68d2250

- At 800×900 opened the real-integration chapter. All six panels (start, spec, tickets, execute, one, evaluate) opened and copied their distinct `QA4` marker plus `$& <نمونه>` exactly. Each preview contained only its own marker. Width and scrollWidth both 800; visual input/preview/copy review passed.
- Content review checked the phase-three identity/API contract, first-flow then remaining-MVP gates, real persistence and authorization evidence, mutation replay/version conflicts and phase-five handoff. No blocking slice issue found; final integration review follows.
- Not executed: backend installation, migration, real login, connected product flow, security or database tests. TEST-01 remains educational Not Tested; user acceptance pending.

## Ticket 06 — 2151f39

- At 800×900 opened phase five. All seven panels (start, continue, spec, tickets, execute, one, evaluate) opened and copied their distinct `QA5` marker plus `$& <نمونه>` exactly. Each preview contained only its own marker. Width and scrollWidth both 800; visual input/preview/copy review passed.
- Content review checked Render frontend/backend roots and project scripts, Auth0 final origins, server secrets versus frontend configuration, migrations, isolated restore, compatibility rollback, production smoke, monitoring and operations handoff. No blocking slice issue found; final integration review follows.
- Not executed: deployment, paid service provisioning, migration, restore, rollback, real product smoke or operational alert delivery. Those remain explicit teaching examples and required future product evidence. User acceptance pending.

## Tickets 07–08 — final public source at 5d2ba1b, integration 654743f

- All 10 current HTML routes were opened at 320, 390, 768 and 1440px (40 observations). No document overflow; exactly one h1 and RTL on every page.
- All 29 final prompt previews were opened and copied at 800×900. Full clipboard text equaled the preview in 29/29 cases, including literal markers, `$&` and `<نمونه>`; no unresolved `{{INPUT}}`. The optional phase-zero simulator was expanded first.
- At 390×844, Enter opened phase-three mobile TOC; selecting the model/contract link updated the hash to `#domain-model`, closed the index, updated its current label and settled the target at 98px below the viewport top, below the 64px index. Screenshot visually confirmed the heading and readable RTL content.
- At 1440×1000, desktop TOC displayed with computed `position: sticky`; article width was 701px and TOC width 190px, with no page overflow. Tab from the document body focused the skip link with solid outline. Host screenshot capture clipped part of this emulated desktop viewport; complete desktop pixel-level review is limited. This limitation is not a site overflow observation.
- At 800×900, final homepage screenshot showed the complete hero and first action. The first-action link reached phase zero, its continuation reached phase one, and menu links navigated to contracts and TaskFlow with the expected h1. Escape closed the final main menu (`aria-expanded=false`). Representative mobile/tablet screenshots were visually reviewed.
- After resetting the emulated viewport, the default 908×773 desktop view was visually reviewed without clipping: homepage hero, readable Persian text, first action and desktop sidebar were visible; scrollWidth equaled 908. The 1440px capture limitation above remains specific to the emulated wide view.
- Final checks at 654743f: 10 pages / 317 references passed; both shared scripts passed `node --check`; `git diff --check` passed. Root environment: Node v24.22.0, Python 3.14.7, Darwin arm64. Ticket08's Node v26.4.0 records that implementer's actual shell, not the sample product's recommended runtime.
- Independent Standards and Spec reviews at 654743f each found zero material issues; see [review record](practical-workflow-review.md).
- Still Not Tested: screen reader, OS reduced-motion setting, other browser engines, clipboard-denial/manual fallback, complete unclipped desktop screenshot, actual LLM/agent/product/deployment execution. User acceptance pending.

Reproduce feature checks using the per-ticket guides. Record user observations in this chat or the corresponding issue Comments; these automated observations do not establish acceptance.
