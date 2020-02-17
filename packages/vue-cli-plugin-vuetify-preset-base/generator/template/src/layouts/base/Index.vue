<template>
  <v-app>
    <base-app-bar />

    <base-view />

    <base-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'BaseLayout',

    components: {
      BaseAppBar: () => import('./AppBar'),
      BaseFooter: () => import('./Footer'),
      BaseView: () => import('./View'),
    },
  }
</script>
