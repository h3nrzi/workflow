"use strict";

(() => {
  // Progressive enhancement: all destinations remain visible without JavaScript.
  const sidebar = document.querySelector(".sidebar");
  const sidebarInner = document.querySelector(".sidebar-inner");
  if (sidebar && sidebarInner) {
    sidebarInner.id = "site-navigation";
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "site-menu-toggle";
    toggle.setAttribute("aria-controls", sidebarInner.id);
    toggle.setAttribute("aria-expanded", "false");
    const sprite = new URL("icons.svg", document.currentScript.src);
    const createIcon = (name, className = "") => {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "icon " + className);
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
      svg.setAttribute("width", "24");
      svg.setAttribute("height", "24");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      use.setAttribute("href", sprite.href + "#" + name);
      svg.append(use);
      return svg;
    };
    const label = document.createElement("span");
    label.textContent = "فهرست راهنما";
    toggle.append(createIcon("menu"), label, createIcon("chevron", "site-menu-chevron"));
    sidebar.insertBefore(toggle, sidebarInner);
    sidebar.dataset.collapsible = "true";
    const setExpanded = expanded => {
      toggle.setAttribute("aria-expanded", String(expanded));
      sidebar.dataset.expanded = String(expanded);
    };
    toggle.addEventListener("click", () => {
      setExpanded(toggle.getAttribute("aria-expanded") !== "true");
    });
    sidebar.addEventListener("keydown", event => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setExpanded(false);
        toggle.focus();
      }
    });
  }

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
    mobileMenu.addEventListener("keydown", event => {
      if (event.key === "Escape" && mobileMenu.open) {
        mobileMenu.open = false;
        mobileMenu.querySelector("summary").focus();
      }
    });
    // Close the sticky disclosure before keyboard focus moves into the article.
    mobileMenu.addEventListener("focusout", event => {
      if (event.relatedTarget && !mobileMenu.contains(event.relatedTarget)) mobileMenu.open = false;
    });
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("hashchange", scheduleUpdate);
  updateNavigation();
})();
