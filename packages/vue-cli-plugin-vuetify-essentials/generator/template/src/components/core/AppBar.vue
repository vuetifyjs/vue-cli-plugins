<template>
  <v-app-bar app>
    <v-app-bar-nav-icon
      :aria-label="$t('toggleDrawer')"
      @click="drawer = !drawer"
    />

    <v-toolbar-title v-text="$t('app')" />
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
