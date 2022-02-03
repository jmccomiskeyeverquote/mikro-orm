"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5499],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(a),k=n,u=s["".concat(l,".").concat(k)]||s[k]||d[k]||p;return a?r.createElement(u,o(o({ref:t},c),{},{components:a})):r.createElement(u,o({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var m=2;m<p;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},73188:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return s}});var r=a(83117),n=a(80102),p=(a(67294),a(3905)),o=["components"],i={id:"core.memorycacheadapter",title:"Class: MemoryCacheAdapter",sidebar_label:"MemoryCacheAdapter",custom_edit_url:null,hide_title:!0},l="Class: MemoryCacheAdapter",m={unversionedId:"api/classes/core.memorycacheadapter",id:"version-4.5/api/classes/core.memorycacheadapter",title:"Class: MemoryCacheAdapter",description:"core.MemoryCacheAdapter",source:"@site/versioned_docs/version-4.5/api/classes/core.memorycacheadapter.md",sourceDirName:"api/classes",slug:"/api/classes/core.memorycacheadapter",permalink:"/docs/api/classes/core.memorycacheadapter",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1643875091,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"core.memorycacheadapter",title:"Class: MemoryCacheAdapter",sidebar_label:"MemoryCacheAdapter",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Logger",permalink:"/docs/api/classes/core.logger"},next:{title:"MetadataDiscovery",permalink:"/docs/api/classes/core.metadatadiscovery"}},c=[{value:"Implements",id:"implements",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"data",id:"data",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"clear",id:"clear",children:[],level:3},{value:"get",id:"get",children:[{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"set",id:"set",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3}],level:2}],d={toc:c};function s(e){var t=e.components,a=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"class-memorycacheadapter"},"Class: MemoryCacheAdapter"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".MemoryCacheAdapter"),(0,p.kt)("h2",{id:"implements"},"Implements"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core.cacheadapter"},(0,p.kt)("em",{parentName:"a"},"CacheAdapter")))),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new MemoryCacheAdapter"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"options"),": { ",(0,p.kt)("inlineCode",{parentName:"p"},"expiration"),": ",(0,p.kt)("em",{parentName:"p"},"number"),"  }): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.memorycacheadapter"},(0,p.kt)("em",{parentName:"a"},"MemoryCacheAdapter"))),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"options")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"object"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"options.expiration")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"number"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.memorycacheadapter"},(0,p.kt)("em",{parentName:"a"},"MemoryCacheAdapter"))),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/MemoryCacheAdapter.ts#L5"},"packages/core/src/cache/MemoryCacheAdapter.ts:5")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"data"},"data"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"data"),": ",(0,p.kt)("em",{parentName:"p"},"Map"),"<string, { ",(0,p.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,p.kt)("em",{parentName:"p"},"any")," ; ",(0,p.kt)("inlineCode",{parentName:"p"},"expiration"),": ",(0,p.kt)("em",{parentName:"p"},"number"),"  }",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/MemoryCacheAdapter.ts#L5"},"packages/core/src/cache/MemoryCacheAdapter.ts:5")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"clear"},"clear"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Clears all items stored in the cache."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Implementation of: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.cacheadapter"},"CacheAdapter")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/MemoryCacheAdapter.ts#L36"},"packages/core/src/cache/MemoryCacheAdapter.ts:36")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"get"},"get"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"get"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<undefined ","|"," T",">"),(0,p.kt)("p",null,"Gets the items under ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," key from the cache."),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"name")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<undefined ","|"," T",">"),(0,p.kt)("p",null,"Implementation of: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.cacheadapter"},"CacheAdapter")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/MemoryCacheAdapter.ts#L12"},"packages/core/src/cache/MemoryCacheAdapter.ts:12")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"set"},"set"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"set"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,p.kt)("em",{parentName:"p"},"any"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"origin"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"expiration?"),": ",(0,p.kt)("em",{parentName:"p"},"number"),"): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Sets the item to the cache. ",(0,p.kt)("inlineCode",{parentName:"p"},"origin")," is used for cache invalidation and should reflect the change in data."),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"name")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"data")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"origin")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"expiration?")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"number"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,p.kt)("p",null,"Implementation of: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.cacheadapter"},"CacheAdapter")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/cache/MemoryCacheAdapter.ts#L29"},"packages/core/src/cache/MemoryCacheAdapter.ts:29")))}s.isMDXComponent=!0}}]);