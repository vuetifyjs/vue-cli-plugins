import Vue from 'vue'
import axios from 'axios'

const $http = axios.create()

Vue.prototype.$http = $http

export default $http
