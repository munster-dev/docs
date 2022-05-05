---
id: custom-directive.md
title: Custom Directive
sidebar_label: Custom directive
slug: /custom-directive
---

Custom directives are classes that manipulates an element and our MunsterJS application.
Directive is sometimes called as namespace in this framework since the syntax to write directives in view is `<namespace>:<name>={<value>}`.
The value is not required.

## Creating a custom directive

Here is an example on how to create a custom directive.

```javascript
import { Directive, BaseDirective } from 'munster';

@Directive({
    namespace: 'highlight'
})
export class HighlightDirective extends BaseDirective {
}
```

The next step is to handle the directive by creating a method `$<directive name>`.

Here is an example on how to handle the directive `hightlight:color="red"`.

```typescript
<div>
    <p hightlight:color="red">I have a red background</p>
</div>
```
```typescript
import { Directive, BaseDirective } from '@munster-dev/core';

@Directive({
    namespace: 'highlight'
})
export class HighlightDirective extends BaseDirective {

    $color(valueCaller: () => any) {
        const value = valueCaller();
        this.element.style.backgroundColor = value;
    }

}
```

The namespaces will call its respective class methods once used in a template.

For the example above, the directive `highlight:color="red"` will call the method `$color` with a parameter(valueCaller) to call the value(red) of the directive.

## Use the custom directive

To use the custom directive, we need to register the directive in the module first.

Here is an example on how to register the directive to a module.

```typescript
import { Module } from '@munster-dev/core';
import { HighlightDirective } from './hightlight.directive';

@Module({
    directives: [HighlightDirective]
})
export class RootModule {}
```

After we register the directive we can use the syntax `<namespace>:<name>="<value>"` to apply the directive to an element.

## Value change watcher

To let our directive react when it's a value is changed we can use the `createWatcher` method from BaseDirective.
The watch method has a parameters of initial value, value caller, and an update callback which runs every time the value changes.

Here's an example on how to change the background color of an element based on the value passed to its directive.

#### The directive
```javascript
import { Directive, BaseDirective } from '@munster-dev/core';

@Directive({
    namespace: 'highlight'
})
export class HighlightDirective extends BaseDirective {

    $color(valueCaller: () => any) {
        const initialValue = valueCaller();
        this.createWatcher(initialValue, valueCaller, (newValue) => {
            this.element.style.backgroundColor = newValue;
        });
    }

}
```
#### The component
```typescript
<div>
    <p highlight:color={this.color}>Hello World!</p>
</div>
```

## Accessing component from directive

Directives also has access to the component from its constructor.

Here's an example on how to access the component from a directive:

```javascript
import { Directive, BaseDirective } from '@munster-dev/core';

@Directive({
    namespace: 'hightlight'
})
export class HighlightDirective extends BaseDirective {

    onInit() {
        console.log(this.component);
    }

}
```
