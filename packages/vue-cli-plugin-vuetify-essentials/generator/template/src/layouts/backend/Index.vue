<template>
  <v-app>
    <backend-app-bar />

    <backend-drawer />

    <backend-view />
  </v-app>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'LayoutBackend',

    components: {
      BackendDrawer: () => import('./Drawer'),
      BackendAppBar: () => import('./AppBar'),
      BackendView: () => import('./View'),
    },

    computed: {
      drawer: sync('backend/drawer'),
    },

    beforeDestroy () {
      this.drawer = null
    },
  }
</script>
