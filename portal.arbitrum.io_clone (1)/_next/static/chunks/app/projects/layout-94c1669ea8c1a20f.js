(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[570],{5279:function(e,t,r){Promise.resolve().then(r.bind(r,1002)),Promise.resolve().then(r.bind(r,9656))},3829:function(e,t,r){"use strict";r.d(t,{E8:function(){return getChainSlugFromTitle},QE:function(){return s},XS:function(){return getChainDetailsById},ey:function(){return sortByChainRank},o4:function(){return i},zG:function(){return n}});var l=r(947),a=r(8412);let s=[{slug:"arbitrum-one",title:"Arbitrum One",logoUrl:"/images/ArbOneLogo.svg",description:"Rollup protocol. Permissionless validation, secured by operational fraud proofs.",color:{primary:"#1B4ADD",secondary:"#001A6B"},rank:1,isOrbitChain:!1},{slug:"arbitrum-nova",title:"Arbitrum Nova",logoUrl:"/images/ArbNovaLogo.svg",description:"AnyTrust protocol. High scale and low fee. Secured by a trust-minimized Data Availability Committee (DAC).",color:{primary:"#E57310",secondary:"#743600"},rank:2,isOrbitChain:!1}],i=l.K5.filter(e=>a.Du[e.title]).map((e,t)=>{var r;return{slug:e.slug,title:e.title,logoUrl:e.images.logoUrl,description:e.description?e.description:"",color:e.color,rank:3+(null!==(r=e.rank)&&void 0!==r?r:t),isOrbitChain:!0}}),n=[...s,...i],getChainDetailsById=e=>n.find(t=>t.slug===e),getChainSlugFromTitle=e=>e.replaceAll(" ","-").toLowerCase(),sortByChainRank=(e,t)=>{var r,l,a,s;return(null!==(a=null===(r=getChainDetailsById(e))||void 0===r?void 0:r.rank)&&void 0!==a?a:0)-(null!==(s=null===(l=getChainDetailsById(t))||void 0===l?void 0:l.rank)&&void 0!==s?s:0)}},6273:function(e,t,r){"use strict";r.d(t,{d:function(){return getSelectedChainsInfo}});var l=r(3829);let getSelectedChainsInfo=e=>{let t=!e.length||e.length===l.zG.length;return{areAllChainsSelected:t,isArbitrumOneSelected:t||e.includes("arbitrum-one"),isArbitrumNovaSelected:t||e.includes("arbitrum-nova")}}},6121:function(e,t,r){"use strict";r.d(t,{SO:function(){return n},Ye:function(){return getSubcategoryDetailsById},mc:function(){return sortBySubcategoryRank}});var l=JSON.parse('{"k":[{"id":"cdd3a6f5-69a3-4f82-8768-b65db715926d","title":"Social","slug":"social","rank":1,"appCount":{"Total":4,"Arbitrum One":4}},{"id":"a0e3d762-98c7-4355-a680-4325546d8bc3","title":"Analytics","slug":"analytics","rank":1,"appCount":{"Total":27,"Arbitrum One":26,"Arbitrum Nova":5}},{"id":"48a0f7f4-d6df-4244-84ab-b978e3f2b77e","title":"DEX","slug":"dex","rank":1,"appCount":{"Total":61,"Arbitrum One":60,"Arbitrum Nova":4}},{"id":"2eaba26d-13ba-4d53-ab4d-90854402e1d6","title":"NFT Marketplace","slug":"nft-marketplace","rank":1,"appCount":{"Total":14,"Arbitrum One":13,"Arbitrum Nova":3}},{"id":"44d051a9-ab9c-4dab-bb23-b3d6b12c9899","title":"Bridge","slug":"bridge","rank":1,"appCount":{"Total":57,"Arbitrum One":54,"Arbitrum Nova":11}},{"id":"08447a42-d8d4-477d-870b-a944605dc222","title":"DEX Aggregator","slug":"dex-aggregator","rank":2,"appCount":{"Total":20,"Arbitrum One":19,"Arbitrum Nova":2}},{"id":"aeb54d75-2132-48b5-820b-56777ec37a44","title":"Payments","slug":"payments","rank":2,"appCount":{"Total":17,"Arbitrum One":17}},{"id":"9e753b71-8ff1-4eaa-9173-65a68cd4a506","title":"NFT","slug":"nft","rank":2,"appCount":{"Total":28,"Arbitrum One":28,"Arbitrum Nova":1}},{"id":"0e7c05ec-50a0-4de4-b3df-1a641e2cc92f","title":"Centralized Exchange","slug":"centralized-exchanges","rank":2,"appCount":{"Total":12,"Arbitrum One":11,"Arbitrum Nova":4}},{"id":"62de460a-c732-4cee-8c72-456a85826ac3","title":"Defi Tool","slug":"defi-tool","rank":3,"appCount":{"Total":28,"Arbitrum One":28,"Arbitrum Nova":2}},{"id":"6f432222-9d3e-4d99-8f61-03dd086fc616","title":"NFT Tool","slug":"nft-tool","rank":3,"appCount":{"Total":10,"Arbitrum One":10,"Arbitrum Nova":2}},{"id":"43ccc8a1-6335-4129-b92e-9fce5632f80c","title":"Developer Tool","slug":"developer-tool","rank":3,"appCount":{"Total":71,"Arbitrum One":70,"Arbitrum Nova":18}},{"id":"cc85e9d5-0139-47f6-bb16-147828820c65","title":"Wallet","slug":"wallet","rank":3,"appCount":{"Total":77,"Arbitrum One":77,"Arbitrum Nova":19}},{"id":"170f68a6-b64c-4c97-aae0-949b80797434","title":"Social","slug":"social","rank":4,"appCount":{"Total":10,"Arbitrum One":8,"Arbitrum Nova":3}},{"id":"b0ce09fc-c3e3-4a06-a5b7-5b984ee72eb4","title":"Oracle","slug":"oracle","rank":4,"appCount":{"Total":11,"Arbitrum One":11,"Arbitrum Nova":2}},{"id":"7a4b184f-370a-4ea7-a1e3-eb768d9b01b2","title":"Fiat On-Ramp","slug":"fiat-on-ramp","rank":4,"appCount":{"Total":21,"Arbitrum One":21,"Arbitrum Nova":2}},{"id":"49f5cd4d-be37-4823-9094-834b1abf8ed7","title":"Lending/Borrowing","slug":"lending","rank":4,"appCount":{"Total":47,"Arbitrum One":47}},{"id":"c4d2626e-bcbf-4196-ab58-c590101f1036","title":"NFT-Fi","slug":"nft-fi","rank":5,"appCount":{"Total":11,"Arbitrum One":11}},{"id":"4d7aed1d-b04b-42fc-ad5a-56465bd0a891","title":"Derivatives","slug":"derivatives","rank":5,"appCount":{"Total":8,"Arbitrum One":8}},{"id":"69a8855b-c2e2-4104-bb42-d7f6f2a1d1cd","title":"DAO Tool","slug":"dao-tool","rank":5,"appCount":{"Total":23,"Arbitrum One":23,"Arbitrum Nova":2}},{"id":"0473d961-077f-44d4-9a84-5afeb98a8095","title":"Infra & Tools (Other)","slug":"infra-and-tools-other","rank":6,"appCount":{"Total":63,"Arbitrum One":61,"Arbitrum Nova":10}},{"id":"f6f6a74a-364a-4243-b523-cabc87016197","title":"Liquidity Management","slug":"liquidity-management","rank":6,"appCount":{"Total":34,"Arbitrum One":34}},{"id":"6898140b-9a93-4eeb-9422-da0bc057a566","title":"Stablecoin","slug":"stablecoin","rank":7,"appCount":{"Total":26,"Arbitrum One":26,"Arbitrum Nova":2}},{"id":"d90449d5-8c8a-4d3e-b753-71e9fde99748","title":"Node Provider","slug":"node-provider","rank":7,"appCount":{"Total":25,"Arbitrum One":24,"Arbitrum Nova":6}},{"id":"4ee727c9-a3f0-47db-8b2c-95da2f124014","title":"Security Tool","slug":"security-tool","rank":8,"appCount":{"Total":15,"Arbitrum One":15,"Arbitrum Nova":2}},{"id":"23c33383-6a69-48a8-8a9d-7c5b3825f024","title":"Perpetuals","slug":"perpetuals","rank":8,"appCount":{"Total":37,"Arbitrum One":37}},{"id":"791b0b9e-ae21-433a-9d1e-d0cb2e5673da","title":"Crypto Taxes","slug":"crypto-taxes","rank":9,"appCount":{"Total":9,"Arbitrum One":9,"Arbitrum Nova":3}},{"id":"37c2de04-8308-4ce5-bbe9-5530a04c0fa5","title":"DeFi (Other)","slug":"defi-other","rank":9,"appCount":{"Total":68,"Arbitrum One":68,"Arbitrum Nova":1}},{"id":"836f33e1-6987-477d-9231-8018ecd1df7e","title":"Options","slug":"options","rank":10,"appCount":{"Total":25,"Arbitrum One":25}},{"id":"61080030-f2f4-4791-b628-0bfcdd92d0e7","title":"Portfolio","slug":"portfolio","rank":11,"appCount":{"Total":8,"Arbitrum One":8,"Arbitrum Nova":1}},{"id":"74dfbe62-9f9c-4573-881f-7ec15e6ada2b","title":"Real World Assets (RWAs)","slug":"rwa","rank":12,"appCount":{"Total":15,"Arbitrum One":15,"Arbitrum Nova":1}},{"id":"6fec7997-295e-42c4-a750-3ed7845bd6d5","title":"Insurance","slug":"insurance","rank":13,"appCount":{"Total":2,"Arbitrum One":2}},{"id":"9dcd6e79-bfee-456b-8ce5-18699f60a702","title":"Action","slug":"action","appCount":{"Total":8,"Arbitrum One":5,"Arbitrum Nova":4}},{"id":"46f69c70-e611-4cb0-9b6e-097651ad5f4e","title":"Adventure","slug":"adventure","appCount":{"Total":6,"Arbitrum One":6}},{"id":"aa40be3e-5dc6-4ab7-abe7-51f89238d582","title":"Casual","slug":"casual","appCount":{"Total":3,"Arbitrum One":3}},{"id":"0460f929-1d09-417c-9558-6a2ebd0bc193","title":"GameFi","slug":"gamefi","appCount":{"Total":38,"Arbitrum One":29,"Arbitrum Nova":9}},{"id":"4420a1f5-dc21-4582-bcf7-26d5f60d6d2d","title":"Racing","slug":"racing","appCount":{"Total":3,"Arbitrum One":1,"Arbitrum Nova":2}},{"id":"d94ef5cd-4329-4e35-9aa6-b6f250b60740","title":"RPG","slug":"rpg","appCount":{"Total":6,"Arbitrum One":5,"Arbitrum Nova":1}},{"id":"96253c0b-8ff5-4fc3-836f-3dfb1be3f4d7","title":"Strategy","slug":"strategy","appCount":{"Total":3,"Arbitrum Nova":1,"Arbitrum One":2}}]}'),a=r(6355),s=r(7099);let i=l.k.map(e=>({...e,appCount:e.appCount})),n=i.map(e=>({...e,categoryId:(0,s.vX)(e.slug),entityType:a.p.Subcategory,searchTitle:"Filter projects by: ".concat(e.title),tags:["subcategory","subcategories"]})),o=Object.fromEntries(n.map((e,t)=>[e.slug,t])),getSubcategoryDetailsById=e=>o[e]>-1?n[o[e]]:null,sortBySubcategoryRank=(e,t)=>{var r,l,a,s;return(null!==(a=null===(r=getSubcategoryDetailsById(e))||void 0===r?void 0:r.rank)&&void 0!==a?a:0)-(null!==(s=null===(l=getSubcategoryDetailsById(t))||void 0===l?void 0:l.rank)&&void 0!==s?s:0)}},1002:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectsCountByFilters:function(){return ProjectsCountByFilters}});var l=r(7437),a=r(2265),s=r(7199),i=r(2968),n=r(8194),o=r(2170),c=r(8799),u=r(6827),d=r(7453);let useFilteredProjectsClient=()=>{let{selectedCategory:e}=(0,c.k)(),{selectedSubcategories:t}=(0,d.P)(),{selectedChains:r}=(0,u.N)();return(0,o.s)({selectedCategory:e,selectedSubcategories:t,selectedChains:r})};var g=r(6433),p=r(7099);let b=p.aA.reduce((e,t)=>{e[t.slug]=t.title;let r=t.subcategories.reduce((e,t)=>(e[t.slug]=t.title,e),{});return{...e,...r}},{}),Tag=e=>{let{categoryOrSubcategory:t,onClick:r}=e;return t?(0,l.jsxs)("button",{onClick:r,className:"flex items-center gap-1 rounded-md border border-white/5 bg-atmosphere-blue/50 px-2 py-1 text-xs text-white/80 hover:opacity-80",children:[b[t]?b[t]:null,(0,l.jsx)(s,{className:"h-4 w-4"})]}):null},ProjectsCountByFilters=()=>{let e=useFilteredProjectsClient(),[t,r]=(0,a.useState)(!1),{setFiltersInUrl:s,allowedSubcategories:o}=(0,g.m)(),handleFilterClick=e=>{let t=o.filter(t=>t!==e);s(t)};return 0===o.length?null:(0,l.jsxs)("div",{className:"mb-4 flex flex-wrap items-center gap-2 text-sm",children:[e.length," project",1!==e.length&&"s",o.length>0&&" filtered by"," ",o.slice(0,t?o.length:3).map(e=>(0,l.jsx)(Tag,{categoryOrSubcategory:e,onClick:()=>handleFilterClick(e)},e)),o.length-3>1?(0,l.jsx)("button",{className:"flex items-center gap-1 rounded-md border border-white/5 bg-default-black px-2 py-1 text-xs text-white/80 hover:opacity-80",onClick:()=>r(!t),children:t?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{className:"h-3 w-3"})," Show less"]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{className:"h-3 w-3"}),"".concat(o.length-3," Others")]})}):null]})}},9656:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectsFilterBar:function(){return ProjectsFilterBar}});var l=r(7437),a=r(2265),s=r(4033),i=r(203),n=r(3999),o=r(4558),c=r(2157),u=r(6691),d=r.n(u),g=r(7805),p=r(3611),b=r(3986),m=r(3849),h=r(6827);let NetworkOption=e=>{let{network:t}=e,[,r]=(0,m.g)(),{selectedChains:s}=(0,h.N)(),i=(0,p.U0)(),n=(0,a.useMemo)(()=>s.some(e=>e===t.slug),[t.slug,s]),o=1===s.length&&n;return(0,l.jsxs)("div",{className:(0,b.m)("group flex select-none justify-start rounded-md","hover:bg-white"),children:[(0,l.jsx)("input",{type:"checkbox",id:t.slug,name:t.title,checked:n,onChange:()=>{null==i||i.capture("Chain Dropdown Option Click",{network:t.title,action:n?"Unselect":"Select"}),n?r({chains:s.filter(e=>e!==t.slug).join("_")}):r({chains:[...s,t.slug].join("_")})},className:(0,b.m)("text-grey-400 peer","[&:checked~label_.checkIcon]:visible [&:checked~label_span:first-child]:border-gray-200 [&:checked~label_span:first-child]:bg-white","[&:disabled~label_span:first-child]:bg-white/70 [&:disabled~label_span:nth-child(2)]:opacity-50"),disabled:o,hidden:!0,"aria-hidden":!1}),(0,l.jsxs)("label",{htmlFor:t.slug,className:(0,b.m)("flex items-center whitespace-pre p-2 px-3 text-left hover:text-black peer-checked:text-white peer-checked:hover:text-black peer-disabled:text-gray-500/50 peer-disabled:hover:text-gray-500/50",o?"cursor-not-allowed":"cursor-pointer"),children:[(0,l.jsx)("span",{className:"flex items-center justify-center rounded-sm border border-gray-100/20 bg-default-black p-[3px] lg:p-[1px]",children:(0,l.jsx)(g.Z,{className:"checkIcon invisible h-4 w-4 stroke-black stroke-[3px] lg:h-3 lg:w-3"})}),(0,l.jsx)("span",{className:"ml-2 mr-1 shrink-0",children:(0,l.jsx)(d(),{src:t.logoUrl,width:24,height:24,className:"rounded-full lg:h-4 lg:w-4",alt:"".concat(t.title," Logo")})}),(0,l.jsx)("span",{children:t.title})]})]},t.slug)};var f=r(3829);let NetworkOptionList=()=>(0,l.jsxs)("div",{className:"flex flex-col gap-4 text-left",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("span",{className:"p-2 opacity-50",children:"Core Chains"}),f.QE.map(e=>(0,l.jsx)(NetworkOption,{network:e},e.slug))]}),f.o4.length?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("hr",{className:"opacity-20"}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("span",{className:"p-2 opacity-50",children:"Orbit Chains"}),f.o4.map(e=>(0,l.jsx)(NetworkOption,{network:e},e.slug))]})]}):null]}),NetworkDropdown=()=>(0,l.jsxs)(n.J,{className:"relative w-full lg:w-max",children:[(0,l.jsxs)(n.J.Button,{className:"group flex h-[36px] w-full min-w-[100px] items-center justify-between gap-1 rounded-md border border-dark-gray bg-default-black px-1 py-[5px] text-sm text-white hover:bg-white hover:text-black lg:w-max lg:px-2",children:[(0,l.jsxs)("div",{className:"flex shrink-0 flex-nowrap items-center gap-2",children:[(0,l.jsx)("span",{className:"flex items-center justify-center p-0.5",children:(0,l.jsx)(o,{className:"h-5 w-5 stroke-white group-hover:stroke-black"})}),(0,l.jsx)("span",{children:"Chains"})]}),(0,l.jsx)("span",{className:"flex shrink-0 items-center justify-center p-1 lg:block",children:(0,l.jsx)(c,{className:" h-3 w-3 stroke-white stroke-2 group-hover:stroke-black lg:h-4 lg:w-4"})})]}),(0,l.jsx)(n.J.Panel,{className:"absolute right-0 z-50 mt-4 flex max-h-[350px] w-full min-w-max flex-col overflow-scroll rounded-md bg-default-black p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.2)] lg:left-0 lg:right-auto",children:(0,l.jsx)(NetworkOptionList,{})})]});var x=r(7199);let CategoryHeaderRow=e=>{let{category:t,isEverySubcategorySelected:r,isExpanded:s,setIsExpanded:i,resetFilters:n}=e,[{categories:o=[]}]=(0,m.g)(),u=(0,p.U0)(),d=t.subcategories.map(e=>e.slug),g=(0,a.useMemo)(()=>o.filter(e=>d.includes(e)).length,[o,d]),b=r?!s:0!==g;return(0,l.jsxs)("div",{className:"flex w-full cursor-pointer items-center justify-between lg:pointer-events-none",onClick:()=>{null==u||u.capture("Category Click",{category:t.title,action:s?"Collapse":"Expand"}),i(!s)},children:[(0,l.jsx)("span",{className:"font-medium leading-6",children:t.title}),(0,l.jsxs)("div",{className:"flex items-center justify-center gap-1",children:[b&&(0,l.jsxs)("button",{className:"flex items-center justify-center gap-1 rounded-full bg-white px-2 py-1 text-xs text-black hover:bg-black hover:text-white [&>svg]:hover:stroke-cyan",onClick:n,children:[r?"All":g,(0,l.jsx)(x,{className:"h-4 w-4 stroke-black stroke-2"})]}),(0,l.jsx)("button",{className:"flex items-center justify-center p-1 lg:hidden",children:(0,l.jsx)(c,{className:"h-4 w-4 stroke-white stroke-2 duration-300 ease-in-out ".concat(s?"rotate-180":"")})})]})]})},SelectedSubcategories=e=>{let{selectedSubcategoriesWithinCategory:t}=e;return 0===t.length?null:(0,l.jsx)("div",{className:"mt-2 flex flex-wrap gap-x-1 gap-y-1 text-sm text-gray-500",children:t.map(e=>(0,l.jsx)("span",{className:"px-3 py-1",children:e.title},e.slug))})};var k=r(9240),v=r(8799),j=r(7453),y=r(6433),w=r(7099),C=r(6273);let FilterTag=e=>{let{category:t,subcategory:r}=e,{selectedCategory:s}=(0,v.k)(),{selectedSubcategories:i}=(0,j.P)(),{selectedChains:n}=(0,h.N)(),{areAllChainsSelected:o}=(0,C.d)(n),c=(0,p.U0)(),{setFiltersInUrl:u}=(0,y.m)(),d=(0,a.useMemo)(()=>r.title.toLowerCase().includes("(other)")?"Other":r.title,[r]),g=(0,a.useMemo)(()=>o?r.appCount.Total:n.map(e=>{let t=(0,f.XS)(e);if(t)return t.title}).reduce((e,t)=>t?e+(r.appCount[t]||0):e,0),[n,r,o]),m=i.includes(r.slug),x=s===t.slug.toLowerCase(),N=m||x;return(0,l.jsxs)("div",{className:(0,b.m)("select-none justify-center px-1",0===g&&"pointer-events-none opacity-30"),children:[(0,l.jsx)("input",{type:"checkbox",id:r.slug,name:r.title,checked:N,onChange:()=>{null==c||c.capture("Subcategory Click",{subcategory:r.title,action:N?"Unselect":"Select"});let e=[...i||[],...w.x$[s]||[]];u(e=N?e.filter(e=>e!==r.slug):[...e,r.slug])},className:"peer [&:checked~label_.checkIcon]:visible [&:checked~label_span:first-child]:border-white [&:checked~label_span:first-child]:bg-white",hidden:!0,"aria-hidden":!1}),(0,l.jsxs)("label",{htmlFor:r.slug,className:"group flex cursor-pointer items-center gap-2 rounded-md p-1 px-3 text-left font-light text-white/50 hover:bg-white hover:text-black peer-checked:text-white hover:peer-checked:text-black",children:[(0,l.jsx)("span",{className:"flex items-center justify-center rounded-sm border border-gray-100/20 bg-default-black p-[3px] lg:p-[1px]",children:(0,l.jsx)(k,{className:"checkIcon invisible h-4 w-4 stroke-black stroke-[3px] lg:h-3 lg:w-3"})}),(0,l.jsxs)("span",{className:"text-sm",children:[d," (",g,")"]})]})]},r.slug)},SubcategoriesList=e=>{let{category:t}=e;return(0,l.jsx)("ul",{className:"mt-2 flex flex-col items-start justify-center gap-2 lg:gap-0",children:t.subcategories.map(e=>(0,l.jsx)(FilterTag,{category:t,subcategory:e},e.slug))})},N="mt-2 flex items-center justify-center gap-1 hover:text-black rounded-md hover:bg-white text-sm p-2 px-3",SelectAllButton=e=>{let{onClick:t}=e;return(0,l.jsxs)("button",{className:N,onClick:t,children:[(0,l.jsx)(k,{className:"h-4 w-4 stroke-current stroke-[3px] lg:h-3 lg:w-3"}),(0,l.jsx)("span",{children:"Select all"})]})},UnselectAllButton=e=>{let{onClick:t}=e;return(0,l.jsxs)("button",{className:N,onClick:t,children:[(0,l.jsx)(x,{className:"h-4 w-4 stroke-current stroke-[3px] lg:h-3 lg:w-3"}),(0,l.jsx)("span",{className:"font-medium",children:"Unselect all"})]})},isValidUrlCategory=e=>{var t;return!!(e.length&&(null===(t=w.x$[e])||void 0===t?void 0:t.length)>0)},CategorySection=e=>{let{category:t}=e,{selectedCategory:r}=(0,v.k)(),{selectedSubcategories:s}=(0,j.P)(),[i,n]=(0,a.useState)(!0),o=(0,p.U0)(),{setFiltersInUrl:c}=(0,y.m)(),u=w.x$[t.slug],d=(0,a.useMemo)(()=>isValidUrlCategory(r)?[...s,...w.x$[r]]:s,[s,r]),g=r===t.slug||u.every(e=>d.includes(e)),b=g?t.subcategories:u.reduce((e,r)=>{if(d.includes(r)){let l=t.subcategories.find(e=>e.slug===r);l&&e.push(l)}return e},[]),resetFilters=e=>{e.stopPropagation(),null==o||o.capture("Category Unselect All Button Click",{category:t.title});let l=[...s||[],...w.x$[r]||[],...w.x$[t.slug]].filter(e=>!u.includes(e)&&r!==t.slug.toLowerCase());c(l)};return(0,l.jsxs)("div",{className:"py-4",children:[(0,l.jsx)(CategoryHeaderRow,{category:t,isEverySubcategorySelected:g,isExpanded:i,setIsExpanded:n,resetFilters:resetFilters}),(0,l.jsx)("div",{children:i?(0,l.jsxs)(l.Fragment,{children:[!g&&(0,l.jsx)(SelectAllButton,{onClick:function(){null==o||o.capture("Category Select All Button Click",{category:t.title});let e=[...s||[],...w.x$[r]||[],...w.x$[t.slug]];c(e)}}),g&&(0,l.jsx)(UnselectAllButton,{onClick:resetFilters}),(0,l.jsx)(SubcategoriesList,{category:t})]}):(0,l.jsx)(SelectedSubcategories,{selectedSubcategoriesWithinCategory:b})})]},t.slug)},CategoriesPanel=()=>(0,l.jsx)("div",{className:"shrink-0 grow-0 flex-nowrap p-4 lg:flex lg:max-h-[700px] lg:w-[900px] lg:flex-col lg:flex-wrap lg:gap-4 lg:p-0",children:w.aA.map(e=>(0,l.jsx)(CategorySection,{category:e},e.slug))});var A=r(6784);let CategoryDropdownButton=e=>{let{onClick:t}=e;return(0,l.jsxs)("button",{className:"group flex w-full items-center justify-between gap-1 overflow-hidden rounded-md border border-dark-gray bg-default-black py-[5px] pl-2 pr-1 text-sm text-white hover:bg-white hover:text-black lg:w-max lg:gap-2 lg:pl-4 lg:pr-2",onClick:t,children:[(0,l.jsxs)("div",{className:"flex shrink-0 flex-nowrap items-center gap-2",children:[(0,l.jsx)("span",{className:"flex items-center justify-center p-0.5",children:(0,l.jsx)(A,{className:"h-5 w-5 stroke-white group-hover:stroke-black"})}),(0,l.jsx)("span",{children:"Categories"})]}),(0,l.jsx)("span",{className:"flex items-center justify-center p-1",children:(0,l.jsx)(c,{className:"h-3 w-3 shrink-0 stroke-white stroke-2 group-hover:stroke-black lg:h-4 lg:w-4"})})]})},CategoryDropdown=()=>{let e=(0,p.U0)();return(0,l.jsxs)(n.J,{className:"relative w-full lg:w-max",children:[(0,l.jsx)(n.J.Button,{as:"div",onClick:function(){null==e||e.capture("Category Button Click")},children:(0,l.jsx)(CategoryDropdownButton,{})}),(0,l.jsx)(n.J.Panel,{className:"relative z-50 flex max-h-[80vh] w-max flex-col overflow-auto rounded-md bg-default-black lg:absolute lg:mt-4 lg:p-4 lg:shadow-[0px_4px_20px_rgba(0,0,0,0.2)]",children:(0,l.jsx)(CategoriesPanel,{})})]})};var O=r(8960);let ProjectsFilterBar=()=>{let[e,t]=(0,a.useState)(!1),r=(0,s.useRouter)(),closePanel=()=>{t(!1)};return(0,a.useEffect)(()=>{let resizeHandler=()=>{window.innerWidth>=1024&&closePanel()};return window.addEventListener("resize",resizeHandler),()=>{window.removeEventListener("resize",resizeHandler)}},[]),(0,l.jsxs)("nav",{className:"z-100 w-full py-2",children:[(0,l.jsx)("div",{className:"flex w-full items-center justify-between",children:(0,l.jsxs)("ul",{className:"flex w-full items-center gap-4 text-center lg:w-auto lg:flex-row",children:[(0,l.jsx)("li",{className:"hidden lg:block",children:(0,l.jsx)(CategoryDropdown,{})}),(0,l.jsx)("li",{className:"w-full lg:hidden",children:(0,l.jsx)(CategoryDropdownButton,{onClick:()=>{t(!0)}})}),(0,l.jsx)("li",{className:"w-full lg:block",children:(0,l.jsx)(NetworkDropdown,{})})]})}),(0,l.jsxs)(O.h,{isOpen:e,onClose:closePanel,className:"w-full bg-default-black",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between px-4 py-8 text-white",children:[(0,l.jsxs)("button",{onClick:closePanel,className:"flex items-center justify-center gap-1 text-sm font-medium leading-7 hover:opacity-70",children:[(0,l.jsx)(i,{className:"h-4 w-4 stroke-2"}),(0,l.jsx)("span",{children:"Done"})]}),(0,l.jsx)("button",{className:"text-sm font-medium leading-7 hover:opacity-70",onClick:()=>{r.replace("/projects")},children:"Clear all"})]}),(0,l.jsx)("div",{children:(0,l.jsx)(CategoriesPanel,{})})]})]})}},8960:function(e,t,r){"use strict";r.d(t,{h:function(){return SidePanel}});var l=r(7437),a=r(8208),s=r(3986);let SidePanel=e=>{let{isOpen:t,onClose:r,children:i,className:n,panelClassName:o}=e;return(0,l.jsxs)(a.V,{open:t,onClose:r,className:"fixed z-[1001]",children:[(0,l.jsx)("div",{className:"fixed inset-0 bg-black opacity-80","aria-hidden":"true"}),(0,l.jsx)("div",{className:(0,s.m)("fixed right-0 top-0 flex h-full items-start justify-end overflow-y-auto bg-white lg:w-9/12 lg:min-w-[700px]",n),style:{animation:"panelSlideInAnimation 0.3s ease"},children:(0,l.jsxs)(a.V.Panel,{className:(0,s.m)("flex h-full w-full flex-col border border-white/10 font-light",o),children:[(0,l.jsx)(a.V.Title,{}),(0,l.jsx)("div",{className:"side-panel relative z-40 h-full w-full overflow-auto",children:i})]})})]})}},3849:function(e,t,r){"use strict";r.d(t,{g:function(){return useArbQueryParams}});var l=r(8075),a=r(2265),s=r(3829);let i=s.zG.map(e=>e.slug).join("_"),n={search:(0,l.withDefault)(l.StringParam,""),categories:(0,l.withDefault)(l.StringParam,""),subcategories:(0,l.withDefault)(l.StringParam,""),chains:(0,l.withDefault)(l.StringParam,i),project:(0,l.withDefault)(l.StringParam,""),orbitChain:(0,l.withDefault)(l.StringParam,""),groupBy:(0,l.withDefault)(l.StringParam,"subcategory")};function useArbQueryParams(){let[{search:e,categories:t,subcategories:r,chains:s,project:i,orbitChain:o,groupBy:c},u]=(0,l.useQueryParams)(n),d=(0,a.useCallback)(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return u(...t)},[u]),g=(0,a.useMemo)(()=>t.split("_"),[t]),p=(0,a.useMemo)(()=>r.split("_").filter(e=>!!e),[r]),b=(0,a.useMemo)(()=>s.split("_").filter(e=>!!e),[s]);return(0,a.useMemo)(()=>[{search:e,categories:g,subcategories:p,chains:b,project:i,orbitChain:o,groupBy:c},d],[e,g,p,b,i,o,c,d])}},2170:function(e,t,r){"use strict";r.d(t,{s:function(){return useFilteredProjects}});var l=r(2265),a=r(6273),s=r(7099),i=r(8412),n=r(6121),o=r(3829);function useFilteredProjects(e){let{selectedCategory:t,selectedSubcategories:r,selectedChains:c}=e,{areAllChainsSelected:u}=(0,a.d)(c),d=(0,l.useMemo)(()=>c.map(e=>{let t=(0,o.XS)(e);return t?t.title:""}),[c]),g=(0,l.useCallback)(e=>!!u||d.some(t=>!0===e.chainsMap[t]),[u,d]),p=(0,l.useMemo)(()=>[...r||[],...s.x$[t]||[]].sort(n.mc),[t,r]),b=(0,l.useMemo)(()=>i.Fw.filter(e=>{let t=g(e),r=!p.length||e.subcategories.some(e=>p.includes(e.slug));return t&&r}),[g,p]);return b}},6433:function(e,t,r){"use strict";r.d(t,{m:function(){return useFilters}});var l=r(2265),a=r(7220),s=r(4033),i=r(6121),n=r(6827),o=r(7099),c=r(8799),u=r(7453);let createFiltersMap=e=>{let t={};return e.forEach(e=>{let r=(0,i.Ye)(e);if(r){let l=r.categoryId;l&&(t[l]?t[l][e]=!0:t[l]={[e]:!0})}}),t},useFilters=()=>{let e=(0,s.useRouter)(),{selectedChains:t}=(0,n.N)(),{selectedCategory:r}=(0,c.k)(),{selectedSubcategories:d}=(0,u.P)(),g=(0,l.useMemo)(()=>[...d||[],...o.x$[r]||[]].sort(i.mc),[r,d]);return{setFiltersInUrl:r=>{if(!r.length){e.replace("/projects?".concat(a.Z.stringify({chains:t.join("_")})));return}let l=createFiltersMap(r),s=1===Object.keys(l).length;if(!s){let r=Object.values(l).flatMap(Object.keys).sort(i.mc);e.replace("/projects?".concat(a.Z.stringify({chains:t.join("_"),subcategories:r.join("_")})));return}let n=Object.keys(l[Object.keys(l)[0]]).sort(i.mc),c=(0,o.iP)(n);if(c){e.replace("/projects/".concat(c,"?").concat(a.Z.stringify({chains:t.join("_")})));return}e.replace("/projects?".concat(a.Z.stringify({chains:t.join("_"),subcategories:n.join("_")})))},allowedSubcategories:g}}},8799:function(e,t,r){"use strict";r.d(t,{k:function(){return useSelectedCategory}});var l=r(4033);let useSelectedCategory=()=>{var e;let t=(0,l.usePathname)(),r=null!==(e=t.split("/projects/")[1])&&void 0!==e?e:"all";return{selectedCategory:r}}},6827:function(e,t,r){"use strict";r.d(t,{N:function(){return useSelectedChains}});var l=r(3829),a=r(3849),s=r(6273);let useSelectedChains=()=>{let[{chains:e}]=(0,a.g)(),{isArbitrumNovaSelected:t,isArbitrumOneSelected:r,areAllChainsSelected:i}=(0,s.d)(e);return{selectedChains:e.sort(l.ey),isArbitrumOneSelected:r,isArbitrumNovaSelected:t,areAllChainsSelected:i}}},7453:function(e,t,r){"use strict";r.d(t,{P:function(){return useSelectedSubcategories}});var l=r(3849);let useSelectedSubcategories=()=>{let[{subcategories:e}]=(0,l.g)();return{selectedSubcategories:e}}}},function(e){e.O(0,[383,758,75,411,958,412,947,971,472,744],function(){return e(e.s=5279)}),_N_E=e.O()}]);