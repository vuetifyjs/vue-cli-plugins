import { make } from 'vuex-pathify'

// Icons
import {
  mdiMonitorCellphone,
  mdiMonitorDashboard,
  mdiLogin,
  mdiAccountPlus,
} from '@mdi/js'

const state = {
  drawer: false,
  items: [
    {
      icon: mdiMonitorCellphone,
      text: 'Home',
      to: {
        name: 'Home',
      },
    },
    {
      icon: mdiLogin,
      text: 'Login',
      to: {
        name: 'Login',
      },
    },
    {
      icon: mdiAccountPlus,
      text: 'Register',
      to: {
        name: 'Register',
      },
    },
    {
      icon: mdiMonitorDashboard,
      text: 'Dashboard',
      to: {
        name: 'Dashboard',
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
