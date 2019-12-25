import { api } from './api'
import axios from 'axios'
export default {
  install (Vue) {
    Vue.prototype.$api = api
    Vue.prototype.$ajax = axios
  }
}
