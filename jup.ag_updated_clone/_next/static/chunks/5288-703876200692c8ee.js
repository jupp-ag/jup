"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5288],{89953:function(e,t,n){n.d(t,{LT:function(){return m},Me:function(){return x}});var r=n(27195),o=n(97620),i=n(8857),a=n.n(i),s=n(7761),c=n(93981),u=n(84985),l=n(90491),d=n(6340),p=n(3011),f=n(33715),h=n(78877),g={long:{main:"#32DF7B",shade:"#32DF7BB3"},short:{main:"#EB5757",shade:"#EB5757B3"},tp:{main:"#00BCF0",shade:"#00BCF0B3"},sl:{main:"#00BCF0",shade:"#00BCF0B3"},lq:{main:"rgb(100,116,139)",shade:"rgb(100,116,139)"}},x=function(){var e=(0,u.Os)().wallet,t=(0,u.Bn)().connection,n=(0,l.tc)(),i=n.userPositions,s=n.refreshPositionInfo,g=(0,d.Z)().promptKeeperClosePositionNotification,x=(0,p.KO)(f.l.isClosingAllPositions),m=(0,o.Z)(x,2),v=m[0],b=m[1];return(0,c.useCallback)(function(){var n=(0,r.Z)(a().mark((function n(o){var c,u,l,d;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i&&0!==(null===i||void 0===i?void 0:i.length)&&!v){n.next=2;break}return n.abrupt("return");case 2:if(e){n.next=4;break}throw new Error("Wallet not connected");case 4:if(b(!0),n.prev=5,c=null===i||void 0===i?void 0:i.find((function(e){return e.publicKey.toString()===o.publicKey}))){n.next=9;break}throw new Error("Cannot find position ".concat(o.id));case 9:return n.next=11,(0,h._L)(e,t,c);case 11:if(u=n.sent){n.next=14;break}throw new Error("Cannot find market close instruction");case 14:return l=u.instructions,d=u.positionRequestKey,n.next=17,new Promise(function(){var e=(0,r.Z)(a().mark((function e(t,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(l,d,(function(e){s(),t(e)}),(function(e){n(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 17:return n.abrupt("return",n.sent);case 20:n.prev=20,n.t0=n.catch(5),console.log("Failed to close all positions!",n.t0);case 23:return n.prev=23,s(),b(!1),n.finish(23);case 27:case"end":return n.stop()}}),n,null,[[5,20,23,27]])})));return function(e){return n.apply(this,arguments)}}(),[t,v,g,s,b,i,e])},m=function(e){var t=e.isLoaded,n=e.widget,r=e.positions,o=(0,u.Os)().wallet,i=(0,u.Bn)().connection,a=(0,c.useRef)([]);(0,c.useEffect)((function(){n&&t?r&&r.length>0&&r.forEach((function(e){if(n&&!a.current.find((function(t){return t.id===e.id})))try{n.onChartReady((function(){var t,r=g[e.action].main,o=g[e.action].shade;"lq"===e.action?t=n.activeChart().createPositionLine():(t=n.activeChart().createOrderLine()).setCancelTooltip("Market close").onCancel(t,(function(t){e.onCloseAction&&(t.setText(s.ag._("Closing {0}...",{0:e.label})),e.onCloseAction(e).finally((function(){t.setText(e.label)})))})).setCancelButtonBackgroundColor(o).setCancelButtonBorderColor(r).setCancelButtonIconColor("#fff"),t.setPrice(e.price).setText(e.label).setQuantity("$".concat(e.sizeUsd)).setLineColor(r).setBodyBackgroundColor(o).setBodyBorderColor(r).setQuantityBorderColor(r).setQuantityBackgroundColor(o).setBodyTextColor("#fff").setQuantityTextColor("#fff"),a.current.push({id:e.id,adapter:t})}))}catch(t){console.error(t)}})):a.current=[]}),[r,a,n,t,o,i]),(0,c.useEffect)((function(){Array.isArray(r)&&0===r.length?a.current.forEach((function(e,t){e.adapter.remove(),a.current=[]})):a.current.forEach((function(e,t){if(!(null===r||void 0===r?void 0:r.find((function(t){return t.id===e.id})))&&e.adapter&&e.adapter.remove)try{e.adapter.remove()}catch(n){}finally{a.current.splice(t,1)}}))}),[r])}},6340:function(e,t,n){var r,o=n(70107),i=n(63956),a=n(97620),s=n(27195),c=n(8857),u=n.n(c),l=n(7761),d=n(17769),p=n(94728),f=n(93981),h=n(17463),g=n(84985),x=n(59394),m=n(90491),v=n(24628),b=n(57917),y=n(58532),k=n(55540),w=n(90342),P=n(3011),O=n(49839),T=n(57565),C=n(91551),S=n.n(C),R=n(18849),j=n(57281),_=n(59890),E=n(76613),A=n(34166),D=n(29541),B=n(795).Buffer;function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e.MAX_ATTEMPTS="MAX_ATTEMPTS",e.FAILED_TO_CLOSE_REQUEST="FAILED_TO_CLOSE_REQUEST",e.COLLATERAL_REFUNDED="COLLATERAL_REFUNDED"}(r||(r={}));function M(e,t,n){return Z.apply(this,arguments)}function Z(){return Z=(0,s.Z)(u().mark((function e(t,n,r){var o,i,a,s,c=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>3&&void 0!==c[3]?c[3]:5,e.prev=1,e.next=4,t.getTransactions(n,{commitment:"confirmed",maxSupportedTransactionVersion:0});case 4:if(a=e.sent,s=null===(i=a[0])||void 0===i?void 0:i.slot,a&&s&&!(s<r)){e.next=15;break}return e.next=9,(0,E.gw)(1e3);case 9:if(console.log("retrying",s,r),!(o>0)){e.next=14;break}return e.abrupt("return",M(t,n,r,o-1));case 14:case 23:return e.abrupt("return",null);case 15:return e.abrupt("return",a);case 18:if(e.prev=18,e.t0=e.catch(1),!e.t0||!e.t0.message.includes(A.VU)){e.next=23;break}return console.log("retrying due to error"),e.abrupt("return",M(t,n,r,o-1));case 24:case"end":return e.stop()}}),e,null,[[1,18]])}))),Z.apply(this,arguments)}t.Z=function(){var e=(0,m.tc)(),t=e.refreshPositionInfo,n=e.maxRequestExecutionSec,r=(0,b.SR)(),i=r.addNotificationTx,c=r.updateNotificationTxStatus,C=(0,d.lm)(),E=C.toast,A=C.close,K=(0,g.Os)(),Z=K.wallet,N=K.signTransaction,q=K.signAllTransactions,F=(0,g.Bn)().connection,L=(0,g.C9)(),U=(0,w.gs)(),H=U.modifyComputeUnitPriceAndLimit,V=U.priorityLevel,G=(0,P.KO)(O.yz),X=(0,a.Z)(G,1)[0],W=(0,P.KO)(_.J),z=(0,a.Z)(W,2),Q=(z[0].lastSubmissionSlot,z[1]),J=(0,f.useMemo)((function(){return new p.Connection(F._rpcEndpoint,"confirmed")}),[F]),Y=(0,f.useMemo)((function(){var e=new T.AnchorProvider(J,{},T.AnchorProvider.defaultOptions());return[e,new T.Program(k.x,m.KX,e)]}),[J]),$=(Y[0],Y[1]),ee=(0,f.useCallback)(function(){var e=(0,s.Z)(u().mark((function e(t,r,o,i,a,d,f){var g,b,y,k,w,P,O,T,C,_,K,Z;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(F,[r],f);case 2:if(g=e.sent,(b=null===g||void 0===g?void 0:g[0])&&b.blockTime){e.next=6;break}throw"Transaction not found";case 6:return y=function(){setTimeout((function(){A(t)}),1e4),a&&a(!0)},k=b.blockTime,w=1e3*(k+(n||45)),P=void 0,O="",T="",C=function(){var e=(0,s.Z)(u().mark((function e(t){var n,r,o,i,a,s,c,l,d;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(F,t,b.slot);case 2:if(r=e.sent){e.next=5;break}throw new Error("Failed to retrieve transaction status for ".concat(t));case 5:if(null!==(n=r[0])&&void 0!==n&&n.slot&&Q({lastSubmissionSlot:null===(o=r[0])||void 0===o?void 0:o.slot}),i=r.flatMap((function(e){var t,n,r=null===e||void 0===e?void 0:e.transaction.message.staticAccountKeys.findIndex((function(e){return e.equals(m.KX)}));return null===e||void 0===e||null===(t=e.meta)||void 0===t||null===(n=t.innerInstructions)||void 0===n?void 0:n.flatMap((function(t){return t.instructions.map((function(t){if(t.programIdIndex===r){var n=S().decode(t.data),o=R.base64.encode(n.subarray(8));return{event:$.coder.events.decode(o),tx:e}}}))}))})),a=i.find((function(e){var t,n;return"IncreasePositionEvent"===(null===e||void 0===e||null===(t=e.event)||void 0===t?void 0:t.name)||"DecreasePositionEvent"===(null===e||void 0===e||null===(n=e.event)||void 0===n?void 0:n.name)})),s=i.find((function(e){var t;return"ClosePositionRequestEvent"===(null===e||void 0===e||null===(t=e.event)||void 0===t?void 0:t.name)})),!a){e.next=13;break}return P=!0,O=a.tx.transaction.signatures[0],e.abrupt("return");case 13:if("undefined"!==typeof a||!s){e.next=25;break}if(P=!1,O=s.tx.transaction.signatures[0],c=s.tx.transaction.message.staticAccountKeys,l=c.findIndex((function(e){return e.equals(new p.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"))}))){e.next=20;break}return e.abrupt("return");case 20:if(d=s.tx.transaction.message.compiledInstructions.find((function(e){return e.programIdIndex===l}))){e.next=23;break}return e.abrupt("return");case 23:return T=B.from(d.data).toString(),e.abrupt("return");case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,s.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof P){e.next=19;break}return e.next=3,(0,j.Dc)(5e3);case 3:if(!(Date.now()>w)){e.next=7;break}return P=!1,T="Failed to retrieve transaction status",e.abrupt("break",19);case 7:return e.next=9,J.getSignaturesForAddress(new p.PublicKey(o),{until:r});case 9:if(t=e.sent,0!==(n=t.filter((function(e){return null===e.err})).map((function(e){return e.signature}))).length){e.next=13;break}return e.abrupt("continue",0);case 13:if("undefined"===typeof P){e.next=15;break}return e.abrupt("return");case 15:return e.next=17,C(n);case 17:e.next=0;break;case 19:console.log("pollForEvent done");case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=(0,s.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){K=J.onLogs(new p.PublicKey(o),function(){var t=(0,s.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.err){t.next=6;break}if("undefined"===typeof P){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,C([n.signature]);case 5:e();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}));case 2:console.log("listenToEvent done");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=17,Promise.any([_(),Z()]).finally((function(){K&&J.removeOnLogsListener(K)}));case 17:return P?(c(t,{status:"success",stepText:"",txid:O}),E({duration:5e3,id:t,render:function(e){return(0,D.jsx)(h.x,I({customTitle:"open"===i?l.ag._("Position opened"):"partial-close"===i?l.ag._("Position reduced"):"close"===i?l.ag._("Position closed"):"increase-collateral"===i?l.ag._("Collateral increased"):void 0},e))}}),y()):(E({duration:1e4,id:t,render:function(e){var t=O?"open"===i?l.ag._("Failed to open position"):"partial-close"===i?l.ag._("Failed to reduce position"):"close"===i?l.ag._("Failed to close position"):"increase-collateral"===i?l.ag._("Failed increase collateral"):void 0:l.ag._("Transaction timed-out");return(0,D.jsx)(h.x,I({customTitle:t},e))}}),O?c(t,{txid:void 0,status:"fail",stepText:T||"Failed to execute request"},{shouldShowFeedbackLink:!1,hasAdditionalPendingSteps:!1,additionalSteps:["open"===i||"increase-collateral"===i?(0,D.jsxs)("p",{className:"mt-3 ml-7 flex items-center space-x-1",children:[(0,D.jsx)("span",{children:l.ag._("Collateral refunded:")}),(0,D.jsx)(x.Z,{txid:O}),(0,D.jsx)(v.Z,{})]},"additionalSteps-1"):null].filter(Boolean)}):c(t,{txid:O,status:"unknown",stepText:l.ag._("Note: Your transaction might be successfully executed.")},{hasAdditionalPendingSteps:!1,additionalSteps:[(0,D.jsxs)("p",{className:"ml-7",children:[(0,D.jsx)("p",{className:"mt-2",children:l.ag._("You may try:")}),(0,D.jsxs)("ul",{className:"mt-2 text-v2-lily/50 list-disc list-outside w-full px-3 space-y-1.5",children:[(0,D.jsx)("li",{className:"list-outside",children:l.ag._("Refresh the page")}),(0,D.jsx)("li",{className:"list-outside",children:l.ag._("Change your RPC")}),(0,D.jsx)("li",{className:"list-outside",children:l.ag._("Check Expired Orders tab")}),(0,D.jsx)("li",{className:"list-outside",children:(0,D.jsx)("div",{className:"flex items-center gap-x-2",children:(0,D.jsx)("span",{children:l.ag._("Or, open a Discord ticket")})})})]})]},"additionalSteps-1")].filter(Boolean)}),d(!0),y()),e.abrupt("return",{success:P,txId:O,error:T});case 19:case"end":return e.stop()}}),e)})));return function(t,n,r,o,i,a,s){return e.apply(this,arguments)}}(),[A,J,F,n,$.coder.events,Q,E,c]),te=(0,f.useCallback)(function(){var e=(0,s.Z)(u().mark((function e(t){var n,r,i,a,c,l,d,f,h=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=h.length>1&&void 0!==h[1]?h[1]:{usePerpsReferenceFee:!1},e.prev=1,Z&&q){e.next=4;break}throw new Error("Wallet not connected, or signAllTransactions not found");case 4:return e.next=6,F.getLatestBlockhashAndContext("confirmed");case 6:return r=e.sent,i=r.context,a=r.value,c=a.blockhash,l=a.lastValidBlockHeight,e.next=13,Promise.all(t.map(function(){var e=(0,s.Z)(u().mark((function e(t){var r,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(r=new p.Transaction({blockhash:c,lastValidBlockHeight:l,feePayer:Z.adapter.publicKey})).add.apply(r,(0,o.Z)(t)),e.next=3,H(i,{requestComputeBudgetLimit:3e5,referenceFee:n.usePerpsReferenceFee?"MEDIUM"===V?X.perps.m:"HIGH"===V?X.perps.h:"VERY_HIGH"===V?X.perps.vh:void 0:X.loAndDCA,minimumFee:O.uo});case 3:return e.abrupt("return",i);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 13:return d=e.sent,e.next=16,q(d);case 16:return f=e.sent,e.abrupt("return",f.map((function(e){return{txid:(0,y.o$)(e),signedTransaction:e,blockhash:c,lastValidBlockHeight:l,context:i}})));case 20:throw e.prev=20,e.t0=e.catch(1),e.t0;case 23:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t){return e.apply(this,arguments)}}(),[F,q,Z,H,V,X]),ne=(0,f.useCallback)(function(){var e=(0,s.Z)(u().mark((function e(t,n,r,o){var s,c,d,p,f,g,v,b,w,P;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z&&N){e.next=2;break}return e.abrupt("return");case 2:return s="",c=String(Math.floor(1e4*Math.random())),e.prev=4,e.next=7,te([t]);case 7:return d=e.sent,p=(0,a.Z)(d,1),f=p[0],g=f.signedTransaction,v=f.blockhash,b=f.lastValidBlockHeight,f.context,Date.now(),i(c,{status:"loading",txid:"",stepText:"Opening Position"}),E({duration:12e4,id:c,render:function(e){return(0,D.jsx)(h.x,I({customTitle:l.ag._("Requesting open position")},e))},closeOnClick:!1}),e.next=19,(0,y.ie)({signedTransaction:g,blockhash:v,connection:F,lastValidBlockHeight:b,idl:k.x,idlProgramId:m.KX,skipPreflight:!0});case 19:if(!("error"in(w=e.sent))){e.next=22;break}throw w.error;case 22:return i(c,{status:"loading",txid:"",stepText:l.ag._("Position request sent")}),e.next=25,ee(c,w.txid,n.toString(),"open",r,o,w.transactionResponse.slot);case 25:e.next=34;break;case 27:e.prev=27,e.t0=e.catch(4),P=e.t0.message||l.ag._("There was an error trying to open your position."),console.log("handleSendTransaction error",P),o(!0),E({title:"Failed to perform transaction",description:(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{children:P}),(0,D.jsx)("div",{children:s?(0,D.jsx)(x.Z,{txid:s}):null})]}),variant:"ERROR"}),A(c);case 34:case"end":return e.stop()}}),e,null,[[4,27]])})));return function(t,n,r,o){return e.apply(this,arguments)}}(),[Z,N,te,i,E,F,ee,A]),re=(0,f.useCallback)(function(){var e=(0,s.Z)(u().mark((function e(t,n,r,o,a,s,c,d,p){var f,g;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Date.now(),i(t,{status:"loading",txid:"",stepText:l.ag._("Closing Position...")}),E({duration:12e4,id:t,render:function(e){return(0,D.jsx)(h.x,I({customTitle:l.ag._("Requesting close position")},e))},closeOnClick:!1}),e.next=6,(0,y.ie)({signedTransaction:n,blockhash:r,connection:F,lastValidBlockHeight:o,idl:k.x,idlProgramId:m.KX,skipPreflight:!0});case 6:if(!("error"in(f=e.sent))){e.next=9;break}throw f.error;case 9:return i(t,{status:"loading",txid:"",stepText:l.ag._("Close position request sent")}),e.next=12,ee(t,f.txid,s.toString(),"close",c,d,f.transactionResponse.slot);case 12:e.next=21;break;case 14:e.prev=14,e.t0=e.catch(0),g=e.t0.message||l.ag._("There was an error trying to close your position."),console.error(e.t0),d(!0),E({title:"Failed to perform transaction",description:(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{children:g}),(0,D.jsx)("div",{children:p?(0,D.jsx)(x.Z,{txid:p}):null})]}),variant:"ERROR"}),A(t);case 21:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n,r,o,i,a,s,c,u){return e.apply(this,arguments)}}(),[i,A,F,ee,E]),oe=(0,f.useCallback)(function(){var e=(0,s.Z)(u().mark((function e(t,n,r,o){var i,s,c,d,p,f,h,g,x,m;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=String(Math.floor(1e4*Math.random())),e.next=4,te([t]);case 4:if(s=e.sent,c=(0,a.Z)(s,1),d=c[0]){e.next=9;break}throw new Error("Failed to craft transaction");case 9:return p=d.txid,f=d.signedTransaction,h=d.blockhash,g=d.lastValidBlockHeight,x=d.context,e.next=12,re(i,f,h,g,x,n,r,o,p);case 12:e.next=20;break;case 14:e.prev=14,e.t0=e.catch(0),m=e.t0.message||l.ag._("There was an error trying to close your position."),console.error(e.t0),o(!0),E({title:"Failed to perform transaction",description:(0,D.jsx)("div",{children:(0,D.jsx)("p",{children:m})}),variant:"ERROR"});case 20:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n,r,o){return e.apply(this,arguments)}}(),[te,re,E]),ie=(0,f.useCallback)(function(){var e=(0,s.Z)(u().mark((function e(t){var n,r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return e.instructions})),e.next=3,te(n);case 3:if(r=e.sent,t.length===r.length){e.next=6;break}throw new Error("Failed to craft transaction");case 6:return e.next=8,Promise.allSettled(r.map((function(e,n){return new Promise(function(){var r=(0,s.Z)(u().mark((function r(o,i){var a,s,c,l,d,p,f;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=String(Math.floor(1e4*Math.random())),s=e.txid,c=e.signedTransaction,l=e.blockhash,d=e.lastValidBlockHeight,p=e.context,f=t[n].positionRequestKey,r.abrupt("return",re(a,c,l,d,p,f,o,i,s));case 4:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}())})));case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[te,re]),ae=(0,f.useCallback)(function(){var e=(0,s.Z)(u().mark((function e(t,n,r,o){var s,d,p,f,g,v,b,w,P,O;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z&&N){e.next=2;break}return e.abrupt("return");case 2:return s="",d=String(Math.floor(1e4*Math.random())),e.prev=4,e.next=7,te([t]);case 7:return p=e.sent,f=(0,a.Z)(p,1),g=f[0],v=g.signedTransaction,b=g.blockhash,w=g.lastValidBlockHeight,g.context,Date.now(),i(d,{status:"loading",txid:"",stepText:"Reducing Position"},{customTitle:l.ag._("Reducing position...")}),E({duration:12e4,id:d,render:function(e){return(0,D.jsx)(h.x,I({customTitle:l.ag._("Requesting reduce position")},e))},closeOnClick:!1}),e.next=19,(0,y.ie)({signedTransaction:v,blockhash:b,connection:F,lastValidBlockHeight:w,idl:k.x,idlProgramId:m.KX,skipPreflight:!0});case 19:if(P=e.sent,c(d,{status:"loading",stepText:l.ag._("Position request sent")}),!("error"in P)){e.next=23;break}throw P.error;case 23:return e.next=25,ee(d,P.txid,n.toString(),"partial-close",r,o,P.transactionResponse.slot);case 25:e.next=34;break;case 27:e.prev=27,e.t0=e.catch(4),O=e.t0.message||l.ag._("There was an error trying to close your position."),console.error(e.t0),o(!0),E({title:"Failed to perform transaction",description:(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{children:O}),(0,D.jsx)("div",{children:s?(0,D.jsx)(x.Z,{txid:s}):null})]}),variant:"ERROR"}),A(d);case 34:case"end":return e.stop()}}),e,null,[[4,27]])})));return function(t,n,r,o){return e.apply(this,arguments)}}(),[Z,N,te,i,E,F,c,ee,A]),se=(0,f.useCallback)(function(){var e=(0,s.Z)(u().mark((function e(t,n,r,o){var s,c,d,p,f,g,v,b,w,P;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z&&N){e.next=2;break}return e.abrupt("return");case 2:return s="",c=String(Math.floor(1e4*Math.random())),e.prev=4,Date.now(),e.next=8,te([t]);case 8:return d=e.sent,p=(0,a.Z)(d,1),f=p[0],g=f.signedTransaction,v=f.blockhash,b=f.lastValidBlockHeight,f.context,i(c,{status:"loading",txid:"",stepText:"Increasing Collateral"},{customTitle:l.ag._("Increasing collateral...")}),E({duration:12e4,id:c,render:function(e){return(0,D.jsx)(h.x,I({customTitle:l.ag._("Requesting to increase collateral"),className:"w-[95vw] lg:w-[420px]"},e))},closeOnClick:!1}),e.next=19,(0,y.ie)({signedTransaction:g,blockhash:v,connection:F,lastValidBlockHeight:b,idl:k.x,idlProgramId:m.KX,skipPreflight:!0});case 19:if(!("error"in(w=e.sent))){e.next=22;break}throw w.error;case 22:return e.next=24,ee(c,w.txid,n.toString(),"increase-collateral",r,o,w.transactionResponse.slot);case 24:e.next=32;break;case 26:e.prev=26,e.t0=e.catch(4),P=e.t0.message||l.ag._("There was an error trying to increase your collateral."),o(!0),E({title:"Failed to perform transaction",description:(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{children:P}),(0,D.jsx)("div",{children:s?(0,D.jsx)(x.Z,{txid:s}):null})]}),variant:"ERROR"}),A(c);case 32:case"end":return e.stop()}}),e,null,[[4,26]])})));return function(t,n,r,o){return e.apply(this,arguments)}}(),[Z,N,te,i,E,F,ee,A]),ce=(0,f.useCallback)(function(){var e=(0,s.Z)(u().mark((function e(n,r,o,s){var d,p,f,g,v,b,w,P,O,T;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z&&N){e.next=2;break}return e.abrupt("return");case 2:return d="",p=String(Math.floor(1e4*Math.random())),e.prev=4,e.next=7,te([n],{usePerpsReferenceFee:!0});case 7:return f=e.sent,g=(0,a.Z)(f,1),v=g[0],b=v.signedTransaction,w=v.blockhash,P=v.lastValidBlockHeight,v.context,i(p,{status:"loading",txid:"",stepText:"Creating TPSL"},{customTitle:s}),E({duration:12e4,id:p,render:function(e){return(0,D.jsx)(h.x,I({customTitle:l.ag._("Creating TPSL")},e))},closeOnClick:!1}),e.next=18,(0,y.ie)({signedTransaction:b,blockhash:w,connection:F,lastValidBlockHeight:P,idl:k.x,idlProgramId:m.KX,skipPreflight:!0});case 18:if(!("error"in(O=e.sent))){e.next=21;break}throw O.error;case 21:c(p,{status:"success"}),r(!0),e.next=32;break;case 25:e.prev=25,e.t0=e.catch(4),T=e.t0.message||l.ag._("There was an error trying to create your TP or SL."),console.error(e.t0),c(p,{status:"fail"}),o(!0),E({title:"Failed to perform transaction",description:(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{children:T}),(0,D.jsx)("div",{children:d?(0,D.jsx)(x.Z,{txid:d}):null})]}),variant:"ERROR"});case 32:return e.prev=32,t(),L(),setTimeout((function(){A(p)}),1e4),e.finish(32);case 37:case"end":return e.stop()}}),e,null,[[4,25,32,37]])})));return function(t,n,r,o){return e.apply(this,arguments)}}(),[Z,N,te,i,E,F,c,t,L,A]);return{promptKeeperOpenPositionNotification:ne,promptKeeperClosePositionNotification:oe,promptKeeperCloseAllPositionNotification:ie,promptKeeperPartialClosePositionNotification:ae,promptKeeperIncreaseCollateralNotification:se,promptKeeperCreateTPSLNotification:ce}}},78877:function(e,t,n){n.d(t,{Zn:function(){return v},_L:function(){return y},e9:function(){return w}});var r=n(63956),o=n(97620),i=n(27195),a=n(8857),s=n.n(a),c=n(57565),u=n(94728),l=n(8770),d=n(75206),p=n(90491),f=n(13170),h=n(58532),g=n(795).Buffer;function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){return b.apply(this,arguments)}function b(){return b=(0,i.Z)(s().mark((function e(t){var n,r,a,f,x,m,v,b,y,k,w,P,O,T,C,S,R,j;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.wallet,r=t.connection,a=t.positionAccount,f=t.desiredMint,x=t.tpPrice,m=t.slPrice,v=n.adapter.publicKey){e.next=4;break}throw new Error("Wallet not connected");case 4:return b=[],y=[],k=(0,l.h)(n,r),e.next=9,(0,h.c1)(f,v,r);case 9:return w=e.sent,P=(0,o.Z)(w,2),O=P[0],(T=P[1])&&b.push(T),e.next=16,Promise.all([x,m].map(function(){var e=(0,i.Z)(s().mark((function e(t){var n,r,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return n=new c.BN(Math.floor(1e9*Math.random())),r=u.PublicKey.findProgramAddressSync([g.from("position_request"),a.publicKey.toBuffer(),n.toArrayLike(g,"le",8),[2]],k.programId)[0],o=u.PublicKey.findProgramAddressSync([r.toBuffer(),d.TOKEN_PROGRAM_ID.toBuffer(),f.toBuffer()],d.ASSOCIATED_TOKEN_PROGRAM_ID)[0],e.next=7,k.methods.createDecreasePositionRequest({entirePosition:!0,triggerPrice:t,counter:n,sizeUsdDelta:new c.BN(0),collateralUsdDelta:new c.BN(0),requestType:{trigger:{}},triggerAboveThreshold:"long"===a.side?t===x:t!==x,priceSlippage:null,jupiterMinimumOut:null}).accounts({owner:v,receivingAccount:O,perpetuals:p.TJ,pool:p.FW,position:a.publicKey,positionRequest:r,positionRequestAta:o,custody:a.custody.publicKey,custodyOracleAccount:a.custody.account.oracle.oracleAccount,collateralCustody:a.collateralCustody.publicKey,desiredMint:f,tokenProgram:d.TOKEN_PROGRAM_ID,associatedTokenProgram:d.ASSOCIATED_TOKEN_PROGRAM_ID,systemProgram:u.SystemProgram.programId,referral:null}).instruction();case 7:return i=e.sent,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 16:return C=e.sent,S=(0,o.Z)(C,2),R=S[0],j=S[1],R&&y.push(R),j&&y.push(j),e.abrupt("return",{preInstructions:b,instructions:y});case 23:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function y(e,t,n){return k.apply(this,arguments)}function k(){return(k=(0,i.Z)(s().mark((function e(t,n,r){var o,i,a,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return o="long"===r.side?new c.BN(0):new c.BN("18446744073709551615"),e.prev=3,e.next=6,w({wallet:t,connection:n,position:r,priceSlippage:o,collateralUsdDelta:new c.BN(0),sizeUsdDelta:new c.BN(r.sizeUsd.toFixed(0)),desiredMint:r.collateralCustody.account.mint,jupiterMinimumOut:null});case 6:return i=e.sent,a=i.instructions,u=i.positionRequestKey,e.abrupt("return",{instructions:a,positionRequestKey:u});case 12:return e.prev=12,e.t0=e.catch(3),console.log("Failed to close position!",e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})))).apply(this,arguments)}function w(e){return P.apply(this,arguments)}function P(){return(P=(0,i.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(m(m({},t),{},{requestType:"market",triggerPrice:null,entirePosition:null,triggerAboveThreshold:null}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return T.apply(this,arguments)}function T(){return(T=(0,i.Z)(s().mark((function e(t){var n,r,i,a,x,m,v,b,y,k,w,P,O,T,C,S,R,j,_,E,A,D,B,K;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.wallet,r=t.connection,i=t.position,a=t.collateralUsdDelta,x=t.sizeUsdDelta,m=t.desiredMint,v=t.requestType,b=t.priceSlippage,y=t.jupiterMinimumOut,k=t.triggerPrice,w=t.triggerAboveThreshold,P=t.entirePosition,O=n.adapter.publicKey){e.next=4;break}throw new Error("Wallet not connected");case 4:return T=(0,l.h)(n,r),e.next=7,(0,h.c1)(m,O,r);case 7:if(C=e.sent,S=(0,o.Z)(C,2),R=S[0],j=S[1],_=new c.BN(Math.floor(1e9*Math.random())),E=u.PublicKey.findProgramAddressSync([g.from("position_request"),i.publicKey.toBuffer(),_.toArrayLike(g,"le",8),[2]],T.programId)[0],A=u.PublicKey.findProgramAddressSync([E.toBuffer(),d.TOKEN_PROGRAM_ID.toBuffer(),m.toBuffer()],d.ASSOCIATED_TOKEN_PROGRAM_ID)[0],D=[],j&&D.push(j),B=[],m.equals(f.W4)&&B.push(d.Token.createCloseAccountInstruction(d.TOKEN_PROGRAM_ID,R,O,O,[])),e.prev=18,"market"!==v){e.next=27;break}if(b){e.next=22;break}throw"Slippage not set";case 22:return e.next=24,T.methods.createDecreasePositionMarketRequest({collateralUsdDelta:a,sizeUsdDelta:x,priceSlippage:b,jupiterMinimumOut:y,counter:_,entirePosition:P}).accounts({owner:O,receivingAccount:R,perpetuals:p.TJ,pool:p.FW,position:i.publicKey,positionRequest:E,positionRequestAta:A,custody:i.custody.publicKey,collateralCustody:i.collateralCustody.publicKey,desiredMint:m,tokenProgram:d.TOKEN_PROGRAM_ID,associatedTokenProgram:d.ASSOCIATED_TOKEN_PROGRAM_ID,systemProgram:u.SystemProgram.programId,referral:null}).instruction();case 24:K=e.sent,e.next=30;break;case 27:return e.next=29,T.methods.createDecreasePositionRequest({collateralUsdDelta:a,sizeUsdDelta:x,requestType:{trigger:{}},priceSlippage:b,jupiterMinimumOut:y,triggerPrice:k,triggerAboveThreshold:w,counter:_,entirePosition:P}).accounts({owner:O,receivingAccount:R,perpetuals:p.TJ,pool:p.FW,position:i.publicKey,positionRequest:E,positionRequestAta:A,custody:i.custody.publicKey,custodyOracleAccount:i.custody.account.oracle.oracleAccount,collateralCustody:i.collateralCustody.publicKey,desiredMint:m,tokenProgram:d.TOKEN_PROGRAM_ID,associatedTokenProgram:d.ASSOCIATED_TOKEN_PROGRAM_ID,systemProgram:u.SystemProgram.programId,referral:null}).instruction();case 29:K=e.sent;case 30:return e.abrupt("return",{instructions:[].concat(D,[K],B),positionRequestKey:E});case 33:throw e.prev=33,e.t0=e.catch(18),console.log(e.t0),e.t0;case 37:case"end":return e.stop()}}),e,null,[[18,33]])})))).apply(this,arguments)}},8770:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(57565),o=n(55540),i=n(90491),a=function(e,t){var n=new r.AnchorProvider(t,e,{commitment:"processed",skipPreflight:!0});return new r.Program(o.x,i.KX,n)}},6901:function(e,t,n){n.d(t,{b:function(){return a},y:function(){return i}});var r=n(13838),o=n(39694),i=n.n(o)()((function(e){if(!e)return 4;var t=new r.Z(e);return t.gte(100)?2:t.gte(10)?3:4})),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=e.div(100).div(t).add(1).pow(t).sub(1).mul(100);return n}},33715:function(e,t,n){n.d(t,{l:function(){return r}});var r={isClosingAllPositions:(0,n(9364).cn)(!1)}},20787:function(e,t,n){n.d(t,{EA:function(){return h},Sv:function(){return v},vQ:function(){return r}});var r,o=n(63956),i=n(63945),a=n(9364),s=n(43355),c=n(49803),u=n(79989),l=n(44495),d=n(93981);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}!function(e){e.ETH="Crypto.ETH/USD",e.BTC="Crypto.BTC/USD",e.SOL="Crypto.SOL/USD"}(r||(r={}));var f=(0,a.cn)({}),h=function(e){return(0,s.kv)(f,(function(t){return t[e]}),(function(e,t){return e==t}))},g=(0,a.cn)(null,(function(e,t,n){var r=e(f);r[n.id]={price:n.p,time:n.t},t(f,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r))})),x=[{id:"0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d",name:"SOL",pythId:"Crypto.SOL/USD"},{id:"0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",name:"BTC",pythId:"Crypto.BTC/USD"},{id:"0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",name:"ETH",pythId:"Crypto.ETH/USD"}],m=x.map((function(e){return e.id})),v=function(e){var t=(0,u.Z)(),n=(0,d.useState)(0),r=n[0],o=n[1],a=(0,d.useRef)(Date.now());(0,d.useEffect)((function(){var e=setInterval((function(){a.current&&0!==a.current&&Date.now()-a.current>5e3&&(console.log("Stalled pyth websockets, restarting..."),o((function(e){return e+1})),a.current=Date.now())}),1e3);return function(){clearInterval(e)}}),[]),(0,l.Z)((function(){var n=new i.fj("https://jupiter.mainnet.pythnet.rpcpool.com",{priceFeedRequestConfig:{binary:!0}});return t.online&&e&&n.subscribePriceFeedUpdates(m,(function(e){var t=x.find((function(t){return t.id==="0x".concat(e.id)}));a.current=Date.now(),c.e.set(g,{id:null===t||void 0===t?void 0:t.pythId,p:Number(e.getPriceUnchecked().price||0)/Math.pow(10,8),t:e.getPriceUnchecked().publishTime})})),function(){n&&n.closeWebSocket()}}),[t.online,e,r])}}}]);
//# sourceMappingURL=5288-703876200692c8ee.js.map