# کارگاه فاز ۰۴ — Product Flow Verification & Prototype Hardening

> **قالب قابل کپی، نه اجرای واقعی.** این کارگاه به سورس پروژهٔ محصول دسترسی فرضی ندارد. هر نتیجه فقط پس از اجرای Local Coding Agent و مشاهدهٔ Artifact معتبر است.

## مسیر استفاده

۱. Product Prompt واقعی Replit، Product Experience Package (با FLOW/SCREEN/INT/AC)، Prototype Handoff، Migration Handoff، آدرس و Commit سورس فعلی را گردآوری کنید. Secret و دادهٔ مشتری را پیش از انتقال به LLM حذف کنید.  
۲. Local Agent با مجوز و محیط ایزوله، وضعیت کد/تست و قراردادهای Run را مشاهده کند؛ خروجی Baseline و Flow Inventory را بدهد.  
۳. پرامپت A را در LLM مشاور برای تدارک Context Brief و پرسش‌های Grill اجرا کنید؛ سپس `/grill-with-docs` را در Coding Agent با مدارک واقعی پیش ببرید.  
۴. بعد از تصمیم‌های مهم، با پرامپت B و Skill `/to-spec` مشخصات قابل تست را آماده کنید؛ `/to-tickets` را برای برش‌های چندسشنی به‌کار برید.  
۵. هر Ticket را با `/implement` روی سورس موجود اجرا کنید؛ Test → Evidence → Diagnose → Fix → Regression. نتیجه‌ها را به پرامپت C برای بررسی Gate منتقل کنید.

**نکته:** LLM مشاور که Local را نمی‌بیند نمی‌تواند ادعای اجرای ابزار کند. خروجی Skill و Agent بدون Diff، Trace و Log نیز اثبات نیست. Skillها را بازنویسی نکنید؛ Context و قرارداد ورودی/خروجی بدهید.

## فرم ورودی (پر کنید؛ موارد نامعلوم را Unknown بگذارید)

```yaml
product_prompt:
  source: ""        # فایل/متن + نسخهٔ پرامپت واقعی Replit
  revision: ""
product_handoff:
  phase_2: ""
  prototype: ""
migration_handoff:
  document: ""
target:
  repository: ""
  commit: ""
  run_commands: ""  # فقط دستورهای مشاهده‌شده/تأییدشده
environment:
  test_url: ""
  mock_or_real: "Unknown"
  data_policy: ""
permissions:
  test_execution: "Unknown"
  code_changes: "Unknown"
  external_services: "Unknown"
scope:
  included_flows: []
  excluded_flows: []
owner_of_decisions: ""
```

## پرامپت A — آماده‌سازی Grill (مشاور، بدون اجرای کد)

```text
به‌عنوان مشاور تحلیل رفتار محصول عمل کن. ورودی من شامل پرامپت محصول‌محور واقعی Replit، خروجی طراحی، Prototype Handoff، Migration Handoff و Baseline گزارش‌شده توسط Local Coding Agent است.
وظیفه‌ات:
1) Flow Inventory با شناسه‌های FLOW/SCREEN/INT/AC موجود تهیه کن؛ شناسه یا جزئیات ناموجود را جعل نکن.
2) منابع «انتظار» و شواهد «رفتار مشاهده‌شده» را جدا ثبت کن.
3) فقط پرسش‌های تصمیمیِ مهم دربارهٔ تعارض انتظار/پیاده‌سازی، مرز Mock/Real، رفتار شکست، دادهٔ آزمایشی و دامنهٔ تست را مطرح کن؛ در هر نوبت حداکثر سه پرسش.
4) بعد از پاسخ‌ها یک Context Brief برای اجرای /grill-with-docs در Local Agent آماده کن که به فایل و شواهد واقعی ارجاع می‌دهد.
5) هیچ تست/سندی را به‌عنوان اجراشده گزارش نکن و تا قبل از تصمیم‌های حیاتی به /to-spec نرو.
اگر اطلاعات حیاتی نیست، Blocked/On Hold و مسیر دریافت اطلاعات را اعلام کن.
```

## پرامپت B — قرارداد Specification و Tickets

```text
گفت‌وگوی /grill-with-docs و تصمیم‌های تأییدشده تکمیل شده‌اند (اگر نشده، توقف کن).
با Local Coding Agent از Skill /to-spec برای تعریف سناریوهای E2E استفاده کن.
برای هر سناریو این فیلدها لازم است: E2E ID، FLOW/AC، نسخهٔ منبع انتظار، اولویت، Preconditions/Fixtures، گام‌های کاربر، Observable Assertions، Mock/Real boundary، Cleanup، نحوهٔ اجرا و شاهد شکست.
تمام Flowهای در دامنه پوشش و موارد استثنا با علت ثبت شوند؛ صرفاً رفتار کد فعلی را به‌عنوان انتظار محصول فرض نکن. برای تست‌های جزئی، سطح Component/Integration را در صورت مناسب بودن انتخاب کن.
پس از تأیید Spec، اگر کار چندسشنی است /to-tickets را اجرا کن: Ticketهای کوچکِ مبتنی بر Flow با AC، تست، ریسک و verification command بساز. تصمیم فنی بدون مشاهدهٔ Repo نده.
```

## پرامپت C — اجرای Ticket و گزارش شواهد

```text
تنها Ticket تأییدشدهٔ فعلی را با /implement روی revision مشخص سورس انجام بده. پیش از تغییر، تست مرتبط را اجرا و نتیجهٔ واقعی را ثبت کن (اگر امکانش نیست Blocked/Not Tested).
برای Fail ابتدا علت را به یکی از Product Defect، Test Defect، Environment/Flaky، Spec Ambiguity، Intended Mock، Missing Full-stack Dependency دسته‌بندی کن. نقص واقعی در دامنه را با تغییر حداقلی رفع کن؛ انتظار آزمون را فقط با تصمیم معتبر تغییر بده.
پس از Fix، تست هدف و Regression مرتبط را اجرا کن؛ برای هر اجرا command، environment، commit، exit status و مسیر artifact گزارش بده. بدون اجرای واقعی Passed اعلام نکن. تغییرات، محدودیت‌ها و تصمیم لازم بعدی را در پایان به شکل مستقل تحویل بده.
```

## قالب Flow Matrix

| FLOW | SCREEN/INT/AC | Expected source/revision | E2E | Scope | Mock/Real | Status | Evidence | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FLOW-?? | AC-?? | Unknown | E2E-?? | Pending | Unknown | Not Tested | — | — |

## قالب گزارش اجرای E2E

```text
Scenario ID:
FLOW / AC:
Repository + Commit:
Environment / Browser / Runtime:
Test command:
Test data / Fixture:
Executed at:
Result: Passed | Failed | Blocked | Not Tested
Evidence: trace / screenshot / log / CI link
Failure category (if any):
Change / PR / Ticket:
Regression run & result:
Remaining risk:
Reviewer / decision:
```

## Verification Gate و Handoff

قبل از پایان، Matrix را بررسی کنید: هیچ Flow در دامنه بدون نگاشت؛ هیچ Passed بدون شواهد؛ هیچ مورد Failed/Blocked/Not Tested بدون مالک و تصمیم. برای هر Test Defect و Flaky مسیر رسیدگی ثبت شود. Mock را از Backend واقعی تفکیک کنید.

```text
# Verified Frontend Baseline & Project Handoff
1. Baseline & Environment:
2. Product source revisions & authorized scope:
3. Flow ↔ AC ↔ E2E ↔ Ticket matrix:
4. Execution report and artifact links:
5. Fix/commit/review log:
6. Blocked, failed, flaky, not tested & remaining risks:
7. Full-stack backlog (not implemented in this phase):
8. Gate: Ready | Conditional | Blocked
9. Approval owner & date:
10. Next explicitly authorized step:
```

[بازگشت به راهنمای فاز ۰۴](phase-4.md)
