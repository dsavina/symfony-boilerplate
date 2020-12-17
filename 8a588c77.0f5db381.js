(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),m=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,u=p["".concat(c,".").concat(d)]||p[d]||s[d]||i;return n?r.a.createElement(u,o(o({ref:t},b),{},{components:n})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),i=(n(0),n(129)),c={title:"Vagrant",slug:"/development-environment/vagrant"},o={unversionedId:"02_Development Environment/2_Vagrant",id:"02_Development Environment/2_Vagrant",isDocsHomePage:!1,title:"Vagrant",description:"On macOS and Windows, Docker currently has substantial performance issues.",source:"@site/docs/02_Development Environment/2_Vagrant.md",slug:"/development-environment/vagrant",permalink:"/symfony-boilerplate/docs/development-environment/vagrant",editUrl:"https://github.com/thecodingmachine/symfony-boilerplate/tree/master/docs/docs/02_Development Environment/2_Vagrant.md",version:"current",sidebar:"docs",previous:{title:"Docker Compose",permalink:"/symfony-boilerplate/docs/development-environment/docker-compose"},next:{title:"Housekeeping",permalink:"/symfony-boilerplate/docs/development-environment/housekeeping"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],b={rightToc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"On macOS and Windows, Docker currently has substantial performance issues."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.vagrantup.com/"}),"Vagrant")," will help you to have an almost Linux-like experience regarding performances."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ud83d\udce6","\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"li"},"make vagrant"),": creates the ",Object(i.b)("em",{parentName:"li"},"Vagrantfile"),"."),Object(i.b)("li",{parentName:"ul"},"\ud83d\ude80","\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"li"},"vagrant up"),": installs and starts the virtual machine."),Object(i.b)("li",{parentName:"ul"},"\ud83d\ude87","\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"li"},"vagrant ssh"),": connects to the virtual machine."),Object(i.b)("li",{parentName:"ul"},"\ud83d\udea6","\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"li"},"vagrant halt"),": stops the virtual machine."),Object(i.b)("li",{parentName:"ul"},"\ud83d\udca3","\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"li"},"vagrant destroy"),": destroys the virtual machine.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","On Windows, we strongly advise using a Linux-like terminal to run the ",Object(i.b)("inlineCode",{parentName:"p"},"make vagrant")," command. "))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","With ",Object(i.b)("inlineCode",{parentName:"p"},"vagrant ssh"),", you may run the ",Object(i.b)("em",{parentName:"p"},"Makefile"),"'s instructions like a Linux user."))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Vagrant's configuration consists of three files:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Makefile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"scripts/create-vagrantfile-from-template.sh")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Vagrantfile")," (and its template ",Object(i.b)("em",{parentName:"li"},"Vagrantfile.template"),")")),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"Makefile")," contains the variables ",Object(i.b)("inlineCode",{parentName:"p"},"VAGRANT_BOX"),", ",Object(i.b)("inlineCode",{parentName:"p"},"VAGRANT_PROJECT_NAME"),", ",Object(i.b)("inlineCode",{parentName:"p"},"VAGRANT_MEMORY"),", ",Object(i.b)("inlineCode",{parentName:"p"},"VAGRANT_CPUS"),",\nand ",Object(i.b)("inlineCode",{parentName:"p"},"VAGRANT_DOCKER_COMPOSE_VERSION"),"."),Object(i.b)("p",null,"The command ",Object(i.b)("inlineCode",{parentName:"p"},"make vagrant")," reads these variables and uses them as arguments\nwhen calling the ",Object(i.b)("em",{parentName:"p"},"create-vagrantfile-from-template.sh")," script."),Object(i.b)("p",null,"The later replaces placeholders from the ",Object(i.b)("em",{parentName:"p"},"Vagrantfile.template")," by the variables' values and creates a new ",Object(i.b)("em",{parentName:"p"},"Vagrantfile"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","You should never commit the ",Object(i.b)("em",{parentName:"p"},"Vagrantfile"),"."))))}m.isMDXComponent=!0}}]);