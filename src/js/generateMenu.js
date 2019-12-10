import menuItemTemplate from '../templates/template.hbs';

export const menu = {
  list: document.querySelector('.js-menu'),
  buildMenuItems(items, element) {
    const markup = items.map(item => menuItemTemplate(item)).join('');
    element.insertAdjacentHTML('beforeend', markup);
  },
};
