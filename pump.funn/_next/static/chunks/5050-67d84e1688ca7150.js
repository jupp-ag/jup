"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5050],{65050:function(e,t,r){r.d(t,{VY:function(){return H},fC:function(){return W},h_:function(){return I},xz:function(){return Y}});var o=r(13428),n=r(2265),a=r(85744),i=r(42210),l=r(56989),d=r(79249),p=r(31244),u=r(52759),s=r(20966),c=r(92827),f=r(52730),v=r(85606),h=r(9381),g=r(67256),m=r(73763),w=r(85859),x=r(17552);let P="Popover",[y,E]=(0,l.b)(P,[c.D7]),b=(0,c.D7)(),[C,O]=y(P),_=(0,n.forwardRef)((e,t)=>{let{__scopePopover:r,...l}=e,d=O("PopoverTrigger",r),p=b(r),u=(0,i.e)(t,d.triggerRef),s=(0,n.createElement)(h.WV.button,(0,o.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":d.open,"aria-controls":d.contentId,"data-state":$(d.open)},l,{ref:u,onClick:(0,a.M)(e.onClick,d.onOpenToggle)}));return d.hasCustomAnchor?s:(0,n.createElement)(c.ee,(0,o.Z)({asChild:!0},p),s)}),A="PopoverPortal",[R,D]=y(A,{forceMount:void 0}),F="PopoverContent",M=(0,n.forwardRef)((e,t)=>{let r=D(F,e.__scopePopover),{forceMount:a=r.forceMount,...i}=e,l=O(F,e.__scopePopover);return(0,n.createElement)(v.z,{present:a||l.open},l.modal?(0,n.createElement)(k,(0,o.Z)({},i,{ref:t})):(0,n.createElement)(Z,(0,o.Z)({},i,{ref:t})))}),k=(0,n.forwardRef)((e,t)=>{let r=O(F,e.__scopePopover),l=(0,n.useRef)(null),d=(0,i.e)(t,l),p=(0,n.useRef)(!1);return(0,n.useEffect)(()=>{let e=l.current;if(e)return(0,w.Ry)(e)},[]),(0,n.createElement)(x.Z,{as:g.g7,allowPinchZoom:!0},(0,n.createElement)(S,(0,o.Z)({},e,{ref:d,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),p.current||null===(t=r.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,a.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,r=0===t.button&&!0===t.ctrlKey,o=2===t.button||r;p.current=o},{checkForDefaultPrevented:!1}),onFocusOutside:(0,a.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})))}),Z=(0,n.forwardRef)((e,t)=>{let r=O(F,e.__scopePopover),a=(0,n.useRef)(!1),i=(0,n.useRef)(!1);return(0,n.createElement)(S,(0,o.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,n;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(a.current||null===(n=r.triggerRef.current)||void 0===n||n.focus(),t.preventDefault()),a.current=!1,i.current=!1},onInteractOutside:t=>{var o,n;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(a.current=!0,"pointerdown"!==t.detail.originalEvent.type||(i.current=!0));let l=t.target;(null===(n=r.triggerRef.current)||void 0===n?void 0:n.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&i.current&&t.preventDefault()}}))}),S=(0,n.forwardRef)((e,t)=>{let{__scopePopover:r,trapFocus:a,onOpenAutoFocus:i,onCloseAutoFocus:l,disableOutsidePointerEvents:s,onEscapeKeyDown:f,onPointerDownOutside:v,onFocusOutside:h,onInteractOutside:g,...m}=e,w=O(F,r),x=b(r);return(0,p.EW)(),(0,n.createElement)(u.M,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:i,onUnmountAutoFocus:l},(0,n.createElement)(d.XB,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:g,onEscapeKeyDown:f,onPointerDownOutside:v,onFocusOutside:h,onDismiss:()=>w.onOpenChange(!1)},(0,n.createElement)(c.VY,(0,o.Z)({"data-state":$(w.open),role:"dialog",id:w.contentId},x,m,{ref:t,style:{...m.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});function $(e){return e?"open":"closed"}let W=e=>{let{__scopePopover:t,children:r,open:o,defaultOpen:a,onOpenChange:i,modal:l=!1}=e,d=b(t),p=(0,n.useRef)(null),[u,f]=(0,n.useState)(!1),[v=!1,h]=(0,m.T)({prop:o,defaultProp:a,onChange:i});return(0,n.createElement)(c.fC,d,(0,n.createElement)(C,{scope:t,contentId:(0,s.M)(),triggerRef:p,open:v,onOpenChange:h,onOpenToggle:(0,n.useCallback)(()=>h(e=>!e),[h]),hasCustomAnchor:u,onCustomAnchorAdd:(0,n.useCallback)(()=>f(!0),[]),onCustomAnchorRemove:(0,n.useCallback)(()=>f(!1),[]),modal:l},r))},Y=_,I=e=>{let{__scopePopover:t,forceMount:r,children:o,container:a}=e,i=O(A,t);return(0,n.createElement)(R,{scope:t,forceMount:r},(0,n.createElement)(v.z,{present:r||i.open},(0,n.createElement)(f.h,{asChild:!0,container:a},o)))},H=M},92827:function(e,t,r){r.d(t,{ee:function(){return M},Eh:function(){return Z},VY:function(){return k},fC:function(){return F},D7:function(){return m}});var o=r(13428),n=r(2265),a=r(33136),i=r(73961),l=r(49473),d=r(9381);let p=(0,n.forwardRef)((e,t)=>{let{children:r,width:a=10,height:i=5,...l}=e;return(0,n.createElement)(d.WV.svg,(0,o.Z)({},l,{ref:t,width:a,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?r:(0,n.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var u=r(42210),s=r(56989),c=r(16459),f=r(51030),v=r(94977);let h="Popper",[g,m]=(0,s.b)(h),[w,x]=g(h),P=(0,n.forwardRef)((e,t)=>{let{__scopePopper:r,virtualRef:a,...i}=e,l=x("PopperAnchor",r),p=(0,n.useRef)(null),s=(0,u.e)(t,p);return(0,n.useEffect)(()=>{l.onAnchorChange((null==a?void 0:a.current)||p.current)}),a?null:(0,n.createElement)(d.WV.div,(0,o.Z)({},i,{ref:s}))}),y="PopperContent",[E,b]=g(y),C=(0,n.forwardRef)((e,t)=>{var r,p,s,h,g,m,w,P;let{__scopePopper:b,side:C="bottom",sideOffset:O=0,align:_="center",alignOffset:F=0,arrowPadding:M=0,avoidCollisions:k=!0,collisionBoundary:Z=[],collisionPadding:S=0,sticky:$="partial",hideWhenDetached:W=!1,updatePositionStrategy:Y="optimized",onPlaced:I,...H}=e,V=x(y,b),[z,X]=(0,n.useState)(null),B=(0,u.e)(t,e=>X(e)),[T,K]=(0,n.useState)(null),N=(0,v.t)(T),j=null!==(r=null==N?void 0:N.width)&&void 0!==r?r:0,U=null!==(p=null==N?void 0:N.height)&&void 0!==p?p:0,q="number"==typeof S?S:{top:0,right:0,bottom:0,left:0,...S},G=Array.isArray(Z)?Z:[Z],J=G.length>0,L={padding:q,boundary:G.filter(A),altBoundary:J},{refs:Q,floatingStyles:ee,placement:et,isPositioned:er,middlewareData:eo}=(0,a.YF)({strategy:"fixed",placement:C+("center"!==_?"-"+_:""),whileElementsMounted:(...e)=>(0,i.Me)(...e,{animationFrame:"always"===Y}),elements:{reference:V.anchor},middleware:[(0,l.cv)({mainAxis:O+U,alignmentAxis:F}),k&&(0,l.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===$?(0,l.dr)():void 0,...L}),k&&(0,l.RR)({...L}),(0,l.dp)({...L,apply:({elements:e,rects:t,availableWidth:r,availableHeight:o})=>{let{width:n,height:a}=t.reference,i=e.floating.style;i.setProperty("--radix-popper-available-width",`${r}px`),i.setProperty("--radix-popper-available-height",`${o}px`),i.setProperty("--radix-popper-anchor-width",`${n}px`),i.setProperty("--radix-popper-anchor-height",`${a}px`)}}),T&&(0,a.x7)({element:T,padding:M}),R({arrowWidth:j,arrowHeight:U}),W&&(0,l.Cp)({strategy:"referenceHidden",...L})]}),[en,ea]=D(et),ei=(0,c.W)(I);(0,f.b)(()=>{er&&(null==ei||ei())},[er,ei]);let el=null===(s=eo.arrow)||void 0===s?void 0:s.x,ed=null===(h=eo.arrow)||void 0===h?void 0:h.y,ep=(null===(g=eo.arrow)||void 0===g?void 0:g.centerOffset)!==0,[eu,es]=(0,n.useState)();return(0,f.b)(()=>{z&&es(window.getComputedStyle(z).zIndex)},[z]),(0,n.createElement)("div",{ref:Q.setFloating,"data-radix-popper-content-wrapper":"",style:{...ee,transform:er?ee.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:eu,"--radix-popper-transform-origin":[null===(m=eo.transformOrigin)||void 0===m?void 0:m.x,null===(w=eo.transformOrigin)||void 0===w?void 0:w.y].join(" ")},dir:e.dir},(0,n.createElement)(E,{scope:b,placedSide:en,onArrowChange:K,arrowX:el,arrowY:ed,shouldHideArrow:ep},(0,n.createElement)(d.WV.div,(0,o.Z)({"data-side":en,"data-align":ea},H,{ref:B,style:{...H.style,animation:er?void 0:"none",opacity:null!==(P=eo.hide)&&void 0!==P&&P.referenceHidden?0:void 0}}))))}),O={top:"bottom",right:"left",bottom:"top",left:"right"},_=(0,n.forwardRef)(function(e,t){let{__scopePopper:r,...a}=e,i=b("PopperArrow",r),l=O[i.placedSide];return(0,n.createElement)("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[l]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0}},(0,n.createElement)(p,(0,o.Z)({},a,{ref:t,style:{...a.style,display:"block"}})))});function A(e){return null!==e}let R=e=>({name:"transformOrigin",options:e,fn(t){var r,o,n,a,i;let{placement:l,rects:d,middlewareData:p}=t,u=(null===(r=p.arrow)||void 0===r?void 0:r.centerOffset)!==0,s=u?0:e.arrowWidth,c=u?0:e.arrowHeight,[f,v]=D(l),h={start:"0%",center:"50%",end:"100%"}[v],g=(null!==(o=null===(n=p.arrow)||void 0===n?void 0:n.x)&&void 0!==o?o:0)+s/2,m=(null!==(a=null===(i=p.arrow)||void 0===i?void 0:i.y)&&void 0!==a?a:0)+c/2,w="",x="";return"bottom"===f?(w=u?h:`${g}px`,x=`${-c}px`):"top"===f?(w=u?h:`${g}px`,x=`${d.floating.height+c}px`):"right"===f?(w=`${-c}px`,x=u?h:`${m}px`):"left"===f&&(w=`${d.floating.width+c}px`,x=u?h:`${m}px`),{data:{x:w,y:x}}}});function D(e){let[t,r="center"]=e.split("-");return[t,r]}let F=e=>{let{__scopePopper:t,children:r}=e,[o,a]=(0,n.useState)(null);return(0,n.createElement)(w,{scope:t,anchor:o,onAnchorChange:a},r)},M=P,k=C,Z=_}}]);