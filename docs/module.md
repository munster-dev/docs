---
id: module.md
title: Module
sidebar_label: Module
slug: /module
---

Every component of an application is a part of a module.
This is a way to group components, plugins and other part of application that are related to each other.

## Module root component

Every module has a root component which will be displayed when a module is mounted to the dom tree.

```typescript
import { Module } from "@munster-dev/core";
import { RootComponent } from "./root.component";

@Module({
    rootComponent: RootComponent
})
export class AppModule {}
```

In this example, `RootComponent` is the root component.

## Mount to dom tree

Module must be mounted to the dom tee first before we can interact with its components.

```javascript
import { Module } from '@munster-dev/core';
import { RootComponent } from './root.component';

@Module({
    rootComponent: RootComponent
})
export class RootModule { }
```

In the example code above, the selector of the root component is `root-component`.
The tag name when mounting the component will be `<app-root-component></app-root-component>`.

## Include a directive

A directive must be included in the directives array of a module before the components under this module can use it.

Here's an example on how to use a directive:

```javascript
import { Module } from '@munster-dev/core';
import { CustomDirective } from './custom.directive';

@Module({
    directives: [
        CustomDirective
    ]
})
export class RootModule { }
```

In the example above, we included the `SampleDirective` plugin to our module.
Please see [Directives](/directives) for more information how to create a custom directive.

## Declare components

A component must be declared in a module before it can be used inside our application.

Here's an example on how to declare a component:

```typescript
import { Module } from '@munster-dev/core';
import { SampleComponent } from './sample.component';

@Module({
    components: [
        SampleComponent
    ]
})
export class RootModule { }
```

To declare a component, we just pass the component to the components array in a module.

## Export directive

Directive in submodule needs to be exported if we want it to be available in components registered in the parent module.

Here's an example on how to export a directive:

```javascript
import { Module } from '@munster-dev/core';
import { CustomDirective } from './custom.directive';

@Module({
    exports: {
        directives: [CustomDirective]
    }
})
export class RootModule { }
```