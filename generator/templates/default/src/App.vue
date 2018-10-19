<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <%_ if (options.router) { _%>
      <router-view/>
      <%_ } else { _%>
      <HelloWorld/>
      <%_ } _%>
    </v-content>
  </v-app>
</template>

<script>
<%_ if (!options.router) { _%>
import HelloWorld from './components/HelloWorld'
<%_ } _%>

export default {
  name: 'App',
  <%_ if (!options.router) { _%>
  components: {
    HelloWorld
  },
  <%_ } _%>
  data () {
    return {
      //
    }
  }
}
</script>
