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
