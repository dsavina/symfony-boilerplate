(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),h=a,d=b["".concat(o,".").concat(h)]||b[h]||u[h]||i;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(115)),o={title:"API and Web Application Interactions",slug:"/i18n/api-and-web-application-interactions"},c={unversionedId:"07_i18n/4_API and Web Application Interactions",id:"07_i18n/4_API and Web Application Interactions",isDocsHomePage:!1,title:"API and Web Application Interactions",description:"There are three ways for communicating the user locale from the web application to the API:",source:"@site/docs/07_i18n/4_API and Web Application Interactions.md",slug:"/i18n/api-and-web-application-interactions",permalink:"/symfony-boilerplate/docs/i18n/api-and-web-application-interactions",editUrl:"https://github.com/thecodingmachine/symfony-boilerplate/docs/07_i18n/4_API and Web Application Interactions.md",version:"current",sidebar:"docs",previous:{title:"Web Application",permalink:"/symfony-boilerplate/docs/i18n/web-application"},next:{title:"Disable i18n",permalink:"/symfony-boilerplate/docs/i18n/disable-i18n"}},l=[{value:"HTTP Header",id:"http-header",children:[]},{value:"Query Parameters",id:"query-parameters",children:[]},{value:"Authenticated user&#39;s locale",id:"authenticated-users-locale",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are three ways for communicating the user locale from the web application to the API:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Requests with ",Object(i.b)("inlineCode",{parentName:"li"},"Accept-Language")," HTTP header for validation error messages."),Object(i.b)("li",{parentName:"ol"},"Query parameters when you cannot set the previous HTTP header (links, for instance)."),Object(i.b)("li",{parentName:"ol"},"Update the user's locale via a GraphQL request if authenticated."),Object(i.b)("li",{parentName:"ol"},"Update the user's locale on login if the web application locale is not the same as the locale from the API")),Object(i.b)("h2",{id:"http-header"},"HTTP Header"),Object(i.b)("p",null,"Use case: translating the validation error messages."),Object(i.b)("p",null,"Each time the user changes its locale on the web application, the ",Object(i.b)("em",{parentName:"p"},"src/webapp/plugins/i18n.js")," plugin will\nupdate the HTTP header ",Object(i.b)("inlineCode",{parentName:"p"},"Accept-Language")," for the next GraphQL requests with the new value."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"LocaleSubscriber")," class from the API reads the value of this HTTP header to set the locale on its side."),Object(i.b)("h2",{id:"query-parameters"},"Query Parameters"),Object(i.b)("p",null,"In some use cases, you cannot set an HTTP header. For instance, when the user clicks on a link, you will have to use\nquery parameters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"http://foo.bar/?locale=fr\n")),Object(i.b)("p",null,"In the Symfony Boilerplate, we use this solution for XLSX exports."),Object(i.b)("h2",{id:"authenticated-users-locale"},"Authenticated user's locale"),Object(i.b)("p",null,"As explained before, whenever an authenticated user changes the locale on the web application, we run the\n",Object(i.b)("inlineCode",{parentName:"p"},"updateLocale")," GraphQL mutation. "),Object(i.b)("p",null,"In the API, the ",Object(i.b)("inlineCode",{parentName:"p"},"UpdateLocale")," use case updates the ",Object(i.b)("inlineCode",{parentName:"p"},"locale")," property of this user."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","This property helps to know in which locale the API has to translate emails for this user."))),Object(i.b)("p",null,"We also call the ",Object(i.b)("inlineCode",{parentName:"p"},"updateLocale")," GraphQL mutation on page ",Object(i.b)("em",{parentName:"p"},"src/webapp/pages/login.vue"),"\nin the specific scenario where the web application locale is not the same as the user's locale from the API."))}s.isMDXComponent=!0}}]);