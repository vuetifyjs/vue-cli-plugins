<template>
  <v-app>
    <frontend-app-bar />

    <frontend-drawer />

    <frontend-view />

    <frontend-footer />
  </v-app>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'LayoutFrontend',

    components: {
      FrontendAppBar: () => import('./AppBar'),
      FrontendDrawer: () => import('./Drawer'),
      FrontendFooter: () => import('./Footer'),
      FrontendView: () => import('./View'),
    },

    computed: {
      drawer: sync('frontend/drawer'),
    },

    beforeDestroy () {
      this.drawer = null
    },
  }
</script>
