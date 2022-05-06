---
id: observed-attributes.md
title: Observed attributes
sidebar_label: Observed attributes
slug: /observed-attributes
---

Observed attributes are values passed down from parent component to child component and the changes is being observed by the child component.
This are different from a normal element attributes.
This feature uses the web components observed attributes implementation.
The same as web component observed attributes we cannot pass objects and arrays but we can pass string, boolean and numbers.

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
