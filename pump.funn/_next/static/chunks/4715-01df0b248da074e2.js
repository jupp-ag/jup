"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4715],{85859:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,a={},i=0,c=function(e){return e&&(e.host||c(e.parentNode))},u=function(e,t,n,u){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=c(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});a[n]||(a[n]=new WeakMap);var f=a[n],s=[],d=new Set,p=new Set(l),v=function(e){!e||d.has(e)||(d.add(e),v(e.parentNode))};l.forEach(v);var h=function(e){!e||p.has(e)||Array.prototype.forEach.call(e.children,function(e){if(d.has(e))h(e);else{var t=e.getAttribute(u),a=null!==t&&"false"!==t,i=(r.get(e)||0)+1,c=(f.get(e)||0)+1;r.set(e,i),f.set(e,c),s.push(e),1===i&&a&&o.set(e,!0),1===c&&e.setAttribute(n,"true"),a||e.setAttribute(u,"true")}})};return h(t),d.clear(),i++,function(){s.forEach(function(e){var t=r.get(e)-1,a=f.get(e)-1;r.set(e,t),f.set(e,a),t||(o.has(e)||e.removeAttribute(u),o.delete(e)),a||e.removeAttribute(n)}),--i||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),u(r,o,n,"aria-hidden")):function(){return null}}},17552:function(e,t,n){n.d(t,{Z:function(){return Z}});var r,o,a,i,c,u,l=n(50044),f=n(2265),s="right-scroll-bar-position",d="width-before-scroll-bar";function p(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var v=new WeakMap,h=(void 0===r&&(r={}),(void 0===o&&(o=function(e){return e}),a=[],i=!1,c={read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var t=o(e,i);return a.push(t),function(){a=a.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(i=!0;a.length;){var t=a;a=[],t.forEach(e)}a={push:function(t){return e(t)},filter:function(){return a}}},assignMedium:function(e){i=!0;var t=[];if(a.length){var n=a;a=[],n.forEach(e),t=a}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),a={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),a}}}}).options=(0,l.pi)({async:!0,ssr:!1},r),c),m=function(){},y=f.forwardRef(function(e,t){var n,r,o,a,i=f.useRef(null),c=f.useState({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:m}),u=c[0],s=c[1],d=e.forwardProps,y=e.children,g=e.className,b=e.removeScrollBar,w=e.enabled,E=e.shards,S=e.sideCar,C=e.noIsolation,T=e.inert,k=e.allowPinchZoom,x=e.as,A=(0,l._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),L=(n=[i,t],r=function(e){return n.forEach(function(t){return p(t,e)})},(o=(0,f.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,f.useLayoutEffect(function(){var e=v.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||p(e,null)}),r.forEach(function(e){t.has(e)||p(e,o)})}v.set(a,n)},[n]),a),N=(0,l.pi)((0,l.pi)({},A),u);return f.createElement(f.Fragment,null,w&&f.createElement(S,{sideCar:h,removeScrollBar:b,shards:E,noIsolation:C,inert:T,setCallbacks:s,allowPinchZoom:!!k,lockRef:i}),d?f.cloneElement(f.Children.only(y),(0,l.pi)((0,l.pi)({},N),{ref:L})):f.createElement(void 0===x?"div":x,(0,l.pi)({},N,{className:g,ref:L}),y))});y.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},y.classNames={fullWidth:d,zeroRight:s};var g=function(e){var t=e.sideCar,n=(0,l._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return f.createElement(r,(0,l.pi)({},n))};g.isSideCarExport=!0;var b=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=u||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,a;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},w=function(){var e=b();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},E=function(){var e=w();return function(t){return e(t.styles,t.dynamic),null}},S={left:0,top:0,right:0,gap:0},C=function(e){return parseInt(e||"",10)||0},T=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[C(n),C(r),C(o)]},k=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return S;var t=T(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},x=E(),A=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,c=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(c,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(s," {\n    right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(d," {\n    margin-right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(s," .").concat(s," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(d," .").concat(d," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(c,"px;\n  }\n")},L=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,a=f.useMemo(function(){return k(o)},[o]);return f.createElement(x,{styles:A(a,!t,o,n?"":"!important")})},N=!1;if("undefined"!=typeof window)try{var R=Object.defineProperty({},"passive",{get:function(){return N=!0,!0}});window.addEventListener("test",R,R),window.removeEventListener("test",R,R)}catch(e){N=!1}var M=!!N&&{passive:!1},P=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},I=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),O(e,n)){var r=W(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},O=function(e,t){return"v"===e?P(t,"overflowY"):P(t,"overflowX")},W=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},_=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),c=i*r,u=n.target,l=t.contains(u),f=!1,s=c>0,d=0,p=0;do{var v=W(e,u),h=v[0],m=v[1]-v[2]-i*h;(h||m)&&O(e,u)&&(d+=m,p+=h),u=u.parentNode}while(!l&&u!==document.body||l&&(t.contains(u)||t===u));return s&&(o&&0===d||!o&&c>d)?f=!0:!s&&(o&&0===p||!o&&-c>p)&&(f=!0),f},j=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},F=function(e){return[e.deltaX,e.deltaY]},B=function(e){return e&&"current"in e?e.current:e},K=0,D=[],X=(h.useMedium(function(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(K++)[0],a=f.useState(function(){return E()})[0],i=f.useRef(e);f.useEffect(function(){i.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,l.ev)([e.lockRef.current],(e.shards||[]).map(B),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var c=f.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=j(e),c=n.current,u="deltaX"in e?e.deltaX:c[0]-a[0],l="deltaY"in e?e.deltaY:c[1]-a[1],f=e.target,s=Math.abs(u)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===s&&"range"===f.type)return!1;var d=I(s,f);if(!d)return!0;if(d?o=s:(o="v"===s?"h":"v",d=I(s,f)),!d)return!1;if(!r.current&&"changedTouches"in e&&(u||l)&&(r.current=o),!o)return!0;var p=r.current||o;return _(p,t,e,"h"===p?u:l,!0)},[]),u=f.useCallback(function(e){if(D.length&&D[D.length-1]===a){var n="deltaY"in e?F(e):j(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(B).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?c(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=f.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=f.useCallback(function(e){n.current=j(e),r.current=void 0},[]),p=f.useCallback(function(t){s(t.type,F(t),t.target,c(t,e.lockRef.current))},[]),v=f.useCallback(function(t){s(t.type,j(t),t.target,c(t,e.lockRef.current))},[]);f.useEffect(function(){return D.push(a),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:v}),document.addEventListener("wheel",u,M),document.addEventListener("touchmove",u,M),document.addEventListener("touchstart",d,M),function(){D=D.filter(function(e){return e!==a}),document.removeEventListener("wheel",u,M),document.removeEventListener("touchmove",u,M),document.removeEventListener("touchstart",d,M)}},[]);var h=e.removeScrollBar,m=e.inert;return f.createElement(f.Fragment,null,m?f.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,h?f.createElement(L,{gapMode:"margin"}):null)}),g),Y=f.forwardRef(function(e,t){return f.createElement(y,(0,l.pi)({},e,{ref:t,sideCar:X}))});Y.classNames=y.classNames;var Z=Y},31244:function(e,t,n){n.d(t,{EW:function(){return a}});var r=n(2265);let o=0;function a(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:i()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:i()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function i(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},52759:function(e,t,n){let r;n.d(t,{M:function(){return d}});var o=n(13428),a=n(2265),i=n(42210),c=n(9381),u=n(16459);let l="focusScope.autoFocusOnMount",f="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},d=(0,a.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:d,onUnmountAutoFocus:y,...g}=e,[b,w]=(0,a.useState)(null),E=(0,u.W)(d),S=(0,u.W)(y),C=(0,a.useRef)(null),T=(0,i.e)(t,e=>w(e)),k=(0,a.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,a.useEffect)(()=>{if(r){function e(e){if(k.paused||!b)return;let t=e.target;b.contains(t)?C.current=t:h(C.current,{select:!0})}function t(e){if(k.paused||!b)return;let t=e.relatedTarget;null===t||b.contains(t)||h(C.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&h(b)});return b&&n.observe(b,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,b,k.paused]),(0,a.useEffect)(()=>{if(b){m.add(k);let e=document.activeElement;if(!b.contains(e)){let t=new CustomEvent(l,s);b.addEventListener(l,E),b.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(h(r,{select:t}),document.activeElement!==n)return}(p(b).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&h(b))}return()=>{b.removeEventListener(l,E),setTimeout(()=>{let t=new CustomEvent(f,s);b.addEventListener(f,S),b.dispatchEvent(t),t.defaultPrevented||h(null!=e?e:document.body,{select:!0}),b.removeEventListener(f,S),m.remove(k)},0)}}},[b,E,S,k]);let x=(0,a.useCallback)(e=>{if(!n&&!r||k.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=p(e);return[v(t,e),v(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&h(a,{select:!0})):(e.preventDefault(),n&&h(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,k.paused]);return(0,a.createElement)(c.WV.div,(0,o.Z)({tabIndex:-1},g,{ref:T,onKeyDown:x}))});function p(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function v(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function h(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let m=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=y(r,e)).unshift(e)},remove(e){var t;null===(t=(r=y(r,e))[0])||void 0===t||t.resume()}});function y(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},50044:function(e,t,n){n.d(t,{CR:function(){return f},FC:function(){return p},Jh:function(){return u},KL:function(){return v},XA:function(){return l},ZT:function(){return o},_T:function(){return i},ev:function(){return s},mG:function(){return c},pi:function(){return a},qq:function(){return d}});var r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function c(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,c)}u((r=r.apply(e,t||[])).next())})}function u(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}function l(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function s(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function d(e){return this instanceof d?(this.v=e,this):new d(e)}function p(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise(function(n,r){a.push([e,t,n,r])>1||c(e,t)})})}function c(e,t){try{var n;(n=o[e](t)).value instanceof d?Promise.resolve(n.value.v).then(u,l):f(a[0][2],n)}catch(e){f(a[0][3],e)}}function u(e){c("next",e)}function l(e){c("throw",e)}function f(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function v(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=l(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){!function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}(r,o,(t=e[n](t)).done,t.value)})}}}"function"==typeof SuppressedError&&SuppressedError}}]);