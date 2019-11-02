<template>
  <v-app-bar app>
    <v-btn
      icon
      @click="drawer = !drawer"
    >
      <v-icon
        aria-label="Toggle Drawer"
        v-text="(drawer || $vuetify.breakpoint.smAndDown) ? mdiMenu : mdiClose"
      />
    </v-btn>

    <v-spacer />

    <v-btn
      :to="{ name: 'Home' }"
      exact
      icon
    >
      <v-icon v-text="mdiVuetify" />
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
    mdiClose,
    mdiMenu,
    mdiVuetify,
  } from '@mdi/js'

  export default {
    name: 'BackendAppBar',

    data: () => ({
      mdiClose,
      mdiMenu,
      mdiVuetify,
    }),

    computed: {
      drawer: sync('admin/drawer'),
    },
  }
</script>
