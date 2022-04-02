(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{53:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=(r(0),r(81));const i={id:"navigate.md",title:"Navigate",sidebar_label:"Navigate",slug:"/navigate"},o={unversionedId:"navigate.md",id:"navigate.md",isDocsHomePage:!1,title:"Navigate",description:"Navigate allows us to redirect to a route programmatically.",source:"@site/docs\\navigate.md",slug:"/navigate",permalink:"/docs/navigate",editUrl:"https://github.com/munster-dev/docs/blob/master/docs/navigate.md",version:"current",sidebar_label:"Navigate"},l=[{value:"Register the plugin",id:"register-the-plugin",children:[]},{value:"Navigate programmatically",id:"navigate-programmatically",children:[]},{value:"Navigate parameters",id:"navigate-parameters",children:[]}],c={rightToc:l};function p({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Navigate allows us to redirect to a route programmatically."),Object(a.b)("h2",{id:"register-the-plugin"},"Register the plugin"),Object(a.b)("p",null,"Navigate plugin needs to be registered in a module before we can use it.\nTo register this plugin we just need to pass it to the plugins array of a module."),Object(a.b)("p",null,"After the this plugin is registered to the module.\nAll Components under the module will now have the ",Object(a.b)("inlineCode",{parentName:"p"},"this.$navigate")," method."),Object(a.b)("p",null,"Here's an example on how to register this plugin:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { Module, Navigate } from 'munster';\n\nexport class RootModule extends Module {\n  plugins = [\n    Navigate\n  ];\n}\n")),Object(a.b)("h2",{id:"navigate-programmatically"},"Navigate programmatically"),Object(a.b)("p",null,"Here's an example on how to navigate to a route programmatically:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    ...\n</template>\n\n<script>\nexport default class SampleComponent {\n    btnClick() {\n        this.$navigate('/route/path');\n    }\n}\n<\/script>\n")),Object(a.b)("h2",{id:"navigate-parameters"},"Navigate parameters"),Object(a.b)("p",null,"Navigate has three parameters, first is the url, second is the state and third is the title.\nThe second and third parameters are optional."),Object(a.b)("p",null,"For more information on url, state and title please follow this link at ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/History/pushState"}),"developer.mozilla.org"),"."))}p.isMDXComponent=!0},81:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),g=n,d=u["".concat(o,".").concat(g)]||u[g]||m[g]||i;return r?a.a.createElement(d,l(l({ref:t},p),{},{components:r})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);