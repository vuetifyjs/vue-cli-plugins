<template>
  <v-app-bar
    app
    elevate-on-scroll
  >
    <v-icon
      large
      left
      v-text="mdiVuetify"
    />

    <v-toolbar-title>Frontend</v-toolbar-title>

    <v-spacer />

    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        active-class="grey darken-4 white--text"
        class="mx-2"
        exact
        text
      >
        <v-icon
          left
          v-text="item.icon"
        />

        {{ item.text }}
      </v-btn>
    </template>

    <v-app-bar-nav-icon
      v-else
      icon
      @click="drawer = !drawer"
    />
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  // Icons
  import {
    mdiVuetify,
  } from '@mdi/js'

  export default {
    name: 'FrontendAppBar',

    data: () => ({
      mdiVuetify,
    }),

    computed: {
      ...sync('frontend/*'),
    },
  }
</script>
