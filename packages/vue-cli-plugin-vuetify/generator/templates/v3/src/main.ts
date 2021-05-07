import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
<%_ if (router) { _%>
import router from './router'
<%_ } _%>
<%_ if (store) { _%>
import store from './store'
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
