import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

window.Webflow = window.Webflow || [];

window.Webflow.push(() => {
  const componentEl = queryElement('[global-modal-element="component"]');
  if (!componentEl) return;

  const instance1Btns = queryElements('a[href="#popup-demo-form"]').map((el) => {
    return { el, i: 1 };
  });
  if (!instance1Btns.length) return;

  const allOpenBtns = [...instance1Btns];

  allOpenBtns.forEach(({ el, i }) => {
    el.setAttribute('href', '#');
    el.addEventListener('click', () => {
      openModal(componentEl, i);
    });
  });
});

function openModal(modalElement: HTMLElement, modalContentIndex: number) {
  // query close buttons inside modal
  const closeButtons = queryElements('[global-modal-element="close"]', modalElement);
  if (!closeButtons.length) return;

  // adds event listeners to close buttons when opening the modal
  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      closeModal(modalElement, closeButtons);
    });
  });

  modalElement.setAttribute('global-modal-active', `${modalContentIndex}`);
}

function closeModal(modalElement: HTMLElement, closeButtons: EventTarget[]) {
  modalElement.setAttribute('global-modal-active', '');
  closeButtons.forEach((btn) => btn.removeEventListener('click', null));
}
