<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer" />

    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script>
  // Utilities
  import { sync } from 'vuex-pathify'

  export default {
    name: 'BaseAppBar',

    computed: { drawer: sync('base/drawer') },
  }
</script>
