import './drop-down-menu.css';

import EXPAND_MORE_ICON from './assets/expand-more.svg';
import EXPAND_LESS_ICON from './assets/expand-less.svg';

// helper method
const createElement = (type, className, content = '') => {
  let element = document.createElement(type);
  element.setAttribute('class', className);
  if (type == 'img') {
    element.src = content;
  } else {
    element.textContent = content;
  }
  return element;
};

const DropDownMenu = (sections, functions = []) => {
  //   takes in a list of section names and an optional list
  //   of functions to be called when the section is clicked

  const menu = createElement('div', 'drop-down-menu');

  //   show menu
  const showMenuContainerBackdrop = createElement(
    'div',
    'show-menu-container-backdrop'
  );
  const showMenuContainer = createElement('button', 'show-menu-container');
  showMenuContainer.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
  });
  const menuLabel = createElement('div', 'show-menu-label', 'Menu');
  const showMenuButton = createElement(
    'img',
    'show-menu-icon',
    EXPAND_MORE_ICON
  );
  showMenuContainer.append(menuLabel, showMenuButton);
  showMenuContainerBackdrop.append(showMenuContainer);

  const menuOverlay = createElement('div', 'menu-overlay');

  //   hide menu
  const hideMenuContainer = createElement('button', 'hide-menu-container');
  const hideMenuButtonContainer = createElement(
    'div',
    'hide-menu-button-container'
  );
  const hideMenuButton = createElement(
    'img',
    'hide-menu-button',
    EXPAND_LESS_ICON
  );
  hideMenuContainer.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
  });
  hideMenuButtonContainer.append(hideMenuButton);
  hideMenuContainer.append(hideMenuButtonContainer);
  menuOverlay.append(hideMenuContainer);

  // menu content
  const sectionsContainer = createElement('div', 'sections-container');

  sections.forEach((name, index) => {
    let sectionBackdrop = createElement('div', 'section-backdrop');
    let sectionTitleContainer = createElement('div', 'section-title-container');
    let sectionTitle = createElement('div', 'section-title', name);
    sectionBackdrop.append(sectionTitleContainer);
    sectionTitleContainer.append(sectionTitle);
    sectionsContainer.append(sectionBackdrop);

    if (functions[index]) {
      sectionBackdrop.addEventListener('click', functions[index]);
    }
  });

  menuOverlay.append(sectionsContainer);

  menu.append(showMenuContainerBackdrop, menuOverlay);

  return menu;
};

export { DropDownMenu };
