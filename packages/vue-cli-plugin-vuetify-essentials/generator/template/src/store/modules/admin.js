// Utilities
import {
  make,
} from 'vuex-pathify'

const state = {
  drawer: null,
  items: [
    {
      icon: '$mdiMonitorDashboard',
      text: 'Dashboard',
      to: { name: 'Dashboard' },
    },
  ],
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
