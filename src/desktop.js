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
  implementationLabel.textContent = '(viewing from desktop)';
  implementationLabel.style.fontFamily =
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  implementationLabel.style.fontWeight = '600';
  implementationLabel.style.paddingLeft = '30px';
  body.append(implementationLabel);

  // set --innerHeight on height change
  body.style.setProperty('--innerHeight', window.innerHeight + 'px');
  window.addEventListener('resize', () => {
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
