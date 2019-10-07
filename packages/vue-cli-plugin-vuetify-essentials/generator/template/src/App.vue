<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
  export default {
    name: 'App',

    metaInfo () {
      return {
        title: 'Boilerplate',
        titleTemplate: '%s — Vuetify',
        htmlAttrs: {
          lang: 'en',
          amp: true,
        },
        meta: [
          { charset: 'utf-8' },
        ],
      }
    },
  }
</script>
