# simple-vuejs-netcore
The simplest of VueJS + ASP.NET Core examples: pages, router, webpack, vuex.

No SpaServices, we're not running Javascript through node via .net core.

## Part 1: scaffolding of .NET Core, Vue, webpack

#### Commit 1 - dotnet core scaffolding
- `mkdir src`
- `cd src`
- `dotnet new mvc -n SimpleVueJs`

Wipe out the contents of wwwroot

#### Commit 2 - vue/webpack scaffolding
- `cd src\SimpleVueJs`
- `mkdir AppClient`
- `yarn init`
- `yarn add vue vue-router`
- `yarn add -dev webpack webpack-cli`

#### Commit 3 - VueJS folders and entry point

- Create `AppClient/Vue` folder with `components, pages` subfolders
- Add a `AppClient/Vue/App.vue` file with Hello world.
- Add a `AppClient/app.js` file

#### Commit 4 - webpack setup

- `yarn add --dev vue-loader vue-template-compiler vue-style-loader css-loader`
- Add a `webpack.config.dev.js` file.
- Add a "build" script in package.json as a shortcut that calls webpack.
- Run `yarn build`

#### Commit 5 - update Razor Views and output webpack

- `yarn add --dev path`
- Add the output path to `webpack.config.dev.js` so webpack goes to wwwroot.
- Update `Index.cshtml` so it just contains a `<div id=app>` and `<script>` tag.
- Update the `_Layout_.cshtml` so it just contains a renderBody.
- `dotnet run` and open in a browser

#### Commit 6 - add a yarn shortcut

- Add a "dev" script to package.json that also runs `dotnet run`

## Part 2: VueJS pages and VueJS routing

#### Commit 2.1 - add vue-routing and two routes

To match the vuecli template, rename app.js to main.js and move it into the AppClient/Vue folder.

- `yarn add vue-router`
- Add a `AppClient/Vue/router.js` file, add the `vue-router` import and two routes to it.
- Update `main.js` to import the `router.js` file, and add it to the `new Vue()..` section.
- Update `AppClient/Vue/App.vue` to have a `<router-view />` in the template and some links.
- Add `Index.vue` and `Time.vue` to `pages/` as empty templates.