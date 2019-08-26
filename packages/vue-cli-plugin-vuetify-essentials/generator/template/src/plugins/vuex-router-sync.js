import { sync } from 'vuex-router-sync'
import router from '@/router'
import store from '@/store'

sync(store, router)
