<template>
  <base-section
    id="register"
    fill-height
  >
    <page-jumbotron
      :icon="mdiAccountPlus"
      heading="Register Page"
      view="src/views/auth/register/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiAccountPlus,
  } from '@mdi/js'

  export default {
    name: 'AuthRegister',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiAccountPlus,
    }),
  }
</script>
