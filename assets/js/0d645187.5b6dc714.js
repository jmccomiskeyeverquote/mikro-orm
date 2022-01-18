"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69208],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=o(a),k=n,u=s["".concat(c,".").concat(k)]||s[k]||d[k]||p;return a?r.createElement(u,i(i({ref:t},m),{},{components:a})):r.createElement(u,i({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<p;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},50485:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return m},default:function(){return s}});var r=a(83117),n=a(80102),p=(a(67294),a(3905)),i=["components"],l={id:"core.cacheadapter",title:"Interface: CacheAdapter",sidebar_label:"CacheAdapter",custom_edit_url:null,hide_title:!0},c="Interface: CacheAdapter",o={unversionedId:"api/interfaces/core.cacheadapter",id:"version-4.5/api/interfaces/core.cacheadapter",title:"Interface: CacheAdapter",description:"core.CacheAdapter",source:"@site/versioned_docs/version-4.5/api/interfaces/core.cacheadapter.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.cacheadapter",permalink:"/docs/api/interfaces/core.cacheadapter",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1642516163,formattedLastUpdatedAt:"1/18/2022",frontMatter:{id:"core.cacheadapter",title:"Interface: CacheAdapter",sidebar_label:"CacheAdapter",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"AssignOptions",permalink:"/docs/api/interfaces/core.assignoptions"},next:{title:"ConnectionConfig",permalink:"/docs/api/interfaces/core.connectionconfig"}},m=[{value:"Implemented by",id:"implemented-by",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"clear",id:"clear",children:[],level:3},{value:"close",id:"close",children:[],level:3},{value:"get",id:"get",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3},{value:"set",id:"set",children:[{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3}],level:2}],d={toc:m};function s(e){var t=e.components,a=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"interface-cacheadapter"},"Interface: CacheAdapter"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".CacheAdapter"),(0,p.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/api/classes/core.filecacheadapter"},(0,p.kt)("em",{parentName:"a"},"FileCacheAdapter"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/api/classes/core.memorycacheadapter"},(0,p.kt)("em",{parentName:"a"},"MemoryCacheAdapter"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/api/classes/core.nullcacheadapter"},(0,p.kt)("em",{parentName:"a"},"NullCacheAdapter")))),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"clear"},"clear"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Clears all items stored in the cache."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/CacheAdapter.ts#L16"},"packages/core/src/cache/CacheAdapter.ts:16")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"close"},"close"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional"),(0,p.kt)("strong",{parentName:"p"},"close"),"(): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Called inside ",(0,p.kt)("inlineCode",{parentName:"p"},"MikroORM.close()")," Allows graceful shutdowns (e.g. for redis)."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/CacheAdapter.ts#L21"},"packages/core/src/cache/CacheAdapter.ts:21")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"get"},"get"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"get"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,p.kt)("p",null,"Gets the items under ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," key from the cache."),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"name")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/CacheAdapter.ts#L6"},"packages/core/src/cache/CacheAdapter.ts:6")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"set"},"set"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"set"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,p.kt)("em",{parentName:"p"},"any"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"origin"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"expiration?"),": ",(0,p.kt)("em",{parentName:"p"},"number"),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Sets the item to the cache. ",(0,p.kt)("inlineCode",{parentName:"p"},"origin")," is used for cache invalidation and should reflect the change in data."),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"name")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"data")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"origin")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"expiration?")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"number"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/CacheAdapter.ts#L11"},"packages/core/src/cache/CacheAdapter.ts:11")))}s.isMDXComponent=!0}}]);