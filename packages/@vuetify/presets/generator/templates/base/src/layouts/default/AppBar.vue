<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer" />

    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script>
  // Utilities
  import { sync  } from 'vuex-pathify'

  export default {
    name: 'DefaultAppBar',
    computed: { drawer: sync('app/drawer') },
  }
</script>
