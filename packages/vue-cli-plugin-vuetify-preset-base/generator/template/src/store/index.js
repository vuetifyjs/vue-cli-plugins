// Imports
import * as modules from './modules'
import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [pathify.plugin],
  modules,
})
