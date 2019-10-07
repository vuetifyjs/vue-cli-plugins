<template>
  <v-row
    align="center"
    class="flex-column"
    justify="center"
  >
    <v-icon
      size="128"
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
      heading: {
        type: String,
        default: undefined,
      },
      icon: {
        type: String,
        default: undefined,
      },
      view: {
        type: String,
        default: undefined,
      },
    },
  }
</script>
