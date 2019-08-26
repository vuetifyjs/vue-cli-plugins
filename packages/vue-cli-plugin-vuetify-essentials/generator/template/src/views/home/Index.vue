<template>
  <v-container
    id="home"
    class="fill-height"
    tag="section"
  >
    <v-row
      align="center"
      class="fill-height"
    >
      <v-img
        :src="require('@/assets/vuetify.svg')"
        alt="Vuetify logo"
        contain
        height="400"
      />
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    metaInfo: {
      title: 'Home',
      meta: [
        { name: 'description', content: 'The Home Page' },
        { name: 'keywords', content: 'home' }
      ]
    }
  }
</script>
