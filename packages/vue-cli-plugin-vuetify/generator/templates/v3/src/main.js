import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
<%_ if (router) { _%>
import router from './router'
<%_ } _%>

const app = createApp(App)
<%_ if (router) { _%>
app.use(router)
<%_ } _%>
app.use(vuetify)

app.mount('#app')
