# Browser checkpoints — practical workflow

Human acceptance: pending. Date: 2026-10-30. Host-managed Codex in-app browser, local macOS, Python 3.14.7 static server at localhost:8000. These observations concern the documentation UI, not execution of TaskFlow or its prompts by an LLM.

## Ticket 01 — bc9fb50

- Phase-zero preview opened after filling `ارزیابی: پیگیری کارهای تیم $& <نمونه>`; clipboard readback contained that exact literal request. Copy success appeared in the status region.
- At 390×844, visual review found readable RTL hero, action index and mobile navigation; document scrollWidth and innerWidth both measured 390.
- At that width, Enter on the preview disclosure expanded it; Enter on copy produced clipboard text containing `ارزیابی موبایل`.
- Homepage reviewed after explicit reload at 1440×1000; current six-phase navigation and first-action link displayed. document scrollWidth and innerWidth both measured 1440. The host screenshot surface clipped part of the emulated desktop viewport, so final screenshot verification should use a size fitting the actual surface.
- Source review checked prompt data/input/status associations, role boundaries and educational-example labeling. No blocking issue found in this slice; full standards/spec review follows the integration.
- Not tested here: screen reader, OS reduced-motion setting, alternate browser engines, LLM interview outcome, manual-copy failure path.

Reproduce feature checks using the per-ticket guides. Record user observations in this chat or the corresponding issue Comments; these automated observations do not establish acceptance.
