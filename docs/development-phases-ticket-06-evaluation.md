# Ticket 06 — توسعه و اتصال تدریجی: راهنمای ارزیابی

تاریخ: 2026-10-27. شاخه: `codex/ticket-06`؛ مبنا: integration commit `1990e22`. موضوع این تیکت صفحات راهنماست؛ هیچ اپلیکیشن TaskFlow یا بک‌اند مشتری با این تغییر ساخته یا ارزیابی نشده است. **پذیرش انسانی pending است** تا کاربر مشاهداتش را گزارش کند.

## شاهد واقعی preflight

- مهارت‌های implement-spec، tdd و ui-ux-pro-max و قرارداد tracker/domain/مستندات خوانده شدند. seamهای صفحات عمومی قبلاً با کاربر توافق شده‌اند؛ تأیید دوباره لازم نبود. بدون framework یا dependency جدید.
- در شروع، دو صفحهٔ phase-7 و کارگاه آن untracked و ناتمام بودند؛ محتوای قبلی حفظ و تکمیل شد. شاخه بر `1990e22` قرار داشت. این شاهد، ادعای red قبل از ساخت تمام محتوای قبلی نیست.
- چرخهٔ red/green برای ناوبری عمومی: بررسی برچسب قابل خواندن sidebar با `AssertionError: Repeated phase label in public sidebar` شکست خورد؛ متن تکراری «فاز 7: فاز ۷:» اصلاح شد و همان بررسی در audit سبز شد.
- `python3 /tmp/ticket06-public-page-audit.py` در همین worktree اجرا شد: دو صفحه با یک H1، headingهای بدون پرش، IDهای یکتا، label و targetهای input/copy/status معتبر، previewهای readonly و statusهای `aria-live=polite` پاس شدند. **۱۰۰ ارجاع محلی** بررسی شد؛ فقط مقصدهای `phases/phase-5.html` و `phases/phase-8.html` در این checkpoint منتظر ادغام تیکت‌های موازی‌اند. ادعای اعتبارسنجی کامل لینک‌های integration تا آن ادغام نشده است. این فایل ابزار موقت بررسی جلسه است و dependency محصول نیست؛ برای بازتولید مستقل، لینک‌های جدول زیر را در سرور integration دنبال کن.
- متن parseشدهٔ هر شش textarea با منبع تأییدشده در `start-prompts.md` و `continuation-prompts.md` مقایسه شد: شروع، spec، tickets، اجرای کل، یک تیکت و ارزیابی، هر شش **prefix دقیقاً یکسان** دارند. شش binding مستقل ورودی و اسکریپت مشترک نسخه‌دار استفاده می‌شود. اطلاعات تکمیلی پس از متن مصوب قرار می‌گیرد.
- `node --check assets/prompt.js` و `git diff --check` پاس شدند. اسکریپت مشترک در این تیکت تغییر نکرده است.
- توصیهٔ مرتبط ui-ux جست‌وجو شد: keyboard navigation و skip links برای وب؛ صفحات از skip link، کنترل‌های بومی و فهرست واکنش‌گرای مشترک استفاده می‌کنند. این مشاهدهٔ ساختاری جای تست بصری یا صفحه‌کلید نیست.
- بررسی محتوایی: FLOW-01، SCREEN-01/02 و INT-01/02 حفظ شده‌اند؛ CP-2 مسدود، CP-3 تا CP-6 شرطی/اجرانشده و CP-7 اجرا‌نشده است. AC-01/02 و TEST-01 Not Tested؛ AC-03/04/05 و DEC-01/02 پیشنهادی‌اند. نمونه‌های شکست آموزشی هستند و نتیجهٔ اجرای واقعی نیستند.
- clipboard واقعی، ورودی فارسی/خاص، استقلال در مرورگر، شکست کنترل‌شده، صفحه‌کلید و desktop/tablet/mobile در checkpoint این تیکت **منتظر QA یکپارچهٔ هماهنگ‌کننده** هستند؛ از static audit نتیجهٔ Passed برایشان استنباط نشده است. code review نهایی integration نیز باقی است. اجرای این فرمان‌ها در Agent و اتصال محصول مشتری **Not Tested** هستند.

## ارزیابی feature-by-feature قابل تکرار

سرور موجود integration را استفاده کن؛ اگر وجود ندارد، در checkout integration فرمان `python3 -m http.server 8000 --bind 127.0.0.1` را اجرا کن. [آموزش فاز هفت](http://127.0.0.1:8000/phases/phase-7.html) و [کارگاه](http://127.0.0.1:8000/phases/workshops/phase-7.html) را باز کن. ورودی‌ها آموزشی و غیرحساس‌اند.

| قابلیت / ورودی | اقدام | انتظار | checkpoint / وضعیت ارزیابی انسانی |
| --- | --- | --- | --- |
| ورود و مرجع؛ TaskFlow با سورس ناموجود | `route` و `entry-gate` را بخوان؛ به فازهای ۴، ۵ و ۶ برو و بازگرد | نبود سورس و قرارداد نهایی مانع اجرای اتصال بماند؛ تصمیم پیشنهادی قطعی نشود؛ طراحی بک‌اند به ساخت آن تعبیر نشود | CP-2 → CP-6، pending |
| انتخاب جریان اول؛ ثبت، تعیین مسئول، انجام | `first-flow` و جدول را دنبال کن؛ دلیل انتخاب را با ارزش کاربر و ریسک اتصال مقایسه کن | FLOW-01 یک کار کامل از فرم تا API/دیتابیس واقعی و بازخوانی است؛ تکمیل تمام بک‌اند پیش‌نیازش نیست؛ شکست ناپدیدشدن داده پس از reload مانع است | FLOW-01 / INT-01/02، pending |
| ابزار دادهٔ سرور؛ شمارندهٔ کهنه | `server-data` را بخوان؛ گزینهٔ حفظ ابزار را با تغییر مقایسه کن | تصمیم قبل از اتصال با API واقعی، دلیل/هزینه/تست روشن شود؛ cache/invalidation، خطا و rollback متناسب بررسی شوند؛ کتابخانهٔ تازه تحمیل نشود | تصمیم ابزار / AC-01، pending |
| جایگزینی شبیه‌سازی؛ API قطع | جدول `build-slice` و شکست fallback را بخوان | زمان حذف آرایه، پاسخ ثابت، تغییر محلی، نقش نمایشی روشن؛ قطع API موفقیت نسازد؛ mock آزمون جدا از مسیر واقعی باشد | جریان اول و باقی برش‌های MVP، pending |
| تست مکمل و کیفیت | `verification` را با ACهای موجود مقایسه کن | E2E همان رفتار مصوب روی محصول متصل؛ قواعد و API/دیتابیس، مجوز، اعتبارسنجی، تغییر داده و شکست متناسب پوشش یابند؛ همهٔ توابع داخلی الزام نشود؛ امنیت/کارایی/کیبورد/موبایل تا انتشار عقب نیفتد | TEST-01 / AC-01/02، pending |
| تعارض و نیاز تازه | مثال تعارض `assigneeId` و ACهای پیشنهادی را دنبال کن | تعارض معماری به فاز ۶، نیاز تازه به صاحب MVP برگردد؛ AC-03/04/05 بدون تصویب Passed یا رفتار مصوب نشوند | DEC-01/02، pending |
| تحویل مستقل از چت | `handoff` و `exit-gate` را بخوان؛ فرض کن چت قبلی در دسترس نیست | CP-7 شامل نسخه، spec/tickets، تصمیم، شاهد واقعی، محیط و مسائل باز است؛ انتقال نقص تصمیم/اثر/مسئول/زمان دارد؛ طراحی، اجرای واقعی و پذیرش انسانی جدا باشند | CP-7 → فاز ۸، pending |
| هر شش فرمان با ورودی خالی | هر preview را باز کن؛ مهارت همراه و متن را بخوان، کپی و در ویرایشگر ساده paste کن | متن کامل بدون `{{INPUT}}`؛ طراحی اجرا نکند؛ spec، tickets، کل فاز، یک تیکت و ارزیابی جدا باشند؛ مسیر مخزن اجباری نباشد | start/spec/tickets/execute/one/evaluate، pending |
| ورودی فارسی چندخطی و خاص | فقط start را با `سارا <test> & "نمونه"` و خط دوم `$& $$ $1 </textarea>` پر کن؛ در spec متن متفاوت بنویس؛ سپس هر دو را پاک کن | ورودی عیناً دادهٔ همان preview و clipboard باشد؛ HTML اجرا نشود؛ پنج فرمان دیگر تغییر نکنند؛ پاک‌کردن به متن خالی معتبر برگردد | استقلال شش ورودی، pending |
| شکست کپی و مسیر دستی | در محیط QA مجزا clipboard را کنترل‌شده رد کن؛ کپی را بزن | پیام شکست صادقانه، preview باز و متن انتخاب شود؛ کنترل دوباره فعال و کپی دستی ممکن باشد؛ شکست کنترل‌شده جدا از permission denial واقعی ثبت شود | status/selection، pending |
| لینک و fragment و صفحه‌کلید | تمام لینک‌های آموزش/کارگاه، TOC و رفت‌وبرگشت فاز ۶ و ۸ را دنبال کن؛ فقط با Tab/Shift+Tab/Enter/Space کنترل‌ها را استفاده کن | مقصد واقعی و heading درست؛ focus نمایان، ترتیب منطقی، بدون گیر؛ جزئیات و کپی قابل دسترس؛ summary فهرست موبایل کار کند | navigation / keyboard، pending |
| سه عرض مستقل | هر دو صفحه را در ۱۴۴۰، ۷۶۸ و ۳۹۰ پیکسل بصری بررسی کن؛ جدول‌ها و previewهای بلند را پیمایش کن | متن RTL خوانا، کنترل‌ها قابل استفاده، بدون overflow صفحه؛ جدول داخل محفظه پیمایش کند؛ فهرست موبایل بازوبسته شود | desktop/tablet/mobile، pending |

برای هر ردیف نسخه/commit، انتظار، مشاهده، شاهد و Passed / Failed / Blocked / Not Tested ثبت کن. نبود اجرای واقعی یا نبود پیش‌نیاز را نتیجهٔ موفقیت معرفی نکن. رفع نقص مانع و تکرار بررسی لازم است؛ پذیرش انسانی تا گزارش کاربر pending می‌ماند.

**نخستین اقدام کاربر:** آموزش فاز هفت، بخش «جریان اول» را باز کن و توضیح بده چرا FLOW-01 به‌عنوان اولین برش انتخاب شده؛ سپس preview شروع کارگاه را با ورودی خاص بالا بررسی کن و مشاهده‌ات را ثبت کن.


## Integrated checkpoint — 2026-10-27

Implementation is resolved on `codex/workflow-development-phases`, functional commit `9273de8`. See [the integrated evaluation](development-phases-evaluation.md) for this ticket’s reproducible inputs/actions/expected checkpoints and the final browser evidence: all47 copy controls, controlled recovery, responsive checks, keyboard flow and separate Standards/Spec review. Earlier pending notes above describe that worktree checkpoint; final integration checks are now recorded separately. Human acceptance remains pending; actual prompt execution in an AI agent and customer-product deployment remain Not Tested.
