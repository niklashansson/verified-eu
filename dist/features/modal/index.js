"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/queryElement.ts
  function queryElement(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  // src/utils/queryElements.ts
  function queryElements(selector, parent) {
    return Array.from((parent || document).querySelectorAll(selector));
  }

  // src/features/modal/index.ts
  window.Webflow = window.Webflow || [];
  window.Webflow.push(() => {
    const componentEl = queryElement('[global-modal-element="component"]');
    if (!componentEl)
      return;
    const instance1Btns = queryElements('a[href="#popup-demo-form"]').map((el) => {
      return { el, i: 1 };
    });
    if (!instance1Btns.length)
      return;
    const allOpenBtns = [...instance1Btns];
    allOpenBtns.forEach(({ el, i }) => {
      el.setAttribute("href", "#");
      el.addEventListener("click", () => {
        openModal(componentEl, i);
      });
    });
  });
  function openModal(modalElement, modalContentIndex) {
    const closeButtons = queryElements('[global-modal-element="close"]', modalElement);
    if (!closeButtons.length)
      return;
    closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        closeModal(modalElement, closeButtons);
      });
    });
    modalElement.setAttribute("global-modal-active", `${modalContentIndex}`);
  }
  function closeModal(modalElement, closeButtons) {
    modalElement.setAttribute("global-modal-active", "");
    closeButtons.forEach((btn) => btn.removeEventListener("click", null));
  }
})();
//# sourceMappingURL=index.js.map
