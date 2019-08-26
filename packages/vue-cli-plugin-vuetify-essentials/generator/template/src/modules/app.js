import { make } from 'vuex-pathify'
import { mdiVuetify, mdiInformation } from '@mdi/js'

const state = {
  drawer: null,
  items: [
    {
      icon: mdiVuetify,
      text: 'home',
      to: {
        name: 'Home'
      }
    },
    {
      icon: mdiInformation,
      text: 'about',
      to: {
        name: 'About'
      }
    }
  ]
}

const mutations = make.mutations(state)

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
