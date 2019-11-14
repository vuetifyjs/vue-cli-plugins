<template>
  <v-row
    align="center"
    class="flex-column"
    justify="center"
  >
    <v-icon
      :size="$vuetify.breakpoint.smAndDown ? 128 : 368"
      v-text="icon"
    />

    <base-heading v-text="heading" />

    <kbd v-text="view" />
  </v-row>
</template>

<script>
  export default {
    name: 'PageJumbotron',

    props: {
      heading: String,
      icon: String,
      view: String,
    },
  }
</script>
