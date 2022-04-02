---
id: quick-start.md
title: Quick start
sidebar_label: Quick start
slug: /quick-start
---

There are many ways to setup a munster project.
One way is to use the [CLI](cli-installation.md) but the easiest way is to clone the starter app from [GitHub](https://github.com/mfpjayb/munster-starter-app).

## Create an app

Clone the starter app from [GitHub](https://github.com/mfpjayb/munster-starter-app).

```bash
git clone https://github.com/mfpjayb/munster-starter-app.git munster-app
```
After cloning the repository, change directory into the starter project

```bash
cd munster-app
```

then install the dependencies

```bash
npm install
```
Start the local development server by running the following command:

```bash
npm start
```
You can preview your site in your browser on [http://localhost:4000](http://localhost:4000)

## Project structure

After the setup is complete, you can see the file structure of project in the current directory.

```
.babelrc
package.json
tsconfig.json
.configs
    ├── webpack.config.js
    └── munster.json
node_modules/
src/
    ├── index.html
    ├── index.ts
    ├── styles.scss
    ├── assets/
    └── app/
        ├── root.module.ts
        ├── root.logc.ts
        ├── root.view.tsx
        └── root.style.scss
```
* `package.json`                list all the dependencies and configurations of your project.
* `node_modules/`               this is where the installed node packages are located.
* `.babelrc`                    configuration for babel.
* `src/`                        a directory that contains the source code and assets of your application.
* `src/index.html`              as the main HTML page that is served when someone visits your application.
* `src/index.ts`                the main entry point of your application. It bootstrap the root module of the entire project.
* `src/styles.css`              contains the global styles of the application.
* `src/assets/`                 this is the recommended directory to put all of the asset files.
* `src/app/`                    this is where the codes related to application is located
* `src/app/root.module.ts`      the root module of the application.
* `src/app/root.logic.ts`       contains the js codes of the root component. Any other components must be a child of this component.
* `src/app/root.view.html`      contains the html codes of the root component.
* `src/app/root.styles.scss`    contains the css codes of the root component.
