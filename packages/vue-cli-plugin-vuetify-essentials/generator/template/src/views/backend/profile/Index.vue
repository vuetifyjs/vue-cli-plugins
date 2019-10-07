<template>
  <base-section
    id="profile"
    fill-height
  >
    <page-jumbotron
      :icon="mdiAccountCircle"
      heading="Profile"
      view="src/views/backend/profile/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiAccountCircle,
  } from '@mdi/js'

  export default {
    name: 'BackendDashboard',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiAccountCircle,
    }),
  }
</script>
