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
      :to="{ name: 'Profile' }"
      depressed
      fab
      small
    >
      <v-icon v-text="mdiAccountCircle" />
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
    mdiAccountCircle,
    mdiClose,
    mdiMenu,
  } from '@mdi/js'

  export default {
    name: 'BackendAppBar',

    data: () => ({
      mdiAccountCircle,
      mdiClose,
      mdiMenu,
    }),

    computed: {
      drawer: sync('backend/drawer'),
    },
  }
</script>
