<template>
  <v-footer
    app
    class="justify-center"
    inset
  >
    Copyright &copy; {{ date }}&nbsp;<strong>Vuetify</strong>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      date: (new Date()).getFullYear()
    })
  }
</script>
