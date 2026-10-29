# Browser preflight — local agent workflow

Date: 2026-10-29. Host-managed Codex in-app browser; static server http://localhost:8000. Human acceptance remains pending. Each entry applies only to the stated source version.

## Ticket 01 — integration 0f41d66

- Passed: /v2/ renders explicit incomplete-content notice, six-stage mapping, preserved v1 entry and shared contracts. DOM snapshot inspected.
- Passed: screenshots independently reviewed at 1440×1000, 768×1024 and 390×844: readable RTL prose, desktop rail, narrow navigation disclosure, no overlap in observed views. This is visual review of the entry viewport, not every section.
- Passed: mobile menu opened using Enter and closed using Escape; expanded state exposed.
- Passed: /v2/migration.html#checkpoints exposes versioned checkpoint mapping; historical /phases/phase-3.html#entry-gate and /phases/workshops/phase-3.html#start retain migration headings.
- Static preflight: 26 HTML pages, 1475 references passed at merge commit; git diff --check passed.
- Not Tested: customer-product execution; independent execution of prompt instructions.

First action: open /v2/, read the mapping, then open migration/checkpoint explanations and compare old phase-three guide/workshop destinations. Record observations against ticket01; acceptance pending.

## Tickets 02 and 05 — integration 013fce9

- Passed: phase-2 design input preserved Persian multiline, `<tag>`, ampersand, quotes and literal dollar patterns in preview and actual browser clipboard. Enter activated copy; Enter opened manual preview. Design-only authority warning visible.
- Passed: all seven phase-3 workshop fields independently changed only their associated previews with the same literal sample; all seven copy buttons produced matching browser clipboard text and success status. Keyboard Tab from evaluation copy reached manual disclosure with visible focus ring.
- Passed: phase-2 and phase-3 guide opening view independently visually reviewed at 1440×1000, 768×1024, 390×844. RTL headings/prose, responsive menu/index, hero and actions readable in observed views. Phase-3 and phase-2 workshop input/copy/manual-preview region visually reviewed on mobile.
- Static preflight passed: 30 pages, 1626 local references; diff check passed. Per-ticket self-reviews and source hashes in 02/05 evaluation guides.
- Clipboard failure automatic recovery: Not Tested dynamically. Permissions-Policy denial on localhost:8001 and CSP sandbox on localhost:8002 were attempted; host browser still reported copy success, so neither establishes denial handling. Existing catch path inspected; manual disclosure is verified separately. Do not label this a successful failure-path test.
- Independent execution of commands against a customer product: Not Tested. Human acceptance pending.

Ticket02 first action: open /v2/phases/workshops/phase-2.html#start, enter a real phase-1 package path plus multiline context, expand preview and compare before copying. Expected: design command includes literal context and grants no implementation authority.

Ticket05 first action: open /v2/phases/phase-3.html#route, compare frontend exit contract, then /v2/phases/workshops/phase-3.html#start. Change two command inputs; expected: independent previews and document-only execution scope. Record observations against the respective ticket.

## Clipboard denial resolved; ticket 06 — integration 47d757c

Chrome host-managed extension on localhost:8001 correctly enforced `Permissions-Policy: clipboard-write=(), clipboard-read=()`. All seven phase-3 commands: Passed — failure message, open details, focused preview and full selection. This supersedes the earlier dynamic Not Tested status for ticket05; the in-app browser limitation remains recorded above.

Ticket06: all six phase-4 inputs preserved the same Persian multiline/special-character fixture, changed only their own previews, and copied literal text successfully in the in-app browser. All six denied copies in Chrome opened, focused and fully selected their associated previews: Passed. Guide opening view visually reviewed independently at 1440×1000, 768×1024 and 390×844; mobile workshop form/copy region also reviewed. No overlapping or unreadable control observed. Static merge preflight: 32 pages/1717 refs and diff check passed. Prompt execution on a real customer product remains Not Tested; human acceptance pending.

Ticket06 first action: open /v2/phases/phase-4.html#first-flow, read the reason for selecting one complete connected flow, then open its workshop and compare the start/design and execute scopes. Expected: real service authority is explicit and mock success cannot establish integration correctness. Record observation against ticket06.

## Tickets 03 and 07 — integration d279730

Ticket03: execution context preserved multiline literal fixture and left design preview unchanged. Enter copied execution text with success feedback. Chrome denial recovery Passed for both design and execute: opened preview, focus and full selection. Representative-feedback guide section read in Chrome after anchor scrolling settled (section top 58px); instructional table readable on desktop. Phase-2 guide and mobile execute controls were visually checked using the same three viewport sizes; no overlap observed in captured views. Static preflight: 34 pages/1832 refs and diffcheck Passed at latest merge.

Ticket07: all seven release inputs independently updated only corresponding previews and copied literal fixture text; all seven Chrome-denied copies opened/focused/selected full previews. Release guide visually reviewed at 1440×1000, 768×1024, 390×844, plus mobile workshop form/copy region. Passed for observed views. No actual deployment, restoration or customer-product prompt run performed; these remain Not Tested. Human acceptance pending.

Ticket03 first action: open phase-2 guide #visual-feedback, follow the representative-flow evaluation steps and compare workshop #execute with #start. Expected: a visual feedback checkpoint before propagation; independent authorized work can continue.

Ticket07 first action: open /v2/phases/phase-5.html, read recovery/rollback and ownership requirements, then compare workshop start and execute. Expected: design is separate from release authority and publication is never claimed from this website exercise. Record observations against tickets03/07.

## Ticket 04 — integration e840f56

Passed: all four frontend inputs independently preserved Persian multiline/special-character fixture; Enter copied each literal preview to clipboard. All four Chrome-denied copies opened/focused/selected the entire corresponding preview. Mobile workshop form/copy region visually reviewed. Resume/evaluation/human-guide text read from rendered page; source describes local-change preservation, authority, pending human acceptance and independent backend entry. Desktop guide/handoff view reviewed. Full three-width final integrated frontend review is recorded in ticket08 below when performed; this entry alone does not claim it. Static merge: 34 pages/1865refs, diffcheck Passed. Human acceptance and customer-product execution remain pending/Not Tested respectively.

First action: open /v2/phases/workshops/phase-2.html#resume, enter the repository entry-index path; then compare #evaluate and inspect the guide #human-guide. Expected: independent inputs, instructions to preserve local changes and per-flow observations, no automatic backend work. Record against ticket04.

## Final integrated journey — ea3a4df (2026-10-29)

Passed: default index refreshed to current v2; all twelve guides/workshops 0–5 loaded with correct headings and 17 navigation links each. Phase-1 handoff exposes all four local frontend commands. Historical phase-3 page refreshed and visibly labels v1 history, preserves migration topic, and offers current-route return. Static compatibility covers all original destinations/fragments.

Passed: relocated phase-0 and phase-1 inputs preserved the Persian multiline/special-character fixture in actual clipboard. Phase-0 handoff stays unchanged; optional educational simulator intentionally shares the request input. Phase-1 summary stays independent. All five relocated previews copied exactly. Chrome restrictive-policy server dynamically denied all five copies: recovery message, open details, focused preview and full selection observed for each. Earlier temporary Chrome unavailability was resolved. All newly introduced/relocated workshop copy controls now have success and failure evidence across this session.

Passed visual review: phase-0 and phase-1 opening views at 1440×1000, 768×1024, 390×844; final restored overview hero/route and icon navigation at all three sizes. Frontend evaluation/human-guide views reviewed at desktop/tablet/mobile; mobile table retains local horizontal scrolling (520px content in 352px region), keyboard focus and ArrowLeft scroll. Keyboard Enter opens mobile navigation, exposes all six phases; Escape closes. Menu icon SVGs are decorative; visible labels remain. These are observed views and controls, not an exhaustive accessibility audit.

Review corrections verified: AC-03 save-failure-input and DEC-02 backend retain their identities; new AC-06/DEC-03 represent coworker policy. Full FLOW-01 creation→assignment→completion→supervisor observation is present. Standards and Spec reviewer rechecks report zero remaining findings.

Final static preflight: 40 HTML pages / 2644 references Passed, no missing destinations/fragments or duplicate IDs; git diff --check Passed. Independent prompt execution on a customer product, real API/DB construction and deployment remain Not Tested/out of scope. Human acceptance remains pending.
