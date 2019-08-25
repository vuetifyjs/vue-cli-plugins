import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/Index')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/about/Index')
    }
  ]
})
