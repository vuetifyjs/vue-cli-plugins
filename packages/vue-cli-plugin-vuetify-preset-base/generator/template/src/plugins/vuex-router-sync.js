import router from '@/router'
import store from '@/store'
import { sync } from 'vuex-router-sync'

sync(store, router)
