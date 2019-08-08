<template>
  <v-footer
    app
    inset
  >
    <div class="text-center">
      Copyright &copy; {{ date }}&nbsp;<strong>Vuetify</strong>
    </div>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      date: (new Date()).getFullYear()
    })
  }
</script>
