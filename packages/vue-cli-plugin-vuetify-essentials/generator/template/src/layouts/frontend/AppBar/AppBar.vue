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
      <v-icon v-text="mdiMonitorDashboard" />
    </v-btn>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  // Icons
  import {
    mdiDotsVertical,
    mdiMonitorDashboard,
  } from '@mdi/js'

  export default {
    name: 'FrontendAppBar',

    data: () => ({
      mdiDotsVertical,
      mdiMonitorDashboard,
    }),

    computed: {
      ...sync('frontend/*'),
    },
  }
</script>
