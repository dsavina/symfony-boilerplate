(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(131)),o={title:"Vagrant",slug:"/development-environment/vagrant"},c={unversionedId:"02_Development Environment/2_Vagrant",id:"02_Development Environment/2_Vagrant",isDocsHomePage:!1,title:"Vagrant",description:"On macOS and Windows, Docker currently has substantial performance issues.",source:"@site/docs/02_Development Environment/2_Vagrant.md",slug:"/development-environment/vagrant",permalink:"/symfony-boilerplate/docs/development-environment/vagrant",editUrl:"https://github.com/thecodingmachine/symfony-boilerplate/tree/master/docs/docs/02_Development Environment/2_Vagrant.md",version:"current",sidebar:"docs",previous:{title:"Docker Compose",permalink:"/symfony-boilerplate/docs/development-environment/docker-compose"},next:{title:"Housekeeping",permalink:"/symfony-boilerplate/docs/development-environment/housekeeping"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"On macOS and Windows, Docker currently has substantial performance issues."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.vagrantup.com/"}),"Vagrant")," will help you to have an almost Linux-like experience regarding performances."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ud83d\udce6","\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"li"},"make vagrant")," - creates the ",Object(i.b)("em",{parentName:"li"},"Vagrantfile"),"."),Object(i.b)("li",{parentName:"ul"},"\ud83d\ude80","\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"li"},"vagrant up")," - installs and starts the virtual machine."),Object(i.b)("li",{parentName:"ul"},"\ud83d\ude87","\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"li"},"vagrant ssh")," - connects to the virtual machine."),Object(i.b)("li",{parentName:"ul"},"\ud83d\udea6","\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"li"},"vagrant halt")," - stops the virtual machine."),Object(i.b)("li",{parentName:"ul"},"\ud83d\udca3","\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"li"},"vagrant destroy")," - destroys the virtual machine.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","On Windows, consider using a Linux-like terminal to run the ",Object(i.b)("inlineCode",{parentName:"p"},"make vagrant")," command. "))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","With ",Object(i.b)("inlineCode",{parentName:"p"},"vagrant ssh"),", you may run the ",Object(i.b)("em",{parentName:"p"},"Makefile"),"'s instructions like a Linux user."))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"In the ",Object(i.b)("em",{parentName:"p"},".env")," file contains the following variables for Vagrant:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"VAGRANT_BOX")," - the VM to use."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"VAGRANT_PROJECT_NAME")," - the project name: only use alphanumeric characters (no spaces, distinguish words with ",Object(i.b)("inlineCode",{parentName:"li"},"_")," or ",Object(i.b)("inlineCode",{parentName:"li"},"-"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"VAGRANT_MEMORY")," - the memory to allocate to the VM."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"VAGRANT_CPUS")," - the CPUs to allocate to the VM."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"VAGRANT_DOCKER_COMPOSE_VERSION")," - the version of Docker Compose to use.")),Object(i.b)("p",null,"The command ",Object(i.b)("inlineCode",{parentName:"p"},"make vagrant")," reads these variables and uses them as arguments\nwhen calling the ",Object(i.b)("em",{parentName:"p"},"scripts/create-vagrantfile-from-template.sh")," script."),Object(i.b)("p",null,"This script replaces placeholders from the ",Object(i.b)("em",{parentName:"p"},"Vagrantfile.template")," by the variables' values and creates a new ",Object(i.b)("em",{parentName:"p"},"Vagrantfile"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","You should never commit the ",Object(i.b)("em",{parentName:"p"},"Vagrantfile"),"."))))}s.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,u=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return n?r.a.createElement(u,c(c({ref:t},b),{},{components:n})):r.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);