<template>
  <v-footer
    app
    class="justify-center"
  >
    <span>
      Copyright &copy; {{ date }} <strong>Vuetify, LLC</strong>
    </span>
  </v-footer>
</template>

<script>
  export default {
    name: 'BaseFooter',

    data: () => ({ date: (new Date()).getFullYear() }),
  }
</script>
