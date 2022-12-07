import './drop-down-menu.css';

import DROP_DOWN_ICON from './assets/drop-down.svg';

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

const DropDownMenu = (sections) => {
  const menu = createElement('div', 'drop-down-menu');

  const showMenuContainerBackdrop = createElement(
    'div',
    'show-menu-container-backdrop'
  );
  const showMenuContainer = createElement('button', 'show-menu-container');
  showMenuContainer.addEventListener('click', () => {
    sectionsContainer.classList.toggle('active');
  });
  const menuLabel = createElement('div', 'show-menu-label', 'Menu');
  const showMenuButton = createElement('img', 'show-menu-icon', DROP_DOWN_ICON);
  showMenuContainer.append(menuLabel, showMenuButton);
  showMenuContainerBackdrop.append(showMenuContainer);

  const sectionsContainer = createElement('div', 'sections-container');

  for (let name of sections) {
    let section = createElement('div', 'section', name);
    sectionsContainer.append(section);
  }

  menu.append(showMenuContainerBackdrop, sectionsContainer);

  return menu;
};

export { DropDownMenu };
