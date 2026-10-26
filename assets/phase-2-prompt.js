"use strict";
(() => {
  const input = document.getElementById("phase-two-handoff");
  const items = [
    {preview: "phase-two-advisor-preview",button:"phase-two-advisor-copy",status:"phase-two-advisor-status",notice:"پرامپت مشاور طراحی کپی شد؛ در سشن LLM اول اجرا کن.",usesInput:true},
    {preview: "phase-two-docs-preview",button:"phase-two-docs-copy",status:"phase-two-docs-status",notice:"پرامپت مستندسازی کپی شد؛ در پایان همان سشن طراحی اجرا کن.",usesInput:false}
  ].map(item=>({...item,previewElement:document.getElementById(item.preview),buttonElement:document.getElementById(item.button),statusElement:document.getElementById(item.status)}));
  if (!input || items.some(item=>!item.previewElement||!item.buttonElement||!item.statusElement)) return;
  for(const item of items)item.template=item.previewElement.defaultValue;
  function refresh(){
    for(const item of items){
      item.previewElement.value=item.usesInput?item.template.replace("{{DISCOVERY_HANDOFF}}",input.value.trim()):item.template;
      item.statusElement.textContent="";
    }
  }
  function select(preview){
    const details=preview.closest("details");
    if(details)details.open=true;
    preview.focus();preview.select();
  }
  async function copy(item){
    try{
      if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(item.previewElement.value);
      else{
        select(item.previewElement);
        if(!document.execCommand("copy"))throw Error("Clipboard failed");
        item.previewElement.setSelectionRange(0,0);
        item.buttonElement.focus();
      }
      item.statusElement.textContent=item.notice;
    }catch(_){
      select(item.previewElement);
      item.statusElement.textContent="کپی خودکار ممکن نبود؛ متن را انتخاب کرده‌ام تا دستی کپی کنی.";
    }
  }
  input.addEventListener("input",refresh);
  for(const item of items)item.buttonElement.addEventListener("click",()=>copy(item));
  refresh();
})();