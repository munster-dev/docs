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
npm install -g munster-cli
```

After installing the cli, we can verify if the installation is a success by running the following command:

```bash
mster --version
```

If the installation is a success it should display the version of the munster-cli installed in your machine.

We can find help with the cli using the `mster --help` command.

We can now start creating our new munster project by running this command:

```bash
mster new my-app
```

The syntax of the command above is `mster <command> <project name>` where "new" is the command and "my-app" is the project name.