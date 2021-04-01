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

<script lang="ts">
import { defineComponent } from 'vue'
<%_ if (!router) { _%>
import HelloWorld from './components/HelloWorld.vue'
<%_ } _%>

export default defineComponent({
  name: 'App',

  <%_ if (!router) { _%>
  components: {
    HelloWorld,
  },

  <%_ } _%>
  data () {
    return {
      //
    }
  },
})
</script>
