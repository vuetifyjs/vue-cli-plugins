// Imports
import {
  make,
} from 'vuex-pathify'

const state = {
  drawer: null,
  items: [],
}

const mutations = make.mutations(state)

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
