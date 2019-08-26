import {
  createLocalVue,
  shallowMount,
} from '@vue/test-utils'
import App from '@/App.vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import pathify from 'vuex-pathify'
import * as modules from '@/modules'
import en from '@/locales/en.json'

const localVue = createLocalVue()
localVue.use(VueI18n)
localVue.use(Router)
localVue.use(Vuex)

describe('Example', () => {
  let i18n
  let router
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      plugins: [pathify.plugin],
      modules,
    })

    router = new Router()

    i18n = new VueI18n({
      locale: 'en',
      fallbackLocale: 'en',
      messages: { en },
    })
  })

  it('should work', () => {
    const wrapper = shallowMount(App, {
      localVue,
      i18n,
      router,
      store,
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
