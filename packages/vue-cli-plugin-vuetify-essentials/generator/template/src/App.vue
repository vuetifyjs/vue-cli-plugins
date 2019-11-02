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
        title: 'Vuetify',
        titleTemplate: '%s — Vuetify Essentials',
        htmlAttrs: { lang: 'en' },
        meta: [{ charset: 'utf-8' }],
      }
    },
  }
</script>
