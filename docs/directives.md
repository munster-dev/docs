---
id: directives.md
title: Directives
sidebar_label: Directives
slug: /directives
---

Directive is another way to change the appearance and add additional behavior to an element.

## Syntax

The syntax of directive is `<namespace>:<name>="<value>"`.
The value can be a string or jsx expression container`{}` or you can also omit the value because it is optional.

## Available directives

The following are the list of available built-in directives we can use.

### View model directive

`v:model`

View model directive is a two way binding of data.
Every time the model is changed from the view, the value in logic will be updated and the same thing will happen in the view when the model is updated from the logic.

Ex.

```typescript
import { Component } from '@munster-dev/core';

@Component('app-greeting')
export class Greeting {

    message: string;

    render() {
        return <input v:model={this.message} type="text" />
    }
}
```

### View reference directive

`v:ref`

This directive is used to create a reference of an element to the property of the logic.

Ex.

```typescript
import { Component } from '@munster-dev/core';

@Component('app-greeting')
export class Greeting {

    elem: HTMLElement;

    render() {
        return <h1 v:ref={this.elem}>Hello world!</h1>
    }
}
```

After view is initialized `this.elem` property should now contain a reference to the `h1` element in the view.

### Prop directive

`prop:<name>`

Prop directive is a directive that allows developers to pass any type of data from parent to child.
Check [props](/props) for more information about this directive.

Ex.

```typescript
import { Component } from '@munster-dev/core';

@Component('app-root')
export class Root {
    user = {
        fistName: 'John',
        lastName: 'Smith'
    };

    render() {
        return <app-child prop:user={this.user} />
    }
}
```

### Event directive

`on:<event name>`

Event directive is used to attach an event handler into an element.
Check the (event handling)[/event-handling] for more information about this directive.

Ex.

```typescript
import { Component } from '@munster-dev/core';

@Component('app-greeting')
export class Greeting {

    greet() {
        console.log('Hello World!');
    }

    render() {
        return <button on:click={this.greet}>Greet</button>
    }
}
```

Here is a list of available events from (developer.mozilla.org)[https://developer.mozilla.org/en-US/docs/Web/Events].

### Event preventDefault directive

`on-prevent:<event name>`

This directive is the same the as event directive with `on` namespace but it stops the default action of an element from happening using `event.preventDefault()`.

Ex.

```typescript
import { Component } from '@munster-dev/core';

@Component('app-greeting')
export class Greeting {

    submit() {
        console.log('Hello World!');
    }

    render() {
        return <form on-prevent:submit={this.submit}>
            <input type="text" />
            <button>Submit</button>
        </form>
    }
}
```

The default action when a form is submitted will refresh the page or go to another page.
When using the `on-prevent` namespace, the default action will not happen so we have a better control of what actions to make after the form is submitted.

### List rendering directive

`v:for`

List rendering directive allows developers to render a list of element based on the given array of data.
Check the (list rendering)[/list-rendering] for more information.

Ex.

```typescript
import { Component } from '@munster-dev/core';

@Component('app-list')
export class List {

    array = [1, 2, 3];

    render() {
        return <p v:for={this.array}>Hello World!</p>
    }
}
```

### Conditional rendering directive

`v:if`

Conditional rendering directive is used to conditionally render an element to the dom.
It will remove the element from the dom if the value of the directive is false and append the element if otherwise.

Ex.

```typescript
import { Component } from '@munster-dev/core';

@Component('app-greeting')
export class Greeting {

    toggle = true;

    render() {
        return <h1 v:if={this.toggle}>Hello World!</h1>
    }
}
```

<!-- ## List Rendering

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
``` -->
