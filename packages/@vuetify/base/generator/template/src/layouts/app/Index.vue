<template>
  <v-app>
    <app-bar />

    <app-view />
  </v-app>
</template>

<script>
  export default {
    name: 'AppView',

    components: {
      AppBar: () => import('./AppBar'),
      AppView: () => import('./View'),
    },
  }
</script>
