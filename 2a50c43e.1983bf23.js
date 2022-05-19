(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(2),i=(n(0),n(96));const r={id:"lifecycle-hooks.md",title:"Lifecycle hooks",sidebar_label:"Lifecycle hooks",slug:"/lifecycle-hooks"},c={unversionedId:"lifecycle-hooks.md",id:"lifecycle-hooks.md",isDocsHomePage:!1,title:"Lifecycle hooks",description:"Lifecycle hooks are functions that lets you run a block of codes when your component triggers a lifecycle event.",source:"@site/docs\\lifecyle-hooks.md",slug:"/lifecycle-hooks",permalink:"/docs/docs/lifecycle-hooks",editUrl:"https://github.com/munster-dev/docs/blob/master/docs/lifecyle-hooks.md",version:"current",sidebar_label:"Lifecycle hooks",sidebar:"someSidebar",previous:{title:"Observed attributes",permalink:"/docs/docs/observed-attributes"},next:{title:"Directives",permalink:"/docs/docs/directives"}},o=[{value:"Available hooks",id:"available-hooks",children:[]},{value:"Hooks usage",id:"hooks-usage",children:[{value:"In component",id:"in-component",children:[]},{value:"In service",id:"in-service",children:[]},{value:"In directive",id:"in-directive",children:[]}]}],l={rightToc:o};function b({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Lifecycle hooks are functions that lets you run a block of codes when your component triggers a lifecycle event."),Object(i.b)("h2",{id:"available-hooks"},"Available hooks"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"com")," components, ",Object(i.b)("inlineCode",{parentName:"p"},"dir")," directives, ",Object(i.b)("inlineCode",{parentName:"p"},"ser")," services, ",Object(i.b)("inlineCode",{parentName:"p"},"pip")," pipe"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Hooks"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onInit() ",Object(i.b)("inlineCode",{parentName:"td"},"com")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The first hook to run when the component is initialized.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"beforeViewInit() ",Object(i.b)("inlineCode",{parentName:"td"},"com")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This will be called before the view is build as dom elements.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"afterViewInit() ",Object(i.b)("inlineCode",{parentName:"td"},"com")," ",Object(i.b)("inlineCode",{parentName:"td"},"dir")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This will be called after the view is built as dom elements.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onChangeDetection() ",Object(i.b)("inlineCode",{parentName:"td"},"com")," ",Object(i.b)("inlineCode",{parentName:"td"},"dir")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This is called every time the component's change detection runs.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onViewChange() ",Object(i.b)("inlineCode",{parentName:"td"},"com")," ",Object(i.b)("inlineCode",{parentName:"td"},"dir")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This will be called every time there are changes in view caused by change detection.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onDestroy() ",Object(i.b)("inlineCode",{parentName:"td"},"com")," ",Object(i.b)("inlineCode",{parentName:"td"},"dir")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This will be called when a component is destroyed. This is used for cleanup like unsubscribing all subscriptions.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onReceiveParent(parent: any) ",Object(i.b)("inlineCode",{parentName:"td"},"ser")," ",Object(i.b)("inlineCode",{parentName:"td"},"pip")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This is called after a service or pipe is initialized. This is used when a service or pipe needs to access the parent instance where it is injected.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onReceiveConfig(config: any, container: Container) ",Object(i.b)("inlineCode",{parentName:"td"},"ser")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This is called after a service is initialized. This is used when a service is designed to depend on a configuration after initialization.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"adoptedCallback() ",Object(i.b)("inlineCode",{parentName:"td"},"comp")," ",Object(i.b)("inlineCode",{parentName:"td"},"dir")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A native web component hook. Called when a component is moved from one HTML document to another using the adoptNode(). This happens when we have ",Object(i.b)("inlineCode",{parentName:"td"},"<iframe>")," elements in a page.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"attributeChangedCallback(name: string, oldValue: any, newValue: any, camelCaseName: string) ",Object(i.b)("inlineCode",{parentName:"td"},"com")," ",Object(i.b)("inlineCode",{parentName:"td"},"dir")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A native web component hook. Called when an observed attribute has been added, removed or changed.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"connectedCallback() ",Object(i.b)("inlineCode",{parentName:"td"},"com")," ",Object(i.b)("inlineCode",{parentName:"td"},"dir")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A native web component hook. Called when the component is connected to the dom tree")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"disconnectedCallback() ",Object(i.b)("inlineCode",{parentName:"td"},"com")," ",Object(i.b)("inlineCode",{parentName:"td"},"dir")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A native web component hook. Called when the component is disconnected to the dom tree.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"allDirectives(param: AllDirectivesArgInterface) ",Object(i.b)("inlineCode",{parentName:"td"},"dir")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Called after directive is initialized. This hook is used to handle all directive names.")))),Object(i.b)("h2",{id:"hooks-usage"},"Hooks usage"),Object(i.b)("p",null,"Here are some examples on how to use the hooks in component, service and directive"),Object(i.b)("h3",{id:"in-component"},"In component"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@munster-dev/core';\n\n@Component('app-greeting')\nexport class Greeting {\n    onInit() {\n        console.log('Hi!, I am in onInit hook');\n    }\n\n    connectedCallback() {\n        console.log('Hi!, I am in connectedCallback hook');\n    }\n\n    disconnectedCallback() {\n        console.log('Hi!, I am in disconnectedCallback hook');\n    }\n}\n")),Object(i.b)("h3",{id:"in-service"},"In service"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Service } from '@munster-dev/core';\n\n@Service()\nexport class GreetingService {\n    onReceiveParent(parent: any) {\n        console.log('Hi!, I am in onReceiveParent hook');\n    }\n\n    onReceiveConfig(config: any, container: Container) {\n        console.log('Hi!, I am in onReceiveConfig hook');\n    }\n}\n")),Object(i.b)("h3",{id:"in-directive"},"In directive"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Directive } from '@munster-dev/core';\n\n@Directive('highlight')\nexport class HighlightDirective {\n    connectedCallback() {\n        console.log('Hi!, I am in connectedCallback hook');\n    }\n\n    allDirectives(param: AllDirectivesArgInterface) {\n        console.log('Hi!, I am in allDirectives hook');\n    }\n\n    disconnectedCallback() {\n        console.log('Hi!, I am in disconnectedCallback hook');\n    }\n}\n")))}b.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),d=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,u=s["".concat(c,".").concat(m)]||s[m]||p[m]||r;return n?i.a.createElement(u,o(o({ref:t},b),{},{components:n})):i.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<r;b++)c[b]=n[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);