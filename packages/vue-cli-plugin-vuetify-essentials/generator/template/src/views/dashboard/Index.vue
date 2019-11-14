<template>
  <base-section
    id="dashboard"
    fill-height
  >
    <page-jumbotron
      heading="Dashboard"
      icon="$mdiMonitorDashboard"
      view="src/views/dashboard/Index.vue"
    />
  </base-section>
</template>

<script>
  export default {
    name: 'Dashboard',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },
  }
</script>
