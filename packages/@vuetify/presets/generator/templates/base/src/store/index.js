// Vue
import Vue from 'vue'
import Vuex from 'vuex'

// Utilities
import pathify from '@/plugins/vuex-pathify'

// Modules
import * as modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [pathify.plugin]
})

export const ROOT_DISPATCH = Object.freeze({ root: true })
