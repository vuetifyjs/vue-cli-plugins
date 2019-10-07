<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <template v-slot:prepend>
      <v-toolbar flat>
        <v-icon
          large
          left
          v-text="mdiVuetify"
        />

        <v-toolbar-title>
          Backend
        </v-toolbar-title>

        <v-spacer />

        <v-btn
          :to="{ name: 'Home' }"
          exact
          icon
        >
          <v-icon v-text="mdiMonitorCellphone" />
        </v-btn>
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

    <template v-slot:append>
      <v-list nav>
        <v-list-item :to="{ name: 'Settings' }">
          <v-list-item-icon>
            <v-icon v-text="mdiCogs" />
          </v-list-item-icon>

          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
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
    name: 'BackendDrawer',

    data: () => ({
      mdiCogs,
      mdiMonitorCellphone,
      mdiVuetify,
    }),

    computed: {
      ...sync('backend/*'),
    },
  }
</script>
