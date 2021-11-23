"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82734],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43059:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],p={id:"knex.index",title:"Interface: Index",sidebar_label:"Index",custom_edit_url:null,hide_title:!0},c="Interface: Index",l={unversionedId:"api/interfaces/knex.index",id:"version-4.5/api/interfaces/knex.index",isDocsHomePage:!1,title:"Interface: Index",description:"knex.Index",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.index.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.index",permalink:"/docs/api/interfaces/knex.index",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637656600,formattedLastUpdatedAt:"11/23/2021",frontMatter:{id:"knex.index",title:"Interface: Index",sidebar_label:"Index",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"IQueryBuilder",permalink:"/docs/api/interfaces/knex.iquerybuilder"},next:{title:"IndexDef",permalink:"/docs/api/interfaces/knex.indexdef"}},s=[{value:"Properties",id:"properties",children:[{value:"columnName",id:"columnname",children:[],level:3},{value:"composite",id:"composite",children:[],level:3},{value:"keyName",id:"keyname",children:[],level:3},{value:"primary",id:"primary",children:[],level:3},{value:"unique",id:"unique",children:[],level:3}],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-index"},"Interface: Index"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".Index"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"columnname"},"columnName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"columnName"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L54"},"packages/knex/src/typings.ts:54")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"composite"},"composite"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"composite"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L58"},"packages/knex/src/typings.ts:58")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"keyname"},"keyName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"keyName"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L55"},"packages/knex/src/typings.ts:55")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"primary"},"primary"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"primary"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L57"},"packages/knex/src/typings.ts:57")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"unique"},"unique"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"unique"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L56"},"packages/knex/src/typings.ts:56")))}m.isMDXComponent=!0}}]);