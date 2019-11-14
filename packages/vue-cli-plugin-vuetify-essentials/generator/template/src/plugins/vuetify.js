// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

// Icons
import {
  mdiClose,
  mdiCogs,
  mdiDotsVertical,
  mdiMenu,
  mdiMonitorCellphone,
  mdiMonitorDashboard,
  mdiVuetify,
} from '@mdi/js'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
    values: {
      mdiClose,
      mdiCogs,
      mdiDotsVertical,
      mdiMenu,
      mdiMonitorCellphone,
      mdiMonitorDashboard,
      mdiVuetify
    },
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
