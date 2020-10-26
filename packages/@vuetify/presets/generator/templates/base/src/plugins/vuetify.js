/**
 * plugins/vuetify.js
 *
 * Vuetify documentation: https://vuetifyjs.com/
 */

 // Imports
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  // https://vuetifyjs.com/en/features/theme/#theme-generator
  theme: {
    themes: {
      light: {
        primary: colors.indigo.base,
      },
    },
  },
})
