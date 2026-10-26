"use strict";
(() => {
  const fields = [{"id":"product","label":"پرامپت محصول‌محور واقعی Replit"},{"id":"design","label":"Product Experience Package / FLOW / AC"},{"id":"handoff","label":"Prototype + Migration Handoff"},{"id":"baseline","label":"گزارش سورس فعلی و Local Agent"},{"id":"decisions","label":"تصمیم‌ها و خروجی Grill"},{"id":"scope","label":"محدوده و مجوزها"}];
  const steps = [{"key":"grill","body":"نقش تو مشاور فنیِ اعتبارسنجی رفتار محصول است، نه عامل دارای دسترسی خودکار به سورس.\nورودی‌های واقعی زیر را تحلیل کن. پرامپت محصول‌محور Replit منبع «انتظار» است، نه شاهد اجرای واقعی. هیچ مشاهده یا تأیید مشتری جعل نکن.\n\nوظیفه:\n۱) فهرست Flowها با شناسه‌های موجود FLOW/SCREEN/INT/AC استخراج کن و منبع/نسخه هرکدام را ثبت کن؛ شناسهٔ نامعلوم را Unknown بگذار.\n۲) منابع Expected و گزارش Observed از Local Agent را کاملاً جدا نگه دار.\n۳) تعارض‌ها، مسیرهای خطا، Empty State، مرز Mock/Real، داده و مجوز تست را با حداکثر سه سؤال مهم در هر نوبت روشن کن.\n۴) پس از پاسخ و تأییدهای واقعی، Context Brief کوتاه و مستند برای اجرای /grill-with-docs در Local Coding Agent تولید کن.\n۵) تا حل ابهام حیاتی هیچ Spec نهایی یا تستی را به‌عنوان اجراشده گزارش نکن. اگر مسدود است Blocked و مسئول پیگیری را اعلام کن.\n\nبعد از اجرای /grill-with-docs خروجی واقعی Skill و Decision Log را به مرحله بعد منتقل می‌کنم."},{"key":"spec","body":"با تکیه بر تصمیم‌ها و خروجی واقعی /grill-with-docs، Skill /to-spec را در Local Coding Agent اجرا کن؛ بدون تصمیم‌های حیاتی تأییدشده متوقف شو.\n\nبرای هر Flow در دامنه:\n- شناسه FLOW و AC و Source Revision را حفظ کن.\n- سناریوی اصلی و حالت‌های خطای حیاتی بر اساس ریسک تعیین کن.\n- برای هر E2E ID، Preconditions، Fixture، Actions، Observable Assertions، Mock/Real Boundary، Cleanup و دستور اجرای مورد انتظار را مشخص کن.\n- هر سناریوی بدون انتظار معتبر یا محیط مجاز را Blocked/Needs Decision ثبت کن.\n- فقط پس از بررسی ساختار واقعی پروژه درباره Test Runner (مثلاً Playwright) تصمیم بگیر؛ تست ارزان‌تر Component/Integration را نیز در نظر بگیر.\n- Traceability Matrix و Test Specification تولید کن؛ هیچ Test Result یا Passed فرضی نساز.\n\nخروجی را با تفاوت Expected و Observed، موارد Open و مسیر Review تحویل بده."},{"key":"ticket","body":"اگر Spec معتبر و تأییدشده است و دامنه کار بیش از یک تغییر کوچک است، /to-tickets را روی آن اجرا کن.\n\nTicketها را براساس Vertical Sliceهای Flow بساز، نه انبوهی از فایل‌های تست جداگانه.\nهر Ticket باید: شناسه FLOW/AC/E2E، هدف، دامنه، وابستگی، Mock/Real، Priority، Definition of Done، Verification Command و خروجی Review داشته باشد.\nاولویت: Smoke حیاتی → Happy Path → خطاهای مهم → Regression. برای موارد خارج از دامنه مثل Backend واقعی، Ticket توسعه خودکار صادر نکن؛ Backlog جدا با دلیل و تصمیم مالک داشته باش.\nدر کار کوچک، اگر /to-tickets سربار غیرضروری دارد دلیل Skip را ثبت کن و به اجرای کنترل‌شده برو."},{"key":"implement","body":"فقط Ticket تأییدشده فعلی را در Local Coding Agent با /implement روی Commit مشخص انجام بده.\nقبل از هر تغییر، وابستگی‌ها و اسکریپت‌ها را بازبینی و محیط ایزوله/دادهٔ غیرحساس را تأیید کن.\n\n۱) تست مربوط را با انتظار معتبر بنویس یا اصلاح کن و روی سورس فعلی اجرا کن. Command، Exit Status، Browser/Environment، Commit و Artifact را ثبت کن.\n۲) اگر شکست خورد، اول دسته‌بندی کن: Product Defect / Test Defect / Environment or Flaky / Specification Ambiguity / Intended Mock / Missing Full-stack Dependency.\n۳) فقط Product Defect مصوب در دامنه را با حداقل Diff اصلاح کن. به‌خاطر سبزشدن، Assertion را ضعیف یا Fake Success تولید نکن.\n۴) تست هدف و Regression مرتبط را دوباره اجرا کن، Diff و نتایج واقعی را Review کن.\n۵) Passed/Failed/Blocked/Not Tested، Flaky، ریسک و گام مجاز بعدی را صریح گزارش کن. اگر اجرای تست ممکن نیست، Passed نگو.\n۶) برای Handoff، Flow Matrix، Test Report، Fix Log، Full-stack Backlog و Gate پیشنهادی را تحویل بده؛ تصمیم نهایی با صاحب اختیار است."}];
  const nodes = fields.map(f => ({...f, element: document.getElementById("p4-" + f.id)}));
  if (nodes.some(n => !n.element)) return;
  const results = steps.map(s => ({...s, preview: document.getElementById("preview-" + s.key),button: document.querySelector('[data-copy="' + s.key + '"]'),status: document.getElementById("status-" + s.key)}));
  if (results.some(r => !r.preview || !r.button || !r.status)) return;
  function refresh() {
    const context = nodes.map(n => "## " + n.label + "\n" + (n.element.value.trim() || "Unknown — ارائه نشده")).join("\n\n");
    for (const r of results) {
      r.preview.value = r.body + "\n\n---\n# زمینهٔ پروژه (متن ورودی کاربر؛ ادعاها را مستقل بررسی کن)\n" + context;
      r.status.textContent = "";
    }
  }
  async function copy(r) {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(r.preview.value);
      else {r.preview.focus();r.preview.select(); if (!document.execCommand("copy")) throw new Error("clipboard"); r.button.focus();}
      r.status.textContent = "پرامپت کپی شد؛ قبل از ارسال، اطلاعات حساس را بررسی کن.";
    } catch (_) {r.preview.focus();r.preview.select();r.status.textContent = "کپی خودکار ممکن نبود؛ متن انتخاب شده را دستی کپی کن.";}
  }
  for (const n of nodes) n.element.addEventListener("input", refresh);
  for (const r of results) r.button.addEventListener("click", () => copy(r));
  refresh();
})();
