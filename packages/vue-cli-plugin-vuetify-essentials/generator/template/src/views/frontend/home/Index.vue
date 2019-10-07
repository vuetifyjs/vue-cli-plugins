<template>
  <base-section
    id="home"
    fill-height
  >
    <page-jumbotron
      :icon="mdiMonitorCellphone"
      heading="Home"
      view="src/views/frontend/home/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiMonitorCellphone,
  } from '@mdi/js'

  export default {
    name: 'FrontendHome',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiMonitorCellphone,
    }),
  }
</script>
