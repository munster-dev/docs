---
id: router.md
title: Router
sidebar_label: Router
slug: /router
---

Router is a plugin that enables developers to build a single page application with multiple components that acts as different views of the app.
View changes depending on the activated route. Activated routes depends on the url of the browser and the path registered in the route component.


## Installation

We can install the router to our project using npm or yarn.

Here are the examples on how we can install the package to our project.

```bash
npm install @munster-dev/router
```
or
```bash
yarn add @munster-dev/router
```

## Register the module

Router must be registered to the module first before we can use it.

Here's an example on how to register the router:

```typescript
import { Module } from '@munster-dev/core';
import { RouterModule } from '@munster-dev/router';

@Module({
    modules: [RouterModule]
})
export class RootModule { }
```

## Navigate

Router contains a `navigate(url, state, title, replaceState)` that allows us to navigate to different routes.

#### Parameters

`url` - is the url that we want to navigate to. This parameter is required.

`state` - object, used as the state in history.pushState api. This parameter is not required.

`title` - string, used as the title in history.pushState api. This parameter is not required.

`replaceState` - boolean, indicates if the navigate will use history.pushState or history.replaceState


## Events

Router gives us an ability to watch router events.

Here are the list of available events:

| Events            |  |
| ---               | --- |
| onRouteChange     | An observable event that triggers when the component path route is changed. |
| onAllRouteChange  | An observable event that triggers when route is changed. |

We can access router events using the components props.

Here's an example on how to watch for an event:

```typescript
import { Component } from '@munster-dev/core';
import { RouterPropsInterface } from '@munster-dev/router';

@Component({
    selector: 'app-sample',
    view: './sample.view'
})
export class SampleComponent {

    props: RouterPropsInterface;

    connectedCallback() {
        this.props.events.onRouteChange.subscribe(() => {
            // some codes ...
        });
    }
}
```

:::note
Router events is only available to components directly registered to the <app-route /\> component.
:::

## Router params

We can also get the router parameters using `this.props.params()`.

Here is an example on how to get the router params.

```typescript
import { Component } from '@munster-dev/core';
import { RouterPropsInterface } from '@munster-dev/router';

@Component({
    selector: 'app-sample',
    view: './sample.view'
})
export class SampleComponent {

    props: RouterPropsInterface;

    connectedCallback() {
        console.log(this.props.params());
    }
}
```

:::note
Router params is only available to components directly registered to the <app-route /\> component.
:::

## Creating routes

A route in MunsterJS is just a component that uses the `app-route` selector and has a required property `path`.

Here is an example on how to make a route.

```typescript
<div>
    <app-route prop:path="/some/path" prop:component="app-sample" />
</div>
```

In the example above. The `app-sample` component will be displayed on the UI if the browser url matches with the path property of the app-route.

#### Route properties

Here are the available route properties.

| Properties    | type              | Description |
| ---           | ---               | --- |
| path          | string            | The path that should match in the browser url pathname before the route is activated. |
| component     | class \| string   | The component that will be rendered in the `<app-router-outlet />` when route path matches the browser url pathname. |
| exact         | boolean           | If the values is true, then the Component will only activate if route path is an exact match with the browser url pathname but still respect the dynamic route matching. |
| middleware    | array             | It is another layer of checking if the component can activate or not. |
| module        | function          | Loads a module on demand. |

## Dynamic route matching

Dynamic route matching is a way to match a route path segment into its matching browser url pathname segment.
A dynamic segment is denoted by a colon `:` followed by the segment name. ex. `/:userId`.
The value of the dynamic segments is accessible in it's component only using `this.props.params()`.

Here's a table of dynamic routes and its corresponding values in `this.props.params()`:

| component path        | browser url pathname  | this.$router.params()         |
| ---                   | ---                   | ---                           |
| /:path                | /100                  | { path: 100 }                 |
| /user/:userId         | /user/123             | { userId: 123 }               |
| /post/:postId/:userId | /post/1/123           | { postId: 1, userId: 123 }    |

## Router link directive

Router link directive is an additional feature of the router.
It allows the developer to add a way to navigate the user to different routes by clicking the element that contains this directive.

Here's an example on how to add a router link:

```jsx
<div>
    <a router:link="/route-path">Click Me</a>
    <button router:link="/route-path">Click Me</button>
</div>
```

The code above will generate an element like the following:

```jsx
<div>
    <a href="/route-path">Click Me</a>
    <button>Click Me</button>
</div>
```

If the the <a\> or <button\> element is clicked. We will be redirected to its respective paths.

## Router guard

Router guard is another way to check if a component can activate or not.
It can also run a block of codes before a route event to happen.

Here's an example on how to create a guard.

```javascript
import { Guard, BaseGuard } from '@munster-dev/core';
import { navigate } from '@munster-dev/router';
import { AuthService } from './auth.service';

@Guard()
export class AuthGuard extends BaseGuard {

    constructor(private authService: AuthService) {}

    public override canActivate(): Observable<boolean> | boolean {

        if (this.authService.isLoggedIn) {
            return true;
        }

        navigate('/guest/route');
        return false;
    }
}
```

If `canActivate` method returns true, then the component can activate and cannot if otherwise.

## Lazy loading

To lazy load a module or load a module on demand, we can use the `module` property of a route.

Here's an example on how to use lazy loading in route:

#### The module

```typescript
import { Module } from '@munster-dev/core';
import { SampleComponent } from './sample.component';

@Module({
    rootComponent: SampleComponent
})
export class LazyLoadedModule { }
```

#### The route

```typescript
<div>
    <app-route prop:path="/sample/path" prop:module={() => import('./lazy-loaded.module').then(m => m.LazyLoadedModule)} />
</div>
```

The example above will display the component registered as a root component in the `LazyLoadedModule` when the route activates.
