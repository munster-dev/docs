---
id: store.md
title: Store
sidebar_label: Store
slug: /store
---

Store is a service and a state management built for munster framework.
Using this store will help developers to centralize and maintain the codes very easily.

## Installation

We can install the store to our project using npm or yarn.

Here are the examples on how we can install the package to our project.

```bash
npm install @munster-dev/store
```
or
```bash
yarn add @munster-dev/store
```

## Register the store

Store needs to be registered as a service before we can use it.
We can register a service inside `src/index.ts` file.

Here's the example on how to register the store:

```javascript
// src/index.ts
import 'reflect-metadata';
import './styles.scss';
import { Program } from '@munster-dev/core';
import { AppModule } form './app.module';
import { Store, StoreInterface } from '@munster-dev/store';

const program = new Program();

program.bootstrapModule(AppModule);

program.Service.addSingleton(Store);

program.run();
```

An initial state of the store is required when registering the store.
More information for the store initial state can be found directly below this section.

## Initial state

Initial state of the store is the state that is passed to the store as the initial data.
The initial state is required when registering the store.

Here's an example on how to create an initial state:

```javascript
// initial-state.ts
import { StoreInterface } from "@munster-dev/store";

export interface InitialStateInterface {
    count: number;
}

export const initialState: StoreInterface<InitialStateInterface> = {
    initialState: {
        count: 0
    }
}
```

After creating an initial state, we need to pass it as a service config for the store.

```typescript
// src/index.ts
import 'reflect-metadata';
import './styles.scss';
import { Program } from '@munster-dev/core';
import { AppModule } form './app.module';
import { Store, StoreInterface } from '@munster-dev/store';
import { initialState, InitialStateInterface } from './initial-state';

const program = new Program();

program.bootstrapModule(AppModule);

program.Service.addSingleton(Store)
    .setConfig<StoreInterface<InitialStateInterface>>(initialState);

program.run();
```

## Setter

Setting a state of the store is very easy.

Here's an example on how to set a state inside a component:

```javascript
import { Component } from '@munster-dev/core';
import { Store } from '@munster-dev/store';
import { InitialStateInterface } from './initial-state';

@Component({
    selector: 'app-root'
})
export class RootComponent {

    constructor(private store: Store<InitialStateInterface>) {}

    btnClick() {
        this.store.set('count', 100);
    }
}
```

## Getter

To get a value of a store, the developer can call the `get` method.

Here's an example on how to get a value from the store:

```javascript
import { Component } from '@munster-dev/core';
import { Store } from '@munster-dev/store';
import { InitialStateInterface } from './initial-state';

@Component({
    selector: 'app-root'
})
export class RootComponent {

    constructor(private store: Store<InitialStateInterface>) {}

    btnClick() {
        console.log(this.store.get('count'));
    }
}
```

## Observables

Store also offers a way to watch for the changes of each item of the state.

Here's how to watch the data changes for each item in the state:

```javascript
import { Component } from '@munster-dev/core';
import { Store } from '@munster-dev/store';
import { InitialStateInterface } from './initial-state';

@Component({
    selector: 'app-root'
})
export class RootComponent {

    constructor(private store: Store<InitialStateInterface>) {}

    connectedCallback() {
        this.store.select('count').subscribe(state => {
            console.log(state);
        });
    }
}
```

#### Unsubscribe to observable

All subscriptions must be unsubscribe when the component is destroyed or else it will cause a memory issue.

Here is an example on how to unsubscribe a subscription when a component is destroyed.

```javascript
import { Component } from '@munster-dev/core';
import { Store } from '@munster-dev/store';
import { InitialStateInterface } from './initial-state';

@Component({
    selector: 'app-root'
})
export class RootComponent {

    private subscription: Subscription;

    constructor(private store: Store<InitialStateInterface>) {}

    connectedCallback() {
        this.subscription = this.store.select('count').subscribe(state => {
            console.log(state);
        });
    }

    disconnectedCallback() {
        this.subscription.unsubscribe();
    }
}
```

## Actions

Actions can also be used to update the state.
Using this can make your codes much cleaner and easy to manage.

#### Create actions

Here's an example on how to create an action:

```typescript
import { createAction } from '@munster-dev/store';

interface PostInterface {
    likesCount: number;
    commentsCount: number;
}

interface InitialStateInterface {
    post: PostInterface;
}

export const setPostLikesCount = createAction<number, PostInterface>((state: PostInterface, payload: number) => {
    return {
        ...state,
        likesCount: payload
    }
});

export const initialState: StoreInterface<InitialStateInterface> = {
    initialState: {
        post: {
            likesCount: 0,
            commentsCount: 0
        }
    },
    actions: {
        post: [
            setPostLikesCount // <--- action needs to be registed here
        ]
    }
}
```

In the `createAction`, there are two generic types.
First is the type of data that `setPostLikesCount` action will accept.
The second type is the type of the post state inside the store.

There are two parameters for the `createAction` function.
First is the state which holds the current state of the post.
Second is the payload which holds the value that is passed to the `setPostLikesCount` action when the action is called.

#### Dispatch an action

Here's an example on how to dispatch the created action above:

```typescript
import { Component } from '@munster-dev/core';
import { Store } from '@munster-dev/store';
import { InitialStateInterface, setPostLikesCount } from './initial-state';

@Component({
    selector: 'app-root'
})
export class RootComponent {

    constructor(private store: Store<InitialStateInterface>) {}

    btnClick() {
        this.store.action(setPostLikesCount(100));
    }
}
```
