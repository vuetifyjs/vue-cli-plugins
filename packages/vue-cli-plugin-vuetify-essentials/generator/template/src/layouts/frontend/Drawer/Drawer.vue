<template>
  <v-navigation-drawer
    v-model="drawer"
    :disable-route-watcher="$vuetify.breakpoint.smAndUp"
    app
    disable-resize-watcher
    width="200"
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
  import {
    sync,
  } from 'vuex-pathify'

  // Icons
  import {
    mdiCogs,
    mdiMonitorCellphone,
    mdiVuetify,
  } from '@mdi/js'

  export default {
    name: 'FrontendDrawer',

    data: () => ({
      mdiCogs,
      mdiMonitorCellphone,
      mdiVuetify,
    }),

    computed: {
      ...sync('frontend/*'),
    },
  }
</script>
