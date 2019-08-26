<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    metaInfo () {
      return {
        title: 'Material Design Framework',
        titleTemplate: '%s — Vuetify',
        htmlAttrs: {
          lang: this.$i18n.locale,
          amp: true
        },
        meta: [
          { charset: 'utf-8' }
        ]
      }
    },

    components: {
      CoreDrawer: () => import('@/components/core/Drawer'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreAppBar: () => import('@/components/core/AppBar'),
      CoreView: () => import('@/components/core/View')
    }
  }
</script>
