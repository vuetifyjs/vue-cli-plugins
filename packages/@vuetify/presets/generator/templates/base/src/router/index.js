/**
 * Vuetify Vue CLI Preset
 *
 * router/index.js
 *
 * vue-router documentation: https://router.vuejs.org/
 */

// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, _, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      // Layouts allow you to define different
      // structures for different view
      // https://router.vuejs.org/guide/essentials/nested-routes.html#nested-routes
      component: () => import('@/layouts/default'),
      children: [
        {
          path: '',
          name: 'Default',
          component: () => import('@/views/home'),
        },
      ],
    },
  ],
})
