<template>
  <base-section
    id="dashboard"
    fill-height
  >
    <page-jumbotron
      :icon="mdiMonitorDashboard"
      heading="Dashboard"
      view="src/views/dashboard/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiMonitorDashboard,
  } from '@mdi/js'

  export default {
    name: 'Dashboard',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiMonitorDashboard,
    }),
  }
</script>
