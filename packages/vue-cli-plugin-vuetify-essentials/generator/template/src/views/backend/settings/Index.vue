<template>
  <base-section
    id="settings"
    fill-height
  >
    <page-jumbotron
      :icon="mdiCogs"
      heading="Settings"
      view="src/views/backend/settings/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiCogs,
  } from '@mdi/js'

  export default {
    name: 'BackendDashboard',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiCogs,
    }),
  }
</script>
