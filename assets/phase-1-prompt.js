"use strict";

(() => {
  const input = document.getElementById("phase-one-handoff-input");
  const advisor = {
    preview: document.getElementById("phase-one-advisor-preview"),
    button: document.getElementById("phase-one-advisor-copy"),
    status: document.getElementById("phase-one-advisor-status"),
    success: "پرامپت مشاور کپی شد؛ آن را در یک سشن مستقل اجرا کن."
  };
  const docs = {
    preview: document.getElementById("phase-one-docs-preview"),
    button: document.getElementById("phase-one-docs-copy"),
    status: document.getElementById("phase-one-docs-status"),
    success: "پرامپت مستندسازی کپی شد؛ آن را در پایان همان سشن مشاور اجرا کن."
  };

  if (!input || [advisor, docs].some(item => !item.preview || !item.button || !item.status)) return;

  const advisorTemplate = advisor.preview.defaultValue;
  const docsTemplate = docs.preview.defaultValue;

  function refresh() {
    advisor.preview.value = advisorTemplate.replace("{{PROJECT_HANDOFF}}", input.value.trim());
    docs.preview.value = docsTemplate;
    advisor.status.textContent = "";
    docs.status.textContent = "";
  }

  function selectPreview(preview) {
    const disclosure = preview.closest("details");
    if (disclosure) disclosure.open = true;
    preview.focus();
    preview.select();
  }

  async function copy(item) {
    const value = item.preview.value;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        selectPreview(item.preview);
        if (!document.execCommand("copy")) throw new Error("Clipboard not available");
        item.preview.setSelectionRange(0, 0);
        item.button.focus();
      }
      item.status.textContent = item.success;
    } catch (_error) {
      selectPreview(item.preview);
      item.status.textContent = "کپی خودکار ممکن نبود؛ متن پرامپت انتخاب شده تا دستی کپی کنی.";
    }
  }

  input.addEventListener("input", refresh);
  advisor.button.addEventListener("click", () => copy(advisor));
  docs.button.addEventListener("click", () => copy(docs));
  refresh();
})();
