<template>
  <v-footer
    app
    class="justify-center"
    color="grey darken-4"
    dark
    height="48"
  >
    Copyright &copy; {{ date }}&nbsp;<strong>Vuetify LLC</strong>
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
