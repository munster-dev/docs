(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{93:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return a})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return l}));var t=r(2),i=(r(0),r(96));const o={id:"conditional-rendering.md",title:"Conditional rendering",sidebar_label:"Conditional rendering",slug:"/conditional-rendering"},a={unversionedId:"conditional-rendering.md",id:"conditional-rendering.md",isDocsHomePage:!1,title:"Conditional rendering",description:"Conditional rendering is used to conditionally render an element to the dom.",source:"@site/docs\\conditional-rendering.md",slug:"/conditional-rendering",permalink:"/docs/docs/conditional-rendering",editUrl:"https://github.com/munster-dev/docs/blob/master/docs/conditional-rendering.md",version:"current",sidebar_label:"Conditional rendering",sidebar:"someSidebar",previous:{title:"List rendering",permalink:"/docs/docs/list-rendering"},next:{title:"Router",permalink:"/docs/docs/router"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Using conditional rendering",id:"using-conditional-rendering",children:[]}],d={rightToc:c};function l({components:e,...n}){return Object(i.b)("wrapper",Object(t.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Conditional rendering is used to conditionally render an element to the dom.\nIt uses the ",Object(i.b)("inlineCode",{parentName:"p"},"v:if")," directive which removes an element from the dom if the value is a falsy and append the element if otherwise."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"The syntax of conditional rendering directive is ",Object(i.b)("inlineCode",{parentName:"p"},"v:if={<boolean>}"),"."),Object(i.b)("h2",{id:"using-conditional-rendering"},"Using conditional rendering"),Object(i.b)("p",null,"Here's an example on how to use conditional rendering."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@munster-dev/core';\n\n@Component('app-greeting')\nexport class Greeting {\n    toggle = true;\n\n    render() {\n        return <h1 v:if={this.toggle}>Hello World!</h1>\n    }\n}\n")))}l.isMDXComponent=!0},96:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return b}));var t=r(0),i=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),s=function(e){var n=i.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(r),m=t,b=u["".concat(a,".").concat(m)]||u[m]||p[m]||o;return r?i.a.createElement(b,c(c({ref:n},l),{},{components:r})):i.a.createElement(b,c({ref:n},l))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);