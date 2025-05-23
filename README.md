![DotMH](https://github.com/dotmh/dotmh/raw/master/logo.png)

# DotMH Typescript Template

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-%23FE5196?style=for-the-badge&logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=for-the-badge&)](https://opensource.org/licenses/Apache-2.0)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge&)](code_of_conduct.md)

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=dotmh_ts)](https://sonarcloud.io/summary/new_code?id=dotmh_ts)

## Introduction

This is a template project for me to build my other projects from without needing to boiler plate
so much. It assumes that you want to make a Typescript project, whether for the browser or node.

### Getting Started:

1. Create a new repo from this
   [template in github](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
2. Rename the `hello` example in [libs/hello](/libs/hello)
3. Connect to a new [Codespace](https://docs.github.com/en/codespaces/getting-started/quickstart)
4. Start building out your project

Optional

- Add new packages to [pnpm-workspace.yaml](pnpm-workspace.yaml) such as `apps` , `bins` etc.
- create new modules in packages by copy [templates/base](/templates/base/) to the package folder

## Technology

- [Typescript](https://www.typescriptlang.org/) language
- [PNPM](https://pnpm.io/) for package managing, also set up as a workspace
- Tests are been done on [VITEST](https://vitest.dev/)
- Code Coverage is done with Istanbul and will output HTML and JSON, as well as Text on the command line
- CI / CD is been handled by [github actions](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs)

### Supported

- [Github Codespaces](https://github.com/features/codespaces) / [Devcontainers](https://containers.dev)
  the repo supports devcontainers to allow easier development where ever they are supported, including
  using Github Codespaces.

## Tsconfig

This repo makes use of the [DotMH Tsconfig](https://github.com/dotmh/shared-typescript-configuration/blob/main/packages/tsconfig/tsconfig.json)

## Smart Builder

> [!WARNING]
> This project includes support for [Smart Builder](https://github.com/dotmh/smart-builder) which is pre-release and so may contain bugs or not work as expected. It is also likely to change

This project makes use of the experimental [Smart Builder](https://github.com/dotmh/smart-builder) a tool designed to build mono-repo package dependency chains in the correct warning. If you wish
to use it, you don't need to do anything just run:

```bash
$ pnpm -w build
```

### Dry Run

If you want to see which dependencies and in what order they are going to get built in run

```bash
$ pnpm -w build:dry-run
```

### Removing

To remove smart builder is pretty easy

```base
$ pnpm un @dotmh/smart-build
```

Then update the `build` and `build:dry-run` tasks in [package.json](./package.json) at the project route

## Style

The repo is designed to enforce code styling rules across the repo. It uses the DotMH
[eslint](https://github.com/dotmh/linting/blob/main/packages/eslint-config-ts/index.js) and
[prettier](https://github.com/dotmh/linting/blob/main/packages/prettier-config/index.json)
configs by default. It also enforces commit styles with [commit lint](https://commitlint.js.org/) which
will enforce [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Safety

The repo makes use of [secret lint](https://github.com/secretlint/secretlint) to attempt to guard against secrets between accidentally pushed to git. This however should not be relied on!

**Don't commit secrets**

## CI

Makes use of Github actions, by default this will [test and lint the code](.github/workflows/standard-actions.yml)

## Git

When you make a commit the following will happen **BEFORE** the commit is added to git.

1. Check your git message conforms to conventional commits - **BLOCKING**
2. Checks you haven't commit any secrets - **BLOCKING**

- You can edit 1. in [.husky/commit-msg](.husky/commit-msg)
- You can edit 2. by editing the script `githook:precommit` the root [package.json](package.json#L17)

When you push code up to a remote repository the following will happen _BEFORE_ the code is pushed

1. Checks you haven't commit any secrets - **BLOCKING**
2. Run the code through eslint - **BLOCKING**
3. Run the code through prettier - **BLOCKING**
4. Run the tests on all packages in the workspace - **BLOCKING**

This can be changed by changing the pnpm script `githook:prepush` in the root [package.json](package.json#L16)

## License

This repo is set up with an [Apache 2.0](https://opensource.org/license/apache-2-0) license and this will carry over to any projects that are
generated from the template unless you remove it.
