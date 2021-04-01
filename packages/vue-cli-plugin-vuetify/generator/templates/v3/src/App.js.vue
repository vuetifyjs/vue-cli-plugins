<template>
  <v-app>
    <v-main>
      <%_ if (router) { _%>
      <router-view/>
      <%_ } else { _%>
      <HelloWorld/>
      <%_ } _%>
    </v-main>
  </v-app>
</template>

<script>
<%_ if (!router) { _%>
import HelloWorld from './components/HelloWorld.vue'
<%_ } _%>

export default {
  name: 'App',

  <%_ if (!router) { _%>
  components: {
    HelloWorld,
  },

  <%_ } _%>
  data: () => ({
    //
  }),
}
</script>
