import Vue from 'vue'
import Router from 'vue-router'
import i18n from '@/i18n'
import vuetify from './plugins/vuetify'

Vue.use(Router)

function route (path, name) {
  return {
    path,
    name,
    component: () => import(`@/views/${name.toLowerCase()}/Index`)
  }
}

const router = new Router({
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
    {
      path: '/:lang',
      component: () => import(
        /* webpackChunkName: "root" */
        '@/views/Root.vue'
      ),
      children: [
        route('', 'Home'),
        route('about', 'About')
      ]
    },
    {
      path: '*',
      redirect: '/en'
    }
  ]
})

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.VUE_APP_GOOGLE_ANALYTICS) {
  Vue.use(require('vue-analytics').default, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development'
    }
  })
}

router.beforeEach((to, from, next) => {
  i18n.locale = to.params.lang || 'en'
  next()
})

export default router
