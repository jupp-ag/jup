"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75],{8075:function(e,t,r){let a,n,l;function withDefault(e,t,r=!0){return{...e,default:t,decode:(...a)=>{let n=e.decode(...a);return void 0===n||r&&null===n?t:n}}}r.d(t,{QueryParamProvider:function(){return QueryParamProvider},StringParam:function(){return i},useQueryParams:function(){return useQueryParams_useQueryParams},withDefault:function(){return withDefault}});let i={encode:function(e){return null==e?e:String(e)},decode:function(e){let t=function(e,t){if(null==e)return e;if(0===e.length&&(!t||t&&""!==e))return null;let r=e instanceof Array?e[0]:e;return null==r?r:t||""!==r?r:null}(e,!0);return null==t?t:String(t)}};'{}[],":'.split("").map(e=>[e,encodeURIComponent(e)]);var o=r(2265);let u=new class{constructor(){this.paramsMap=new Map,this.registeredParams=new Map}set(e,t,r,a){this.paramsMap.set(e,{stringified:t,decoded:r,decode:a})}has(e,t,r){if(!this.paramsMap.has(e))return!1;let a=this.paramsMap.get(e);return!!a&&a.stringified===t&&(null==r||a.decode===r)}get(e){var t;if(this.paramsMap.has(e))return null==(t=this.paramsMap.get(e))?void 0:t.decoded}registerParams(e){for(let t of e){let e=this.registeredParams.get(t)||0;this.registeredParams.set(t,e+1)}}unregisterParams(e){for(let t of e){let e=(this.registeredParams.get(t)||0)-1;e<=0?(this.registeredParams.delete(t),this.paramsMap.has(t)&&this.paramsMap.delete(t)):this.registeredParams.set(t,e)}}clear(){this.paramsMap.clear(),this.registeredParams.clear()}};function extendParamConfigForKeys(e,t,r,a){var n;if(!r||!t.length)return e;let l={...e},i=!1;for(let e of t)Object.prototype.hasOwnProperty.call(l,e)||(l[e]=null!=(n=r[e])?n:a,i=!0);return i?l:e}let s=Object.prototype.hasOwnProperty;function is(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function shallowEqual(e,t,r){var a,n;if(is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;let l=Object.keys(e),i=Object.keys(t);if(l.length!==i.length)return!1;for(let i=0;i<l.length;i++){let o=null!=(n=null==(a=null==r?void 0:r[l[i]])?void 0:a.equals)?n:is;if(!s.call(t,l[i])||!o(e[l[i]],t[l[i]]))return!1}return!0}function getLatestDecodedValues(e,t,r){let a={},n=Object.keys(t);for(let l of n){let n;let i=t[l],o=e[l];if(r.has(l,o,i.decode))n=r.get(l);else{if(n=i.decode(o),i.equals&&r.has(l,o)){let e=r.get(l);i.equals(n,e)&&(n=e)}void 0!==n&&r.set(l,o,n,i.decode)}void 0===n&&void 0!==i.default&&(n=i.default),a[l]=n}return a}function makeStableGetLatestDecodedValues(){let e;return function(t,r,a){let n=getLatestDecodedValues(t,r,a);return null!=e&&shallowEqual(e,n)?e:(e=n,n)}}let c={},memoSearchStringToObject=(e,t,r)=>{if(a===t&&l===e&&n===r)return c;a=t,l=e;let i=e(null!=t?t:"");n=r;let o=function(e){if(e)return Object.fromEntries(e.split("\n").map(e=>e.split("\x00")))}(r);for(let[e,t]of Object.entries(i)){(null==o?void 0:o[e])&&(delete i[e],i[e=o[e]]=t);let r=c[e];shallowEqual(t,r)&&(i[e]=r)}return c=i,i};function mergeOptions(e,t){null==t&&(t={});let r={...e,...t};return t.params&&e.params&&(r.params={...e.params,...t.params}),r}let p={adapter:{},options:{searchStringToObject:function(e){let t=new URLSearchParams(e),r={};for(let[e,a]of t)Object.prototype.hasOwnProperty.call(r,e)?Array.isArray(r[e])?r[e].push(a):r[e]=[r[e],a]:r[e]=a;return r},objectToSearchString:function(e){let t=new URLSearchParams,r=Object.entries(e);for(let[e,a]of r)if(null!=a){if(Array.isArray(a))for(let r of a)t.append(e,null!=r?r:"");else t.append(e,a)}return t.toString()},updateType:"pushIn",includeKnownParams:void 0,includeAllParams:!1,removeDefaultsFromUrl:!1,enableBatching:!1,skipUpdateWhenNoChange:!0}},f=o.createContext(p);function QueryParamProviderInner({children:e,adapter:t,options:r}){let{adapter:a,options:n}=o.useContext(f),l=o.useMemo(()=>({adapter:null!=t?t:a,options:mergeOptions(n,r)}),[t,r,a,n]);return o.createElement(f.Provider,{value:l},e)}function QueryParamProvider({children:e,adapter:t,options:r}){return t?o.createElement(t,null,t=>o.createElement(QueryParamProviderInner,{adapter:t,options:r},e)):o.createElement(QueryParamProviderInner,{options:r},e)}let immediateTask=e=>e(),timeoutTask=e=>setTimeout(()=>e(),0),d=[];function useQueryParams_useQueryParams(e,t){var r,a;let n;let{adapter:l,options:s}=function(){let e=o.useContext(f);if(void 0===e||e===p)throw Error("useQueryParams must be used within a QueryParamProvider");return e}(),[c]=(0,o.useState)(makeStableGetLatestDecodedValues),{paramConfigMap:m,options:h}=(r=e,a=t,{paramConfigMap:void 0===r?{}:Array.isArray(r)?Object.fromEntries(r.map(e=>[e,"inherit"])):r,options:a}),g=(0,o.useMemo)(()=>mergeOptions(s,h),[s,h]),y=function(e,t){var r,a,n;let l={},o=!1,u=Object.keys(e),s=t.includeKnownParams||!1!==t.includeKnownParams&&0===u.length;if(s){let e=Object.keys(null!=(r=t.params)?r:{});u.push(...e)}for(let r of u){let u=e[r];if(null!=u&&"object"==typeof u){l[r]=u;continue}o=!0,l[r]=null!=(n=null==(a=t.params)?void 0:a[r])?n:i}return o?l:e}(m,g),P=memoSearchStringToObject(g.searchStringToObject,l.location.search,function(e){let t;for(let r in e)if(e[r].urlName){let a=e[r].urlName,n=`${a}\0${r}`;t?t.push(n):t=[n]}return t?t.join("\n"):void 0}(y));g.includeAllParams&&(y=extendParamConfigForKeys(y,Object.keys(P),g.params,i));let v=c(P,y,u),b=Object.keys(y).join("\x00");(0,o.useEffect)(()=>{let e=b.split("\x00");return u.registerParams(e),()=>{u.unregisterParams(e)}},[b]);let S={adapter:l,paramConfigMap:y,options:g},j=(0,o.useRef)(S);null==j.current&&(j.current=S),(0,o.useEffect)(()=>{j.current.adapter=l,j.current.paramConfigMap=y,j.current.options=g},[l,y,g]);let[O]=(0,o.useState)(()=>(e,t)=>{let{adapter:r,paramConfigMap:a,options:n}=j.current;null==t&&(t=n.updateType),function(e,{immediate:t}={}){d.push(e),1===d.length&&(t?immediateTask:timeoutTask)(()=>{let t;let r=d.slice();d.length=0;let a=r[0].currentSearchString;for(let e=0;e<r.length;++e){let a=0===e?r[e]:{...r[e],currentSearchString:t};t=function({changes:e,updateType:t,currentSearchString:r,paramConfigMap:a,options:n}){let l,i,o;let{searchStringToObject:s,objectToSearchString:c}=n;null==t&&(t=n.updateType);let p=memoSearchStringToObject(s,r),f=extendParamConfigForKeys(a,Object.keys(e),n.params);if("function"==typeof e){let t=getLatestDecodedValues(p,f,u);i=e(t)}else i=e;return l=function(e,t){let r={},a=Object.keys(t);for(let n of a){let a=t[n];e[n]?r[n]=e[n].encode(t[n]):r[n]=null==a?a:String(a)}return r}(f,i),n.removeDefaultsFromUrl&&function(e,t){var r;for(let a in e)if((null==(r=t[a])?void 0:r.default)!==void 0&&void 0!==e[a]){let r=t[a].encode(t[a].default);r===e[a]&&(e[a]=void 0)}}(l,f),l=function(e,t){var r;let a={};for(let n in e)(null==(r=t[n])?void 0:r.urlName)!=null?a[t[n].urlName]=e[n]:a[n]=e[n];return a}(l,f),(null==(o=c("push"===t||"replace"===t?l:{...p,...l}))?void 0:o.length)&&"?"!==o[0]&&(o=`?${o}`),null!=o?o:""}(a)}e.options.skipUpdateWhenNoChange&&t===a||function({searchString:e,adapter:t,navigate:r,updateType:a}){let n=t.location,l={...n,search:e};r&&("string"==typeof a&&a.startsWith("replace")?t.replace(l):t.push(l))}({searchString:null!=t?t:"",adapter:r[r.length-1].adapter,navigate:!0,updateType:r[r.length-1].updateType})})}({changes:e,updateType:t,currentSearchString:r.location.search,paramConfigMap:a,options:n,adapter:r},{immediate:!n.enableBatching})});return[v,O]}}}]);