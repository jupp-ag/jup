"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1],{53547:function(e,t,s){s.d(t,{t0:function(){return W},zv:function(){return b},uA:function(){return v},uc:function(){return $},jb:function(){return B},zb:function(){return I},AV:function(){return m},Ic:function(){return Q},Vs:function(){return Y}});Symbol();const o=Symbol();const n=Object.getPrototypeOf,r=new WeakMap,a=e=>e&&(r.has(e)?r.get(e):n(e)===Object.prototype||n(e)===Array.prototype),i=(e,t=!0)=>{r.set(e,t)},l=e=>"object"===typeof e&&null!==e,c=new WeakMap,d=new WeakSet,u=(e=Object.is,t=((e,t)=>new Proxy(e,t)),s=(e=>l(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),n=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),r=new WeakMap,u=((e,t,s=n)=>{const o=r.get(e);if((null==o?void 0:o[0])===t)return o[1];const a=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return i(a,!0),r.set(e,[t,a]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(a,t))return;const o=Reflect.get(e,t),n={value:o,enumerable:!0,configurable:!0};if(d.has(o))i(o,!1);else if(o instanceof Promise)delete n.value,n.get=()=>s(o);else if(c.has(o)){const[e,t]=c.get(o);n.value=u(e,t(),s)}Object.defineProperty(a,t,n)})),Object.preventExtensions(a)}),p=new WeakMap,f=[1,1],h=(n=>{if(!l(n))throw new Error("object required");const r=p.get(n);if(r)return r;let i=f[0];const g=new Set,m=(e,t=++f[0])=>{i!==t&&(i=t,g.forEach((s=>s(e,t))))};let b=f[1];const y=e=>(t,s)=>{const o=[...t];o[1]=[e,...o[1]],m(o,s)},v=new Map,w=e=>{var t;const s=v.get(e);s&&(v.delete(e),null==(t=s[1])||t.call(s))},I=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),C={deleteProperty(e,t){const s=Reflect.get(e,t);w(t);const o=Reflect.deleteProperty(e,t);return o&&m(["delete",[t],s]),o},set(t,n,r,i){const u=Reflect.has(t,n),f=Reflect.get(t,n,i);if(u&&(e(f,r)||p.has(r)&&e(f,p.get(r))))return!0;w(n),l(r)&&(r=(e=>a(e)&&e[o]||null)(r)||r);let b=r;if(r instanceof Promise)r.then((e=>{r.status="fulfilled",r.value=e,m(["resolve",[n],e])})).catch((e=>{r.status="rejected",r.reason=e,m(["reject",[n],e])}));else{!c.has(r)&&s(r)&&(b=h(r));const e=!d.has(b)&&c.get(b);e&&((e,t)=>{if(v.has(e))throw new Error("prop listener already exists");if(g.size){const s=t[3](y(e));v.set(e,[t,s])}else v.set(e,[t])})(n,e)}return Reflect.set(t,n,b,i),m(["set",[n],r,f]),!0}},W=t(I,C);p.set(n,W);const O=[I,(e=++f[1])=>(b===e||g.size||(b=e,v.forEach((([t])=>{const s=t[1](e);s>i&&(i=s)}))),i),u,e=>{g.add(e),1===g.size&&v.forEach((([e,t],s)=>{if(t)throw new Error("remove already exists");const o=e[3](y(s));v.set(s,[e,o])}));return()=>{g.delete(e),0===g.size&&v.forEach((([e,t],s)=>{t&&(t(),v.set(s,[e]))}))}}];return c.set(W,O),Reflect.ownKeys(n).forEach((e=>{const t=Object.getOwnPropertyDescriptor(n,e);"value"in t&&(W[e]=n[e],delete t.value,delete t.writable),Object.defineProperty(I,e,t)})),W}))=>[h,c,d,e,t,s,n,r,u,p,f],[p]=u();function f(e={}){return p(e)}function h(e,t,s){const o=c.get(e);let n;o||console.warn("Please use proxy object");const r=[],a=o[3];let i=!1;const l=a((e=>{r.push(e),s?t(r.splice(0)):n||(n=Promise.resolve().then((()=>{n=void 0,i&&t(r.splice(0))})))}));return i=!0,()=>{i=!1,l()}}const g=f({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),m={state:g,subscribe:e=>h(g,(()=>e(g))),push(e,t){e!==g.view&&(g.view=e,t&&(g.data=t),g.history.push(e))},reset(e){g.view=e,g.history=[e]},replace(e){g.history.length>1&&(g.history[g.history.length-1]=e,g.view=e)},goBack(){if(g.history.length>1){g.history.pop();const[e]=g.history.slice(-1);g.view=e}},setData(e){g.data=e}},b={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>b.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return b.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(b.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);return`${o}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!b.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);return`${o}wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(b.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(b.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=m.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},y=f({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),v={state:y,subscribe:e=>h(y.events,(()=>e(function(e,t){const s=c.get(e);s||console.warn("Please use proxy object");const[o,n,r]=s;return r(o,n(),t)}(y.events[y.events.length-1])))),initialize(){y.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(y.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){y.connectedWalletId=e},click(e){if(y.enabled){const t={type:"CLICK",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}},track(e){if(y.enabled){const t={type:"TRACK",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}},view(e){if(y.enabled){const t={type:"VIEW",name:e.name,userSessionId:y.userSessionId,timestamp:Date.now(),data:e};y.events.push(t)}}},w=f({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:w,subscribe:e=>h(w,(()=>e(w))),setChains(e){w.chains=e},setWalletConnectUri(e){w.walletConnectUri=e},setIsCustomDesktop(e){w.isCustomDesktop=e},setIsCustomMobile(e){w.isCustomMobile=e},setIsDataLoaded(e){w.isDataLoaded=e},setIsUiLoaded(e){w.isUiLoaded=e},setIsAuth(e){w.isAuth=e}},C=f({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),W={state:C,subscribe:e=>h(C,(()=>e(C))),setConfig(e){var t,s;v.initialize(),I.setChains(e.chains),I.setIsAuth(Boolean(e.enableAuthMode)),I.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),I.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),b.setModalVersionInStorage(),Object.assign(C,e)}};var O=Object.defineProperty,E=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,A=(e,t,s)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const k="https://explorer-api.walletconnect.com",M="wcm",U="js-2.6.2";async function D(e,t){const s=((e,t)=>{for(var s in t||(t={}))j.call(t,s)&&A(e,s,t[s]);if(E)for(var s of E(t))L.call(t,s)&&A(e,s,t[s]);return e})({sdkType:M,sdkVersion:U},t),o=new URL(e,k);return o.searchParams.append("projectId",W.state.projectId),Object.entries(s).forEach((([e,t])=>{t&&o.searchParams.append(e,String(t))})),(await fetch(o)).json()}const P={getDesktopListings:async e=>D("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>D("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>D("/w3m/v1/getInjectedListings",e),getAllListings:async e=>D("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${k}/w3m/v1/getWalletImage/${e}?projectId=${W.state.projectId}&sdkType=wcm&sdkVersion=js-2.6.2`,getAssetImageUrl:e=>`${k}/w3m/v1/getAssetImage/${e}?projectId=${W.state.projectId}&sdkType=wcm&sdkVersion=js-2.6.2`};var S=Object.defineProperty,N=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,R=(e,t,s)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const _=b.isMobile(),V=f({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),$={state:V,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=W.state;if("NONE"===e||"ALL"===t&&!e)return V.recomendedWallets;if(b.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await P.getAllListings(t),o=Object.values(s);o.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),V.recomendedWallets=o}else{const{chains:e,isAuth:s}=I.state,o=e?.join(","),n=b.isArray(t),r={page:1,sdks:s?"auth_v1":void 0,entries:b.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:n?t.join(","):void 0},{listings:a}=_?await P.getMobileListings(r):await P.getDesktopListings(r);V.recomendedWallets=Object.values(a)}return V.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))x.call(t,s)&&R(e,s,t[s]);if(N)for(var s of N(t))T.call(t,s)&&R(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=W.state,{recomendedWallets:n}=V;if("ALL"===o)return V.wallets;n.length?t.excludedIds=n.map((e=>e.id)).join(","):b.isArray(s)&&(t.excludedIds=s.join(",")),b.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:r,search:a}=e,{listings:i,total:l}=_?await P.getMobileListings(t):await P.getDesktopListings(t),c=Object.values(i),d=a?"search":"wallets";return V[d]={listings:[...V[d].listings,...c],total:l,page:r??1},{listings:c,total:l}},getWalletImageUrl:e=>P.getWalletImageUrl(e),getAssetImageUrl:e=>P.getAssetImageUrl(e),resetSearch(){V.search={listings:[],total:0,page:1}}},z=f({open:!1}),B={state:z,subscribe:e=>h(z,(()=>e(z))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:o}=I.state;if(b.removeWalletConnectDeepLink(),I.setWalletConnectUri(e?.uri),I.setChains(e?.chains),m.reset("ConnectWallet"),s&&o)z.open=!0,t();else{const e=setInterval((()=>{const s=I.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),z.open=!0,t())}),200)}})),close(){z.open=!1}};var H=Object.defineProperty,K=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,F=(e,t,s)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const G=f({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),Q={state:G,subscribe:e=>h(G,(()=>e(G))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(G.themeMode=t),s&&(G.themeVariables=((e,t)=>{for(var s in t||(t={}))J.call(t,s)&&F(e,s,t[s]);if(K)for(var s of K(t))q.call(t,s)&&F(e,s,t[s]);return e})({},s))}},X=f({open:!1,message:"",variant:"success"}),Y={state:X,subscribe:e=>h(X,(()=>e(X))),openToast(e,t){X.open=!0,X.message=e,X.variant=t},closeToast(){X.open=!1}}},62001:function(e,t,s){s.r(t),s.d(t,{WalletConnectModal:function(){return n}});var o=s(53547);class n{constructor(e){this.openModal=o.jb.open,this.closeModal=o.jb.close,this.subscribeModal=o.jb.subscribe,this.setTheme=o.Ic.setThemeConfig,o.Ic.setThemeConfig(e),o.t0.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(642).then(s.bind(s,27642));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),o.zb.setIsUiLoaded(!0)}}}}}]);