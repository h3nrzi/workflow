"use strict";

(() => {
  const input = document.querySelector("[data-prompt-input]");
  const previews = [...document.querySelectorAll("[data-prompt-preview]")];
  if (!input || !previews.length) return;
  const templates = new Map(previews.map(preview => [preview, preview.defaultValue]));

  function refresh() {
    for (const preview of previews) {
      const template = templates.get(preview);
      // A replacement callback preserves literal dollar patterns and whitespace.
      preview.value = preview.hasAttribute("data-uses-input")
        ? template.replace("{{INPUT}}", () => input.value)
        : template;
      document.getElementById(preview.dataset.status).textContent = "";
    }
  }

  function select(preview) {
    const details = preview.closest("details");
    if (details) details.open = true;
    preview.focus();
    preview.select();
  }

  for (const button of document.querySelectorAll("[data-copy]")) {
    button.addEventListener("click", async () => {
      const preview = document.getElementById(button.dataset.copy);
      const status = document.getElementById(preview.dataset.status);
      const copiedText = preview.value;
      button.disabled = true;
      status.textContent = "در حال کپی…";
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(copiedText);
        } else {
          select(preview);
          if (!document.execCommand("copy")) throw new Error("Clipboard unavailable");
          preview.setSelectionRange(0, 0);
          button.focus();
        }
        status.textContent = preview.value === copiedText
          ? "متن کپی شد؛ آن را در مقصد مورد نظر جای‌گذاری کن."
          : "نسخهٔ پیش از تغییر ورودی کپی شد؛ برای متن جدید دوباره کپی کن.";
      } catch (_) {
        select(preview);
        status.textContent = "کپی خودکار ممکن نبود؛ پیش‌نمایش باز و متن انتخاب شده است. آن را دستی کپی کن.";
      } finally {
        button.disabled = false;
      }
    });
  }
  input.addEventListener("input", refresh);
  refresh();
})();
