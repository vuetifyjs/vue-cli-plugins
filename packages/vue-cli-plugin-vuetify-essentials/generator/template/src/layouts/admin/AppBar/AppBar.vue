<template>
  <v-app-bar app>
    <v-btn
      icon
      @click="drawer = !drawer"
    >
      <v-icon aria-label="Toggle Drawer">
        {{ (drawer || $vuetify.breakpoint.smAndDown) ? '$menu' : '$close' }}
      </v-icon>
    </v-btn>

    <v-spacer />

    <v-btn
      :to="{ name: 'Home' }"
      exact
      icon
    >
      <v-icon>$mdiVuetify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'BackendAppBar',

    computed: {
      drawer: sync('admin/drawer'),
    },
  }
</script>
