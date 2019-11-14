<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <template v-slot:prepend>
      <v-toolbar flat>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-toolbar>
    </template>

    <v-list nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        exact
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.text" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'BackendDrawer',

    computed: {
      ...sync('admin/*'),
    },
  }
</script>
