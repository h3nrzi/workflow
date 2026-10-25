"use strict";

(() => {
  const requestInput = document.getElementById("phase-zero-client-request");
  const preview = document.getElementById("phase-zero-prompt-preview");
  const copyButton = document.getElementById("phase-zero-copy");
  const status = document.getElementById("phase-zero-copy-status");

  if (!requestInput || !preview || !copyButton || !status) return;

  const template = preview.defaultValue;
  const missingRequest = "درخواست مشتری هنوز ارائه نشده است. پیش از تولید پرامپت اجرایی، ابتدا درخواست خام را از توسعه‌دهنده بخواه.";

  function updatePreview() {
    const clientRequest = requestInput.value.trim();
    preview.value = template.replace("{{CLIENT_REQUEST}}", clientRequest || missingRequest);
    status.textContent = "";
  }

  function selectPreview() {
    const panel = preview.closest("details");
    if (panel) panel.open = true;
    preview.focus();
    preview.select();
  }

  async function copyPrompt() {
    const text = preview.value;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        selectPreview();
        if (!document.execCommand("copy")) {
          throw new Error("Clipboard unavailable");
        }
        preview.setSelectionRange(0, 0);
        copyButton.focus();
      }
      status.textContent = "پرامپت مرحلهٔ اول کپی شد. حالا آن را به LLM دلخواهت بده.";
    } catch (_error) {
      selectPreview();
      status.textContent = "کپی خودکار ممکن نبود؛ متن بالا انتخاب شده و می‌توانی آن را دستی کپی کنی.";
    }
  }

  requestInput.addEventListener("input", updatePreview);
  copyButton.addEventListener("click", copyPrompt);
  updatePreview();
})();
