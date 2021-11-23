// Styles
import '@mdi/font/css/materialdesignicons.css'
<%_ if (useVite) { _%>
import 'vuetify/styles'
<%_ } else {_%>
import '../styles/main.scss'
<%_ } _%>

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
