// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import i18n from '@/i18n'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.indigo.base
      },
      dark: {}
    }
  }
})
