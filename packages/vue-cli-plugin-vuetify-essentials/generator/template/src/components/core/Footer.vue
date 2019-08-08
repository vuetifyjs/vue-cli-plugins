<template>
  <v-footer
    app
    inset
    class="justify-center"
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
