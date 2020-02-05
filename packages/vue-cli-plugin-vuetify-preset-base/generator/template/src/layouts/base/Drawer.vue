<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
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
  import { sync } from 'vuex-pathify'

  export default {
    name: 'BaseDrawer',

    computed: { drawer: sync('base/drawer') },
  }
</script>
