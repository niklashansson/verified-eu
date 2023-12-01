// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type * as $ from 'jquery';

/**
 *
 * @param nestTarget Element target where extracted element will be placed
 * @param collectionSlug Slug of Webflow Collection List
 * @param collectionItemSlug Slug of the Webflow Collection Item
 * @param className Classname of element that will be extracted
 */

export async function loadElement(
  nestTarget: HTMLElement,
  collectionSlug: string,
  collectionItemSlug: string,
  className: string
) {
  jQuery(function () {
    const target = jQuery(nestTarget);
    target.load(`/${collectionSlug}/${collectionItemSlug} .${className}`, function () {
      target.addClass('hide');
      target.fadeIn();
    });
  });
}
