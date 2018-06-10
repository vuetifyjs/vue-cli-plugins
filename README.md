# vue-cli-plugin-vuetify

Vuetify Plugin for [vue-cli@3.0](https://github.com/vuejs/vue-cli)

## Install

If you haven't yet installed vue-cli 3, first follow the install instructions here: https://github.com/vuejs/vue-cli

**Tip**: If you don't want to overwrite your current vue-cli because you still need `vue init`, [then try this](https://github.com/vuejs/vue-cli/blob/dev/docs/cli.md#pulling-vue-cli2x-templates-legacy).

Generate a project using vue-cli 3.0
```
vue create my-app
```

Before installing the vuetify plugin, make sure to commit or stash your changes in case you need to revert

To install the vuetify plugin...
```
vue add vuetify
```

If you run into any issues you can hit us up on [discord/need](https://discordapp.com/channels/340160225338195969/340215499398840331).

## Using with other plugins

Here are some extra steps for setting up the old templates but using plugins from the new ecosystem.

### Nuxt

```
# preset: default (babel, eslint)

vue add nuxt-starter-template

```

Todo

- Add vuetify Nuxt starter template


### Electron

Just add [vue-cli-plugin-electron-builder](https://www.npmjs.com/package/vue-cli-plugin-electron-builder)

```
vue add electron-builder
vue add vuetify
yarn serve:electron
```

Gotcha

- If you add vuetify before electron-builder, electron-builder will overwrite Vuetify's App.vue and HelloWorld.vue

Todo

- material icons aren't properly included

### PWA

If you already made a project with the PWA option selected, then just adding like above should do it.


### Cordova

Follow the instructions detailed in this plugin https://www.npmjs.com/package/vue-cli-plugin-cordova

