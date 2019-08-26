// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import i18n from '@/i18n'
import WebFontLoader from 'webfontloader'

Vue.use(Vuetify)

// async load fonts
WebFontLoader.load({
  google: {
    families: [
      'Roboto:100,300,400,500,700,900'
    ]
  }
})

export default new Vuetify({
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
