<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <v-list nav>
      <v-list-item to="/">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-list-item to="/about">
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    sync
  } from 'vuex-pathify'

  export default {
    name: 'CoreDrawer',

    computed: {
      drawer: sync('app/drawer')
    }
  }
</script>
