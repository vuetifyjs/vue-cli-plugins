<template>
  <base-section
    id="dashboard"
    fill-height
  >
    <page-jumbotron
      :icon="mdiMonitorDashboard"
      heading="Dashboard"
      view="src/views/backend/dashboard/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiMonitorDashboard,
  } from '@mdi/js'

  export default {
    name: 'BackendDashboard',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiMonitorDashboard,
    }),
  }
</script>
