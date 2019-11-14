<template>
  <base-section
    id="home"
    fill-height
  >
    <page-jumbotron
      heading="Home"
      icon="$mdiVuetify"
      view="src/views/home/Index.vue"
    />
  </base-section>
</template>

<script>
  export default {
    name: 'FrontendHome',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },
  }
</script>
