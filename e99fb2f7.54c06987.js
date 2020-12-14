(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(115)),i={title:"API",slug:"/tests/api"},s={unversionedId:"14_Tests/1_API",id:"14_Tests/1_API",isDocsHomePage:!1,title:"API",description:"\ud83d\udce3&nbsp;&nbsp;All commands have to be run in the api service (make api).",source:"@site/docs/14_Tests/1_API.md",slug:"/tests/api",permalink:"/symfony-boilerplate/docs/tests/api",editUrl:"https://github.com/thecodingmachine/symfony-boilerplate/docs/14_Tests/1_API.md",version:"current",sidebar:"docs",previous:{title:"Web Application",permalink:"/symfony-boilerplate/docs/static-analysis/web-application"},next:{title:"Web Application",permalink:"/symfony-boilerplate/docs/tests/web-application"}},c=[{value:"Pest",id:"pest",children:[{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Good to know",id:"good-to-know",children:[]},{value:"Testing a use case",id:"testing-a-use-case",children:[]}]},{value:"Behat",id:"behat",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","All commands have to be run in the ",Object(r.b)("inlineCode",{parentName:"p"},"api")," service (",Object(r.b)("inlineCode",{parentName:"p"},"make api"),")."))),Object(r.b)("h2",{id:"pest"},"Pest"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://pestphp.com/"}),"Pest")," is a wrapper around ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://phpunit.de/"}),"PHPUnit"),"."),Object(r.b)("p",null,"In the Symfony Boilerplate, we focus on testing the use cases."),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="console"',title:'"console"'}),"composer pest\n")),Object(r.b)("p",null,"It executes all tests and display the result and the code coverage in your terminal."),Object(r.b)("p",null,"An HTML output is also available under the ",Object(r.b)("em",{parentName:"p"},"src/api/coverage")," folder.\nDo not hesitate to take a look at it!"),Object(r.b)("p",null,"You can also run tests per group, for instance:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="console"',title:'"console"'}),"pest --group=user,company\n")),Object(r.b)("h3",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Most of the configuration occurs in the ",Object(r.b)("em",{parentName:"p"},"src/api/phpunit.xml.dist")," file. Here, we:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Override some environment variables."),Object(r.b)("li",{parentName:"ul"},"Exclude PHP files from code coverage.")),Object(r.b)("h3",{id:"good-to-know"},"Good to know"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We use the ",Object(r.b)("inlineCode",{parentName:"li"},"mysql_test")," service as a database; before running tests, the PHP script ",Object(r.b)("em",{parentName:"li"},"src/api/tests/bootstrap.php"),"\ndestroys the database, re-creates it, and applies migrations."),Object(r.b)("li",{parentName:"ul"},"A rollback occurs after each test; if you need test data for all tests from a file, you may use the ",Object(r.b)("inlineCode",{parentName:"li"},"beforeEach"),"\nmethod. See, for instance, the file ",Object(r.b)("em",{parentName:"li"},"src/api/tests/UseCase/User/GetUsersTest.php"),"."),Object(r.b)("li",{parentName:"ul"},"The Symfony mailer does not send emails."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"Storages")," do not send files to the ",Object(r.b)("inlineCode",{parentName:"li"},"minio")," service but use the memory instead.")),Object(r.b)("h3",{id:"testing-a-use-case"},"Testing a use case"),Object(r.b)("p",null,"Let's say you have the following use case:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/UseCase/Foo/CreateFoo.php"',title:'"src/api/src/UseCase/Foo/CreateFoo.php"'}),"final class CreateUser\n{\n    private FooDao $fooDao;\n    private CreateBar $createBar;\n\n    public function __construct(\n        FooDao $fooDao,\n        CreateBar $createBar\n    ) {\n        $this->fooDao    = $fooDao;\n        $this->createBar = $createBar;\n    }\n\n    /**\n     * @throws InvalidModel\n     *\n     * @Mutation\n     */\n    public function createFoo(\n        string $bar,\n        string $baz\n    ): Foo {\n        $bar = this->createBar($bar);\n        $foo = new Foo(\n            $bar,\n            $baz\n        );\n\n        $this->fooDao->save($foo);\n\n        return $foo;\n    }\n}\n")),Object(r.b)("p",null,"In the Pest file ",Object(r.b)("em",{parentName:"p"},"src/api/tests/UseCase/Foo/CreateFooTest.php"),", you should focus on testing the creation of a ",Object(r.b)("inlineCode",{parentName:"p"},"Foo"),"\n(violations, etc.)."),Object(r.b)("p",null,"In other words, do not test the use case ",Object(r.b)("inlineCode",{parentName:"p"},"CreateBar"),", as it should have its dedicated test."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/tests/UseCase/Foo/CreateFooTest.php"',title:'"src/api/tests/UseCase/Foo/CreateFooTest.php"'}),"it(\n    'creates a foo',\n    function (\n        string $bar,\n        string $baz\n    ): void {\n        $createFoo = self::$container->get(CreateFoo::class);\n        assert($createFoo instanceof CreateFoo);\n\n        $foo = $createFoo->createFo(\n            $bar,\n            $baz\n        );\n\n        assertEquals($bar, $foo->getBar());\n        assertEquals($baZ, $foo->getBaz());\n    }\n)\n    ->with([\n        ['foo', 'foo'],\n        ['bar', 'bar'],\n    ])\n    ->group('foo');\n\nit(\n    'throws an exception if invalid foo',\n    function (\n        string $bar,\n        string $baz\n    ): void {\n        $createFoo = self::$container->get(CreateFoo::class);\n        assert($createFoo instanceof CreateFoo);\n\n        $createFoo->createFo(\n            $bar,\n            $baz\n        );\n    }\n)\n    ->with([\n        // Blank bar.\n        ['', 'foo'],\n        // Bar > 255.\n        [DummyValues::CHAR256, 'foo'],\n    ])\n    ->throws(InvalidModel::class)\n    ->group('foo');\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","You must import a use case somewhere in your source code; otherwise Pest (or PHPUnit) will not be able to\ninject it in your tests."))),Object(r.b)("h2",{id:"behat"},"Behat"),Object(r.b)("p",null,"\ud83d\udea7"))}b.isMDXComponent=!0},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);