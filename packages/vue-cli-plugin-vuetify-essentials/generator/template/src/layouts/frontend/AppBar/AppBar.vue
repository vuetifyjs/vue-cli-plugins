<template>
  <v-app-bar
    app
    dark
    elevate-on-scroll
  >
    <v-toolbar-title>Application</v-toolbar-title>

    <v-spacer />

    <v-btn
      :to="{ name: 'Dashboard' }"
      icon
    >
      <v-icon>$mdiMonitorDashboard</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'FrontendAppBar',

    computed: {
      ...sync('frontend/*'),
    },
  }
</script>
