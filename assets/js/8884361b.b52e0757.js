"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68105],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return s}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),o=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=o(a),s=n,c=k["".concat(d,".").concat(s)]||k[s]||u[s]||p;return a?r.createElement(c,i(i({ref:t},m),{},{components:a})):r.createElement(c,i({ref:t},m))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<p;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},32346:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return m},default:function(){return k}});var r=a(83117),n=a(80102),p=(a(67294),a(3905)),i=["components"],l={id:"knex.knex-1.withwrapped",title:"Interface: WithWrapped<TRecord, TResult>",sidebar_label:"WithWrapped",custom_edit_url:null,hide_title:!0},d="Interface: WithWrapped<TRecord, TResult>",o={unversionedId:"api/interfaces/knex.knex-1.withwrapped",id:"version-4.5/api/interfaces/knex.knex-1.withwrapped",isDocsHomePage:!1,title:"Interface: WithWrapped<TRecord, TResult>",description:"knex.Knex.WithWrapped",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.withwrapped.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.withwrapped",permalink:"/docs/api/interfaces/knex.knex-1.withwrapped",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637656600,formattedLastUpdatedAt:"11/23/2021",frontMatter:{id:"knex.knex-1.withwrapped",title:"Interface: WithWrapped<TRecord, TResult>",sidebar_label:"WithWrapped",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"WithSchema",permalink:"/docs/api/interfaces/knex.knex-1.withschema"},next:{title:"Column",permalink:"/docs/api/interfaces/knex.column"}},m=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Callable",id:"callable",children:[{value:"Parameters:",id:"parameters",children:[],level:4},{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:2}],u={toc:m};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"interface-withwrappedtrecord-tresult"},"Interface: WithWrapped<TRecord, TResult",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".WithWrapped"),(0,p.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"TRecord")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"TResult")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"unknown"),"[]")))),(0,p.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"WithWrapped")),(0,p.kt)("p",{parentName:"li"},"\u21b3 ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.with"},(0,p.kt)("em",{parentName:"a"},"With"))))),(0,p.kt)("h2",{id:"callable"},"Callable"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"WithWrapped"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"queryBuilder"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,p.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">","): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,p.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"alias")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"queryBuilder")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,p.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,p.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,p.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1200"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"WithWrapped"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"callback"),": (",(0,p.kt)("inlineCode",{parentName:"p"},"queryBuilder"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,p.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">",") => ",(0,p.kt)("em",{parentName:"p"},"any"),"): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,p.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"alias")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"callback")),(0,p.kt)("td",{parentName:"tr",align:"left"},"(",(0,p.kt)("inlineCode",{parentName:"td"},"queryBuilder"),": ",(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,p.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">",") => ",(0,p.kt)("em",{parentName:"td"},"any"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,p.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,p.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1201"))}k.isMDXComponent=!0}}]);