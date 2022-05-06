---
id: module.md
title: Module
sidebar_label: Module
slug: /module
---

Module is a way to group components, directives, services, pipes and modules of application that are related to each other.
This feature is very helpful in organizing the codes to make the project more maintainable as it grows in scale.
Another cool thing for a MunsterJS module is that it is lazy loaded when used in a route.

## Installation

Module is not directly available in the core package so we need to install it first if not yet installed before we can use it.
To install this package, we can run the following command in the root directory of our project.

```bash
npm install @munster-dev/module
```
or
```bash
yarn add @munster-dev/module
```

## Root component

Some module has a root component.
This component is the one being mounted in the dom tree when the module is used in a route.
Root component is the last component to be defined to make sure all the child components are already defined.

Ex.

```typescript
import { Module, BaseModule } from "@munster-dev/core";
import { App } from "./app.component";

@Module({
    root: App
})
export class AppModule extends BaseModule {}
```

In this example, `App` is the root component.

## Register components

Components can be registered to a module so that they can interact with each other.

For example, we have a parent component and a child component.
The child component is rendered inside the template of the parent module.
So the parent and child module needs to be registered in the module.

Ex.

```typescript
import { Module, BaseModule } from '@munster-dev/module';
import { Parent } from './parent.component';
import { Child } from './child.component';

@Module({
    components: [Parent, Child]
})
export class AppModule extends BaseModule { }
```

:::note
Components must be registered to a one module only.
:::

## Export components

Components defined in a module cannot be defined in another module.

For the example above,
if the parent and child components are registered in different modules,
we need to export the component that will be used in another module and import the module to the module that needs the exported component.

Ex.
#### Child module
```typescript
import { Module, BaseModule } from '@munster-dev/module';
import { Child } from './child.component';

@Module({
    exports: {
        components: [Child]
    }
})
export class ChildModule extends BaseModule { }
```

#### Parent module
```typescript
import { Module, BaseModule } from '@munster-dev/module';
import { Parent } from './parent.component';
import { ChildModule } from './child.module';

@Module({
    components: [Parent],
    modules: [ChildModule]
})
export class ParentModule extends BaseModule { }
```

## Register services
## Export services
## Register directives
## Export directives
## Register pipes
## Export pipes
## Import modules