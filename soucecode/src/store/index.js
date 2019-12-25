import Vue from 'vue'
import Vuex from 'vuex'
import views from './modules/views.js'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    views
  }
})
