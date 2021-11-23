"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37464],{3905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return f}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},k=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=m(a),f=n,c=s["".concat(o,".").concat(f)]||s[f]||d[f]||i;return a?r.createElement(c,l(l({ref:t},k),{},{components:a})):r.createElement(c,l({ref:t},k))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},12631:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return k},default:function(){return s}});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),l=["components"],p={id:"knex.knex-1.migrator",title:"Interface: Migrator",sidebar_label:"Migrator",custom_edit_url:null,hide_title:!0},o="Interface: Migrator",m={unversionedId:"api/interfaces/knex.knex-1.migrator",id:"version-4.5/api/interfaces/knex.knex-1.migrator",isDocsHomePage:!1,title:"Interface: Migrator",description:"knex.Knex.Migrator",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.migrator.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.migrator",permalink:"/docs/api/interfaces/knex.knex-1.migrator",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637656600,formattedLastUpdatedAt:"11/23/2021",frontMatter:{id:"knex.knex-1.migrator",title:"Interface: Migrator",sidebar_label:"Migrator",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"MigrationSource",permalink:"/docs/api/interfaces/knex.knex-1.migrationsource"},next:{title:"MigratorConfig",permalink:"/docs/api/interfaces/knex.knex-1.migratorconfig"}},k=[{value:"Methods",id:"methods",children:[{value:"currentVersion",id:"currentversion",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3},{value:"down",id:"down",children:[{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"forceFreeMigrationsLock",id:"forcefreemigrationslock",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3},{value:"latest",id:"latest",children:[{value:"Parameters:",id:"parameters-3",children:[],level:4}],level:3},{value:"list",id:"list",children:[{value:"Parameters:",id:"parameters-4",children:[],level:4}],level:3},{value:"make",id:"make",children:[{value:"Parameters:",id:"parameters-5",children:[],level:4}],level:3},{value:"rollback",id:"rollback",children:[{value:"Parameters:",id:"parameters-6",children:[],level:4}],level:3},{value:"status",id:"status",children:[{value:"Parameters:",id:"parameters-7",children:[],level:4}],level:3},{value:"up",id:"up",children:[{value:"Parameters:",id:"parameters-8",children:[],level:4}],level:3}],level:2}],d={toc:k};function s(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-migrator"},"Interface: Migrator"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Migrator"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"currentversion"},"currentVersion"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"currentVersion"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<string",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<string",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2139"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"down"},"down"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"down"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2142"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"forcefreemigrationslock"},"forceFreeMigrationsLock"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"forceFreeMigrationsLock"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2143"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"latest"},"latest"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"latest"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2136"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"list"},"list"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"list"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2140"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"make"},"make"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"make"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<string",">"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<string",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2135"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rollback"},"rollback"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"rollback"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"all?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"all?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2137"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"status"},"status"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"status"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<number",">"),(0,i.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<number",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2138"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"up"},"up"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"up"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2141"))}s.isMDXComponent=!0}}]);