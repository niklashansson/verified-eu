"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/loadElement.ts
  async function loadElement(nestTarget, collectionSlug, collectionItemSlug, className) {
    jQuery(function() {
      const target = jQuery(nestTarget);
      target.load(`/${collectionSlug}/${collectionItemSlug} .${className}`, function() {
        target.addClass("hide");
        target.fadeIn();
      });
    });
  }

  // src/utils/queryElements.ts
  function queryElements(selector, parent) {
    return Array.from((parent || document).querySelectorAll(selector));
  }

  // src/features/nestedCollection/index.ts
  window.Webflow = window.Webflow || [];
  window.Webflow.push(() => {
    const instances = queryElements('[nested-collection-element="target"]');
    if (!instances.length)
      return;
    instances.forEach((instance) => {
      const nestTarget = instance;
      const attributeValues = [
        "nested-collection-item-slug",
        "nested-collection-slug",
        "nested-collection-class"
      ].map((attribute) => nestTarget.getAttribute(attribute));
      const [collectionItemSlug, collectionSlug, className] = attributeValues;
      if (!collectionItemSlug || !collectionSlug || !className)
        return;
      loadElement(nestTarget, collectionSlug, collectionItemSlug, className);
    });
  });
})();
//# sourceMappingURL=index.js.map
