// Imports
import {
  make,
} from 'vuex-pathify'

// Icons
import {
  mdiMonitorDashboard,
} from '@mdi/js'

const state = {
  drawer: false,
  items: [
    {
      icon: mdiMonitorDashboard,
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
