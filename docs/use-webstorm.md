# Using WebStorm

## `src/pages` folder is Link Root Path
so you can set `src/pages` folder `mark directory as` / `Resource Root`

## `public` folder is Link Root Path
so you can set `public` folder `mark directory as` / `Resource Root`

## Javascript language version set `Flow`
> [Preferences / Languages & Frameworks / javascript language version](https://blog.jetbrains.com/webstorm/2016/11/using-flow-in-webstorm/)
Flow package or exectable set {your path}/node_modules/flow-bin

## Install plugin [Styled Components & Styled JSX](https://plugins.jetbrains.com/plugin/9997-styled-components--styled-jsx/)
> Preferences / Plugins

## Find and fix problems in your JavaScript code ESLint
> Preferences / Languages & Frameworks / javascript / Code Quality Tools / ESLint
- Manual ESLint configuration
  - Node Interpreter: Project
  - ESLint package: {your node_modules/eslint path}
- Configuration file: Automation search

## styled-component
> Preferences / Languages & Frameworks / javascript / styled-components
- add the `media`


## use storybook docs by mdx
1. Download the [sources](https://github.com/silvenon/vscode-mdx) of the vscode-mdx plugin
2. In WebStorm, open Preferences/Settings | Editor | TextMate Bundles
3. Click on the Add button and select the folder with the downloaded plugin
4. Apply changes and close the settings dialog.
