(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{10124:function(e,t,n){Promise.resolve().then(n.bind(n,41908)),Promise.resolve().then(n.bind(n,77705)),Promise.resolve().then(n.bind(n,39246)),Promise.resolve().then(n.bind(n,95440)),Promise.resolve().then(n.bind(n,13809)),Promise.resolve().then(n.bind(n,12316))},34492:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=n(2265),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},r=i.useState,o=i.useEffect,l=i.useLayoutEffect,s=i.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!a(e,n)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),i=r({inst:{value:n,getSnapshot:t}}),a=i[0].inst,u=i[1];return l(function(){a.value=n,a.getSnapshot=t,c(a)&&u({inst:a})},[e,n,t]),o(function(){return c(a)&&u({inst:a}),e(function(){c(a)&&u({inst:a})})},[e]),s(n),n};t.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:u},85107:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=n(2265),a=n(10554),r="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=a.useSyncExternalStore,l=i.useRef,s=i.useEffect,c=i.useMemo,u=i.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,i,a){var d=l(null);if(null===d.current){var g={hasValue:!1,value:null};d.current=g}else g=d.current;var f=o(e,(d=c(function(){function e(e){if(!s){if(s=!0,o=e,e=i(e),void 0!==a&&g.hasValue){var t=g.value;if(a(t,e))return l=t}return l=e}if(t=l,r(o,e))return t;var n=i(e);return void 0!==a&&a(t,n)?t:(o=e,l=n)}var o,l,s=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,i,a]))[0],d[1]);return s(function(){g.hasValue=!0,g.value=f},[f]),u(f),f}},10554:function(e,t,n){"use strict";e.exports=n(34492)},35006:function(e,t,n){"use strict";e.exports=n(85107)},39246:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var i=n(57437);n(29747);var a=n(2265),r=n(84963),o=n(9772),l=n.n(o),s=n(88909),c=n(94697),u=n(15634),d=e=>{let{data:t={},sectionRef:n}=e,{subtitle:a,title:r,secondaryTitle:o,content:d,cta:g}=t||{};return(0,i.jsxs)("section",{ref:n,className:"p-foundation__hero f-v f-j-c has-min-height",children:[(0,i.jsxs)("div",{className:l()("p-foundation__hero__main f-v f-j-c w-2",{"has-content":d}),children:[(0,i.jsxs)("h1",{children:[r&&(0,i.jsx)(s.default,{content:r,className:"p-foundation__hero__top w-2 t-h-3",splitLetters:!0,splitLettersApplyFont:!0}),o&&(0,i.jsx)(s.default,{content:o,className:"p-foundation__hero__bottom w-2 t-h-3",splitLetters:!0,splitLettersApplyFont:!0})]}),a&&(0,i.jsx)("p",{className:"p-foundation__hero__subtitle t-h-6 t-uppercase",children:a})]}),(0,i.jsxs)("div",{className:"p-foundation__hero__content f-v f-a-s gap-2",children:[d&&(0,i.jsx)(c.Z,{blocks:d,className:"wysiwyg is-large-font w-5 cr-gray-2"}),g&&(null==g?void 0:g.link)&&(null==g?void 0:g.label)&&(0,i.jsx)(u.Z,{className:"btn is-green w-7",link:g.link,title:g.label,style:{"--text-color":"var(--cr-green)"},hasIcon:!0})]})]})},g=n(7481),f=n(53960),v=n(29365);let h=e=>{let{backgroundMedias:t,sectionsData:n,windowWidth:i}=e;return t.map((e,t)=>{let a,r={fileData:e,style:{zIndex:t,width:"100%",maxWidth:"1000px",margin:"auto"}},o=i<=600;if(0===t){r.style.maxWidth="900px";let e=o?[200,300]:[-.6*n[1].sectionHeight,.18*n[1].sectionHeight];a=(0,g.k)({translateXConfig:{trigger:[0,n[1].sectionEndPoint],value:o?[-150,-300]:[-300,150]},translateYConfig:{trigger:[0,n[1].sectionEndPoint],value:e},scaleConfig:{trigger:[0,n[1].sectionEndPoint],value:o?[.6,1.5]:[.6,.6]}})}return 1===t&&(r.style.maxWidth="800px",r.style.x=-200,o&&(r.fileData=null),a=(0,g.k)({translateYConfig:{trigger:[0,n[1].sectionEndPoint],value:[.5*n[1].sectionHeight,1.12*n[1].sectionHeight]}})),2===t&&(a=(0,g.k)({translateYConfig:{trigger:[0,n[1].sectionEndPoint],value:o?[150,120]:[-300,0]},translateXConfig:{trigger:[0,n[1].sectionEndPoint],value:o?[150,120]:[.4*i,.9*i]},scaleConfig:{trigger:[0,n[1].sectionEndPoint],value:o?[.8,1.5]:[.75,.75]}})),{...r,animationConfig:a}})};var m=e=>{let{data:t}=e,{foundationHero:n,foundationInfo:o,backgroundMedias:l}=t||{},{draggableBlocks:s}=o||{},{width:c}=(0,v.Z)(),u=(0,a.useRef)([]),m=(0,f.Z)(u),p=(0,a.useMemo)(()=>m.length>0&&l?h({backgroundMedias:l,sectionsData:m,windowWidth:c}):[],[m,l,c]);return(0,i.jsxs)("div",{className:"p-foundation c",children:[(0,i.jsx)(g.Z,{data:p}),(0,i.jsx)(d,{sectionRef:e=>u.current[0]=e,data:n}),s&&(0,i.jsx)(r.Z,{sectionRef:e=>u.current[1]=e,data:o,containerId:"foundation-intro",titleAlign:"top"})]})}},95440:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var i=n(57437);n(29747);var a=n(2265),r=n(84963),o=n(88909),l=n(31841),s=n(15634),c=n(33575),u=n(50496),d=e=>{var t,n,a,r,d,g,f;let{data:v={},sectionRef:h}=e,{titles:m,paragraphTitle:p,paragraph:x,cta:y,colorScheme:b}=v||{};return(0,i.jsxs)("section",{ref:h,className:"s-home-hero f-v f-a-s has-min-height ",children:[(0,i.jsxs)("div",{className:"s-home-hero__inner f-v f-a-s f-j-e",children:[(0,l.Bk)(m)&&(0,i.jsx)("h1",{className:"s-home-hero__titles w-1",children:m.map(e=>{let{_key:t,title:n}=e||{};return n?(0,i.jsx)(o.default,{content:n,delay:1.5,className:"s-home-hero__title t-h-2 w-1",splitLetters:!0,splitLettersApplyFont:!0},t):null})}),(0,i.jsxs)("div",{className:"s-home-hero__content",children:[p&&(0,i.jsx)(c.Z,{className:"s-home-hero__subtitle",delay:1.5,content:p}),x&&(0,i.jsx)(o.default,{content:x,delay:1.5,aniSpeedFactor:.02,className:"s-home-hero__paragraph wysiwyg cr-white-opacity w-5"}),y&&(null==y?void 0:y.link)&&(null==y?void 0:y.label)&&(0,i.jsx)(s.Z,{className:"s-home-hero__action btn w-7",link:y.link,title:y.label,style:(0,l.vx)({borderColor:null!==(d=null==b?void 0:null===(t=b.color)||void 0===t?void 0:t.hex)&&void 0!==d?d:"var(--cr-green)",bgColor:(null==b?void 0:null===(n=b.color)||void 0===n?void 0:n.rgb)?(0,l.YR)(b.color.rgb,.15):"rgba(7, 211, 186, 0.15)",hoverBorderColor:null!==(g=null==b?void 0:null===(a=b.color)||void 0===a?void 0:a.hex)&&void 0!==g?g:"var(--cr-green)",hoverBgColor:null!==(f=null==b?void 0:null===(r=b.color)||void 0===r?void 0:r.hex)&&void 0!==f?f:"var(--cr-green)"}),hasIcon:!0,aniTextDelay:30})]})]}),(0,i.jsx)(u.default,{})]})},g=n(7481),f=n(29365),v=n(53960);let h=e=>{let{backgroundMedia:t,sectionsData:n,windowWidth:i}=e,{landscape:a,organism1:r,organism2:o}=t,l=i<=600;return[{fileData:a,style:{zIndex:3},objectType:"cover",isHero:!0,className:"".concat("wide"===a.mediaSizeType?"is-wide":""),triggerAnimation:{point:100,initial:{opacity:1,transition:{opacity:{duration:.6}}},animate:{opacity:0,transition:{opacity:{duration:1,delay:.6}}}},videoLayerAnimation:{transform:e=>({trigger:[0,n[0].sectionEndPoint],value:["matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)","matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ".concat(n[0].sectionHeight*"".concat(-((e+1.2)*.09)),", 0, 1)")]})},videoLayerTriggerAnimation:[{point:100,initial:{filter:"blur(0px)",transition:{ease:"linear",duration:.4,delay:.6}},animate:{filter:"blur(3px)",transition:{ease:"linear",duration:.4,delay:.4}}},{point:100,initial:{scale:l?.5:1,transition:{scale:{duration:1,delay:.2}}},animate:{scale:.3,transition:{scale:{duration:1,delay:.2}}}},{point:100,initial:{scale:l?2:3.3,transition:{scale:{duration:1,delay:.1}}},animate:{scale:1.2,transition:{scale:{duration:1,delay:.3}}}}]},{fileData:r,style:{zIndex:3,maxWidth:"1200px",margin:"auto"},triggerAnimation:{point:100,initial:{scale:6,opacity:0,transition:{scale:{duration:.3},opacity:{duration:.2}}},animate:{scale:1,opacity:1,transition:{scale:{duration:.3,delay:.6},opacity:{duration:.2,delay:.6}}}},animationConfig:(0,g.k)({translateYConfig:{trigger:[n[1].sectionStartPoint,n[4].sectionEndPoint],value:l?[150,300]:[-100,100]},translateXConfig:{trigger:[n[1].sectionStartPoint,n[4].sectionEndPoint],value:[60,.4*i]},scaleConfig:{trigger:[n[1].sectionStartPoint,.8*n[3].sectionStartPoint],value:[1,.8]}})},{fileData:o,style:{zIndex:2,width:"60%",maxWidth:"1200px",margin:"auto"},animationConfig:(0,g.k)({filterConfig:{trigger:[.8*n[3].sectionStartPoint,n[3].sectionStartPoint],value:["blur(10px)","blur(0px)"]},opacityConfig:{trigger:[.8*n[3].sectionStartPoint,n[3].sectionStartPoint],value:[0,1]},translateYConfig:{trigger:[.8*n[3].sectionStartPoint,n[3].sectionEndPoint],value:l?[0,136]:[-360,-136]},translateXConfig:{trigger:[.8*n[3].sectionStartPoint,n[3].sectionEndPoint],value:[-.66*i,-.5*i]}})}]};var m=e=>{let{data:t}=e,{homeHero:n,homeIntro:o,homePanel:l,homeJoin:s,homeAction:c,backgroundMedia:u}=t||{},m=[{data:n,sectionId:"home-hero",isHero:!0},{data:o,sectionId:"home-intro",titleAlign:"top"},{data:l,sectionId:"home-panel",isLargeFont:!0,titleAlign:"top"},{data:s,sectionId:"home-join",titleAlign:"top"},{data:c,sectionId:"home-action",isLargeFont:!0,titleAlign:"top"}],{width:p}=(0,f.Z)(),x=(0,a.useRef)([]),y=(0,v.Z)(x),b=(0,a.useMemo)(()=>y.length>0&&u?h({backgroundMedia:u,sectionsData:y,windowWidth:p}):[],[y,u,p]);return(0,i.jsxs)("div",{className:"p-home c",children:[(0,i.jsx)(g.Z,{data:b}),m.map((e,t)=>{let{isHero:a,isLargeFont:o,data:l,sectionId:s,titleAlign:c}=e||{};return"home-hero"===s?(0,i.jsx)(d,{data:n,sectionRef:e=>x.current[t]=e},s):(0,i.jsx)(r.Z,{sectionRef:e=>x.current[t]=e,data:l,containerId:s,isHero:a,isLargeFont:o,titleAlign:c,htmlTitleTag:a?"h1":"h2"},s)})]})}},13809:function(e,t,n){"use strict";var i=n(57818);t.default=(0,i.default)(()=>Promise.resolve().then(n.bind(n,39246)),{loadableGenerated:{webpack:()=>[39246]}})},12316:function(e,t,n){"use strict";var i=n(57818);t.default=(0,i.default)(()=>Promise.resolve().then(n.bind(n,95440)),{loadableGenerated:{webpack:()=>[95440]}})},7481:function(e,t,n){"use strict";n.d(t,{k:function(){return _},Z:function(){return w}});var i=n(57437);n(21843);var a=n(2265);n(67326);var r=n(9772),o=n.n(r),l=n(96649),s=n(49754),c=n(30031),u=n(36291),d=a.memo(e=>{let{index:t,animationConfig:n,className:a,children:r}=e,{scrollY:o}=(0,s.v)(),l=n.transform(t),d=(0,c.H)(o,l.trigger,l.value);return(0,i.jsx)(u.E.div,{className:a,style:{transform:d},children:r})}),g=n(56179),f=a.memo(function(e){let{triggerAnimation:t,children:n}=e,{scrollY:r}=(0,s.v)(),{point:l,initial:c,animate:d,transition:f}=t||{},[v,h]=(0,a.useState)(!1);return(0,g.W)(r,"change",e=>{if(!l)return null;e>=l?h(!0):h(!1)}),(0,i.jsx)(u.E.div,{className:o()("c-video-layer__item__trigger p-fill",{"is-triggered":v}),initial:c,animate:v?d:c,transition:f,children:n})});let v=e=>{let{data:t,triggerAnimation:n,objectType:a,isHero:r}=e,{point:s,initial:c,animate:u}=n||{},d=o()({"object-fit":"cover"===a});return s&&c&&u?(0,i.jsx)(f,{triggerAnimation:n,children:(0,i.jsx)(l.default,{data:t,className:d,isHero:r})}):(0,i.jsx)(l.default,{data:t,className:d,isHero:r})},h=e=>{let{data:t,index:n,triggerAnimation:a,animationConfig:r,objectType:l,isHero:s}=e,c={data:t,triggerAnimation:a,objectType:l,isHero:s};return void 0!==r?(0,i.jsx)(d,{index:n,animationConfig:r,className:o()("c-video-layer__item"),children:(0,i.jsx)(v,{...c})}):(0,i.jsx)("div",{className:o()("c-video-layer__item"),children:(0,i.jsx)(v,{...c})})};var m=e=>{let{data:t,isHero:n,objectType:a,animationConfig:r,videoLayerTriggerAnimation:l}=e,{fileData:s,className:c}=t||{},{videos:u}=s||{};return(0,i.jsx)("div",{className:o()("c-video-layer",c),children:u.map((e,t)=>{let o="".concat((null==e?void 0:e._type)||"video","-").concat(t),s=l?l[t]:null;return(0,i.jsx)(h,{data:e,index:t,triggerAnimation:s,animationConfig:r,objectType:a,isHero:n},o)})})},p=n(3078);function x(e){let{children:t,scrollY:n,triggerAnimation:r}=e,{point:o,initial:l,animate:s,transition:c}=r||{},[d,f]=(0,a.useState)(!1);return(0,g.W)(n,"change",e=>{if(!o)return null;e>=o?f(!0):f(!1)}),(0,i.jsx)(u.E.div,{className:"c-ani-background-medias__item__trigger",initial:l,animate:d?s:l,transition:c,children:t})}let y=e=>{let{scrollY:t,animationConfig:n}=e,{filterBlur:i,opacity:a,translateY:r,translateX:o,transformScale:l}=n||{},s=(0,c.H)(t,i.trigger,i.value),u=(0,c.H)(t,a.trigger,a.value);return{filter:s,opacity:u,x:(0,c.H)(t,o.trigger,o.value),y:(0,c.H)(t,r.trigger,r.value),scale:(0,c.H)(t,l.trigger,l.value)}},b=e=>{let{children:t,animationConfig:n,fileData:a,scrollY:r,style:l}=e,s=y({scrollY:r,animationConfig:n});return(0,i.jsx)(u.E.div,{className:o()("c-ani-background-medias__item",{"is-video-layer":"videoLayer"===a._type}),style:{...l,...s},children:t})};function j(e){let{data:t,scrollY:n}=e,{fileData:a,videoBounce:r,objectType:s,animationConfig:c,triggerAnimation:u,style:d,videoLayerAnimation:g,videoLayerTriggerAnimation:f,isHero:v}=t||{};if(!a)return null;let h=()=>{switch(a._type){case"videoTransparent":return r?(0,i.jsx)(p.default,{data:a,maxWidth:r.maxWidth,className:o()({"object-fit":"cover"===s})}):(0,i.jsx)(l.default,{data:a,className:o()({"object-fit":"cover"===s})});case"video":return(0,i.jsx)(l.default,{data:a,className:o()({"object-fit":"cover"===s})});case"videoLayer":return(0,i.jsx)(m,{data:t,animationConfig:g,videoLayerTriggerAnimation:f,objectType:s,isHero:v});default:return null}};return u?c?(0,i.jsx)(b,{animationConfig:c,fileData:a,scrollY:n,style:d,children:(0,i.jsx)(x,{scrollY:n,triggerAnimation:u,children:h()})}):(0,i.jsx)("div",{className:o()("c-ani-background-medias__item",{"is-video-layer":"videoLayer"===a._type}),style:d,children:(0,i.jsx)(x,{scrollY:n,triggerAnimation:u,children:h()})}):c?(0,i.jsx)(b,{animationConfig:c,fileData:a,scrollY:n,style:d,children:h()}):(0,i.jsx)("div",{className:o()("c-ani-background-medias__item",{"is-video-layer":"videoLayer"===a._type}),style:d,children:h()})}let _=e=>{let{filterConfig:t,opacityConfig:n,translateYConfig:i,translateXConfig:a,scaleConfig:r}=e;return{filterBlur:{trigger:(null==t?void 0:t.trigger)||[0,0],value:(null==t?void 0:t.value)||["blur(0px)","blur(0px)"]},opacity:{trigger:(null==n?void 0:n.trigger)||[0,0],value:(null==n?void 0:n.value)||[1,1]},translateY:{trigger:(null==i?void 0:i.trigger)||[1],value:(null==i?void 0:i.value)||[0]},translateX:{trigger:(null==a?void 0:a.trigger)||[1],value:(null==a?void 0:a.value)||[0]},transformScale:{trigger:(null==r?void 0:r.trigger)||[1],value:(null==r?void 0:r.value)||[1]}}};function w(e){let{data:t}=e,{scrollY:n}=(0,s.v)();return t?(0,i.jsx)("div",{className:"c-ani-background-medias",children:t.map((e,t)=>(0,i.jsx)(j,{index:t,data:e,scrollY:n},t))}):null}},84963:function(e,t,n){"use strict";var i=n(57437);n(47266);var a=n(2265),r=n(9772),o=n.n(r),l=n(31841),s=n(88909),c=n(94697),u=n(82037),d=n(36405),g=n(91813),f=n(50496);t.Z=e=>{let{data:t={},containerId:n,className:r,isHero:v=!1,isLargeFont:h=!1,titleAlign:m=null,titleMaxWidth:p=!1,sectionRef:x,htmlTag:y="section",htmlTitleTag:b="h2",...j}=e,_=y||a.Fragment,w=b||a.Fragment,{title:E,secondaryTitle:S,paragraph:N,colorScheme:k,draggableBlocks:P}=t||{},{hasBlockCounter:C}=P||{},[A,H]=(0,a.useState)(!1),L=()=>{H(!0)};return(0,i.jsxs)(_,{ref:x,className:o()("c-draggable-panel f-v gap-3",r,{"has-min-height":v,"has-min-height-desktop":!v,["title-".concat(m)]:m}),...j,children:[(0,l.Bk)(null==P?void 0:P.draggableBlocks)&&(0,i.jsx)(d.Z,{containerId:n,className:"c-draggable-panel__container",children:P.draggableBlocks.map((e,t)=>(0,i.jsx)(u.Z,{containerId:n,index:t,length:P.draggableBlocks.length,data:e,isClickWindow:A,onHandleClickWindow:L,children:(0,i.jsx)(g.Z,{data:e,colorScheme:k,hasBlockCounter:C,index:t})},e._key))}),(E||S)&&(0,i.jsxs)("div",{className:o()("c-draggable-panel__content f-v gap-1",{"is-clicked":A}),children:[(0,i.jsxs)(w,{className:"c-draggable-panel__main",children:[E&&(0,i.jsx)(s.default,{content:E,className:o()("c-draggable-panel__title",{"t-h-2":!h,"t-h-1":h,"w-3":p,"w-1":!p}),splitLetters:!0,splitLettersApplyFont:!0}),S&&(0,i.jsx)(s.default,{content:S,className:o()("c-draggable-panel__subtitle w-1",{"t-h-2":!h,"t-h-1":h}),splitLetters:!0,splitLettersApplyFont:!0})]}),N&&(0,i.jsx)(c.Z,{blocks:N,className:"c-draggable-panel__paragraph wysiwyg cr-white-opacity w-5"})]}),(0,i.jsx)(f.default,{})]})}},50496:function(e,t,n){"use strict";var i=n(57437);n(71065);var a=n(9772),r=n.n(a);n(2265);var o=n(13473);t.default=e=>{let{lineHeight:t=.5,duration:n=4,delay:a=0,isTop:l=!1,isCenter:s=!1,className:c}=e,{ref:u,inView:d}=(0,o.YD)({threshold:0});return(0,i.jsx)("div",{ref:u,className:r()("g-glow-line",c,{"is-top":l,"is-center":s,"is-bottom":!(l&&s),"is-animated":d}),style:{"--glow-line-height":"".concat(t,"px"),"--duration":"".concat(n,"s"),"--delay":"".concat(a,"s")},children:(0,i.jsx)("span",{className:"g-glow-line__inner"})})}},3078:function(e,t,n){"use strict";var i=n(57437);n(27149);var a=n(9772),r=n.n(a),o=n(2265),l=n(96649),s=n(36291),c=n(36004);t.default=e=>{let{data:t={},maxWidth:n,className:a}=e,[u,d]=(0,o.useState)(0),[g,f]=(0,o.useState)(15),[v,h]=(0,o.useState)(0),[m,p]=(0,o.useState)(15),{isMobileScreen:x}=(0,c.U)(),y=n&&x?.5*n:n;return(0,i.jsx)(s.E.div,{className:r()("c-video-bounce",a),animate:{x:u,y:v},transition:{ease:"linear"},onAnimationComplete:()=>{d(u+g),h(v+m),u>=0&&f(-15),u<=-window.innerWidth+y&&f(15),v>=window.innerHeight/2&&p(-15),v<=-window.innerHeight/2&&p(15)},children:(0,i.jsx)(l.default,{data:t,style:{maxWidth:"".concat(y,"px")}})})}},53960:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(2265),a=n(11849);function r(e){let[t,n]=(0,i.useState)([]),r=(0,a.w)(e=>e.gAnnouncementHeight),o=(0,i.useCallback)((e,t)=>{if(null!==e){let i=Math.round(e.getBoundingClientRect().height);n(e=>{let n=[...e];if(t>0){var a,o;n[t]={sectionHeight:i,sectionStartPoint:null===(a=n[t-1])||void 0===a?void 0:a.sectionEndPoint,sectionEndPoint:i+(null===(o=n[t-1])||void 0===o?void 0:o.sectionEndPoint)}}else n[t]={sectionHeight:i,sectionStartPoint:r||0,sectionEndPoint:i||0};return n})}},[r]);return(0,i.useEffect)(()=>{e.current.forEach((e,t)=>{e&&o(e,t)})},[e,o]),t}},29365:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(2265);function a(){let{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}}function r(){let[e,t]=(0,i.useState)(a());return(0,i.useEffect)(()=>{function e(){t(a())}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}},11849:function(e,t,n){"use strict";n.d(t,{w:function(){return o}});var i=n(39099);let a=e=>({tokenData:[],setTokenData:t=>e(e=>({tokenData:t}))}),r=e=>({gAnnouncementHeight:0,setGAnnouncementHeight:t=>e(e=>({gAnnouncementHeight:t}))}),o=(0,i.Ue)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...a(...t),...r(...t)}})},29747:function(){},21843:function(){},47266:function(){},71065:function(){},27149:function(){},67326:function(){},56179:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var i=n(2265);function a(e,t,n){(0,i.useInsertionEffect)(()=>e.on(t,n),[e,t,n])}},39099:function(e,t,n){"use strict";n.d(t,{Ue:function(){return g}});let i=e=>{let t;let n=new Set,i=(e,i)=>{let a="function"==typeof e?e(t):e;if(!Object.is(a,t)){let e=t;t=(null!=i?i:"object"!=typeof a||null===a)?a:Object.assign({},t,a),n.forEach(n=>n(t,e))}},a=()=>t,r={setState:i,getState:a,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},o=t=e(i,a,r);return r},a=e=>e?i(e):i;var r=n(2265),o=n(35006);let{useDebugValue:l}=r,{useSyncExternalStoreWithSelector:s}=o,c=!1,u=e=>e,d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?a(e):e,n=(e,n)=>(function(e,t=u,n){n&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);let i=s(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return l(i),i})(t,e,n);return Object.assign(n,t),n},g=e=>e?d(e):d}},function(e){e.O(0,[1812,2579,8195,922,2257,1640,7138,6648,7929,6291,3870,5742,5601,5363,8909,7496,2971,7023,1744],function(){return e(e.s=10124)}),_N_E=e.O()}]);