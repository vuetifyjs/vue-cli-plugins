<template>
  <v-app>
    <v-main>
      <Playground></Playground>
    </v-main>
  </v-app>
</template>

<script>
  import Playground from './Playground'

  export default {
    name: 'App',

    components: { Playground }
  }
</script>
