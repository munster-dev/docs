---
id: cli-installation.md
title: Installation
sidebar_label: Installation
slug: /cli-installation
---

Munster cli helps developers to create a working application out of the box.
It has many useful commands like generating files for our munster app.

To install the cli we just need to run the following command:

```bash
npm install -g @munster-dev/cli
```

After installing the cli, we can verify if the installation is successful by running the following command:

```bash
mn --version
```

If the installation is successful it should display the version of the MunsterJS cli installed in your machine.

We can find help with the cli using the `mn --help` command.

After installing the cli, we can now start creating our new munster project by running this command:

```bash
mn new my-app
```

The syntax of the command above is `mn <command> <project name>` where "new" is the command and "my-app" is the project name.