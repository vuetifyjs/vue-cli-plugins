<template>
  <v-container
    fluid
    tag="section"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-container>
</template>

<script>
  export default {
    name: 'BaseSection',
  }
</script>
