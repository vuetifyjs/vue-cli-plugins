import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
<%_ if (router) { _%>
import router from './router'
<%_ } _%>
<%_ if (store) { _%>
import store from './store'
<%_ } _%>

const app = createApp(App)
<%_ if (router) { _%>
app.use(router)
<%_ } _%>
<%_ if (store) { _%>
app.use(store)
<%_ } _%>
app.use(vuetify)

app.mount('#app')
