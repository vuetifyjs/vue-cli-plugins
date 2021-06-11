<template>
  <v-btn
    class="z-btn"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-icon v-if="icon" v-text="icon" />

    {{ text }}

    <slot></slot>
  </v-btn>
</template>

<script>
  export default {
    name: 'ZBtn',

    props: {
      icon: String,
      text: String,
    },
  }
</script>

<style lang="sass">
  .z-btn
    //
</style>
