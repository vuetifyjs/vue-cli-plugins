import { createApp } from 'vue'
<%_ if (useVite) { _%>
import { loadFonts } from './plugins/webfontloader'
<%_ } _%>
import App from './App.vue'
<%_ if (router) { _%>
import router from './router'
<%_ } _%>
<%_ if (store) { _%>
import store from './store'
<%_ } _%>
import vuetify from './plugins/vuetify'

<%_ if (useVite) { _%>
loadFonts()
<%_ } _%>


createApp(App)
<%_ if (router) { _%>
  .use(router)
<%_ } _%>
<%_ if (store) { _%>
  .use(store)
<%_ } _%>
  .use(vuetify)
  .mount('#app')
