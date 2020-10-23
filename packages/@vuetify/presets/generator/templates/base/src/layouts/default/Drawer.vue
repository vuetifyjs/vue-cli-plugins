<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <!-- -->
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { sync } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawer',
    computed: { drawer: sync('app/drawer') },
  }
</script>
