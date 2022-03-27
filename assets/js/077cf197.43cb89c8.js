"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1828],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"Identity Map and Request Context"},s=void 0,u={unversionedId:"identity-map",id:"version-5.0/identity-map",title:"Identity Map and Request Context",description:"MikroORM uses identity map in background so you will always get the same instance of",source:"@site/versioned_docs/version-5.0/identity-map.md",sourceDirName:".",slug:"/identity-map",permalink:"/docs/5.0/identity-map",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/identity-map.md",tags:[],version:"5.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1648389366,formattedLastUpdatedAt:"3/27/2022",frontMatter:{title:"Identity Map and Request Context"},sidebar:"docs",previous:{title:"Unit of Work",permalink:"/docs/5.0/unit-of-work"},next:{title:"Entity References and Reference<T> Wrapper",permalink:"/docs/5.0/entity-references"}},p={},d=[{value:"Forking Entity Manager",id:"forking-entity-manager",level:2},{value:"Global Identity Map",id:"global-identity-map",level:2},{value:'<a name="request-context"></a> RequestContext helper for DI containers',id:"-requestcontext-helper-for-di-containers",level:2},{value:"Why is Request Context needed?",id:"why-is-request-context-needed",level:2},{value:"Problem 1 - growing memory footprint",id:"problem-1---growing-memory-footprint",level:3},{value:"Problem 2 - unstable response of API endpoints",id:"problem-2---unstable-response-of-api-endpoints",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM")," uses identity map in background so you will always get the same instance of\none entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const authorRepository = em.getRepository(Author);\nconst jon = await authorRepository.findOne({ name: 'Jon Snow' }, { populate: ['books'] });\nconst authors = await authorRepository.findAll({ populate: ['books'] });\n\n// identity map in action\nconsole.log(jon === authors[0]); // true\n")),(0,r.kt)("p",null,"If you want to clear this identity map cache, you can do so via ",(0,r.kt)("inlineCode",{parentName:"p"},"em.clear()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"orm.em.clear();\n")),(0,r.kt)("p",null,"You should always keep unique identity map per each request. This basically means that you need\nto clone entity manager and use the clone in request context. There are two ways to achieve this:"),(0,r.kt)("h2",{id:"forking-entity-manager"},"Forking Entity Manager"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"fork()")," method you can simply get clean entity manager with its own context and identity map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const em = orm.em.fork();\n")),(0,r.kt)("h2",{id:"global-identity-map"},"Global Identity Map"),(0,r.kt)("p",null,"In v5, it is no longer possible to use the global identity map. This was a\ncommon issue that led to weird bugs, as using the global EM without request\ncontext is almost always wrong, we always need to have a dedicated context for\neach request, so they do not interfere."),(0,r.kt)("p",null,"We still can disable this check via ",(0,r.kt)("inlineCode",{parentName:"p"},"allowGlobalContext")," configuration, or\na connected environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"MIKRO_ORM_ALLOW_GLOBAL_CONTEXT")," - this can\nbe handy especially in unit tests."),(0,r.kt)("h2",{id:"-requestcontext-helper-for-di-containers"},(0,r.kt)("a",{name:"request-context"})," RequestContext helper for DI containers"),(0,r.kt)("p",null,"If you use dependency injection container like ",(0,r.kt)("inlineCode",{parentName:"p"},"inversify")," or the one in ",(0,r.kt)("inlineCode",{parentName:"p"},"nestjs")," framework, it\ncan be hard to achieve this, because you usually want to access your repositories via DI container,\nbut it will always provide you with the same instance, rather than new one for each request. "),(0,r.kt)("p",null,"To solve this, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper, that will use ",(0,r.kt)("inlineCode",{parentName:"p"},"node"),"'s\n",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage"},(0,r.kt)("inlineCode",{parentName:"a"},"AsyncLocalStorage")),"\nin the background to isolate the request context. MikroORM will always use request specific (forked)\nentity manager if available, so all you need to do is to create new request context preferably\nas a middleware:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"app.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),(0,r.kt)("p",null,"You should register this middleware as the last one just before request handlers and before\nany of your custom middleware that is using the ORM. There might be issues when you register\nit before request processing middleware like ",(0,r.kt)("inlineCode",{parentName:"p"},"queryParser")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bodyParser"),", so definitely\nregister the context after them. "),(0,r.kt)("p",null,"Later on you can then access the request scoped ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," via ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext.getEntityManager()"),".\nThis method is used under the hood automatically, so you should not need it. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext.getEntityManager()")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," if the context was\nnot started yet.")),(0,r.kt)("h2",{id:"why-is-request-context-needed"},"Why is Request Context needed?"),(0,r.kt)("p",null,"Imagine you will use single Identity Map throughout your application. It will be shared across\nall request handlers, that can possibly run in parallel. "),(0,r.kt)("h3",{id:"problem-1---growing-memory-footprint"},"Problem 1 - growing memory footprint"),(0,r.kt)("p",null,"As there would be only one shared Identity Map, you can't just clear it after your request ends.\nThere can be another request working with it so clearing the Identity Map from one request could\nbreak other requests running in parallel. This will result in growing memory footprint, as every\nentity that became managed at some point in time would be kept in the Identity Map. "),(0,r.kt)("h3",{id:"problem-2---unstable-response-of-api-endpoints"},"Problem 2 - unstable response of API endpoints"),(0,r.kt)("p",null,"Every entity has ",(0,r.kt)("inlineCode",{parentName:"p"},"toJSON()")," method, that automatically converts it to serialized form. If you\nhave only one shared Identity Map, following situation may occur:"),(0,r.kt)("p",null,"Let's say there are 2 endpoints"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /book/:id")," that returns just the book, without populating anything"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /book-with-author/:id")," that returns the book and its author populated")),(0,r.kt)("p",null,"Now when someone requests same book via both of those endpoints, you could end up with both\nreturning the same output:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /book/1")," returns ",(0,r.kt)("inlineCode",{parentName:"li"},"Book")," without populating its property ",(0,r.kt)("inlineCode",{parentName:"li"},"author")," property"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /book-with-author/1")," returns ",(0,r.kt)("inlineCode",{parentName:"li"},"Book"),", this time with ",(0,r.kt)("inlineCode",{parentName:"li"},"author")," populated"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /book/1")," returns ",(0,r.kt)("inlineCode",{parentName:"li"},"Book"),", but this time also with ",(0,r.kt)("inlineCode",{parentName:"li"},"author")," populated")),(0,r.kt)("p",null,"This happens because the information about entity association being populated is stored in\nthe Identity Map."))}m.isMDXComponent=!0}}]);