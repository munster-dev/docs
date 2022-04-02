---
id: testing.md
title: Testing
sidebar_label: Testing
slug: /testing
---

Testing in munster uses [karma](https://karma-runner.github.io/latest/index.html) and [munster-tester](https://npmjs.com) package.

## Setup testing environment

Testing environment can be setup using [munster-cli](/docs/cli-installation) or manually installing all the dependencies.
The cli allows the developer to setup the testing environment in just one line command.

To install all the dependencies just follow the instructions below:

The instructions below is to setup [karma](https://karma-runner.github.io/latest/index.html) and [jasmine](https://jasmine.github.io) for the testing environment.

## Install dependencies

Install the following dependencies in your current project as a development dependencies using the following command.

```bash
npm install --save-dev munster-tester karma karma-jasmine karma-parcel karma-babel-preprocessor karma-chrome-launcher
```

## Initialize karma

After installing the dependencies, generate a karma config using the following command:

```bash
npx karma init
```

Choose your preferred config.

Open the `karma.config.js` file and add the following configs:

```javascript
...
    plugins: [
        require('karma-jasmine'),
        require('karma-parcel'),
        require('karma-chrome-launcher'),
        require('karma-babel-preprocessor')
    ],
    frameworks: ['jasmine', 'parcel'],
    files: [
      {
        pattern: "test/**/*.js",
        watched: false,
        included: false
      }
    ],
    preprocessors: {
      'test/**/*.js': ['parcel']
    },
    browsers: ['ChromeHeadless'],
    singleRun: true,
...
```

## Running the test

To run the test just run the following command:

```bash
npx karma start
```

or create a script command in your `package.json` file like the following:

```javascript
    "scripts": {
        ...
        "test": "karma start"
    },
```

Now we can run the following command to start testing the application

```bash
npm run test
```

## Creating a test files

Based on the config above, our test must be located inside the `test` folder at the root directory of our munster project.

Let's create a test for our `src/Root.js` component.

Steps:
1. Create a file `test/Root.spec.js`.
2. Open and import your root component inside the test files.
```javascript
import Root from '../src/Root';
```
3. Describe the purpose of this test.
```javascript
import Root from '../src/Root';

describe('Test Root.js component', function() {
    ...
});
```
4. Create our first test case.
```javascript
import Root from '../src/Root';
import { define } from 'munster-tester';

describe('Test Root.js component', function() {
  it('should rendered the view correctly', function() {
    const component = define(Root);
    expect(component.innerHTML).toContain('Root Component');
  });
});
```

Additional information about `munster-tester` package in [here](/docs/munster-tester).
