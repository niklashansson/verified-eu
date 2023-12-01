import { loadElement } from '$utils/loadElement';
import { queryElements } from '$utils/queryElements';

window.Webflow = window.Webflow || [];

window.Webflow.push(() => {
  const instances: HTMLElement[] = queryElements('[nested-collection-element="target"]');
  if (!instances.length) return;

  instances.forEach((instance) => {
    const nestTarget = instance;

    const attributeValues = [
      'nested-collection-item-slug',
      'nested-collection-slug',
      'nested-collection-class',
    ].map((attribute) => nestTarget.getAttribute(attribute));

    const [collectionItemSlug, collectionSlug, className] = attributeValues;
    if (!collectionItemSlug || !collectionSlug || !className) return;

    loadElement(nestTarget, collectionSlug, collectionItemSlug, className);

    // const promise = new Promise((resolve, reject) => {
    //   loadElement(nestTarget, collectionSlug, collectionItemSlug, className)
    //     .then(() => resolve(true))
    //     .catch((error) => reject(error));
    // });

    // promise.then(() => restartWebflow()).catch((error) => console.error(error));
  });
});
