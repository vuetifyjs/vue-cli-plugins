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
      BackendAppBar: () => import('./AppBar'),
      BackendDrawer: () => import('./Drawer'),
      BackendView: () => import('./View'),
    },

    computed: {
      drawer: sync('admin/drawer'),
    },

    beforeDestroy () {
      this.drawer = null
    },
  }
</script>
