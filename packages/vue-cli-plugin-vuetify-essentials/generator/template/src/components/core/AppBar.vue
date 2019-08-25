<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    sync
  } from 'vuex-pathify'

  export default {
    name: 'CoreAppBar',

    computed: {
      drawer: sync('app/drawer')
    }
  }
</script>
