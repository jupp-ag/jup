(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8967],{78331:function(e,t,r){"use strict";var n=r(73360),s=r(7761),a=r(68586),o=r(93981),i=r(16143),c=r(89388),l=r(64508),d=r.n(l),u=r(3082),f=r(29541),x=function(e){var t=e.title,r=e.active,s=e.href,a=e.beta;return(0,f.jsxs)(d(),{className:(0,c.cn)("flex relative","rounded-3xl px-4 py-3 text-xs leading-none text-white/20 border border-transparent whitespace-nowrap items-center","text-labs font-[700] hover:!bg-labs/5 hover:!border-labs/25",{"!border-labs/25 !bg-labs/5 border":r,"py-2":a}),href:s,shallow:!0,children:[(0,f.jsx)("span",{children:t}),a&&(0,f.jsx)("div",{className:(0,c.cn)("ml-2.5 text-xs rounded-md py-1 px-1.5 leading-none","bg-labs text-black"),children:(0,f.jsx)(n.cC,{id:"Beta"})})]})};t.Z=function(e){var t=e.title,r=e.children,n=(0,o.useMemo)((function(){return[{title:s.ag._("Comparator"),href:"/bridge-compare",beta:!1},{title:s.ag._("Wormhole"),href:"/bridge/wormhole",beta:!0},{title:s.ag._("Onramp"),href:"/bridge/onramp",beta:!0}]}),[]),c=(0,u.useRouter)();return(0,f.jsxs)(i.Z,{children:[(0,f.jsx)(a.PB,{title:"Bridge",description:"We aim to build the most comprehensive and user-friendly bridging platform for anyone to transfer assets to Solana."}),(0,f.jsx)("div",{className:"space-x-2 flex items-center mt-10",children:n.map((function(e){return(0,f.jsx)(x,{title:e.title,active:e.href===c.pathname,href:e.href,beta:e.beta},e.href)}))}),(0,f.jsx)("p",{className:"mt-6 text-base font-medium text-v2-lily/75 text-center",children:t}),(0,f.jsx)(f.Fragment,{children:r})]})}},53636:function(e,t,r){"use strict";var n=r(63956),s=r(54423),a=r(93981),o=r(87821),i=r(25546),c=r(29541),l=["currency"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.currency,r=void 0===t||t,n=(0,s.Z)(e,l),d=a.useMemo((function(){return","===i.A5?".":","}),[]);return(0,c.jsx)(o.Z,u(u({displayType:"text",prefix:r?"$":""},n),{},{decimalSeparator:i.A5,thousandSeparator:d}))}},96027:function(e,t,r){"use strict";var n=r(93981),s=r(25546);t.Z=function(e){var t,r=e.items,a=e.defaultIndex,o=void 0===a?0:a,i=e.key,c=e.autoPaginateContainerId,l=void 0===c?"":c,d=(0,n.useState)(-1),u=d[0],f=d[1],x=(0,n.useRef)([]),m=(null===(t=document.getElementById(l))||void 0===t?void 0:t.getBoundingClientRect())||0,h=(0,n.useState)(!1),p=h[0],b=h[1];(0,n.useEffect)((function(){r.length>0&&setTimeout((function(){f(o)}),100)}),[i||r]);var v=(0,n.useCallback)((function(e){("ArrowUp"===e.code||"Tab"===e.code&&!0===e.shiftKey)&&(e.preventDefault(),b(!0),f((function(e){if(e>0){var t;if(l&&x.current[u]&&null!==(t=x.current[u].current)&&void 0!==t&&t.scrollIntoView){var r=x.current[e-1].current.offsetTop;r+50<m.height&&(document.getElementById("search-result-list").scrollTop=r-m.top)}return e-1}return-1}))),("ArrowDown"===e.code||"Tab"===e.code&&!0!==e.shiftKey)&&(e.preventDefault(),b(!0),f((function(e){if(e>=-1&&e<r.length-1){var t;if(l&&x.current[u]&&null!==(t=x.current[u].current)&&void 0!==t&&t.scrollIntoView){var n=x.current[e+1].current.offsetTop;n+50>m.height&&(document.getElementById("search-result-list").scrollTop=n)}return e+1}return e})))}),[u,r,l,m.height,m.top]);(0,s._1)("keydown",v);var g=(0,n.useCallback)((function(e){f(e),b(!1)}),[f]);return{itemsRef:x,keyboardIndex:u,setFocusIndex:g,isKeyboard:p}}},26260:function(e,t,r){"use strict";var n=r(97620),s=r(93981),a=r(30610),o=r(89388),i=r(25546),c=r(29541);t.Z=function(e){var t=e.className,r=e.children,l=e.data,d=e.rowRenderer,u=(e.value,e.onChange),f=e.contentClassName,x=e.rowClassName,m=e.filter,h=e.disabled,p=s.useState(!1),b=(0,n.Z)(p,2),v=b[0],g=b[1],j=s.useState(""),y=(0,n.Z)(j,2),w=y[0],k=y[1],N=(0,i.Nr)(w,150),O=s.useMemo((function(){return m&&N?m(l,N):l}),[l,N,m]);return(0,c.jsx)(a.Z,{isOpen:v,onClose:function(){return g(!1)},id:"settings-button",placement:"bottom-start",matchWidth:!0,buttonContent:(0,c.jsx)("button",{type:"button",onClick:function(){return g((function(e){return!e}))},className:(0,o.cn)("flex items-center py-3 pl-4 pr-5 space-x-2 rounded-lg bg-jupiter-light dark:bg-white/10 text-white/75",t),disabled:h,children:r}),buttonContentClassName:"!w-full",popoverContent:(0,c.jsxs)("div",{className:"mt-1 bg-jupiter-light rounded-lg dark:bg-white/10",children:[m?(0,c.jsx)("div",{className:"sticky top-0 flex",children:(0,c.jsx)("input",{placeholder:"Search...",className:"w-full py-2 px-4 bg-v2-background-dark text-white text-sm !outline-none",value:w,onChange:function(e){return k(e.target.value)}})}):null,O.map((function(e,t){return(0,c.jsx)("button",{onClick:function(){u(e),g(!1)},className:(0,o.cn)("first:pt-3 last:pb-3 w-full flex items-center py-1.5 pl-4 pr-3 space-x-2 text-white/75 hover:bg-porcelain dark:hover:bg-shark",x),children:d(e)},t)}))]}),contentClassName:(0,o.cn)("!bg-transparent !shadow-none z-50 webkit-scrollbar",f)})}},12939:function(e,t,r){"use strict";var n=r(89388),s=r(29541);t.Z=function(e){var t=e.children,r=e.className,a=e.animate,o=void 0===a||a;return(0,s.jsx)("span",{className:(0,n.cn)("text-transparent bg-clip-text bg-gradient-to-r from-[rgba(199,242,132,1))] to-[rgba(0,190,240,1)] dark:bg-200-auto dark:bg-v2-text-gradient",r,{"animate-hue dark:animate-shine":o}),children:t})}},56100:function(e,t,r){"use strict";r.d(t,{O:function(){return a}});r(93981);var n=r(89388),s=r(29541),a=function(e){var t=e.className,r=e.style;return(0,s.jsx)("div",{style:r,className:(0,n.cn)("w-full h-12 bg-gray-300 rounded-lg animate-shine-reverse bg-skeleton dark:bg-skeleton-dark bg-200-auto",t)})}},69825:function(e,t,r){"use strict";var n=r(63956),s=r(54423),a=r(93981),o=r(87821),i=r(65838),c=r(25546),l=r(89388),d=r(29541),u=["testId","name","onChange","value","disabled","decimals","onMouseOver","onFocus","onKeyDown","className","placeholder","onBlur","suffix","max","autofocus","style","enableDynamicSizing"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var x=a.forwardRef((function(e,t){e.testId;var r=e.name,x=e.onChange,m=e.value,h=e.disabled,p=void 0!==h&&h,b=e.decimals,v=void 0===b?6:b,g=e.onMouseOver,j=e.onFocus,y=e.onKeyDown,w=e.className,k=e.placeholder,N=e.onBlur,O=e.suffix,C=e.max,S=e.autofocus,P=void 0!==S&&S,Z=e.style,D=e.enableDynamicSizing,E=(0,s.Z)(e,u),M=(0,i.MG)().constants.MAX_INPUT_LIMIT,T=a.useMemo((function(){return E.isAllowed||function(e){var t=e.floatValue;return C?!t||t<=Number(C):!t||t<=M}}),[M,E.isAllowed,C]),_=String(m).length>=9?"text-base md:text-xl":"text-xl",L=","===c.A5?".":",",I=","===c.A5?",":".",R=a.useRef(null),B=(0,a.useState)(Z),F=B[0],V=B[1];return(0,a.useEffect)((function(){var e;D&&V(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:null===(e=R.current)||void 0===e?void 0:e.clientWidth},Z))}),[m,Z,D]),(0,d.jsx)(o.Z,{onKeyDown:y,autoComplete:"off",name:r,inputMode:"decimal",onBlur:N,"data-lpignore":"true",decimalSeparator:I,value:null!==m&&void 0!==m?m:"",allowedDecimalSeparators:[".",","],thousandSeparator:L,decimalScale:v,allowNegative:!1,allowLeadingZeros:!1,disabled:p,isAllowed:T,onValueChange:function(e){e.value!==(null===m||void 0===m?void 0:m.toString())&&x&&x(e)},isNumericString:!0,placeholder:p?"":null!==k&&void 0!==k?k:"0.00",className:(0,l.cn)("h-full w-full bg-transparent disabled:cursor-not-allowed disabled:opacity-100 disabled:text-black dark:text-white text-right font-semibold dark:placeholder:text-white/25",_,w),onMouseOver:g,onFocus:j,getInputRef:t,suffix:O,autoFocus:P,style:F})}));t.Z=x},16409:function(e,t,r){"use strict";r.d(t,{x:function(){return g}});var n=r(63956),s=r(73360),a=r(93981),o=r(65838),i=r(25546),c=r(74518),l=r(13170),d=r(60347),u=r(12197),f=r(1622),x=r(62812),m=r(1685),h=r(12939),p=r(29541);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=72;t.Z=function(e){var t=e.item,r=e.index,n=e.style,b=e.onSubmit,j=e.isKeyboardFocused,y=e.onMouseEnter,w=e.keyboardRefs,k=e.suppressCloseModal,N=e.usdValue,O=e.showExplorer,C=void 0===O||O,S=e.enableUnknownTokenWarning,P=void 0===S||S,Z=e.isBestToken,D=(0,o.Bn)(),E=D.unknownTokenMap,M=D.newTokenListMap,T=(0,x.JT)().closeModal,_=(0,o.gZ)().mintToAssociatedTokenAccountMap,L=(0,a.createRef)();w.current[r]=L;var I=a.useCallback((function(){b(t),k||T()}),[b,t,k,T]),R=(0,a.useCallback)((function(e){"Enter"===e.code&&j&&I()}),[I,j]);(0,i._1)("keydown",R);var B=j?"absolute w-full h-full left-0 top-0 opacity-0 dark:bg-jupiter-gradient dark:opacity-10":"",F=N&&N.gt(.01)?"$".concat(i.uf.format(N.toDP(2).toNumber())):"",V=(0,a.useMemo)((function(){var e;return[E.has(t.address),(0,u.kL)(t),M.has(t.address),m.RX.has(t.address),null===_||void 0===_||null===(e=_.get((null===t||void 0===t?void 0:t.address)||""))||void 0===e?void 0:e.info.isFrozen]}),[E,t,M,_]),A=V[0],U=V[1],W=V[2],q=V[3],K=V[4],z=(0,o.jB)().useWSol;return(0,p.jsxs)("li",{className:"rounded cursor-pointer px-5 py-3 list-none flex w-full items-center",style:v({maxHeight:g,height:g},n),onMouseEnter:y,onClick:I,translate:"no",children:[(0,p.jsx)("div",{className:B}),(0,p.jsxs)("div",{className:"flex w-full items-center space-x-4",children:[(0,p.jsx)("div",{className:"flex-shrink-0",children:(0,p.jsx)("div",{className:"h-6 w-6 bg-gray-200 rounded-full",children:(0,p.jsx)(c.Z,{info:t,enableUnknownTokenWarning:P})})}),(0,p.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,p.jsxs)("div",{className:"flex space-x-2",children:[(0,p.jsx)("p",{className:"text-sm font-medium text-white truncate",children:t.symbol}),C?(0,p.jsx)("div",{className:"z-10",onClick:function(e){return e.stopPropagation()},children:(0,p.jsx)(d.Z,{tokenInfo:t})}):null]}),(0,p.jsx)("p",{className:"text-xs text-gray-500 dark:text-white-35 truncate",children:t.address===l.W4.toBase58()?"Solana":t.name})]}),(0,p.jsxs)("div",{className:"flex gap-2",children:[K&&(0,p.jsx)("p",{className:"border rounded-md text-xxs py-[1px] px-1 border-warning/50 text-warning/50",children:(0,p.jsx)(s.cC,{id:"Frozen"})}),A&&(0,p.jsx)("p",{className:"border rounded-md text-xxs py-[1px] px-1 border-white/30 text-white/30",children:(0,p.jsx)(s.cC,{id:"Unknown"})}),U&&(0,p.jsx)("p",{className:"border rounded-md text-xxs py-[1px] px-1 border-white/30 text-white/30",children:(0,p.jsx)(s.cC,{id:"Token2022"})}),q&&(0,p.jsx)("p",{className:"rounded-md text-xxs py-[1px] px-1.5 bg-warning/80 text-white",children:(0,p.jsx)(s.cC,{id:"Launchpad"})}),W&&!q&&(0,p.jsx)("p",{className:"rounded-md text-xxs py-[1px] px-1.5 bg-warning/80 text-white",children:(0,p.jsx)(s.cC,{id:"New"})}),Z&&(0,p.jsx)("p",{className:"rounded-md text-xxs py-[1px] px-1.5 border border-v2-primary/50 text-white",children:(0,p.jsx)(h.Z,{children:(0,p.jsx)(s.cC,{id:"Best"})})})]}),(0,p.jsxs)("div",{className:"text-xs dark:text-white-35 text-right",children:[(0,p.jsx)("div",{children:(0,p.jsx)(f.Z,{mintAddress:t.address,hideZeroBalance:!0,useWSOL:z})}),(0,p.jsx)("p",{children:F})]})]})]})}},60347:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(65838),s=r(12197),a=r(93981),o=r(29541),i=function(e){var t=e.width,r=void 0===t?800:t,n=e.height,s=void 0===n?800:n;return(0,o.jsxs)("svg",{width:r,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("line",{x1:"10.8492",y1:"13.0606",x2:"19.435",y2:"4.47485",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M19.7886 4.12134L20.1421 8.01042",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M19.7886 4.12134L15.8995 3.76778",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M18 13.1465V17.6465C18 19.3033 16.6569 20.6465 15 20.6465H6C4.34315 20.6465 3 19.3033 3 17.6465V8.64648C3 6.98963 4.34315 5.64648 6 5.64648H10.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})},c=r(89388),l=(0,a.forwardRef)((function(e,t){var r=e.tokenInfo,l=e.customUrl,d=e.className,u=e.children,f=(0,n.MG)().constants.CLUSTER,x=(0,n.oP)().getTokenExplorer,m=(0,a.useMemo)((function(){return l||x(r.address,f)}),[f,l,x,r.address]);return(0,o.jsx)("a",{ref:t,target:"_blank",rel:"noreferrer",className:(0,c.cn)("flex items-center bg-jupiter-bg-grey bg-black/25 text-white/75 px-2 py-0.5 space-x-1 rounded cursor-pointer",d),href:m,children:u||(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"text-xxs",children:(0,s.Xn)(r.address,5)}),(0,o.jsx)(i,{width:10,height:10})]})})}))},50882:function(e,t,r){"use strict";var n=r(29541);t.Z=function(){return(0,n.jsx)("div",{className:"flex items-center dark:text-white/[0.15] fill-current",children:(0,n.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"inherit",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M7.30327 14.6058C8.75327 14.6074 10.1705 14.1746 11.3729 13.3637L15.5971 17.5871C16.1463 18.1371 17.0377 18.1371 17.5877 17.5871C18.1377 17.0371 18.1377 16.1457 17.5877 15.5964L13.3643 11.3722C14.5823 9.55661 14.9229 7.28943 14.2909 5.19563C13.6596 3.10183 12.1229 1.40183 10.1033 0.56283C8.08365 -0.276231 5.79385 -0.16607 3.86505 0.86283C1.93537 1.89251 0.569053 3.73243 0.140853 5.87683C-0.286487 8.02143 0.269759 10.2448 1.65725 11.9354C3.04397 13.6261 5.11665 14.6064 7.30325 14.6058H7.30327ZM7.30327 1.68943C8.79233 1.68865 10.2197 2.28005 11.2729 3.33319C12.3252 4.38631 12.9166 5.81359 12.9166 7.30279C12.9166 8.79199 12.3252 10.2192 11.2729 11.2724C10.2198 12.3247 8.79247 12.9162 7.30327 12.9162C5.81407 12.9162 4.38687 12.3247 3.33367 11.2724C2.28133 10.2193 1.68913 8.79199 1.68991 7.30279C1.69148 5.81451 2.28287 4.38719 3.33523 3.33479C4.38759 2.28239 5.81483 1.69103 7.30323 1.68947L7.30327 1.68943Z",fill:"inherit"})})})}},71932:function(e,t,r){"use strict";var n=r(63956),s=r(54423),a=(r(93981),r(29541)),o=["width","height"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.width,r=void 0===t?"12":t,n=e.height,i=void 0===n?"12":n,l=(0,s.Z)(e,o);return(0,a.jsx)("svg",c(c({width:r,height:i,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l),{},{children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.93793 12.1728C9.47107 12.1733 9.08835 11.8037 9.07186 11.3372L8.86888 5.61643C8.86042 5.3813 8.94838 5.15338 9.11162 4.98422C9.27485 4.81507 9.49982 4.71992 9.73494 4.71992H10.1409C10.376 4.71992 10.601 4.81507 10.7642 4.98422C10.9275 5.15338 11.0154 5.38131 11.007 5.61643L10.804 11.3372C10.7875 11.8037 10.4048 12.1733 9.93793 12.1728ZM9.93783 15.4176C10.6106 15.4176 11.1557 14.8725 11.1557 14.1997C11.1557 13.5269 10.6106 12.9818 9.93783 12.9818C9.26502 12.9818 8.71992 13.5269 8.71992 14.1997C8.71992 14.8725 9.26502 15.4176 9.93783 15.4176Z",fill:"currentColor"})}))}},32254:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return ee},default:function(){return te}});var n=r(73360),s=r(93981),a=r(78331),o=r(63956),i=r(70107),c=r(27195),l=r(8857),d=r.n(l),u=r(7761),f=r(96343),x=r(71048),m=r(97620),h=r(69667),p=r(89388),b=r(19240),v=r(77357),g=r(6691),j=r(50882),y=r(25546),w=r(16409),k=r(62812),N=r(29541);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=function(e){var t=e.item,r=e.index,n=e.style,a=e.onSubmit,o=e.isKeyboardFocused,i=e.onMouseEnter,c=e.keyboardRefs,l=(0,k.JT)().closeModal,d=(0,f.XA)(),u=(0,s.useRef)(null),x=(0,s.createRef)();c.current[r]=x;var m=(0,s.useCallback)((function(){a(t.fiat),l()}),[a,l,t]),h=(0,s.useCallback)((function(e){"Enter"===e.code&&o&&m()}),[o,m]);(0,y._1)("keydown",h);var b=o?"absolute w-full h-full left-0 top-0 opacity-0 dark:bg-jupiter-gradient dark:opacity-10":"";return(0,N.jsxs)("li",{className:(0,p.cn)("rounded py-4 cursor-pointer px-5 list-none"),style:C({maxHeight:72,height:72},n),onMouseEnter:i,onClick:function(e){u.current&&e.nativeEvent.composedPath().includes(u.current)||m()},children:[(0,N.jsx)("div",{className:b}),(0,N.jsx)("div",{className:"flex items-center justify-between",children:(0,N.jsx)("div",{className:"text-xs dark:text-white text-right flex flex-col space-y-1 items-end",children:(0,N.jsxs)("div",{className:"flex flex-row items-center space-x-4",children:[(0,N.jsx)("div",{className:"w-6 h-6 self-start lg:self-center",children:(0,N.jsx)("img",{className:(0,p.cn)("rounded-full"),alt:t.fullName,src:t.iconUrl,width:32,height:32})}),(0,N.jsxs)("div",{className:"flex flex-col",children:[(0,N.jsx)("div",{className:"flex flex-col space-y-1 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-3",children:(0,N.jsx)("div",{className:"text-sm font-semibold",children:t.fiat})}),d?null:(0,N.jsx)("div",{className:"text-sm dark:text-white-35",children:t.fullName})]})]})})})]})},P=r(96027);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=60,M=109,T=function(){var e=[E,M,((0,y.tq)()?4:10)*w.x,8].reduce((function(e,t){return e+t}),0);return Math.min(window.innerHeight-32,e)};var _=(0,s.memo)((function(e){var t=e.data,r=e.index,n=e.style,s=t.searchResult[r];return(0,N.jsx)(S,{item:s,index:r,style:n,onSubmit:t.onSubmit,keyboardRefs:t.itemsRef,isKeyboardFocused:r===t.keyboardIndex,onMouseEnter:function(){return t.setFocusIndex(r)}},s.fiat)}),v.wy),L=function(e){var t=e.onSubmit,r=e.currencyList,a=e.onClose,o=e.suppressCloseModal,i=e.customStyle,c=(0,g.Fg)().mode,l=(0,k.JT)().closeModal,d=(0,x.cI)({defaultValues:{searchValue:""}}),f=d.watch,m=d.setFocus,h=f("searchValue"),O=(0,s.useState)([]),C=O[0],S=O[1];(0,s.useEffect)((function(){(0,y.tq)()||m("searchValue")}),[]);var Z=(0,s.useState)(!0),M=Z[0],L=Z[1];(0,s.useEffect)((function(){M&&C&&C.length>0&&L(!1)}),[C,M]),(0,s.useEffect)((function(){var e=function(e,t){if(!t)return e;var r=t.toLowerCase();return e.filter((function(e){return e.fullName.toLowerCase().includes(r)||e.fiat.toLowerCase().includes(r)}))}(r,h)||[];S(e)}),[h,r]);var I=(0,P.Z)({items:C||[],defaultIndex:0,key:h}),R=I.itemsRef,B=I.keyboardIndex,F=I.setFocusIndex,V=I.isKeyboard,A=(0,s.createRef)();return(0,s.useEffect)((function(){var e;!0===V&&(null===A||void 0===A||null===(e=A.current)||void 0===e||e.scrollToItem(B))}),[V,B,A]),(0,N.jsxs)("div",{className:"flex flex-col relative w-[95vw] md:w-[448px] max-w-[448px] h-full overflow-hidden text-left bg-v2-background rounded-lg",style:D({height:T()},i),children:[(0,N.jsxs)("div",{className:"flex pt-3 px-5",style:{height:E,maxHeight:E},children:[(0,N.jsx)(j.Z,{}),(0,N.jsx)("input",D({autoComplete:"off",className:"w-[70%] outline-none ml-4 truncate bg-transparent text-sm placeholder:text-white/30",placeholder:u.ag._("Search by token or paste address")},d.register("searchValue"))),(0,N.jsx)("div",{className:"absolute px-3 py-2 text-xs rounded cursor-pointer focus:bg-red-100 right-4 top-5 md:right-4 bg-v2-background-dark text-v2-lily/50",onClick:null!==a&&void 0!==a?a:l,children:"Esc"})]}),(0,N.jsxs)("div",{className:"mt-2",style:{flexGrow:1},children:[C.length>0&&(0,N.jsx)(b.ZP,{children:function(e){var r=e.height,n=void 0===r?0:r,s=e.width,a=void 0===s?0:s;return(0,N.jsx)(v.t7,{ref:A,height:n,itemCount:C.length,itemSize:w.x,width:a-2,itemData:{searchResult:C,onSubmit:t,itemsRef:R,keyboardIndex:B,setFocusIndex:F,suppressCloseModal:o},className:(0,p.cn)("overflow-y-scroll mr-1 min-h-[12rem] px-5","webkit-scrollbar ".concat(c===g.hY.DARK?"webkit-scrollbar-dark":"")),children:_})}}),M?(0,N.jsx)("div",{className:"mx-5 mt-4 mb-4 text-center dark:text-white-50 text-black-50",children:(0,N.jsx)(n.cC,{id:"Loading currency..."})}):0===C.length?(0,N.jsx)("div",{className:"mx-5 mt-4 mb-4 text-center text-sm dark:text-white-50 text-black-50",children:(0,N.jsx)(n.cC,{id:"No currency found"})}):(0,N.jsx)(N.Fragment,{})]})]})},I=function(e){var t=e.control,r=e.currencyList,n=(0,k.JT)().openModal,a=(0,x.bc)({control:t,name:"fromCurrency"}).field,o=(0,x.qo)({control:t,name:["fromCurrency"]}),i=(0,m.Z)(o,1)[0],c=(0,s.useMemo)((function(){var e=(i||"").toLowerCase();return(r||[]).find((function(t){return t.fiat.toLowerCase()===e}))}),[r,i]),l=function(e){a.onChange(e)};return(0,N.jsxs)("button",{type:"button",className:(0,p.cn)("py-2 px-3 rounded-[4px] flex space-x-3 items-center bg-white dark:bg-v2-background border border-transparent","dark:group-hover/select:border-v2-primary/50 dark:group-hover/select:bg-[rgba(199,242,132,0.2)] dark:group-hover/select:shadow-swap-input-dark"),disabled:!r,onClick:function(){n((0,N.jsx)(L,{onSubmit:l,currencyList:r||[]}),{position:"top",noCloseButton:!0})},children:[(0,N.jsx)("div",{className:"w-6 h-6 text-xs flex items-center justify-center rounded-full",children:(null===c||void 0===c?void 0:c.iconUrl)&&(0,N.jsx)("img",{className:(0,p.cn)("rounded-full"),alt:c.fullName,src:c.iconUrl,width:24,height:24})}),(0,N.jsx)("div",{className:"font-semibold text-sm !mr-auto",translate:"no",children:null===c||void 0===c?void 0:c.fiat}),(0,N.jsx)("div",{className:"text-black/25 dark:text-white/25 group-hover/select:text-[#00D1DF] dark:group-hover/select:text-v2-primary fill-current",children:(0,N.jsx)(h.Z,{})})]})},R=r(56100),B=r(69825),F=function(e){var t=e.loading,r=e.name,n=e.control,a=e.disabled,o=e.className,i=s.useRef(null);return(0,N.jsx)(x.Qr,{name:r,control:n,rules:{required:"Required"},render:function(e){var n=e.field,s=n.onChange,c=n.value,l=n.onBlur;return(0,N.jsx)("div",{className:"flex flex-col h-full",children:t?(0,N.jsx)(R.O,{className:"ml-2 w-24 h-6 self-end"}):(0,N.jsx)(B.Z,{name:r,className:(0,p.cn)("outline-none text-left",o),onChange:s,value:null===c||void 0===c?void 0:c.value,disabled:a,ref:i,onBlur:l})})}})},V=r(26260),A=r(6099),U=r.n(A),W=r(53636),q=r(65838),K=r(45009),z=r(94107),G={mercuryo:{logo:"/images/mercuryo.png",name:"Mercuryo"}},H=function(e){var t,r=e.quote,a=e.isTheBest,o=(0,q.Os)().publicKey,i=(0,s.useState)(a||!1),l=i[0],u=i[1],f=l&&a,x=(0,K.a)(["buy",r.trx_token,null===o||void 0===o?void 0:o.toBase58()],(0,c.Z)(d().mark((function e(){var t,n,s;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({address:null===o||void 0===o?void 0:o.toBase58(),fiat_amount:r.fiat_amount,currency:r.currency,fiat_currency:r.fiat_currency,return_url:"https://".concat(window.location.host,"/bridge/onramp")}),e.next=3,fetch("/api/onramp/buy-url?".concat(t.toString()),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return s=e.sent,e.abrupt("return",null===s||void 0===s?void 0:s.url);case 8:case"end":return e.stop()}}),e)}))),{enabled:Boolean(o)}).data;return(0,N.jsxs)("div",{className:(0,p.cn)("w-full  rounded-xl overflow-hidden shadow-swap2-light dark:shadow-swap2-dark border-2",l&&a?"border-[#C7F28480] [background:linear-gradient(0deg,rgba(199,242,132,0.10)_0%,rgba(199,242,132,0.10)_100%),#19232D]":"border-transparent bg-white dark:bg-[#23313F]"),children:[(0,N.jsx)("div",{className:(0,p.cn)("cursor-pointer px-4 py-5",f?"text-[#C7F284]":"text-v2-lily"),onClick:function(){return u((function(e){return!e}))},children:(0,N.jsxs)("div",{className:"flex items-center justify-between space-x-2",children:[(0,N.jsxs)("div",{className:"flex items-center space-x-2 shrink-0",children:[(0,N.jsx)(U(),{width:32,height:32,objectFit:"contain",src:null===(t=G[r.id])||void 0===t?void 0:t.logo,alt:"",className:"rounded"}),(0,N.jsx)("div",{children:(0,N.jsxs)("p",{className:"font-medium text-sm flex items-center space-x-1",children:[(0,N.jsx)("span",{children:G[r.id].name}),(0,N.jsx)("span",{className:(0,p.cn)("fill-current ml-4 duration-0 mr-[5px] opacity-50",l&&"rotate-180"),children:(0,N.jsx)(h.Z,{width:12,height:7.2})})]})})]}),(0,N.jsx)("div",{className:"text-right",children:(0,N.jsxs)("p",{className:"text-base font-semibold",children:[(0,N.jsx)(W.Z,{value:Number(r.amount),decimalScale:6,currency:!1})," ",r.currency]})})]})}),l&&(0,N.jsxs)("div",{className:"px-4 pb-6 space-y-2 font-medium text-v2-lily -mt-1",children:[(0,N.jsx)("div",{className:"border-v2-lily/5 border-t !mb-3"}),(0,N.jsxs)("p",{className:"flex items-center space-x-2 justify-between",children:[(0,N.jsx)("span",{className:"text-xs opacity-50",children:(0,N.jsx)(n.cC,{id:"{0} rate",values:{0:r.currency}})}),(0,N.jsxs)("span",{className:"text-xs opacity-75",children:["=",(0,N.jsx)(W.Z,{value:Number(r.rate),decimalScale:6,currency:!1})," ",r.fiat_currency]})]}),(0,N.jsxs)("p",{className:"flex items-center space-x-2 justify-between",children:[(0,N.jsx)("span",{className:"text-xs opacity-50",children:(0,N.jsx)(n.cC,{id:"Est. Total Fees"})}),(0,N.jsxs)("span",{className:"text-xs opacity-75",children:[r.fee[r.fiat_currency]," ",r.fiat_currency]})]}),(0,N.jsx)("div",{className:"border-v2-lily/5 border-t !my-3"}),o?(0,N.jsx)("button",{disabled:!x,className:(0,p.cn)("block !mt-4 py-3 text-center text-base font-semibold w-full rounded-lg",f?"text-[#07090FBF] bg-[#8DA934] hover:bg-opacity-80":"text-v2-lily bg-v2-lily border border-v2-lily/10 bg-opacity-5  hover:bg-opacity-10","disabled:cursor-not-allowed disabled:opacity-30"),onClick:function(){window.open(x,"_blank")},children:(0,N.jsx)(n.cC,{id:"Buy with {0}",values:{0:G[r.id].name}})}):(0,N.jsx)(z.uS,{buttonClassName:"!bg-transparent  !mt-4",overrideContent:(0,N.jsx)("button",{className:(0,p.cn)("block py-3 text-center text-base font-semibold w-full rounded-lg",f?"text-[#07090FBF] bg-[#8DA934] hover:bg-opacity-80":"text-v2-lily bg-v2-lily border border-v2-lily/10 bg-opacity-5  hover:bg-opacity-10"),children:"Connect wallet"})})]})]})},X=r(71932);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=[{chainId:101,address:"So11111111111111111111111111111111111111112",symbol:"SOL",name:"Wrapped SOL",decimals:9,logoURI:"/coins/sol.svg"},{chainId:101,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",symbol:"USDC",name:"USD Coin",decimals:6,logoURI:"/coins/usdc.svg"}],Y=function(){var e,t=(0,s.useState)(),r=t[0],a=t[1],o=(0,s.useState)(void 0),l=o[0],m=o[1],b=(0,x.cI)({defaultValues:{fromCurrency:"USD",dstChainId:"SOLANA",dstToken:$[0],fromValue:{floatValue:100,formattedValue:"100",value:"100"}}}),v=b.control,g=b.watch,j=g("dstToken"),w=(0,f.aM)(["b2b-currencies"],(0,c.Z)(d().mark((function e(){var t,r,n,s,a,o;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.mercuryo.io/v1.6/public/currencies");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,n=r.data,s=n.config,a=n.crypto,o=n.fiat,e.abrupt("return",{config:s,crypto:a,fiat:o});case 8:case"end":return e.stop()}}),e)})))).data;(0,s.useEffect)((function(){if(w){var e=w.config,t=w.fiat;if(e&&t){var r=t.map((function(t){return{iconUrl:e.icons[t].svg,fullName:e.display_options[t].fullname,displayDigits:e.display_options[t].display_digits,fiat:t}})),n=[];Object.keys(e.networks).forEach((function(t){var r=e.networks[t],s={name:r.name,address:r.name,symbol:t,chainId:1,decimals:0,logoURI:r.icons.svg};n.push(s)})),a(r)}}}),[w]);var k=g(),O=(0,y.Nr)(s.useMemo((function(){return[k.fromCurrency,k.fromValue,k.dstToken]}),[k.fromCurrency,k.fromValue,k.dstToken]),500),C=(0,f.aM)(["quotes"].concat((0,i.Z)(O)),(0,c.Z)(d().mark((function e(){var t,r,n,s,a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.mercuryo.io/v1.6/public/widget/buy/rate?network=SOLANA&from=".concat(k.fromCurrency,"&to=").concat(k.dstToken.symbol,"&amount=").concat(k.fromValue.floatValue,"&widget_id=").concat("d748a569-0dbe-4766-b0c8-a21dcb2a6ff5"));case 3:return t=e.sent,e.next=6,t.json();case 6:if(r=e.sent,n=r.data,200!==r.status){e.next=10;break}return e.abrupt("return",[Q(Q({},n),{},{id:"mercuryo"})]);case 10:if(400!==r.status){e.next=14;break}return s=n[k.fromCurrency].min,a=n[k.fromCurrency].max,e.abrupt("return",m({min:s,max:a}));case 14:return e.abrupt("return",[]);case 17:return e.prev=17,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 21:case"end":return e.stop()}}),e,null,[[0,17]])}))),{enabled:Boolean(k.fromCurrency&&(null===(e=k.fromValue)||void 0===e?void 0:e.value)&&k.dstToken)}),S=C.data,P=C.fetchStatus,Z=C.isLoading;return(0,s.useEffect)((function(){null!==S&&void 0!==S&&S.length&&m(void 0)}),[S,k.fromCurrency,k.fromValue,k.dstToken]),(0,N.jsxs)("div",{className:"mt-6 w-[470px] max-w-full z-10 bg-white dark:bg-v2-background rounded-2xl p-4 shadow-swap2-light dark:shadow-swap2-dark",children:[(0,N.jsx)("form",{className:"flex flex-col items-center justify-between w-full",children:(0,N.jsx)("div",{className:"w-full",children:(0,N.jsxs)("div",{className:"relative w-full",children:[(0,N.jsxs)("div",{className:"flex-col space-y-2 relative",children:[(0,N.jsx)("div",{className:"flex justify-between items-center",children:(0,N.jsx)("label",{htmlFor:"fromValue",className:"text-xs md:text-sm font-medium text-black/90 dark:text-white",children:(0,N.jsx)(n.cC,{id:"I want to spend"})})}),(0,N.jsxs)("div",{className:"p-4 h-[62px] bg-v2-background-dark rounded-lg flex justify-between items-center",children:[(0,N.jsx)("div",{className:"pl-2",children:(0,N.jsx)(F,{control:v,name:"fromValue",className:l?"!text-warning":""})}),(0,N.jsx)("div",{children:(0,N.jsx)(I,{control:v,currencyList:r||[]})})]}),l?(0,N.jsxs)("div",{className:"my-2 py-2 px-4 bg-warning/80 rounded-lg text-xs flex items-center text-white space-x-2 w-full leading-tight",children:[(0,N.jsx)("div",{className:"h-3 w-3 mt-0.5 fill-current",children:(0,N.jsx)(X.Z,{fill:"inherit"})}),(0,N.jsx)("div",{className:"flex flex-col",children:(0,N.jsx)("p",{children:u.ag._("Order between {0} ~ {1} {2} is allowed",{0:l.min,1:l.max,2:k.fromCurrency})})})]}):null]}),(0,N.jsx)("div",{className:"my-7 bg-v2-background-dark/30 h-[1px] w-full"}),(0,N.jsxs)("div",{className:"flex-col space-y-2 relative",children:[(0,N.jsx)("div",{className:"flex justify-between items-center",children:(0,N.jsx)("label",{htmlFor:"toValue",className:"text-xs md:text-sm font-medium text-black/90 dark:text-white",children:(0,N.jsx)(n.cC,{id:"To buy"})})}),(0,N.jsx)("div",{className:"w-full justify-between mt-2 p-1 rounded-lg dark:bg-v2-background-dark",children:k.dstToken?(0,N.jsx)(x.Qr,{control:v,name:"dstToken",render:function(e){var t=e.field,r=(t.name,t.onChange),n=(t.onBlur,t.value);return(0,N.jsx)("div",{className:(0,p.cn)("h-[54px] rounded-xl flex items-center px-2 bg-v2-background-dark","text-sm lg:text-base","group-hover/select:border-v2-active-state group-hover/select:bg-[rgba(199,242,132,0.2)] group-hover/select:shadow-swap-input-dark"),children:(0,N.jsxs)(V.Z,{onChange:r,className:"!bg-transparent !px-3 !py-1 !text-v2-lily flex justify-between text-sm w-full",contentClassName:"w-full",data:$,value:n,rowRenderer:function(e){return(0,N.jsxs)("div",{className:"flex items-center space-x-3 w-full",children:[(0,N.jsx)("img",{src:null===e||void 0===e?void 0:e.logoURI,alt:"",className:"w-6 h-6 object-contain shrink-0"}),(0,N.jsx)("p",{className:"text-sm font-semibold text-white",children:null===e||void 0===e?void 0:e.symbol})]})},children:[(0,N.jsxs)("div",{className:"flex items-center space-x-3 w-full",children:[(0,N.jsx)("img",{src:null===j||void 0===j?void 0:j.logoURI,alt:"",className:"w-6 h-6 object-contain shrink-0"}),(0,N.jsx)("p",{className:"text-sm font-semibold text-white",children:null===j||void 0===j?void 0:j.symbol})]}),(0,N.jsx)("div",{className:"ml-auto text-black/25 dark:text-white/25 group-hover/select:text-[#00D1DF] dark:group-hover/select:text-dark-active-state fill-current",children:(0,N.jsx)(h.Z,{})})]})})}}):(0,N.jsx)(R.O,{className:"h-14"})})]})]})})}),Z&&"fetching"!==P?null:(0,N.jsx)("div",{className:"border-v2-background-dark/30 border-t !my-6"}),(null===S||void 0===S?void 0:S.length)>0&&"fetching"!==P&&(0,N.jsx)("div",{className:"mt-6",children:(0,N.jsx)("div",{className:"space-y-2 mt-4",children:null===S||void 0===S?void 0:S.map((function(e,t){return(0,N.jsx)(H,{quote:e,isTheBest:0===t},e.fiat_currency)}))})}),0===(null===S||void 0===S?void 0:S.length)&&"fetching"!==P&&(0,N.jsx)("div",{className:"mt-6",children:(0,N.jsx)("h2",{className:"text-sm font-medium text-center text-v2-lily/50",children:(0,N.jsx)(n.cC,{id:"No quotes found"})})}),"fetching"===P&&(0,N.jsx)("div",{className:"mt-6",children:(0,N.jsxs)("div",{className:"space-y-2 mt-4",children:[(0,N.jsx)(R.O,{style:{height:76}}),(0,N.jsx)(R.O,{style:{height:76}})]})})]})},ee=!0,te=function(){return(0,N.jsx)(a.Z,{title:(0,N.jsx)(n.cC,{id:"Onramp to Solana instantly!"}),children:(0,N.jsx)(Y,{})})}},45358:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bridge/onramp",function(){return r(32254)}])}},function(e){e.O(0,[4508,2420,3215,7821,5516,9774,2888,179],(function(){return t=45358,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=onramp-8848151372f2b551.js.map