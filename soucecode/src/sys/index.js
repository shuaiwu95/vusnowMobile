/**
 * 系统级扩展方法
 */
import { LocaStorage } from './storage'
export default {
  install (Vue) {
    // 本地存储
    Vue.prototype.$storage = LocaStorage
    window.LocaStorage = window.plus ? window.plus.storage : localStorage
  }
}
