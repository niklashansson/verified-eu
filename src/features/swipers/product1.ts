import { Swiper } from 'swiper';
import { Controller, Navigation, Pagination } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types/swiper-options';

import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

window.Webflow = window.Webflow || [];

window.Webflow.push(() => {
  const attribute = '[swiper="product1"]';
  const requiredElements = ['swiper', 'homeproduct1_pagination_list'];

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
      speed: 0,
      spaceBetween: 0,
      slidesPerView: 1,
      allowTouchMove: false,
      pagination: {
        el: paginationList,
        clickable: true,
        bulletClass: 'tablink1',
        bulletActiveClass: 'tablink1_active--bm3',
        renderBullet: function (index: number) {
          return `${paginationItems[index]}`;
        },
      },
      breakpoints: {
        992: {
          pagination: {
            enabled: true,
          },
        },
        478: {
          allowTouchMove: true,
          pagination: {
            enabled: false,
          },
          speed: 800,
          slidesPerView: 1.125,
          spaceBetween: 24,
        },
        320: {
          allowTouchMove: true,
          pagination: {
            enabled: false,
          },
          speed: 800,
          slidesPerView: 1.125,
          spaceBetween: 24,
        },
      },
    };

    new Swiper(swiperEl, options);
  });
});
