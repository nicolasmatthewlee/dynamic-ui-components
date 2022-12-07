// this is an example implementation of the components
// in this module

import './reset.css';

import { DropDownMenu } from './drop-down-menu.js';

// for mobile – set body.height to height of inner browser
function resetHeight() {
  document.body.height = window.innerHeight + 'px';
}
// resets height on window resize
window.addEventListener('resize', resetHeight);
// initial call
resetHeight();

const body = document.querySelector(':root');

let header = document.createElement('div');
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
