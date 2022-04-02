---
id: directives.md
title: Directives
sidebar_label: Directives
slug: /directives
---

Directive is another way to change the appearance and add additional behaviour to an element.
The syntax of directive is `<namespace>:<name>="<value>"`. The value is optional.

## List Rendering

`view:for`

List rendering directive allows developers to render a list of element based on the given array of data.

Here's an example on how to use list rendering:

```typescript
<p view:for={this.array}>Hello World!</p>
```
```typescript
@Component({
    selector: 'app-root',
    view: './root.view'
})
export class RootComponent {
    array = [1, 2, 3];
}
```

## List item name

`view:for-item`

It allows developers to set the variable name of the list item and display it in view.
If no list item directive is provided, it is `$item` by default.

Here's an example on how to use list item directive:

```javascript
    <p view:for={this.array} view:for-item="listItem">{listItem}</p>
```
```javascript
@Component({
    selector: 'app-root',
    view: './root.view'
})
export class RootComponent {
    array = ['foo', 'bar', 'bazz'];
}
```

The example code above will generate a list of elements that looks like the following.

```html
<p>foo</p>
<p>bar</p>
<p>bazz</p>
```

## List index

`view:for-index`

It allows developers to set the variable name of the list item index.
If no list index directive is provided, it is `$index` by default.

```javascript
    <p view:for={this.array} view:for-index="listIndex">{listIndex}</p>
```
```javascript
import { Component } from '@munster-dev/core';

@Component({
    selector: 'app-root'
})
export class RootComponent {
    array = ['foo', 'bar', 'bazz'];
}
```

The example code above will generate list of element that looks like the following.

```html
<p>0</p>
<p>1</p>
<p>2</p>
```

## Conditional rendering

`view:if`

Conditional rendering is used to conditionally render an element in the dom.
It uses the `view:if` directive which removes an element from the dom if the value is a falsy and append the element if otherwise.

Here's an example on how to use conditional rendering:

```javascript
<h1 view:if={this.toggle}></h1>
```
```javascript
import { Component } from '@munster-dev/core';

@Component({
    selector: 'app-root'
})
export class RootComponent {
    toggle = true;
}
```

## Reference an element

`view:ref`

This directive is used to create a reference of an element to the property of the logic.

Here's an example on how to use this directive:

```typescript
    <p view:ref={this.reference}>Hello World</p>
```
```typescript
import { Component } from '@munster-dev/core';

@Component({
    selector: 'app-root'
})
export class RootComponent {

    reference: HTMLElement;

    connectedCallback() {
        console.log(this.reference);
    }
}
```

The `this.reference` property should now contain a reference to the `p` element in the view when `connectedCallback` hook runs.

## Model binding

`view:model`

Model binding is a two way binding of data.
Every time the model is changed from the view, the value in logic will be updated and the same thing will happen in the view when the model is updated from the logic.

Here's an example on how to bind a model to the view:

```javascript
<input view:model={this.sampleModel} type="text" />
```

```javascript
import { Component } from '@munster-dev/core';

@Component({
    selector: 'app-root',
    view: './root.view'
})
export class RootComponent {
    sampleModel = '';
}
```

## Event binding

`on:<event name>`

Event binding is a way to attach an event into an element.

Here's an example on how to attach a click event to a button:

```javascript
<button on:click={this.clickMe}>Click Me</button>
```
```javascript
@Component({
    selector: 'app-root',
    view: './root.view'
})
export class RootComponent {
    clickMe() {
        console.log('I was clicked');
    }
}
```

Here is a list of available events from [w3schools.com](https://www.w3schools.com/jsref/dom_obj_event.asp).

## Prevent default event

`on-prevent:<event name>`

This namespace is the same as `on` namespace but it stops the default action of an element from happening using `event.preventDefault()`.
