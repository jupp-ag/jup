(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{8530:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return i}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}}let s=globalThis.AsyncLocalStorage;function i(){return s?new s:new n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5182:function(e,t,r){"use strict";function n(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return n}}),r(260),r(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1414:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return d},useSearchParams:function(){return p},usePathname:function(){return g},ServerInsertedHTMLContext:function(){return u.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return u.useServerInsertedHTML},useRouter:function(){return y},useParams:function(){return m},useSelectedLayoutSegments:function(){return _},useSelectedLayoutSegment:function(){return b},redirect:function(){return a.redirect},notFound:function(){return c.notFound}});let n=r(7294),s=r(4224),i=r(8463),o=r(5182),l=r(2526),u=r(3014),a=r(8781),c=r(8147),h=Symbol("internal for urlsearchparams readonly");function f(){return Error("ReadonlyURLSearchParams cannot be modified")}class d{[Symbol.iterator](){return this[h][Symbol.iterator]()}append(){throw f()}delete(){throw f()}set(){throw f()}sort(){throw f()}constructor(e){this[h]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}}function p(){(0,o.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(i.SearchParamsContext),t=(0,n.useMemo)(()=>e?new d(e):null,[e]);return t}function g(){return(0,o.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(i.PathnameContext)}function y(){(0,o.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(s.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function m(){(0,o.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(s.GlobalLayoutRouterContext);return e?function e(t,r){void 0===r&&(r={});let n=t[1];for(let t of Object.values(n)){let n=t[0],s=Array.isArray(n),i=s?n[1]:n;if(!i||i.startsWith("__PAGE__"))continue;let o=s&&("c"===n[2]||"oc"===n[2]);o?r[n[0]]=n[1].split("/"):s&&(r[n[0]]=n[1]),r=e(t,r)}return r}(e.tree):null}function _(e){void 0===e&&(e="children"),(0,o.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(s.LayoutRouterContext);return function e(t,r,n,s){let i;if(void 0===n&&(n=!0),void 0===s&&(s=[]),n)i=t[1][r];else{var o;let e=t[1];i=null!=(o=e.children)?o:Object.values(e)[0]}if(!i)return s;let u=i[0],a=(0,l.getSegmentValue)(u);return!a||a.startsWith("__PAGE__")?s:(s.push(a),e(i,r,!1,s))}(t,e)}function b(e){void 0===e&&(e="children"),(0,o.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=_(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8147:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return n},isNotFoundError:function(){return s}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function s(e){return(null==e?void 0:e.digest)===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8781:function(e,t,r){"use strict";var n,s;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return l},redirect:function(){return u},isRedirectError:function(){return a},getURLFromRedirectError:function(){return c},getRedirectTypeFromError:function(){return h}});let i=r(4505),o="NEXT_REDIRECT";function l(e,t){let r=Error(o);r.digest=o+";"+t+";"+e;let n=i.requestAsyncStorage.getStore();return n&&(r.mutableCookies=n.mutableCookies),r}function u(e,t){throw void 0===t&&(t="replace"),l(e,t)}function a(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,r,n]=e.digest.split(";",3);return t===o&&("replace"===r||"push"===r)&&"string"==typeof n}function c(e){return a(e)?e.digest.split(";",3)[2]:null}function h(e){if(!a(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(s=n||(n={})).push="push",s.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4505:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return s}});let n=r(8530),s=(0,n.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2526:function(e,t){"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3014:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return i},useServerInsertedHTML:function(){return o}});let n=r(7697),s=n._(r(7294)),i=s.default.createContext(null);function o(e){let t=(0,s.useContext)(i);t&&t(e)}},9332:function(e,t,r){e.exports=r(1414)},4155:function(e){var t,r,n,s=e.exports={};function i(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u=[],a=!1,c=-1;function h(){a&&n&&(a=!1,n.length?u=n.concat(u):c=-1,u.length&&f())}function f(){if(!a){var e=l(h);a=!0;for(var t=u.length;t;){for(n=u,u=[];++c<t;)n&&n[c].run();c=-1,t=u.length}n=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function p(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new d(e,t)),1!==u.length||a||l(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=p,s.addListener=p,s.once=p,s.off=p,s.removeListener=p,s.removeAllListeners=p,s.emit=p,s.prependListener=p,s.prependOnceListener=p,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}},9386:function(e,t,r){"use strict";function n(e){return Array.isArray?Array.isArray(e):"[object Array]"===c(e)}r.d(t,{Z:function(){return K}});let s=1/0;function i(e){return"string"==typeof e}function o(e){return"number"==typeof e}function l(e){return"object"==typeof e}function u(e){return null!=e}function a(e){return!e.trim().length}function c(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}let h=e=>`Invalid value for key ${e}`,f=e=>`Pattern length exceeds max of ${e}.`,d=e=>`Missing ${e} property in key`,p=e=>`Property 'weight' in key '${e}' must be a positive integer`,g=Object.prototype.hasOwnProperty;class y{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(e=>{let r=m(e);this._keys.push(r),this._keyMap[r.id]=r,t+=r.weight}),this._keys.forEach(e=>{e.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function m(e){let t=null,r=null,s=null,o=1,l=null;if(i(e)||n(e))s=e,t=_(e),r=b(e);else{if(!g.call(e,"name"))throw Error(d("name"));let n=e.name;if(s=n,g.call(e,"weight")&&(o=e.weight)<=0)throw Error(p(n));t=_(n),r=b(n),l=e.getFn}return{path:t,id:r,weight:o,src:s,getFn:l}}function _(e){return n(e)?e:e.split(".")}function b(e){return n(e)?e.join("."):e}var v={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(e,t){let r=[],a=!1,h=(e,t,f)=>{if(u(e)){if(t[f]){var d,p;let g=t[f],y=e[g];if(u(y)){if(f===t.length-1&&(i(y)||o(y)||!0===(d=y)||!1===d||l(p=d)&&null!==p&&"[object Boolean]"==c(d)))r.push(null==y?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-s?"-0":t}(y));else if(n(y)){a=!0;for(let e=0,r=y.length;e<r;e+=1)h(y[e],t,f+1)}else t.length&&h(y,t,f+1)}}else r.push(e)}};return h(e,i(t)?t.split("."):t,0),a?r:r[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};let S=/[^ ]+/g;class x{constructor({getFn:e=v.getFn,fieldNormWeight:t=v.fieldNormWeight}={}){this.norm=function(e=1,t=3){let r=new Map,n=Math.pow(10,t);return{get(t){let s=t.match(S).length;if(r.has(s))return r.get(s);let i=1/Math.pow(s,.5*e),o=parseFloat(Math.round(i*n)/n);return r.set(s,o),o},clear(){r.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((e,t)=>{this._keysMap[e.id]=t})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,i(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){let t=this.size();i(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,r=this.size();t<r;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!u(e)||a(e))return;let r={v:e,i:t,n:this.norm.get(e)};this.records.push(r)}_addObject(e,t){let r={i:t,$:{}};this.keys.forEach((t,s)=>{let o=t.getFn?t.getFn(e):this.getFn(e,t.path);if(u(o)){if(n(o)){let e=[],t=[{nestedArrIndex:-1,value:o}];for(;t.length;){let{nestedArrIndex:r,value:s}=t.pop();if(u(s)){if(i(s)&&!a(s)){let t={v:s,i:r,n:this.norm.get(s)};e.push(t)}else n(s)&&s.forEach((e,r)=>{t.push({nestedArrIndex:r,value:e})})}}r.$[s]=e}else if(i(o)&&!a(o)){let e={v:o,n:this.norm.get(o)};r.$[s]=e}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function M(e,t,{getFn:r=v.getFn,fieldNormWeight:n=v.fieldNormWeight}={}){let s=new x({getFn:r,fieldNormWeight:n});return s.setKeys(e.map(m)),s.setSources(t),s.create(),s}function w(e,{errors:t=0,currentLocation:r=0,expectedLocation:n=0,distance:s=v.distance,ignoreLocation:i=v.ignoreLocation}={}){let o=t/e.length;if(i)return o;let l=Math.abs(n-r);return s?o+l/s:l?1:o}class O{constructor(e,{location:t=v.location,threshold:r=v.threshold,distance:n=v.distance,includeMatches:s=v.includeMatches,findAllMatches:i=v.findAllMatches,minMatchCharLength:o=v.minMatchCharLength,isCaseSensitive:l=v.isCaseSensitive,ignoreLocation:u=v.ignoreLocation}={}){if(this.options={location:t,threshold:r,distance:n,includeMatches:s,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:l,ignoreLocation:u},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;let a=(e,t)=>{this.chunks.push({pattern:e,alphabet:function(e){let t={};for(let r=0,n=e.length;r<n;r+=1){let s=e.charAt(r);t[s]=(t[s]||0)|1<<n-r-1}return t}(e),startIndex:t})},c=this.pattern.length;if(c>32){let e=0,t=c%32,r=c-t;for(;e<r;)a(this.pattern.substr(e,32),e),e+=32;if(t){let e=c-32;a(this.pattern.substr(e),e)}}else a(this.pattern,0)}searchIn(e){let{isCaseSensitive:t,includeMatches:r}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return r&&(t.indices=[[0,e.length-1]]),t}let{location:n,distance:s,threshold:i,findAllMatches:o,minMatchCharLength:l,ignoreLocation:u}=this.options,a=[],c=0,h=!1;this.chunks.forEach(({pattern:t,alphabet:d,startIndex:p})=>{let{isMatch:g,score:y,indices:m}=function(e,t,r,{location:n=v.location,distance:s=v.distance,threshold:i=v.threshold,findAllMatches:o=v.findAllMatches,minMatchCharLength:l=v.minMatchCharLength,includeMatches:u=v.includeMatches,ignoreLocation:a=v.ignoreLocation}={}){let c;if(t.length>32)throw Error(f(32));let h=t.length,d=e.length,p=Math.max(0,Math.min(n,d)),g=i,y=p,m=l>1||u,_=m?Array(d):[];for(;(c=e.indexOf(t,y))>-1;)if(g=Math.min(w(t,{currentLocation:c,expectedLocation:p,distance:s,ignoreLocation:a}),g),y=c+h,m){let e=0;for(;e<h;)_[c+e]=1,e+=1}y=-1;let b=[],S=1,x=h+d,M=1<<h-1;for(let n=0;n<h;n+=1){let i=0,l=x;for(;i<l;){let e=w(t,{errors:n,currentLocation:p+l,expectedLocation:p,distance:s,ignoreLocation:a});e<=g?i=l:x=l,l=Math.floor((x-i)/2+i)}x=l;let u=Math.max(1,p-l+1),c=o?d:Math.min(p+l,d)+h,f=Array(c+2);f[c+1]=(1<<n)-1;for(let i=c;i>=u;i-=1){let o=i-1,l=r[e.charAt(o)];if(m&&(_[o]=+!!l),f[i]=(f[i+1]<<1|1)&l,n&&(f[i]|=(b[i+1]|b[i])<<1|1|b[i+1]),f[i]&M&&(S=w(t,{errors:n,currentLocation:o,expectedLocation:p,distance:s,ignoreLocation:a}))<=g){if(g=S,(y=o)<=p)break;u=Math.max(1,2*p-y)}}let v=w(t,{errors:n+1,currentLocation:p,expectedLocation:p,distance:s,ignoreLocation:a});if(v>g)break;b=f}let O={isMatch:y>=0,score:Math.max(.001,S)};if(m){let e=function(e=[],t=v.minMatchCharLength){let r=[],n=-1,s=-1,i=0;for(let o=e.length;i<o;i+=1){let o=e[i];o&&-1===n?n=i:o||-1===n||((s=i-1)-n+1>=t&&r.push([n,s]),n=-1)}return e[i-1]&&i-n>=t&&r.push([n,i-1]),r}(_,l);e.length?u&&(O.indices=e):O.isMatch=!1}return O}(e,t,d,{location:n+p,distance:s,threshold:i,findAllMatches:o,minMatchCharLength:l,includeMatches:r,ignoreLocation:u});g&&(h=!0),c+=y,g&&m&&(a=[...a,...m])});let d={isMatch:h,score:h?c/this.chunks.length:1};return h&&r&&(d.indices=a),d}}class E{constructor(e){this.pattern=e}static isMultiMatch(e){return k(e,this.multiRegex)}static isSingleMatch(e){return k(e,this.singleRegex)}search(){}}function k(e,t){let r=e.match(t);return r?r[1]:null}class j extends E{constructor(e,{location:t=v.location,threshold:r=v.threshold,distance:n=v.distance,includeMatches:s=v.includeMatches,findAllMatches:i=v.findAllMatches,minMatchCharLength:o=v.minMatchCharLength,isCaseSensitive:l=v.isCaseSensitive,ignoreLocation:u=v.ignoreLocation}={}){super(e),this._bitapSearch=new O(e,{location:t,threshold:r,distance:n,includeMatches:s,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:l,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class I extends E{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,r=0,n=[],s=this.pattern.length;for(;(t=e.indexOf(this.pattern,r))>-1;)r=t+s,n.push([t,r-1]);let i=!!n.length;return{isMatch:i,score:i?0:1,indices:n}}}let P=[class extends E{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){let t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},I,class extends E{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){let t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends E{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){let t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends E{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){let t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends E{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){let t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends E{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){let t=e.indexOf(this.pattern),r=-1===t;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}},j],L=P.length,A=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,N=new Set([j.type,I.type]),T=[];function C(e,t){for(let r=0,n=T.length;r<n;r+=1){let n=T[r];if(n.condition(e,t))return new n(e,t)}return new O(e,t)}let R={AND:"$and",OR:"$or"},q={PATH:"$path",PATTERN:"$val"},$=e=>!!(e[R.AND]||e[R.OR]),F=e=>!!e[q.PATH],H=e=>!n(e)&&l(e)&&!$(e),z=e=>({[R.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function U(e,t,{auto:r=!0}={}){let s=e=>{let o=Object.keys(e),l=F(e);if(!l&&o.length>1&&!$(e))return s(z(e));if(H(e)){let n=l?e[q.PATH]:o[0],s=l?e[q.PATTERN]:e[n];if(!i(s))throw Error(h(n));let u={keyId:b(n),pattern:s};return r&&(u.searcher=C(s,t)),u}let u={children:[],operator:o[0]};return o.forEach(t=>{let r=e[t];n(r)&&r.forEach(e=>{u.children.push(s(e))})}),u};return $(e)||(e=z(e)),s(e)}function W(e,t){let r=e.matches;t.matches=[],u(r)&&r.forEach(e=>{if(!u(e.indices)||!e.indices.length)return;let{indices:r,value:n}=e,s={indices:r,value:n};e.key&&(s.key=e.key.src),e.idx>-1&&(s.refIndex=e.idx),t.matches.push(s)})}function D(e,t){t.score=e.score}class K{constructor(e,t={},r){this.options={...v,...t},this.options.useExtendedSearch,this._keyStore=new y(this.options.keys),this.setCollection(e,r)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof x))throw Error("Incorrect 'index' type");this._myIndex=t||M(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){u(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){let t=[];for(let r=0,n=this._docs.length;r<n;r+=1){let s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,n-=1,t.push(s))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){let{includeMatches:r,includeScore:n,shouldSort:s,sortFn:l,ignoreFieldNorm:u}=this.options,a=i(e)?i(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return!function(e,{ignoreFieldNorm:t=v.ignoreFieldNorm}){e.forEach(e=>{let r=1;e.matches.forEach(({key:e,norm:n,score:s})=>{let i=e?e.weight:null;r*=Math.pow(0===s&&i?Number.EPSILON:s,(i||1)*(t?1:n))}),e.score=r})}(a,{ignoreFieldNorm:u}),s&&a.sort(l),o(t)&&t>-1&&(a=a.slice(0,t)),function(e,t,{includeMatches:r=v.includeMatches,includeScore:n=v.includeScore}={}){let s=[];return r&&s.push(W),n&&s.push(D),e.map(e=>{let{idx:r}=e,n={item:t[r],refIndex:r};return s.length&&s.forEach(t=>{t(e,n)}),n})}(a,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(e){let t=C(e,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:e,i:r,n:s})=>{if(!u(e))return;let{isMatch:i,score:o,indices:l}=t.searchIn(e);i&&n.push({item:e,idx:r,matches:[{score:o,value:e,norm:s,indices:l}]})}),n}_searchLogical(e){let t=U(e,this.options),r=(e,t,n)=>{if(!e.children){let{keyId:r,searcher:s}=e,i=this._findMatches({key:this._keyStore.get(r),value:this._myIndex.getValueForItemAtKeyId(t,r),searcher:s});return i&&i.length?[{idx:n,item:t,matches:i}]:[]}let s=[];for(let i=0,o=e.children.length;i<o;i+=1){let o=e.children[i],l=r(o,t,n);if(l.length)s.push(...l);else if(e.operator===R.AND)return[]}return s},n=this._myIndex.records,s={},i=[];return n.forEach(({$:e,i:n})=>{if(u(e)){let o=r(t,e,n);o.length&&(s[n]||(s[n]={idx:n,item:e,matches:[]},i.push(s[n])),o.forEach(({matches:e})=>{s[n].matches.push(...e)}))}}),i}_searchObjectList(e){let t=C(e,this.options),{keys:r,records:n}=this._myIndex,s=[];return n.forEach(({$:e,i:n})=>{if(!u(e))return;let i=[];r.forEach((r,n)=>{i.push(...this._findMatches({key:r,value:e[n],searcher:t}))}),i.length&&s.push({idx:n,item:e,matches:i})}),s}_findMatches({key:e,value:t,searcher:r}){if(!u(t))return[];let s=[];if(n(t))t.forEach(({v:t,i:n,n:i})=>{if(!u(t))return;let{isMatch:o,score:l,indices:a}=r.searchIn(t);o&&s.push({score:l,key:e,value:t,idx:n,norm:i,indices:a})});else{let{v:n,n:i}=t,{isMatch:o,score:l,indices:u}=r.searchIn(n);o&&s.push({score:l,key:e,value:n,norm:i,indices:u})}return s}}K.version="7.0.0",K.createIndex=M,K.parseIndex=function(e,{getFn:t=v.getFn,fieldNormWeight:r=v.fieldNormWeight}={}){let{keys:n,records:s}=e,i=new x({getFn:t,fieldNormWeight:r});return i.setKeys(n),i.setIndexRecords(s),i},K.config=v,K.parseQuery=U,function(...e){T.push(...e)}(class{constructor(e,{isCaseSensitive:t=v.isCaseSensitive,includeMatches:r=v.includeMatches,minMatchCharLength:n=v.minMatchCharLength,ignoreLocation:s=v.ignoreLocation,findAllMatches:i=v.findAllMatches,location:o=v.location,threshold:l=v.threshold,distance:u=v.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:r,minMatchCharLength:n,findAllMatches:i,ignoreLocation:s,location:o,threshold:l,distance:u},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map(e=>{let r=e.trim().split(A).filter(e=>e&&!!e.trim()),n=[];for(let e=0,s=r.length;e<s;e+=1){let s=r[e],i=!1,o=-1;for(;!i&&++o<L;){let e=P[o],r=e.isMultiMatch(s);r&&(n.push(new e(r,t)),i=!0)}if(!i)for(o=-1;++o<L;){let e=P[o],r=e.isSingleMatch(s);if(r){n.push(new e(r,t));break}}}return n})}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){let t=this.query;if(!t)return{isMatch:!1,score:1};let{includeMatches:r,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let s=0,i=[],o=0;for(let n=0,l=t.length;n<l;n+=1){let l=t[n];i.length=0,s=0;for(let t=0,n=l.length;t<n;t+=1){let n=l[t],{isMatch:u,indices:a,score:c}=n.search(e);if(u){if(s+=1,o+=c,r){let e=n.constructor.type;N.has(e)?i=[...i,...a]:i.push(a)}}else{o=0,s=0,i.length=0;break}}if(s){let e={isMatch:!0,score:o/s};return r&&(e.indices=i),e}}return{isMatch:!1,score:1}}})},1551:function(e,t,r){"use strict";r.d(t,{v1:function(){return O}});var n,s=("object"==typeof localStorage&&(localStorage.getItem("debug")?.includes("next-usequerystate")??localStorage.getItem("debug")?.includes("nuqs")))??!1;function i(e,...t){if(!s)return;let r=function(e,...t){return e.replace(/%[sfdO]/g,e=>{let r=t.shift();return"%O"===e&&r?JSON.stringify(r).replace(/"([^"]+)":/g,"$1:"):String(r)})}(e,...t);performance.mark(r),console.log(e,...t)}function o(e,t){try{return e(t)}catch(e){return!function(e,...t){s&&console.warn(e,...t)}("[nuqs] Error while parsing value `%s`: %O",e),null}}function l(e){function t(t){if(void 0===t)return null;let r="";if(Array.isArray(t)){if(void 0===t[0])return null;r=t[0]}return"string"==typeof t&&(r=t),o(e.parse,r)}return{...e,parseServerSide:t,withDefault(e){return{...this,defaultValue:e,parseServerSide:r=>t(r)??e}},withOptions(e){return{...this,...e}}}}l({parse:e=>e,serialize:e=>`${e}`}),l({parse:e=>{let t=parseInt(e);return Number.isNaN(t)?null:t},serialize:e=>Math.round(e).toFixed()}),l({parse:e=>{let t=parseInt(e,16);return Number.isNaN(t)?null:t},serialize:e=>{let t=Math.round(e).toString(16);return t.padStart(t.length+t.length%2,"0")}}),l({parse:e=>{let t=parseFloat(e);return Number.isNaN(t)?null:t},serialize:e=>e.toString()}),l({parse:e=>"true"===e,serialize:e=>e?"true":"false"}),l({parse:e=>{let t=parseInt(e);return Number.isNaN(t)?null:new Date(t)},serialize:e=>e.valueOf().toString()}),l({parse:e=>{let t=new Date(e);return Number.isNaN(t.valueOf())?null:t},serialize:e=>e.toISOString()});var u={409:"Multiple versions of the library are loaded. This may lead to unexpected behavior. Currently using %s, but %s was about to load on top.",429:"URL update rate-limited by the browser. Consider increasing `throttleMs` for keys %s. %O",500:"Empty search params cache. Search params can't be accessed in Layouts.",501:"Search params cache already populated. Have you called `parse` twice?"};function a(e){return`[nuqs] ${u[e]}
  See https://err.47ng.com/NUQS-${e}`}var c=r(9332),h=r(7294),f=r(4155),d=function(){if("undefined"==typeof window)return 50;let e=!!window.GestureEvent;if(!e)return 50;try{let e=navigator.userAgent?.match(/version\/([\d\.]+) safari/i);return parseFloat(e[1])>=17?120:320}catch{return 320}}(),p=new Map,g={history:"replace",scroll:!1,shallow:!0,throttleMs:d},y=new Set,m=0,_=null;function b(e){return p.get(e)??null}function v(e,t){let r=function(e){if(0===e.size)return"";let t=[];for(let[r,n]of e.entries())t.push(`${r}=${n.replace(/%/g,"%25").replace(/\+/g,"%2B").replace(/ /g,"+").replace(/#/g,"%23").replace(/&/g,"%26").replace(/"/g,"%22").replace(/'/g,"%27").replace(/`/g,"%60").replace(/</g,"%3C").replace(/>/g,"%3E")}`);return"?"+t.join("&")}(t),n=location.hash;return e+r+n}var S=Symbol("__nuqs__SYNC__"),x="__nuqs__NO_SYNC__",M=Symbol("__nuqs__NOTIFY__"),w={all:n=n||new Map,on:function(e,t){var r=n.get(e);r?r.push(t):n.set(e,[t])},off:function(e,t){var r=n.get(e);r&&(t?r.splice(r.indexOf(t)>>>0,1):n.set(e,[]))},emit:function(e,t){var r=n.get(e);r&&r.slice().map(function(e){e(t)}),(r=n.get("*"))&&r.slice().map(function(r){r(e,t)})}};function O(e,{history:t="replace",shallow:r=!0,scroll:n=!1,throttleMs:s=d,parse:l=e=>e,serialize:u=String,defaultValue:M,startTransition:O}={history:"replace",scroll:!1,shallow:!0,throttleMs:d,parse:e=>e,serialize:String,defaultValue:void 0}){let E=(0,c.useRouter)(),k=(0,c.useSearchParams)(),[j,I]=h.useState(()=>{let t=b(e),r="object"!=typeof location?k?.get(e)??null:new URLSearchParams(location.search).get(e)??null,n=t??r;return null===n?null:o(l,n)}),P=h.useRef(j);i("[nuqs `%s`] render - state: %O, iSP: %s",e,j,k?.get(e)??null),f.env.__NEXT_WINDOW_HISTORY_SUPPORT&&h.useEffect(()=>{let t=k.get(e)??null,r=null===t?null:l(t);i("[nuqs `%s`] syncFromUseSearchParams %O",e,r),P.current=r,I(r)},[k?.get(e),e]),h.useInsertionEffect(()=>{function t(t){i("[nuqs `%s`] updateInternalState %O",e,t),P.current=t,I(t)}function r(r){let n=r.get(e)??null,s=null===n?null:l(n);i("[nuqs `%s`] syncFromURL %O",e,s),t(s)}return i("[nuqs `%s`] subscribing to sync",e),w.on(S,r),w.on(e,t),()=>{i("[nuqs `%s`] unsubscribing from sync",e),w.off(S,r),w.off(e,t)}},[e]);let L=h.useCallback((o,l={})=>{let c="function"==typeof o?o(P.current??M??null):o;return w.emit(e,c),!function(e,t,r,n){let s=null===t?null:r(t);i("[nuqs queue] Enqueueing %s=%s %O",e,s,n),p.set(e,s),"push"===n.history&&(g.history="push"),n.scroll&&(g.scroll=!0),!1===n.shallow&&(g.shallow=!1),n.startTransition&&(y.add(n.startTransition),g.shallow=!1),g.throttleMs=Math.max(n.throttleMs??d,Number.isFinite(g.throttleMs)?g.throttleMs:0)}(e,c,u,{history:l.history??t,shallow:l.shallow??r,scroll:l.scroll??n,throttleMs:l.throttleMs??s,startTransition:l.startTransition??O}),null===_&&(_=new Promise((e,t)=>{if(!Number.isFinite(g.throttleMs)){i("[nuqs queue] Skipping flush due to throttleMs=Infinity"),e(new URLSearchParams(location.search)),setTimeout(()=>{_=null},0);return}function r(){m=performance.now();let[r,n]=function(e){let t=new URLSearchParams(location.search);if(0===p.size)return[t,null];let r=Array.from(p.entries()),n={...g},s=Array.from(y);for(let[e,s]of(p.clear(),y.clear(),g.history="replace",g.scroll=!1,g.shallow=!0,g.throttleMs=d,i("[nuqs queue] Flushing queue %O with options %O",r,n),r))null===s?t.delete(e):t.set(e,s);try{let r=window.next.router,o="string"==typeof r?.state?.asPath;if(o){let e=v(r.state.asPath.split("?")[0]??"",t);i("[nuqs queue (pages)] Updating url: %s",e);let s="push"===n.history?r.push:r.replace;s.call(r,e,e,{scroll:n.scroll,shallow:n.shallow})}else{let r=v(location.href.split("?")[0]??"",t);i("[nuqs queue (app)] Updating url: %s",r);let o="push"===n.history?history.pushState:history.replaceState;o.call(history,history.state,x,r),n.scroll&&window.scrollTo(0,0),n.shallow||function(e,t){let r=n=>{if(n===e.length)return t();let s=e[n];if(!s)throw Error("Invalid transition function");s(()=>r(n+1))};r(0)}(s,()=>{e.replace(r,{scroll:!1,shallow:!1})})}return[t,null]}catch(e){return console.error(a(429),r.map(([e])=>e).join(),e),[t,e]}}(E);null===n?e(r):t(r),_=null}setTimeout(function(){let e=performance.now(),t=e-m,n=g.throttleMs,s=Math.max(0,Math.min(n,n-t));i("[nuqs queue] Scheduling flush in %f ms. Throttled at %f ms",s,n),0===s?r():setTimeout(r,s)},0)})),_},[e,t,r,n,s,O]);return[j??M??null,L]}"object"==typeof history&&function(){let e="1.14.0",t=history.__nuqs_patched;if(t){t!==e&&console.error(a(409),t,e);return}for(let t of(i("[nuqs] Patching history with %s",e),["pushState","replaceState"])){let e=history[t].bind(history);history[t]=function(r,n,s){if(!s)return i("[nuqs] history.%s(null) (%s) %O",t,n,r),e(r,n,s);let o=n===x?"internal":"external",l=new URL(s,location.origin).searchParams;if(i("[nuqs] history.%s(%s) (%s) %O",t,s,o,r),"external"===o){for(let[e,t]of l.entries()){let r=b(e);null!==r&&r!==t&&(i("[nuqs] Overwrite detected for key: %s, Server: %s, queue: %s",e,t,r),l.set(e,r))}setTimeout(()=>{i("[nuqs] External history.%s call: triggering sync with %s",t,l),w.emit(S,l),w.emit(M,{search:l,source:o})},0)}else setTimeout(()=>{w.emit(M,{search:l,source:o})},0);return e(r,n===x?"":n,s)}}Object.defineProperty(history,"__nuqs_patched",{value:e,writable:!1,enumerable:!1,configurable:!1})}()}}]);