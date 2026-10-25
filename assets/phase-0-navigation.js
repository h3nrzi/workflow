"use strict";

(() => {
  const tocLinks = [...document.querySelectorAll('.toc-links a[href^="#"], .mobile-toc-links a[href^="#"]')];
  const sections = [...document.querySelectorAll(".document-section[id], .handoff-panel[id], .simulator-panel[id]")];
  const currentLabel = document.getElementById("mobile-toc-current");
  const progressBar = document.getElementById("toc-progress-bar");
  const mobileMenu = document.getElementById("mobile-toc");
  if (!tocLinks.length || !sections.length) return;

  let scheduled = false;

  function updateNavigation() {
    let activeId = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 145) activeId = section.id;
    }

    for (const link of tocLinks) {
      if (link.getAttribute("href") === "#" + activeId) {
        link.setAttribute("aria-current", "location");
        if (currentLabel) currentLabel.textContent = link.textContent.trim();
      } else {
        link.removeAttribute("aria-current");
      }
    }

    if (progressBar) {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const percent = total > 0 ? Math.max(0, Math.min(100, window.scrollY / total * 100)) : 100;
      progressBar.style.width = percent.toFixed(1) + "%";
    }
    scheduled = false;
  }

  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateNavigation);
  }

  if (mobileMenu) {
    mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", () => { mobileMenu.open = false; });
    });
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("hashchange", scheduleUpdate);
  updateNavigation();
})();
