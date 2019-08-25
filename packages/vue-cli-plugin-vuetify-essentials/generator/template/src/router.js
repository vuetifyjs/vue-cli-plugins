import Vue from 'vue'
import Router from 'vue-router'
import vuetify from './plugins/vuetify'

Vue.use(Router)

function route (path, name) {
  return {
    path,
    name,
    component: () => import(`@/views/${name.toLowerCase()}/Index`)
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return vuetify.framework.goTo(scrollTo)
  },
  routes: [
    route('/', 'Home'),
    route('/about', 'About')
  ]
})
