// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.indigo.base,
      },
      dark: {},
    },
  },
})
