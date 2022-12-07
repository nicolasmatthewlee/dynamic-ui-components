import './reset.css';

import { DropDownMenu } from './drop-down-menu.js';

const body = document.querySelector(':root');

body.append(
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

body.append(
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

body.append(
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
