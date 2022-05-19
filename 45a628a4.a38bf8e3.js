(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=(n(0),n(96));const c={id:"cli-generate-commands.md",title:"Generate commands",sidebar_label:"Generate commands",slug:"/cli-generate-commands"},o={unversionedId:"cli-generate-commands.md",id:"cli-generate-commands.md",isDocsHomePage:!1,title:"Generate commands",description:"CLI is very helpful in generating files for MunsterJS application.",source:"@site/docs\\cli-generate-commands.md",slug:"/cli-generate-commands",permalink:"/docs/docs/cli-generate-commands",editUrl:"https://github.com/munster-dev/docs/blob/master/docs/cli-generate-commands.md",version:"current",sidebar_label:"Generate commands",sidebar:"someSidebar",previous:{title:"Create application",permalink:"/docs/docs/cli-create-application"},next:{title:"CLI useful commands",permalink:"/docs/docs/cli-useful-commands"}},l=[{value:"Generate types",id:"generate-types",children:[]}],i={rightToc:l};function b({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"CLI is very helpful in generating files for MunsterJS application.\nIt makes creating components, services, modules and other files very easy."),Object(r.b)("p",null,"The syntax for generate command is ",Object(r.b)("inlineCode",{parentName:"p"},"mn generate <type> <name>"),". The type is the type of file we want to generate and the name is the name of the files to be generated. The name can also be a pathname."),Object(r.b)("p",null,"Here is an example command to generate a component."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mn generate component hello-world\n")),Object(r.b)("p",null,"The command above will generate the files like the following."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"hello-world\n    \u251c\u2500\u2500 hello-world.component.tsx\n    \u2514\u2500\u2500 hello-world.styles.scss\n")),Object(r.b)("h2",{id:"generate-types"},"Generate types"),Object(r.b)("p",null,"Here's a list of available types for generate command:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"component"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generate a component file.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"guard"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generate a route guard that can help the developer to allow or prevent the user from navigating certain paths or viewing components.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"service"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generate a service file that will hold the business logic of the application.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"class"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generate a simple typescript class.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"interface"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generate a typescript interface to describe a data.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"module"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generate a module file to group our components, directives, and other files that are related to the module.")))),Object(r.b)("p",null,"For more information about each command, we can check the help feature of the cli.\nThe syntax for this is ",Object(r.b)("inlineCode",{parentName:"p"},"mn generate <command type> --help"),"."),Object(r.b)("p",null,"Ex."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mn generate component --help\n")),Object(r.b)("p",null,"This will show additional information for the generate component command."))}b.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(o,".").concat(d)]||m[d]||s[d]||c;return n?r.a.createElement(u,l(l({ref:t},b),{},{components:n})):r.a.createElement(u,l({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);