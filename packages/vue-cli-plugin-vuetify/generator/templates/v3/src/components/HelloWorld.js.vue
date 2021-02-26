<template>
  <v-container class="text-center">
    <v-col cols="12">
      <v-img
        :src="require('../assets/logo.svg')"
        class="my-3"
        contain
        height="200"
      />
    </v-col>

    <v-col class="mb-4">
      <h1 class="display-2 font-weight-bold mb-3">
        Welcome to Vuetify V3-Alpha
      </h1>
    </v-col>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    
    props: {
      msg: String,
    },
  }
</script>
