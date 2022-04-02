---
id: component.md
title: Component
sidebar_label: Component
slug: /component
---

Components are the most basic building block of an application.
A component is composed of view, logic and styles.
In this framework, you have an option to put the view and logic in a single or a separate files.

## Structure

### Logic and view on a single file

Here's an example of logic and view on a single file.

```typescript
import './sample.styles.scss';
import { Component } from '@munster-dev/core';

@Component({
    selector: 'app-sample'
})
export class SampleComponent {
    $render() {
        return <h1>Simple component works!</h1>
    }
}
```

The `SampleComponent` class can have the methods and properties for the component's logic and the `$render` method will return a jsx which is the components view.

### Multiple file component

The view, logic and styles of a component can also be separated into different files.
View can have `.html`, logic can have `.js` and styles can have `.css` extension.

Here's an example on how to make a multiple file component:

#### View
```html
<!-- ./sample.view.tsx -->
<h1>Sample Component</h1>
```

All html element in view must be inside the template tag and template tag must have a single child only.

#### Style
```css
/* ./sample.styles.scss */
h1 {
    color: red;
}
```

#### Logic
```typescript
// ./sample.logic.ts
import './sample.styles.scss';
import { Component } from '@munster-dev/core';

@Component({
    selector: 'app-sample',
    view: './sample.view'
})
export class SampleComponent {
}
```

Please take note of the `@Component` decorator. The template and style must be imported and passed to the @Component decorator.

## Define component

Component must be defined in a module before we can use it.

Here's an example on how to define a component in a module:

```javascript
import { Module } from '@munster-dev/core';
import { SampleComponent } from './sample.logic.tsx';

@Module({
    components: [SampleComponent]
})
export class RootModule { }
```

## Data binding

Data binding is a way to synchronize the data from logic to view and vise versa.

#### Attribute binding

Here is an example on how to bind a property from the logic into an attribute of view:

```typescript
// sample.view.tsx

<h1 id={this.attr}></h1>
```

```typescript
// sample.logic.ts
import { Component } from '@munster-dev/core';

@Component({
    selector: 'app-sample',
    view: './sample.view'
})
export class SampleComponent {
    public attr: string = 'sample-attr';
}
```

#### Text binding

Here is an example on how to display a text from logic to view:
```typescript
// sample.view.tsx
<h1>{greeting}</h1>
```

```typescript
// sample.logic.ts
import { Component } from '@munster-dev/core';

@Component({
    selector: 'app-sample',
    view: './sample.view'
})
export class SampleComponent {
    public greeting: string = 'Hello World!';
}
```

## Model binding

`view:model`

Model binding is a two way binding of data.
Every time the model is changed from the view, the value in logic will be updated and the same thing will happen in the view when the model is updated from the logic.

Here's an example on how to bind a model to the view:

```typescript
// sample.view.tsx
<input view:model={this.sampleModel} type="text" />
```

```typescript
// sample.logic.ts
import { Component } from '@munster-dev/core';

@Component({
    selector: 'app-sample',
    view: './sample.view'
})
export class SampleComponent {
    public sampleModel: string = 'Some text';
}
```

## Hooks

Hooks are functions that lets you run a block of codes when your component triggers a lifecycle event.

Below are the available lifecycle hooks:

| Hooks                 | |
| ---                   | --- |
| onInit()                                       | The first hook to run when the component is initialized. |
| connectedCallback()                            | Called when the component is connected to the dom tree. |
| disconnectedCallback()                         | Called when the component is disconnected to the dom tree. |
| adoptedCallback()                              | Called when a component is moved from one HTML document to another using the adoptNode(). |
| attributeChangedCallback(name: string, oldValue: any, newValue: any, camelCaseName?: string) | Called when an observed attribute has been added, removed or changed. |
| afterInit()                                    | Called after the component is initialized and is connected to the dom tree. |
| onViewChanges()                                | Called every time the view is changed. |
| onPropsChange()                                | Called when there are changes to the props. |

## Child Component

Child component is a component rendered inside a component.

Here's an example on how to render a child component:

```typescript
<div>
    <h1>Parent component view</h1>
    <app-child-component></app-child-component>
</div>
```

:::note
Child component must be registered to the same module as parent component.
:::

## Attributes

Attributes are values passed down from parent component to child component.
Attribute can only hold a value and not objects or arrays.

Here's an example on how to pass a value from parent to child component:

##### Parent component
```typescript
<div>
    <h1>Parent component view</h1>
    <app-child magic-number={this.number}></app-child>
</div>
```
```typescript
import { Component } from '@munster-dev/core';

@Component({
    selector: 'app-sample',
    view: './sample.view'
})
export class SampleComponent {
    number = 123;
}
```

##### Child component
```javascript
<h1>The magic number is: {this.magicNumber}</h1>
```
```javascript
import { Component, Attr } from '@munster-dev/core';

@Component({
    selector: 'app-child',
    view: './child.view'
})
export class ChildComponent {
    @Attr()
    magicNumber = 0;
}
```

## Props

Props are the properties passed down from parent to child.
Props is different from attributes since it can hold values, arrays or objects.

Here is an example on how to use props.

##### Parent component
```typescript
<div>
    <h1>Parent component view</h1>
    <app-child prop:magicNumber={this.obj}></app-child>
</div>
```
```typescript
import { Component } from '@munster-dev/core';

@Component({
    selector: 'app-sample',
    view: './sample.view'
})
export class SampleComponent {
    obj = {
        number: 123
    };
}
```

##### Child component
```javascript
<h1>The magic number is: {this.props.magicNumber?.number}</h1>
```
```javascript
import { Component, Attr } from '@munster-dev/core';

@Component({
    selector: 'app-child',
    view: './child.view'
})
export class ChildComponent {
    props: any;
}
```

Props changes can be track using `onPropsChange()` hook.