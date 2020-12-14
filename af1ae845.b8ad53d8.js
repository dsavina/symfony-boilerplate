(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||c;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var p=2;p<c;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(6),c=(n(0),n(115)),r={title:"Web Application",slug:"/i18n/web-application"},i={unversionedId:"07_i18n/3_Web Application",id:"07_i18n/3_Web Application",isDocsHomePage:!1,title:"Web Application",description:"For the web application, i18n has two goals:",source:"@site/docs/07_i18n/3_Web Application.md",slug:"/i18n/web-application",permalink:"/symfony-boilerplate/docs/i18n/web-application",editUrl:"https://github.com/thecodingmachine/symfony-boilerplate/docs/07_i18n/3_Web Application.md",version:"current",sidebar:"docs",previous:{title:"API",permalink:"/symfony-boilerplate/docs/i18n/api"},next:{title:"API and Web Application Interactions",permalink:"/symfony-boilerplate/docs/i18n/api-and-web-application-interactions"}},l=[{value:"Basic Usage",id:"basic-usage",children:[]},{value:"Locales Folder",id:"locales-folder",children:[]},{value:"Browser Language Detection",id:"browser-language-detection",children:[]},{value:"Routing",id:"routing",children:[]},{value:"Update Locale",id:"update-locale",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"For the web application, i18n has two goals:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Translate the user interface."),Object(c.b)("li",{parentName:"ol"},"Tell the API which locale the user has selected (for validations errors, etc.).")),Object(c.b)("p",null,"We use the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://i18n.nuxtjs.org/"}),"nuxt/i18n")," module, and we configured it in\nthe ",Object(c.b)("em",{parentName:"p"},"src/webapp/nuxt.config.js")," file."),Object(c.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="Vue component <template> block"',title:'"Vue',component:!0,"<template>":!0,'block"':!0}),"<button>\n  {{ $t('a_translation_key') }}\n</button>\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="Vue component <script> block"',title:'"Vue',component:!0,"<script>":!0,'block"':!0}),"this.$t('a_translation_key')\n")),Object(c.b)("h2",{id:"locales-folder"},"Locales Folder"),Object(c.b)("p",null,"Folder ",Object(c.b)("em",{parentName:"p"},"src/webapp/locales")," contains one JavaScript file per locale."),Object(c.b)("p",null,"Each of these files exports an object with translation keys and the associated texts."),Object(c.b)("p",null,"For instance:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="src/webapp/locales/en.js"',title:'"src/webapp/locales/en.js"'}),"export default {\n  foo: {\n    baz: 'Hello',\n  },\n}\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","All files should have the same organization (same translations keys, identical sorting, etc.)."))),Object(c.b)("h2",{id:"browser-language-detection"},"Browser Language Detection"),Object(c.b)("p",null,"The first time the user lands on your application's root pages (",Object(c.b)("inlineCode",{parentName:"p"},"/x"),", but not ",Object(c.b)("inlineCode",{parentName:"p"},"/x/y"),"), it automatically detects the\nbrowser language and sets the cookie ",Object(c.b)("inlineCode",{parentName:"p"},"i18n_redirected")," with the corresponding locale. "),Object(c.b)("p",null,"If your application does not support the browser language, it uses the default locale instead."),Object(c.b)("p",null,"Next time the user lands on your application, it will use cookie ",Object(c.b)("inlineCode",{parentName:"p"},"i18n_redirected"),"'s value to translate the\nuser interface to the correct locale automatically (and redirect the user to the right path - see below)."),Object(c.b)("h2",{id:"routing"},"Routing"),Object(c.b)("p",null,"The router prefixes all routes with the locale. For instance, the login page is available on the paths ",Object(c.b)("inlineCode",{parentName:"p"},"/en/login")," and\n",Object(c.b)("inlineCode",{parentName:"p"},"/fr/login"),"."),Object(c.b)("p",null,"Wherever you need to push a route in your router, use the global method ",Object(c.b)("inlineCode",{parentName:"p"},"localePath({ name: 'route_name' })"),"."),Object(c.b)("p",null,"For instance:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="Vue component <template> bock"',title:'"Vue',component:!0,"<template>":!0,'bock"':!0}),"<b-link :to=\"localePath({ name: 'reset-password', query: { email: form.email } })\">\n  {{ $t('pages.login.form.forgot_password_link') }}\n</b-link>\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="Vue component <script> block"',title:'"Vue',component:!0,"<script>":!0,'block"':!0}),"this.$router.push(this.localePath({ name: 'index' }))\n")),Object(c.b)("p",null,"If you don't know the name of your route, take a look at the router file Nuxt.js generates:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="src/webapp/.nuxt/router.js"',title:'"src/webapp/.nuxt/router.js"'}),'{\n  path: "/fr/update-password/:id?/:token",\n  component: _8474331c,\n  name: "update-password-id-token___fr"\n}\n')),Object(c.b)("p",null,"The name of the route here is ",Object(c.b)("inlineCode",{parentName:"p"},"update-password-id-token"),"."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","If a route has parameters, you have to give them to the ",Object(c.b)("inlineCode",{parentName:"p"},"localePath")," method."))),Object(c.b)("h2",{id:"update-locale"},"Update Locale"),Object(c.b)("p",null,"The file ",Object(c.b)("em",{parentName:"p"},"src/webapp/components/layouts/Header.vue")," provides an example of how to update the locale:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="Vue component <template> bock"',title:'"Vue',component:!0,"<template>":!0,'bock"':!0}),'<b-nav-item-dropdown right>\n  <template #button-content>\n    {{ currentLocale }}\n  </template>\n  <b-dropdown-item\n    v-for="locale in availableLocales"\n    :key="locale.code"\n    :active="locale.code === currentLocale"\n    :to="switchLocalePath(locale.code)"\n  >\n    {{ locale.code }}\n  </b-dropdown-item>\n</b-nav-item-dropdown>\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="Vue component <script> block"',title:'"Vue',component:!0,"<script>":!0,'block"':!0}),"export default {\n  computed: {\n    availableLocales() {\n      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)\n    },\n    currentLocale() {\n      return this.$i18n.locale\n    },\n  },\n}\n")),Object(c.b)("p",null,"Here calling ",Object(c.b)("inlineCode",{parentName:"p"},"switchLocalePath")," will update the current locale in the ",Object(c.b)("inlineCode",{parentName:"p"},"i18n")," store (from nuxt-i18n),\nplus the value of the cookie ",Object(c.b)("inlineCode",{parentName:"p"},"i18_redirected"),". It will also redirect the user to the correct route."),Object(c.b)("p",null,"Our custom plugin ",Object(c.b)("em",{parentName:"p"},"src/webapp/plugins/i18n.js")," hooks itself on these events for:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Updating the HTTP header ",Object(c.b)("inlineCode",{parentName:"li"},"Accept-Language")," for next GraphQL requests (more on that in the next chapter)."),Object(c.b)("li",{parentName:"ol"},"Updating the user's locale in the database if authenticated.")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","We configured nuxt-i18n to lazy load the locales files, meaning it will only load the current locale file\ninstead of all locales files. You may have to refresh a page in development to see changes made in the corresponding\nlocale file."))))}s.isMDXComponent=!0}}]);