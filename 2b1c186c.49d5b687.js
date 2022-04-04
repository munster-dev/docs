(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),c=(n(0),n(83)),a={id:"custom-directive.md",title:"Custom Directive",sidebar_label:"Custom directive",slug:"/custom-directive"},o={unversionedId:"custom-directive.md",id:"custom-directive.md",isDocsHomePage:!1,title:"Custom Directive",description:"Custom directives are classes that manipulates an element and our munster application.",source:"@site/docs\\custom-directive.md",slug:"/custom-directive",permalink:"/docs/docs/custom-directive",editUrl:"https://github.com/munster-dev/docs/blob/master/docs/custom-directive.md",version:"current",sidebar_label:"Custom directive",sidebar:"someSidebar",previous:{title:"Directives",permalink:"/docs/docs/directives"},next:{title:"Router",permalink:"/docs/docs/router"}},l=[{value:"Creating a custom directive",id:"creating-a-custom-directive",children:[]},{value:"Use the custom directive",id:"use-the-custom-directive",children:[]},{value:"Value change watcher",id:"value-change-watcher",children:[]},{value:"Accessing component from directive",id:"accessing-component-from-directive",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Custom directives are classes that manipulates an element and our munster application.\nDirective is sometimes called as namespace in this framework since the syntax to write directives in view is ",Object(c.b)("inlineCode",{parentName:"p"},"<namespace>:<name>={<value>}"),".\nThe value is not required."),Object(c.b)("h2",{id:"creating-a-custom-directive"},"Creating a custom directive"),Object(c.b)("p",null,"Here is an example on how to create a custom directive."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { Directive, BaseDirective } from 'munster';\n\n@Directive({\n    namespace: 'highlight'\n})\nexport class HighlightDirective extends BaseDirective {\n}\n")),Object(c.b)("p",null,"The next step is to handle the directive by creating a method ",Object(c.b)("inlineCode",{parentName:"p"},"$<directive name>"),"."),Object(c.b)("p",null,"Here is an example on how to handle the directive ",Object(c.b)("inlineCode",{parentName:"p"},'hightlight:color="red"'),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'<div>\n    <p hightlight:color="red">I have a red background</p>\n</div>\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Directive, BaseDirective } from '@munster-dev/core';\n\n@Directive({\n    namespace: 'highlight'\n})\nexport class HighlightDirective extends BaseDirective {\n\n    $color(valueCaller: () => any) {\n        const value = valueCaller();\n        this.element.style.backgroundColor = value;\n    }\n\n}\n")),Object(c.b)("p",null,"The namespaces will call its respective class methods once used in a template."),Object(c.b)("p",null,"For the example above, the directive ",Object(c.b)("inlineCode",{parentName:"p"},'highlight:color="red"')," will call the method ",Object(c.b)("inlineCode",{parentName:"p"},"$color")," with a parameter(valueCaller) to call the value(red) of the directive."),Object(c.b)("h2",{id:"use-the-custom-directive"},"Use the custom directive"),Object(c.b)("p",null,"To use the custom directive, we need to register the directive in the module first."),Object(c.b)("p",null,"Here is an example on how to register the directive to a module."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Module } from '@munster-dev/core';\nimport { HighlightDirective } from './hightlight.directive';\n\n@Module({\n    directives: [HighlightDirective]\n})\nexport class RootModule {}\n")),Object(c.b)("p",null,"After we register the directive we can use the syntax ",Object(c.b)("inlineCode",{parentName:"p"},'<namespace>:<name>="<value>"')," to apply the directive to an element."),Object(c.b)("h2",{id:"value-change-watcher"},"Value change watcher"),Object(c.b)("p",null,"To let our directive react when it's a value is changed we can use the ",Object(c.b)("inlineCode",{parentName:"p"},"createWatcher")," method from BaseDirective.\nThe watch method has a parameters of initial value, value caller, and an update callback which runs every time the value changes."),Object(c.b)("p",null,"Here's an example on how to change the background color of an element based on the value passed to its directive."),Object(c.b)("h4",{id:"the-directive"},"The directive"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { Directive, BaseDirective } from '@munster-dev/core';\n\n@Directive({\n    namespace: 'highlight'\n})\nexport class HighlightDirective extends BaseDirective {\n\n    $color(valueCaller: () => any) {\n        const initialValue = valueCaller();\n        this.createWatcher(initialValue, valueCaller, (newValue) => {\n            this.element.style.backgroundColor = newValue;\n        });\n    }\n\n}\n")),Object(c.b)("h4",{id:"the-component"},"The component"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"<div>\n    <p highlight:color={this.color}>Hello World!</p>\n</div>\n")),Object(c.b)("h2",{id:"accessing-component-from-directive"},"Accessing component from directive"),Object(c.b)("p",null,"Directives also has access to the component from its constructor."),Object(c.b)("p",null,"Here's an example on how to access the component from a directive:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { Directive, BaseDirective } from '@munster-dev/core';\n\n@Directive({\n    namespace: 'hightlight'\n})\nexport class HighlightDirective extends BaseDirective {\n\n    onInit() {\n        console.log(this.component);\n    }\n\n}\n")))}u.isMDXComponent=!0},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(a,".").concat(m)]||p[m]||d[m]||c;return n?i.a.createElement(h,o(o({ref:t},s),{},{components:n})):i.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var s=2;s<c;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);