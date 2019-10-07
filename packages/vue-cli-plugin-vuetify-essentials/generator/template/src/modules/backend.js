// Utilities
import {
  make,
} from 'vuex-pathify'

// Icons
import {
  mdiAccountCircle,
  mdiMonitorDashboard,
} from '@mdi/js'

const state = {
  drawer: null,
  items: [
    {
      icon: mdiMonitorDashboard,
      text: 'Dashboard',
      to: {
        name: 'Dashboard',
      },
    },
    {
      icon: mdiAccountCircle,
      text: 'Profile',
      to: {
        name: 'Profile',
      },
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
