<template>
  <v-app>
    <base-app-bar />

    <base-drawer />

    <base-view />

    <base-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'BaseLayout',

    components: {
      BaseAppBar: () => import('./AppBar'),
      BaseDrawer: () => import('./Drawer'),
      BaseFooter: () => import('./Footer'),
      BaseView: () => import('./View'),
    },
  }
</script>
