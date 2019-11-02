<template>
  <base-section
    id="home"
    fill-height
  >
    <page-jumbotron
      :icon="mdiVuetify"
      heading="Home"
      view="src/views/home/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiVuetify,
  } from '@mdi/js'

  export default {
    name: 'FrontendHome',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiVuetify,
    }),
  }
</script>
