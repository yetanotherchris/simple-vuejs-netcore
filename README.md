# simple-vuejs-netcore
The simplest of VueJS + ASP.NET Core examples: pages, router, webpack, vuex.

No SpaServices.

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