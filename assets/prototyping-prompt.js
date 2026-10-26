"use strict";
(() => {
  const packageInput=document.getElementById("prototype-package-input");
  const start=document.getElementById("prototype-start-preview");
  const startCopy=document.getElementById("prototype-start-copy");
  const startStatus=document.getElementById("prototype-start-status");
  const finish=document.getElementById("prototype-finish-preview");
  const finishCopy=document.getElementById("prototype-finish-copy");
  const finishStatus=document.getElementById("prototype-finish-status");
  if(!packageInput||!start||!startCopy||!startStatus||!finish||!finishCopy||!finishStatus)return;
  const base=start.defaultValue, end=finish.defaultValue;
  const playbook="Tool: Replit\nStatus: Experimental — تجربهٔ اولیه در پروژهٔ نمونهٔ TaskFlow؛ دستورها هنوز به‌عنوان فرایند قطعی و تکرارپذیر اعتبارسنجی نشده‌اند.\n\nهدف مسیر:\n- تولید یک پروتوتایپ فرانت‌اند قابل اجرا و قابل تعامل در Replit، بر اساس اسناد LLM 1.\n- در صورت تعیین‌شدن نوع خروجی متفاوت، اول دامنه را با توسعه‌دهنده روشن کن.\n\nدرس‌های تجربی TaskFlow و راهبرد اولیه (نیازمند بازآزمایی):\n- درخواست اولیه را محصول‌محور بنویس: Product Vision، کاربران هدف، هدف نسخه، صفحات و سناریوها، تعاملات معنی‌دار، کیفیت UX و مرز موارد نمایشی.\n- به Replit برای انتخاب فناوری/ساختار مناسب آزادی معقول بده؛ فناوری یا پوشه‌بندی را بدون نیاز محصول تحمیل نکن.\n- برای هر صفحه و قابلیت اصلی، رفتار قابل مشاهده و ارتباط با دادهٔ نمونه را بخواه؛ نمایش صرف کارت‌های تزئینی کافی نیست.\n- در صورت خارج‌بودن از دامنه، اتصال پایگاه داده، احراز هویت، پرداخت، ایمیل و همگام‌سازی Production را درخواست نکن؛ صفحات نمایشی باید صادقانه شبیه‌سازی معرفی شوند.\n- دادهٔ دموی سازگار بین نماها، فرم‌های کارا، واکنش‌گرایی، وضعیت خالی/خطا و چرخهٔ کامل سناریوهای اصلی را بخواه.\n- عبارت «Start building» یا انتخاب خودکار فناوری فقط وقتی کاربرد دارد که از ابزار مورد استفاده و مجوز اجرای نمونه مطمئنیم. قابلیت‌ها و نام حالت‌های محصول ممکن است تغییر کنند؛ قبل از ادعای ویژگی جدید آنها را راستی‌آزمایی کن.\n\nخروجی مورد انتظار پرامپت اولیه برای Replit:\nPRODUCT VISION\nPROTOTYPE GOAL & SCOPE\nTARGET USERS & TOP USER JOURNEYS\nSCREENS & NAVIGATION\nINTERACTIONS, VALIDATION & DEMO DATA\nDESIGN DIRECTION & RESPONSIVENESS\nTECHNICAL FREEDOM & EXPLICIT NON-GOALS\nACCEPTANCE SCENARIOS & EXPECTED DELIVERY\nHONEST HANDOFF (built, simulated, missing)\n\nچرخهٔ اصلاح:\n- ابتدا نتیجهٔ واقعی Replit را از من بخواه؛ بدون لینک/اسکرین‌شات/فایل/گزارش آزمون، ادعای بررسی نکن.\n- برای هر ایراد فقط درخواست اصلاح محدود و مرتبط با AC تولید کن. نمونه: INT-07 با AC-04 ناسازگار است؛ وضعیت و آمار مرتبط را پس از جابه‌جایی تسک هماهنگ کن.\n- هر دور فقط با شواهد جدید اعتبارسنجی کن؛ عملکرد تولیدی و امنیت Production را از ظاهر موفق پروتوتایپ نتیجه نگیر.\n- در پایان خروجی قابل اجرا/کد، شبیه‌سازی‌ها و موارد خارج از دامنه را جدا ثبت کن.\n";
  function update(){
    start.value=base.replace("{{PRODUCT_PACKAGE}}",packageInput.value.trim()).replace("{{TOOL_PLAYBOOK}}",playbook);
    finish.value=end;
    startStatus.textContent="";finishStatus.textContent="";
  }
  function select(preview){
    const details=preview.closest("details");
    if(details)details.open=true;
    preview.focus();preview.select();
  }
  async function copy(preview,button,status,success){
    try{
      if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(preview.value);
      else{
        select(preview);
        if(!document.execCommand("copy"))throw Error("Clipboard denied");
        preview.setSelectionRange(0,0);button.focus();
      }
      status.textContent=success;
    }catch(_){
      select(preview);status.textContent="کپی خودکار ممکن نبود؛ متن انتخاب شده است تا دستی کپی کنی.";
    }
  }
  packageInput.addEventListener("input",update);
  startCopy.addEventListener("click",()=>copy(start,startCopy,startStatus,"پرامپت شروع LLM 2 با Playbook Replit کپی شد."));
  finishCopy.addEventListener("click",()=>copy(finish,finishCopy,finishStatus,"پرامپت گزارش پایان کپی شد؛ در همان سشن LLM 2 اجرا کن."));
  update();
})();