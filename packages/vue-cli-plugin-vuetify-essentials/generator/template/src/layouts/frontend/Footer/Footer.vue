<template>
  <v-footer
    app
    class="justify-center"
    height="48"
  >
    <span>
      Copyright &copy; {{ date }} <strong>Vuetify, LLC</strong>
    </span>
  </v-footer>
</template>

<script>
  export default {
    name: 'FrontendFooter',

    data: () => ({
      date: (new Date()).getFullYear(),
    }),
  }
</script>
