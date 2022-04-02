---
id: change-detection.md
title: Change detection
sidebar_label: Change detection
slug: /change-detection
---

Change detection in MunsterJS triggers when a value of a component logic is changed.
The property must have an initial value in order to trigger change detection.
Properties that does not have an initial value will not triger change detection.

Here is an example of a property that triggers change detection and a property that does not triger change detection.

```typescript
import { Component } from '@munster-dev/core';

@Component({
    selector: 'app-root',
    view: './root.view'
})
export class RootComponent {

    // This property will trigger change detecton when the value is changed.
    prop1: string = 'hello world';

    // This property will not trigger change detection when the value is changed.
    prop2: string;

}
```

## Manually trigger change detection

In some cases, you may need to manually trigger change detection of a component.

To manually call change detection we can call the `this.$apply()` method of a component.
Calling this method in a loop will only trigger the change detection once.
Before we can call this method, the component must extend the `BaseComponent` from the core package.

Here is an example on how to manually trigger change detection.

```typescript
import { Component, BaseComponent } from '@munster-dev/core';

@Component({
    selector: 'app-root'
})
export class RootComponent extends BaseComponent {
    ...
    someMethod() {
        this.$apply();
    }
    ...
}
```
