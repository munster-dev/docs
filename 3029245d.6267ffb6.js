(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{63:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),o=(t(0),t(81));const r={id:"component.md",title:"Component",sidebar_label:"Component",slug:"/component"},c={unversionedId:"component.md",id:"component.md",isDocsHomePage:!1,title:"Component",description:"Components are the most basic building block of an application.",source:"@site/docs\\component.md",slug:"/component",permalink:"/docs/component",editUrl:"https://github.com/munster-dev/docs/blob/master/docs/component.md",version:"current",sidebar_label:"Component",sidebar:"someSidebar",previous:{title:"Module",permalink:"/docs/module"},next:{title:"Change detection",permalink:"/docs/change-detection"}},l=[{value:"Structure",id:"structure",children:[{value:"Logic and view on a single file",id:"logic-and-view-on-a-single-file",children:[]},{value:"Multiple file component",id:"multiple-file-component",children:[]}]},{value:"Define component",id:"define-component",children:[]},{value:"Data binding",id:"data-binding",children:[]},{value:"Model binding",id:"model-binding",children:[]},{value:"Hooks",id:"hooks",children:[]},{value:"Child Component",id:"child-component",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Props",id:"props",children:[]}],i={rightToc:l};function p({components:e,...n}){return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Components are the most basic building block of an application.\nA component is composed of view, logic and styles.\nIn this framework, you have an option to put the view and logic in a single or a separate files."),Object(o.b)("h2",{id:"structure"},"Structure"),Object(o.b)("h3",{id:"logic-and-view-on-a-single-file"},"Logic and view on a single file"),Object(o.b)("p",null,"Here's an example of logic and view on a single file."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import './sample.styles.scss';\nimport { Component } from '@munster-dev/core';\n\n@Component({\n    selector: 'app-sample'\n})\nexport class SampleComponent {\n    $render() {\n        return <h1>Simple component works!</h1>\n    }\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"SampleComponent")," class can have the methods and properties for the component's logic and the ",Object(o.b)("inlineCode",{parentName:"p"},"$render")," method will return a jsx which is the components view."),Object(o.b)("h3",{id:"multiple-file-component"},"Multiple file component"),Object(o.b)("p",null,"The view, logic and styles of a component can also be separated into different files.\nView can have ",Object(o.b)("inlineCode",{parentName:"p"},".html"),", logic can have ",Object(o.b)("inlineCode",{parentName:"p"},".js")," and styles can have ",Object(o.b)("inlineCode",{parentName:"p"},".css")," extension."),Object(o.b)("p",null,"Here's an example on how to make a multiple file component:"),Object(o.b)("h4",{id:"view"},"View"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"\x3c!-- ./sample.view.tsx --\x3e\n<h1>Sample Component</h1>\n")),Object(o.b)("p",null,"All html element in view must be inside the template tag and template tag must have a single child only."),Object(o.b)("h4",{id:"style"},"Style"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"/* ./sample.styles.scss */\nh1 {\n    color: red;\n}\n")),Object(o.b)("h4",{id:"logic"},"Logic"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// ./sample.logic.ts\nimport './sample.styles.scss';\nimport { Component } from '@munster-dev/core';\n\n@Component({\n    selector: 'app-sample',\n    view: './sample.view'\n})\nexport class SampleComponent {\n}\n")),Object(o.b)("p",null,"Please take note of the ",Object(o.b)("inlineCode",{parentName:"p"},"@Component")," decorator. The template and style must be imported and passed to the @Component decorator."),Object(o.b)("h2",{id:"define-component"},"Define component"),Object(o.b)("p",null,"Component must be defined in a module before we can use it."),Object(o.b)("p",null,"Here's an example on how to define a component in a module:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Module } from '@munster-dev/core';\nimport { SampleComponent } from './sample.logic.tsx';\n\n@Module({\n    components: [SampleComponent]\n})\nexport class RootModule { }\n")),Object(o.b)("h2",{id:"data-binding"},"Data binding"),Object(o.b)("p",null,"Data binding is a way to synchronize the data from logic to view and vise versa."),Object(o.b)("h4",{id:"attribute-binding"},"Attribute binding"),Object(o.b)("p",null,"Here is an example on how to bind a property from the logic into an attribute of view:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// sample.view.tsx\n\n<h1 id={this.attr}></h1>\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// sample.logic.ts\nimport { Component } from '@munster-dev/core';\n\n@Component({\n    selector: 'app-sample',\n    view: './sample.view'\n})\nexport class SampleComponent {\n    public attr: string = 'sample-attr';\n}\n")),Object(o.b)("h4",{id:"text-binding"},"Text binding"),Object(o.b)("p",null,"Here is an example on how to display a text from logic to view:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// sample.view.tsx\n<h1>{greeting}</h1>\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// sample.logic.ts\nimport { Component } from '@munster-dev/core';\n\n@Component({\n    selector: 'app-sample',\n    view: './sample.view'\n})\nexport class SampleComponent {\n    public greeting: string = 'Hello World!';\n}\n")),Object(o.b)("h2",{id:"model-binding"},"Model binding"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"view:model")),Object(o.b)("p",null,"Model binding is a two way binding of data.\nEvery time the model is changed from the view, the value in logic will be updated and the same thing will happen in the view when the model is updated from the logic."),Object(o.b)("p",null,"Here's an example on how to bind a model to the view:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// sample.view.tsx\n<input view:model={this.sampleModel} type="text" />\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// sample.logic.ts\nimport { Component } from '@munster-dev/core';\n\n@Component({\n    selector: 'app-sample',\n    view: './sample.view'\n})\nexport class SampleComponent {\n    public sampleModel: string = 'Some text';\n}\n")),Object(o.b)("h2",{id:"hooks"},"Hooks"),Object(o.b)("p",null,"Hooks are functions that lets you run a block of codes when your component triggers a lifecycle event."),Object(o.b)("p",null,"Below are the available lifecycle hooks:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Hooks"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onInit()"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The first hook to run when the component is initialized.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"connectedCallback()"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Called when the component is connected to the dom tree.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"disconnectedCallback()"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Called when the component is disconnected to the dom tree.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"adoptedCallback()"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Called when a component is moved from one HTML document to another using the adoptNode().")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"attributeChangedCallback(name: string, oldValue: any, newValue: any, camelCaseName?: string)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Called when an observed attribute has been added, removed or changed.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"afterInit()"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Called after the component is initialized and is connected to the dom tree.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onViewChanges()"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Called every time the view is changed.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onPropsChange()"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Called when there are changes to the props.")))),Object(o.b)("h2",{id:"child-component"},"Child Component"),Object(o.b)("p",null,"Child component is a component rendered inside a component."),Object(o.b)("p",null,"Here's an example on how to render a child component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"<div>\n    <h1>Parent component view</h1>\n    <app-child-component></app-child-component>\n</div>\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Child component must be registered to the same module as parent component."))),Object(o.b)("h2",{id:"attributes"},"Attributes"),Object(o.b)("p",null,"Attributes are values passed down from parent component to child component.\nAttribute can only hold a value and not objects or arrays."),Object(o.b)("p",null,"Here's an example on how to pass a value from parent to child component:"),Object(o.b)("h5",{id:"parent-component"},"Parent component"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"<div>\n    <h1>Parent component view</h1>\n    <app-child magic-number={this.number}></app-child>\n</div>\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@munster-dev/core';\n\n@Component({\n    selector: 'app-sample',\n    view: './sample.view'\n})\nexport class SampleComponent {\n    number = 123;\n}\n")),Object(o.b)("h5",{id:"child-component-1"},"Child component"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<h1>The magic number is: {this.magicNumber}</h1>\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Component, Attr } from '@munster-dev/core';\n\n@Component({\n    selector: 'app-child',\n    view: './child.view'\n})\nexport class ChildComponent {\n    @Attr()\n    magicNumber = 0;\n}\n")),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("p",null,"Props are the properties passed down from parent to child.\nProps is different from attributes since it can hold values, arrays or objects."),Object(o.b)("p",null,"Here is an example on how to use props."),Object(o.b)("h5",{id:"parent-component-1"},"Parent component"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"<div>\n    <h1>Parent component view</h1>\n    <app-child prop:magicNumber={this.obj}></app-child>\n</div>\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component } from '@munster-dev/core';\n\n@Component({\n    selector: 'app-sample',\n    view: './sample.view'\n})\nexport class SampleComponent {\n    obj = {\n        number: 123\n    };\n}\n")),Object(o.b)("h5",{id:"child-component-2"},"Child component"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<h1>The magic number is: {this.props.magicNumber?.number}</h1>\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Component, Attr } from '@munster-dev/core';\n\n@Component({\n    selector: 'app-child',\n    view: './child.view'\n})\nexport class ChildComponent {\n    props: any;\n}\n")),Object(o.b)("p",null,"Props changes can be track using ",Object(o.b)("inlineCode",{parentName:"p"},"onPropsChange()")," hook."))}p.isMDXComponent=!0},81:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),b=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=b(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=b(t),d=a,u=m["".concat(c,".").concat(d)]||m[d]||s[d]||r;return t?o.a.createElement(u,l(l({ref:n},p),{},{components:t})):o.a.createElement(u,l({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<r;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);