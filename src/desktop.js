import './reset.css';

import { DropDownMenu } from './drop-down-menu.js';

const displayDesktop = () => {
  const body = document.querySelector(':root');

  let header = document.createElement('div');
  header.style.display = 'flex';
  header.style.gap = '30px';
  header.style.padding = '30px 0px 30px 30px';
  body.append(header);

  let implementationLabel = document.createElement('div');
  implementationLabel.textContent = 'desktop';
  body.append(implementationLabel);

  // show window.innerHeight and adjust css variable
  let sizeLabel = document.createElement('div');
  body.append(sizeLabel);

  body.style.setProperty('--innerHeight', window.innerHeight + 'px');
  window.addEventListener('resize', () => {
    sizeLabel.textContent = window.innerHeight;
    body.style.setProperty('--innerHeight', window.innerHeight + 'px');
  });

  header.append(
    DropDownMenu(
      ['Products', 'Pricing', 'Developers', 'About'],
      [
        () => console.log('products'),
        () => console.log('pricing'),
        () => console.log('developers'),
        () => console.log('about')
      ]
    )
  );
};

export { displayDesktop };
