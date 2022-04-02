(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),r=(t(0),t(81));const i={id:"directives.md",title:"Directives",sidebar_label:"Directives",slug:"/directives"},o={unversionedId:"directives.md",id:"directives.md",isDocsHomePage:!1,title:"Directives",description:"Directive is another way to change the appearance and add additional behaviour to an element.",source:"@site/docs\\directives.md",slug:"/directives",permalink:"/docs/directives",editUrl:"https://github.com/munster-dev/docs/blob/master/docs/directives.md",version:"current",sidebar_label:"Directives",sidebar:"someSidebar",previous:{title:"Change detection",permalink:"/docs/change-detection"},next:{title:"Custom Directive",permalink:"/docs/custom-directive"}},l=[{value:"List Rendering",id:"list-rendering",children:[]},{value:"List item name",id:"list-item-name",children:[]},{value:"List index",id:"list-index",children:[]},{value:"Conditional rendering",id:"conditional-rendering",children:[]},{value:"Reference an element",id:"reference-an-element",children:[]},{value:"Model binding",id:"model-binding",children:[]},{value:"Event binding",id:"event-binding",children:[]},{value:"Prevent default event",id:"prevent-default-event",children:[]}],c={rightToc:l};function p({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Directive is another way to change the appearance and add additional behaviour to an element.\nThe syntax of directive is ",Object(r.b)("inlineCode",{parentName:"p"},'<namespace>:<name>="<value>"'),". The value is optional."),Object(r.b)("h2",{id:"list-rendering"},"List Rendering"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"view:for")),Object(r.b)("p",null,"List rendering directive allows developers to render a list of element based on the given array of data."),Object(r.b)("p",null,"Here's an example on how to use list rendering:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"<p view:for={this.array}>Hello World!</p>\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"@Component({\n    selector: 'app-root',\n    view: './root.view'\n})\nexport class RootComponent {\n    array = [1, 2, 3];\n}\n")),Object(r.b)("h2",{id:"list-item-name"},"List item name"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"view:for-item")),Object(r.b)("p",null,"It allows developers to set the variable name of the list item and display it in view.\nIf no list item directive is provided, it is ",Object(r.b)("inlineCode",{parentName:"p"},"$item")," by default."),Object(r.b)("p",null,"Here's an example on how to use list item directive:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'    <p view:for={this.array} view:for-item="listItem">{listItem}</p>\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"@Component({\n    selector: 'app-root',\n    view: './root.view'\n})\nexport class RootComponent {\n    array = ['foo', 'bar', 'bazz'];\n}\n")),Object(r.b)("p",null,"The example code above will generate a list of elements that looks like the following."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<p>foo</p>\n<p>bar</p>\n<p>bazz</p>\n")),Object(r.b)("h2",{id:"list-index"},"List index"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"view:for-index")),Object(r.b)("p",null,"It allows developers to set the variable name of the list item index.\nIf no list index directive is provided, it is ",Object(r.b)("inlineCode",{parentName:"p"},"$index")," by default."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'    <p view:for={this.array} view:for-index="listIndex">{listIndex}</p>\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Component } from '@munster-dev/core';\n\n@Component({\n    selector: 'app-root'\n})\nexport class RootComponent {\n    array = ['foo', 'bar', 'bazz'];\n}\n")),Object(r.b)("p",null,"The example code above will generate list of element that looks like the following."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<p>0</p>\n<p>1</p>\n<p>2</p>\n")),Object(r.b)("h2",{id:"conditional-rendering"},"Conditional rendering"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"view:if")),Object(r.b)("p",null,"Conditional rendering is used to conditionally render an element in the dom.\nIt uses the ",Object(r.b)("inlineCode",{parentName:"p"},"view:if")," directive which removes an element from the dom if the value is a falsy and append the element if otherwise."),Object(r.b)("p",null,"Here's an example on how to use conditional rendering:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<h1 view:if={this.toggle}></h1>\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Component } from '@munster-dev/core';\n\n@Component({\n    selector: 'app-root'\n})\nexport class RootComponent {\n    toggle = true;\n}\n")),Object(r.b)("h2",{id:"reference-an-element"},"Reference an element"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"view:ref")),Object(r.b)("p",null,"This directive is used to create a reference of an element to the property of the logic."),Object(r.b)("p",null,"Here's an example on how to use this directive:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"    <p view:ref={this.reference}>Hello World</p>\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@munster-dev/core';\n\n@Component({\n    selector: 'app-root'\n})\nexport class RootComponent {\n\n    reference: HTMLElement;\n\n    connectedCallback() {\n        console.log(this.reference);\n    }\n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"this.reference")," property should now contain a reference to the ",Object(r.b)("inlineCode",{parentName:"p"},"p")," element in the view when ",Object(r.b)("inlineCode",{parentName:"p"},"connectedCallback")," hook runs."),Object(r.b)("h2",{id:"model-binding"},"Model binding"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"view:model")),Object(r.b)("p",null,"Model binding is a two way binding of data.\nEvery time the model is changed from the view, the value in logic will be updated and the same thing will happen in the view when the model is updated from the logic."),Object(r.b)("p",null,"Here's an example on how to bind a model to the view:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'<input view:model={this.sampleModel} type="text" />\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Component } from '@munster-dev/core';\n\n@Component({\n    selector: 'app-root',\n    view: './root.view'\n})\nexport class RootComponent {\n    sampleModel = '';\n}\n")),Object(r.b)("h2",{id:"event-binding"},"Event binding"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"on:<event name>")),Object(r.b)("p",null,"Event binding is a way to attach an event into an element."),Object(r.b)("p",null,"Here's an example on how to attach a click event to a button:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<button on:click={this.clickMe}>Click Me</button>\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"@Component({\n    selector: 'app-root',\n    view: './root.view'\n})\nexport class RootComponent {\n    clickMe() {\n        console.log('I was clicked');\n    }\n}\n")),Object(r.b)("p",null,"Here is a list of available events from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3schools.com/jsref/dom_obj_event.asp"}),"w3schools.com"),"."),Object(r.b)("h2",{id:"prevent-default-event"},"Prevent default event"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"on-prevent:<event name>")),Object(r.b)("p",null,"This namespace is the same as ",Object(r.b)("inlineCode",{parentName:"p"},"on")," namespace but it stops the default action of an element from happening using ",Object(r.b)("inlineCode",{parentName:"p"},"event.preventDefault()"),"."))}p.isMDXComponent=!0},81:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),b=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(t),m=a,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return t?r.a.createElement(u,l(l({ref:n},p),{},{components:t})):r.a.createElement(u,l({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);