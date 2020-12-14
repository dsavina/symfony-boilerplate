(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{115:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,u=b["".concat(l,".").concat(d)]||b[d]||m[d]||i;return a?r.a.createElement(u,s(s({ref:t},c),{},{components:a})):r.a.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(115)),l={title:"API",slug:"/i18n/api"},s={unversionedId:"07_i18n/2_API",id:"07_i18n/2_API",isDocsHomePage:!1,title:"API",description:"For the API, i18n has three goals:",source:"@site/docs/07_i18n/2_API.md",slug:"/i18n/api",permalink:"/symfony-boilerplate/docs/i18n/api",editUrl:"https://github.com/thecodingmachine/symfony-boilerplate/docs/07_i18n/2_API.md",version:"current",sidebar:"docs",previous:{title:"Default Locale",permalink:"/symfony-boilerplate/docs/i18n/default-locale"},next:{title:"Web Application",permalink:"/symfony-boilerplate/docs/i18n/web-application"}},o=[{value:"Basic Usage",id:"basic-usage",children:[]},{value:"Translations Folder",id:"translations-folder",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Emails",id:"emails",children:[]},{value:"Spreadsheets",id:"spreadsheets",children:[]}],c={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For the API, i18n has three goals:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Translate the validation error messages."),Object(i.b)("li",{parentName:"ol"},"Translate the emails."),Object(i.b)("li",{parentName:"ol"},"Translate the spreadsheets.")),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://symfony.com/doc/current/translation.html"}),"symfony/translation")," package helps us for that task."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","It requires the PHP extension ",Object(i.b)("inlineCode",{parentName:"p"},"intl"),", already configured in the ",Object(i.b)("inlineCode",{parentName:"p"},"api")," service."))),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"Symfony provides a ",Object(i.b)("inlineCode",{parentName:"p"},"TranslatorInterface")," you can inject in your class, i.e.:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"# A class.\nprivate TranslatorInterface $translator;\n\npublic function __construct(\n    TranslatorInterface $translator\n) {\n    $this->translator = $translator;\n}\n")),Object(i.b)("p",null,"You can then use it as below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$translatedSubject = $this->translator\n    ->trans(\n        'translation_key',\n        [],\n        'the_domain', // More on that later.\n        'the_locale'\n    );\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","Most of the time, you don't have to use the ",Object(i.b)("inlineCode",{parentName:"p"},"TranslatorInterface")," as either Symfony or the parent class call it for you."))),Object(i.b)("h2",{id:"translations-folder"},"Translations Folder"),Object(i.b)("p",null,"Folder ",Object(i.b)("em",{parentName:"p"},"src/api/translations")," contains one YAML file per locale and domain."),Object(i.b)("p",null,"A domain is a sort of scope. For instance, ",Object(i.b)("em",{parentName:"p"},"src/api/translations/emails.en.yaml")," and ",Object(i.b)("em",{parentName:"p"},"src/api/translations/emails.fr.yaml"),"\nare both for the ",Object(i.b)("inlineCode",{parentName:"p"},"email")," domain (used for translating emails!)."),Object(i.b)("p",null,"Each of these files contains translation keys and the associated texts."),Object(i.b)("p",null,"For instance:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="src/api/translations/foo.en.yaml"',title:'"src/api/translations/foo.en.yaml"'}),'foo:\n  baz: "Hello"\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","All files from the same domain should have the same organization (same translations keys, identical sorting, etc.)."))),Object(i.b)("h2",{id:"validation"},"Validation"),Object(i.b)("p",null,"Let's say you have a class with the following validation annotations:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/Domain/Model/User.php"',title:'"src/api/src/Domain/Model/User.php"'}),'/**\n * @Field\n * @Assert\\NotBlank(message="not_blank")\n * @Assert\\Length(max=255, maxMessage="max_length_255")\n */\npublic function getFirstName(): string\n{\n    return parent::getFirstName();\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"message")," property of each ",Object(i.b)("inlineCode",{parentName:"p"},"Assert")," annotation is a translation key from the ",Object(i.b)("inlineCode",{parentName:"p"},"validators")," domain:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="src/api/translations/validators.en.yaml"',title:'"src/api/translations/validators.en.yaml"'}),'not_blank: "This value should not be blank."\nmax_length_255: "This value is too long. It should have 255 characters or less."\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="src/api/translations/validators.fr.yaml"',title:'"src/api/translations/validators.fr.yaml"'}),'not_blank: "Cette valeur ne doit pas \xeatre vide."\nmax_length_255: "Cette valeur est trop longue. Elle doit avoir 255 caract\xe8res ou moins."\n')),Object(i.b)("p",null,"The web application implements a mechanism for setting the correct locale to translate these validation error\nmessages (see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/i18n/api-and-web-application-interactions"}),"interactions between the web application and the API chapter"),")."),Object(i.b)("h2",{id:"emails"},"Emails"),Object(i.b)("p",null,"Emails translation uses the ",Object(i.b)("inlineCode",{parentName:"p"},"emails")," domain. The corresponding YAML files are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"src/api/translations/emails.en.yaml")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"src/api/translations/emails.fr.yaml"))),Object(i.b)("p",null,"Let's take a look at the ",Object(i.b)("inlineCode",{parentName:"p"},"CreateEmail")," use case:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/UseCase/CreateEmail.php"',title:'"src/api/src/UseCase/CreateEmail.php"'}),"protected function create(User $user, string $subjectId, string $template, array $context): TemplatedEmail\n")),Object(i.b)("p",null,"The method ",Object(i.b)("inlineCode",{parentName:"p"},"create")," takes, among other arguments, a ",Object(i.b)("inlineCode",{parentName:"p"},"User")," instance and the translation key\nof the email's subject. The ",Object(i.b)("inlineCode",{parentName:"p"},"User")," has a ",Object(i.b)("inlineCode",{parentName:"p"},"locale")," property used for translating both the email's subject and its content."),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/emails"}),"Emails")," guide for more details on how to extend this use case."),Object(i.b)("p",null,"The Twig templates of your emails should look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-twig",metastring:'title="src/api/templates/emails/foo.html.twig"',title:'"src/api/templates/emails/foo.html.twig"'}),"{% extends 'emails/email.html.twig' %}\n{% trans_default_domain domain %}\n\n{% block body %}\n    {% apply inky_to_html|inline_css(source('@css/foundation-emails.css'), source('@css/emails.css')) %}\n        <h1>{% trans into locale %}translation_key{% endtrans %}</h1>\n   {% endapply %}\n{% endblock %}\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"CreateEmail")," use case will provide both ",Object(i.b)("inlineCode",{parentName:"p"},"domain")," and ",Object(i.b)("inlineCode",{parentName:"p"},"locale")," values."),Object(i.b)("h2",{id:"spreadsheets"},"Spreadsheets"),Object(i.b)("p",null,"Spreadsheets translation uses the ",Object(i.b)("inlineCode",{parentName:"p"},"spreadsheets")," domain. The corresponding YAML files are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"src/api/translations/spreadsheets.en.yaml")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"src/api/translations/spreadsheets.fr.yaml"))),Object(i.b)("p",null,"As you might want to translate the headers and cell values of your XLSX exports, the boilerplate provides examples\non how of do so."),Object(i.b)("p",null,"Let's take a look at the ",Object(i.b)("inlineCode",{parentName:"p"},"CreateXLSXExport")," use case:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/UseCase/CreateXLSXExport.php"',title:'"src/api/src/UseCase/CreateXLSXExport.php"'}),"public function create(string $locale, array $headerIds, array $values): Xlsx\n")),Object(i.b)("p",null,"The method ",Object(i.b)("inlineCode",{parentName:"p"},"create")," takes, among other arguments, a locale. It will use it to translates the spreadsheet's headers\naccordingly."),Object(i.b)("p",null,"For values, you should translate them directly in your use cases before calling the ",Object(i.b)("inlineCode",{parentName:"p"},"create")," method."))}p.isMDXComponent=!0}}]);