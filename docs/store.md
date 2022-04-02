---
id: store.md
title: Store
sidebar_label: Store
slug: /store
---

Store is a plugin and a state management built for munster framework.
It is accessible inside a component using `this.$store`.

## Register the plugin

Store needs to be registered in a module before we can use it.

Here's an example on how to register the store:

```javascript
import { Module, Store } from 'munster';

export class RootModule extends Module {
    plugins = [
        Store.config({})
    ];
}
```

## Initial state

Initial state of the store is the state that is passed to the store as the initial data.

Here's an example on how to create an initial state:

```javascript
import { Module, Store } from 'munster';

const initialState = {
    state: {
        random: 0
    }
};

export class RootModule extends Module {
    plugins = [
        Store.config(initialState)
    ];
}
```

## Setter

Setting a state of the store is very straightforward.

Here's an example on how to set a state inside a component:

```javascript
<template>
    ...
</template>

<script>
    export default class SampleComponent {
        btnClick() {
            this.$store.random = Math.random();
        }
    }
</script>
```

## Getter

Accessing a value of a store, the developer needs to call the `value` in order to get the current value of the state.

Here's an example on how to get a value of the store:

```javascript
<template>
    ...
</template>

<script>
    export default class SampleComponent {
        $connected() {
            this.random = this.$store.random.value;
        }
    }
</script>
```

## Watchers

Store also offers a way to watch for the changes of each item of the state.

Here's how to watch the data changes for each item in the state:

```javascript
<template>
    ...
</template>

<script>
    export default class SampleComponent {
        $connected() {
            this.$store.random.watch(value => {
                console.log(value);
            });
        }
    }
</script>
```

:::note
Watchers are automatically un-watch when the component is destroyed.
:::

## Actions

Actions can also be used to update the state.

#### Create actions

Here's an example on how to create an action:

```javascript
import { Module, Store } from 'munster';

const initialState = {
    state: {
        random: 0
    },
    actions: {
        random: {
            setRandom(current, payload) => {
                return payload;
            }
        }
    }
};

export class RootModule extends Module {
    plugins = [
        Store.config(initialState)
    ];
}
```
#### Dispatch an action

Here's an example on how to dispatch the created action above:

```javascript
<template>
    ...
</template>
<script>
    export default class SampleComponent {
        btnClick() {
            this.$store.random.dispatch('setRandom', Math.random());
        }
    }
</script>
```
