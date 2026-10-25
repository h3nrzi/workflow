"use strict";

(() => {
  const requestInput = document.getElementById("phase-zero-client-request");
  const items = [
    {
      preview: document.getElementById("phase-zero-prompt-preview"),
      button: document.getElementById("phase-zero-copy"),
      status: document.getElementById("phase-zero-copy-status"),
      message: "پرامپت تحلیلگر کپی شد. آن را در سشن تحلیلگر اجرا کن."
    },
    {
      preview: document.getElementById("mock-client-prompt-preview"),
      button: document.getElementById("mock-client-copy"),
      status: document.getElementById("mock-client-copy-status"),
      message: "پرامپت کارفرمای فرضی کپی شد. آن را در سشن دوم اجرا کن."
    }
  ];

  if (!requestInput || items.some(({preview, button, status}) => !preview || !button || !status)) return;

  for (const item of items) {
    item.template = item.preview.defaultValue;
  }

  function updatePreviews() {
    const input = requestInput.value.trim();
    for (const item of items) {
      item.preview.value = item.template.replace("{{CLIENT_REQUEST}}", input);
      item.status.textContent = "";
    }
  }

  function selectPreview(preview) {
    const details = preview.closest("details");
    if (details) details.open = true;
    preview.focus();
    preview.select();
  }

  async function copyPrompt(item) {
    const text = item.preview.value;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        selectPreview(item.preview);
        if (!document.execCommand("copy")) throw new Error("Clipboard unavailable");
        item.preview.setSelectionRange(0, 0);
        item.button.focus();
      }
      item.status.textContent = item.message;
    } catch (_error) {
      selectPreview(item.preview);
      item.status.textContent = "کپی خودکار ممکن نبود؛ متن بالا انتخاب شده و می‌توانی آن را دستی کپی کنی.";
    }
  }

  requestInput.addEventListener("input", updatePreviews);
  for (const item of items) {
    item.button.addEventListener("click", () => copyPrompt(item));
  }
  updatePreviews();
})();
