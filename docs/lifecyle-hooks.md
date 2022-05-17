---
id: lifecycle-hooks.md
title: Lifecycle hooks
sidebar_label: Lifecycle hooks
slug: /lifecycle-hooks
---

Lifecycle hooks are functions that lets you run a block of codes when your component triggers a lifecycle event.

## Available hooks

| Hooks                                                 | Description |
| ---                                                   | --- |
| onInit()                                              | The first hook to run when the component is initialized. |
| beforeViewInit()                                      | This will be called before the view is build as dom elements. |
| afterViewInit()                                       | This will be called after the view is built as dom elements. |
| onChangeDetection()                                   | This is called every time the component's change detection runs. |
| onViewChange()                                        | This will be called every time there are changes in view caused by change detection. |
| onDestroy()                                           | This will be called when a component is destroyed. This is used for cleanup like unsubscribing all subscriptions. |
| onReceiveParent(parent: any)                          | This is called after a service is initialized. This is used when a service needs to access the parent instance where the service is injected. |
| onReceiveConfig(config: any, container: Container)    | This is called after a service is initialized. This is used when a service is designed to depend on a configuration after initialization. |
| adoptedCallback()                                     | A native web component hook. Called when a component is moved from one HTML document to another using the adoptNode(). This happens when we have `<iframe>` elements in a page. |
| attributeChangedCallback(name: string, oldValue: any, newValue: any, camelCaseName: string) | A native web component hook. Called when an observed attribute has been added, removed or changed. |
| connectedCallback()                                   | A native web component hook. Called when the component is connected to the dom tree |
| disconnectedCallback()                                | A native web component hook. Called when the component is disconnected to the dom tree. |
