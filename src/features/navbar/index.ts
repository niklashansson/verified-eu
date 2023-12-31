import { closeDropdown } from '@finsweet/ts-utils';
import { gsap } from 'gsap';

import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

window.Webflow = window.Webflow || [];

window.Webflow.push(() => {
  //  webflow elements
  const elements = ['', '-menu', '-button', '-brand'].map((elClass) => {
    return queryElement(`.w-nav${elClass}`);
  });

  const closeDropdownBtns = queryElements('.navbar_dropdown_close');

  closeDropdownBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const dropdown = btn.closest('.w-dropdown') as HTMLDivElement | null;
      if (!dropdown) return;
      e.preventDefault();
      closeDropdown(dropdown);
    });
  });

  const [nav, menu, btn, brand] = elements;
  if (!nav || !menu || !btn || !brand) return;

  const firstSection = queryElement('[nav-intersect]');

  const menuColor = '#f8fafc';

  // states
  let isOpen = false;
  let isPastFirstSection = false;

  if (window.innerWidth < 991) {
    setFullMenuHeight();
    // set full menu height when window resizes
    window.addEventListener('resize', () => {
      setFullMenuHeight();
    });
  }

  // opened / closed menu
  new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'data-nav-menu-open') {
        if (menu.hasAttribute('data-nav-menu-open')) {
          openNavbar();
          isOpen = true;
        } else {
          closeNavbar();
          isOpen = false;
        }
      }
    });
  }).observe(menu, { attributes: true });

  function openNavbar() {
    setFullMenuHeight();
    const tl = gsap.timeline();
    tl.to(nav, { backgroundColor: menuColor, duration: 0 });
  }

  function closeNavbar() {
    setFullMenuHeight();
    const tl = gsap.timeline();

    if (isPastFirstSection) {
      tl.to(nav, { backgroundColor: menuColor });
    }

    if (!isPastFirstSection) {
      tl.to(nav, { backgroundColor: 'transparent' });
    }
  }

  function setFullMenuHeight() {
    if (!menu || !nav) return;
    menu.style.height = `${window.innerHeight - nav.offsetHeight}px`;
  }

  if (!firstSection) return;
  new IntersectionObserver(
    ([IntersectionObserver]) => {
      const { isIntersecting } = IntersectionObserver;

      !isIntersecting ? (isPastFirstSection = true) : (isPastFirstSection = false);

      isPastFirstSection && animatePast();
      if (!isPastFirstSection && !isOpen) animateNotPast();
    },
    { threshold: 0.5 }
  ).observe(firstSection);

  function animatePast() {
    const tl = gsap.timeline();
    tl.to(nav, {
      backgroundColor: menuColor,
      duration: 0.1,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'var(--color--1--bc2)',
    });
  }

  function animateNotPast() {
    const tl = gsap.timeline();
    tl.to(nav, { backgroundColor: 'transparent', duration: 0.1 });
  }
});
