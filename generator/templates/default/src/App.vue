<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
      <%_ if (options.iconFont === 'md') { _%>
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      <%_ } else if (options.iconFont === 'mdi') { _%>
        <v-icon v-html="miniVariant ? 'mdi-chevron-right' : 'mdi-chevron-left'"></v-icon>
      <%_ } else if (options.iconFont === 'fa') { _%>
        <v-icon v-html="miniVariant ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></v-icon>
      <%_ } else if (options.iconFont === 'fa4') { _%>
        <v-icon v-html="miniVariant ? 'fa-chevron-right' : 'fa-chevron-left'"></v-icon>
      <%_ } _%>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
      <%_ if (options.iconFont === 'md') { _%>
        <v-icon>web</v-icon>
      <%_ } else if (options.iconFont === 'mdi') { _%>
        <v-icon>mdi-web</v-icon>
      <%_ } else if (options.iconFont === 'fa') { _%>
        <v-icon>fas fa-globe</v-icon>
      <%_ } else if (options.iconFont === 'fa4') { _%>
        <v-icon>fa-globe</v-icon>
      <%_ } _%>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
      <%_ if (options.iconFont === 'md') { _%>
        <v-icon>web</v-icon>
      <%_ } else if (options.iconFont === 'mdi') { _%>
        <v-icon>mdi-minus</v-icon>
      <%_ } else if (options.iconFont === 'fa') { _%>
        <v-icon>fas fa-minus</v-icon>
      <%_ } else if (options.iconFont === 'fa4') { _%>
        <v-icon>fa-minus</v-icon>
      <%_ } _%>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
      <%_ if (options.iconFont === 'md') { _%>
        <v-icon>menu</v-icon>
      <%_ } else if (options.iconFont === 'mdi') { _%>
        <v-icon>mdi-menu</v-icon>
      <%_ } else if (options.iconFont === 'fa') { _%>
        <v-icon>fas fa-bars</v-icon>
      <%_ } else if (options.iconFont === 'fa4') { _%>
        <v-icon>fa-bars</v-icon>
      <%_ } _%>
      </v-btn>
    </v-toolbar>
    <v-content>
      <%_ if (options.router) { _%>
      <router-view/>
      <%_ } else { _%>
      <HelloWorld/>
      <%_ } _%>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <%_ if (options.iconFont === 'md') { _%>
            <v-icon>compare_arrows</v-icon>
            <%_ } else if (options.iconFont === 'mdi') { _%>
            <v-icon>mdi-arrows-left-right-bold-outline</v-icon>
            <%_ } else if (options.iconFont === 'fa') { _%>
            <v-icon>fas fa-exchange-alt</v-icon>
            <%_ } else if (options.iconFont === 'fa4') { _%>
            <v-icon>fa-exchange</v-icon>
            <%_ } _%>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
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
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
<%_ if (options.iconFont === 'md') { _%>
        icon: 'bubble_chart',
<%_ } else if (options.iconFont === 'mdi') { _%>
        icon: 'mdi-chart-bubble',
<%_ } else if (options.iconFont === 'fa') { _%>
        icon: 'fas fa-shapes',
<%_ } else if (options.iconFont === 'fa4') { _%>
        icon: 'fa-bullseye',
<%_ } _%>
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
