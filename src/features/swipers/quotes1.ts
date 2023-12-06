import { Swiper } from 'swiper';
import { Controller, Navigation, Pagination } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types/swiper-options';

import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

window.Webflow = window.Webflow || [];

window.Webflow.push(async () => {
  const attribute = '[swiper="quotes1"]';
  const requiredElements = ['swiper', 'quotes1_pagination_list', 'quotes1_pagination_bullet'];

  // swiper instances
  queryElements(attribute).map((instance) => {
    const [swiperEl, paginationList, paginationBullet] = requiredElements.map((el) =>
      queryElement(`.${el}`, instance)
    );
    if (!swiperEl || !paginationList || !paginationBullet) return;

    const paginationBullets = Array.from(queryElements('[data-bullet-img]', swiperEl)).map(
      (bullet) => {
        if (!bullet) return;

        const src = bullet.dataset.bulletImg || '';
        const bulletEl = paginationBullet.cloneNode(true) as HTMLElement;

        const bulletElImg = bulletEl.firstChild as HTMLImageElement;
        bulletElImg.src = src;

        const markup = bulletElImg.outerHTML;
        return markup;
      }
    );

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
          return `<div class="${className}">${paginationBullets[index]}</div>`;
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
