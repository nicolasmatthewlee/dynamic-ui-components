import './reset.css';

import { DropDownMenu } from './drop-down-menu.js';

const displayMobile = () => {
  const body = document.querySelector(':root');

  let header = document.createElement('div');
  header.style.backgroundColor = 'red';
  header.style.display = 'flex';
  header.style.gap = '30px';
  header.style.padding = '30px 0px 30px 30px';
  body.append(header);

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

export { displayMobile };
