(()=>{"use strict";var n={578:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,".drop-down-menu {\n    height: 56px;\n\n    font-size: 24px;\n    font-weight: 500;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    text-align: center;\n}\n\n/* show-menu-button */\n\n.drop-down-menu>.show-menu-container-backdrop {\n    position: relative;\n    height: 50px;\n    width: 130px;\n    border: 3px solid black;\n}\n\n.drop-down-menu>.show-menu-container-backdrop>.show-menu-container {\n    position: absolute;\n    top: -3px;\n    left: -3px;\n\n    height: 56px;\n    width: 136px;\n    padding: 0px 0px 0px 15px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: white;\n    border: 3px solid black;\n\n    translate: 3px 3px;\n    transition: translate 200ms;\n}\n\n.drop-down-menu>.show-menu-container-backdrop:hover>.show-menu-container {\n    cursor: pointer;\n\n    translate: 0px 0px;\n    transition: translate 200ms;\n}\n\n.drop-down-menu>.show-menu-container-backdrop>.show-menu-container>.show-menu-label {\n    font-size: 24px;\n    font-weight: 700;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.drop-down-menu>.show-menu-container-backdrop>.show-menu-container>.show-menu-icon {\n    translate: 0px 2px;\n}\n\n/* menu content */\n\n.drop-down-menu>.menu-overlay {\n    position: absolute;\n    left: 0px;\n    bottom: 100vh;\n    z-index: 1;\n\n    height: 100vh;\n    width: 100vw;\n\n    display: flex;\n    gap: 20px;\n\n    translate: 0px 0px;\n    transition: translate 300ms ease-in-out;\n\n    background-color: white;\n\n    overflow: hidden;\n}\n\n.drop-down-menu>.menu-overlay.active {\n    visibility: visible;\n\n    translate: 0px 100vh;\n    transition: translate 300ms ease-in-out;\n}\n\n/* hide-menu */\n\n.drop-down-menu>.menu-overlay>.hide-menu-container {\n    position: absolute;\n    right: 30px;\n    top: 30px;\n\n    height: 56px;\n    width: 56px;\n\n    background-color: white;\n    border: 3px solid black;\n}\n\n.drop-down-menu>.menu-overlay>.hide-menu-container>.hide-menu-button-container {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n\n    width: 100%;\n    height: 100%;\n\n    border: 3px solid black;\n    background-color: white;\n}\n\n.drop-down-menu>.menu-overlay>.hide-menu-container>.hide-menu-button-container {\n    translate: 0px 0px;\n    transition: translate 200ms;\n}\n\n.drop-down-menu>.menu-overlay>.hide-menu-container:hover>.hide-menu-button-container {\n    cursor: pointer;\n\n    translate: -3px -3px;\n    transition: translate 200ms;\n}\n\n.drop-down-menu>.menu-overlay>.hide-menu-container>.hide-menu-button-container>.hide-menu-button {\n    translate: 0px 1px;\n}\n\n/* menu content */\n\n.drop-down-menu>.menu-overlay>.sections-container {\n    display: flex;\n    flex-direction: column;\n\n    gap: 20px;\n    padding: 30px 0px 0px 30px;\n}\n\n.drop-down-menu>.menu-overlay>.sections-container>.section-backdrop {\n    height: 50px;\n\n    text-align: left;\n    font-size: 30px;\n\n    border: 3px solid black;\n}\n\n.drop-down-menu>.menu-overlay>.sections-container>.section-backdrop:hover>.section-title-container {\n    cursor: pointer;\n\n    translate: -3px -3px;\n    transition: translate 200ms;\n}\n\n.drop-down-menu>.menu-overlay>.sections-container>.section-backdrop>.section-title-container {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n\n    background-color: white;\n    border: 3px solid black;\n\n    translate: 0px 0px;\n    transition: translate 200ms;\n}\n\n.drop-down-menu>.menu-overlay>.sections-container>.section-backdrop>.section-title-container>.section-title {\n    padding: 0px 10px 0px 10px;\n\n    align-self: center;\n}\n",""]);const s=a},917:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var p=t(i[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),p=t.n(l),d=t(589),u=t.n(d),m=t(917),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=p(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var b=t(578),v={};v.styleTagTransform=u(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=p(),e()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;const g=t.p+"d0265ba3b61bef231b44.svg",f=t.p+"dd854563295bf2283809.svg",x=(n,e,t="")=>{let o=document.createElement(n);return o.setAttribute("class",e),"img"==n?o.src=t:o.textContent=t,o},w=(n,e=[])=>{const t=x("div","drop-down-menu"),o=x("div","show-menu-container-backdrop"),r=x("button","show-menu-container");r.addEventListener("click",(()=>{s.classList.toggle("active")}));const i=x("div","show-menu-label","Menu"),a=x("img","show-menu-icon",g);r.append(i,a),o.append(r);const s=x("div","menu-overlay"),c=x("button","hide-menu-container"),l=x("div","hide-menu-button-container"),p=x("img","hide-menu-button",f);c.addEventListener("click",(()=>{s.classList.toggle("active")})),l.append(p),c.append(l),s.append(c);const d=x("div","sections-container");return n.forEach(((n,t)=>{let o=x("div","section-backdrop"),r=x("div","section-title-container"),i=x("div","section-title",n);o.append(r),r.append(i),d.append(o),e[t]&&o.addEventListener("click",e[t])})),s.append(d),t.append(o,s),t};window.mobileCheck=function(){let n=!1;var e;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0,4)))&&(n=!0),n},1==window.mobileCheck()?(()=>{const n=document.querySelector(":root");let e=document.createElement("div");e.style.backgroundColor="red",e.style.display="flex",e.style.gap="30px",e.style.padding="30px 0px 30px 30px",n.append(e),e.append(w(["Products","Pricing","Developers","About"],[()=>console.log("products"),()=>console.log("pricing"),()=>console.log("developers"),()=>console.log("about")]))})():(()=>{const n=document.querySelector(":root");let e=document.createElement("div");e.style.display="flex",e.style.gap="30px",e.style.padding="30px 0px 30px 30px",n.append(e),e.append(w(["Products","Pricing","Developers","About"],[()=>console.log("products"),()=>console.log("pricing"),()=>console.log("developers"),()=>console.log("about")]))})()})()})();