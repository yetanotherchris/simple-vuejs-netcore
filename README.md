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
