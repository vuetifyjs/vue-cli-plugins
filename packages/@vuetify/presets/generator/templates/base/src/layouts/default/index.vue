<template>
  <v-app>
    <default-app-bar />

    <default-view />
  </v-app>
</template>

<script>
  export default {
    name: 'DefaultLayout',

    components: {
      DefaultAppBar: () => import('./AppBar'),
      DefaultView: () => import('./View'),
    },
  }
</script>
