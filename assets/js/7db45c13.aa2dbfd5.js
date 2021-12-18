"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78893],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),k=m(a),d=n,u=k["".concat(s,".").concat(d)]||k[d]||c[d]||i;return a?r.createElement(u,o(o({ref:t},l),{},{components:a})):r.createElement(u,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},46323:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return l},default:function(){return k}});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),o=["components"],p={id:"migrations.migrationrunner",title:"Class: MigrationRunner",sidebar_label:"MigrationRunner",custom_edit_url:null,hide_title:!0},s="Class: MigrationRunner",m={unversionedId:"api/classes/migrations.migrationrunner",id:"version-4.5/api/classes/migrations.migrationrunner",title:"Class: MigrationRunner",description:"migrations.MigrationRunner",source:"@site/versioned_docs/version-4.5/api/classes/migrations.migrationrunner.md",sourceDirName:"api/classes",slug:"/api/classes/migrations.migrationrunner",permalink:"/docs/api/classes/migrations.migrationrunner",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1639832646,formattedLastUpdatedAt:"12/18/2021",frontMatter:{id:"migrations.migrationrunner",title:"Class: MigrationRunner",sidebar_label:"MigrationRunner",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"MigrationGenerator",permalink:"/docs/api/classes/migrations.migrationgenerator"},next:{title:"MigrationStorage",permalink:"/docs/api/classes/migrations.migrationstorage"}},l=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[],level:3},{value:"connection",id:"connection",children:[],level:3},{value:"driver",id:"driver",children:[],level:3},{value:"helper",id:"helper",children:[],level:3},{value:"masterTransaction",id:"mastertransaction",children:[],level:3},{value:"options",id:"options",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"getQueries",id:"getqueries",children:[{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"run",id:"run",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3},{value:"setMasterMigration",id:"setmastermigration",children:[{value:"Parameters:",id:"parameters-3",children:[],level:4}],level:3},{value:"unsetMasterMigration",id:"unsetmastermigration",children:[],level:3}],level:2}],c={toc:l};function k(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-migrationrunner"},"Class: MigrationRunner"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations"},"migrations"),".MigrationRunner"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new MigrationRunner"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"driver"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#migrationsoptions"},(0,i.kt)("em",{parentName:"a"},"MigrationsOptions")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"config"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,i.kt)("em",{parentName:"a"},"Configuration")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">","): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationrunner"},(0,i.kt)("em",{parentName:"a"},"MigrationRunner"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"driver")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#migrationsoptions"},(0,i.kt)("em",{parentName:"a"},"MigrationsOptions")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.configuration"},(0,i.kt)("em",{parentName:"a"},"Configuration")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationrunner"},(0,i.kt)("em",{parentName:"a"},"MigrationRunner"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L9"},"packages/migrations/src/MigrationRunner.ts:9")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"config"},"config"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"config"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,i.kt)("em",{parentName:"a"},"Configuration")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"connection"},"connection"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"connection"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L7"},"packages/migrations/src/MigrationRunner.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"driver"},"driver"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"driver"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"helper"},"helper"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"helper"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.schemahelper"},(0,i.kt)("em",{parentName:"a"},"SchemaHelper"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L8"},"packages/migrations/src/MigrationRunner.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mastertransaction"},"masterTransaction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"masterTransaction"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L9"},"packages/migrations/src/MigrationRunner.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"options"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#migrationsoptions"},(0,i.kt)("em",{parentName:"a"},"MigrationsOptions"))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getqueries"},"getQueries"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private"),(0,i.kt)("strong",{parentName:"p"},"getQueries"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"migration"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migration"},(0,i.kt)("em",{parentName:"a"},"Migration")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"method"),": ",(0,i.kt)("em",{parentName:"p"},"up")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"down"),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#query"},(0,i.kt)("em",{parentName:"a"},"Query")),"[]",">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"migration")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/migrations.migration"},(0,i.kt)("em",{parentName:"a"},"Migration")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"method")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"up")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"down"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/migrations#query"},(0,i.kt)("em",{parentName:"a"},"Query")),"[]",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L38"},"packages/migrations/src/MigrationRunner.ts:38")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"run"},"run"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"run"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"migration"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/migrations.migration"},(0,i.kt)("em",{parentName:"a"},"Migration")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"method"),": ",(0,i.kt)("em",{parentName:"p"},"up")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"down"),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"migration")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/migrations.migration"},(0,i.kt)("em",{parentName:"a"},"Migration")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"method")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"up")," ","|"," ",(0,i.kt)("em",{parentName:"td"},"down"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L15"},"packages/migrations/src/MigrationRunner.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setmastermigration"},"setMasterMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setMasterMigration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"trx"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"trx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L30"},"packages/migrations/src/MigrationRunner.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unsetmastermigration"},"unsetMasterMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"unsetMasterMigration"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L34"},"packages/migrations/src/MigrationRunner.ts:34")))}k.isMDXComponent=!0}}]);