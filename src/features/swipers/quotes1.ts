import { Swiper } from 'swiper';
import { Controller, Navigation, Pagination } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types/swiper-options';

import { loadElement } from '$utils/loadElement';
import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

window.Webflow = window.Webflow || [];

window.Webflow.push(async () => {
  const attribute = '[swiper="quotes1"]';
  const requiredElements = ['swiper', 'quotes1_pagination_list'];

  loadQuotesElements();

  // swiper instances
  queryElements(attribute).map((instance) => {
    const [swiperEl, paginationList] = requiredElements.map((el) =>
      queryElement(`.${el}`, instance)
    );
    if (!swiperEl || !paginationList) return;

    const paginationItems = Array.from(paginationList.children).map((el) => {
      const bulletEl = el.firstElementChild;
      if (!bulletEl) return;

      return el.firstElementChild.outerHTML;
    });

    // options passed to swiper initatior
    const options: SwiperOptions = {
      modules: [Pagination, Controller, Navigation],
      speed: 1000,
      spaceBetween: 48,
      slidesPerView: 1,
      pagination: {
        el: paginationList,
        clickable: true,
        bulletClass: 'quotes1_pagination_bullet',
        bulletActiveClass: 'is-active',
        renderBullet: function (index: number, className: string) {
          return `<div class="${className}">${paginationItems[index]}</div>`;
        },
      },
      navigation: {
        prevEl: '.quotes1_arrow_prev',
        nextEl: '.quotes1_arrow',
      },
    };

    new Swiper(swiperEl, options);
  });
});

async function loadQuotesElements() {
  const instances: HTMLElement[] = queryElements('[nested-collection-element="quotes-1-target"]');
  if (!instances.length) {
    return;
  }

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
  });
}
