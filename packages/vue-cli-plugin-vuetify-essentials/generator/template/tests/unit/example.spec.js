// Imports
import {
  createLocalVue,
  shallowMount,
} from '@vue/test-utils'
import App from '@/App.vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import * as modules from '@/modules'

const localVue = createLocalVue()
localVue.use(Router)
localVue.use(Vuex)

describe('Example', () => {
  let router
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      plugins: [pathify.plugin],
      modules,
    })

    router = new Router()
  })

  it('should work', () => {
    const wrapper = shallowMount(App, {
      localVue,
      router,
      store,
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
