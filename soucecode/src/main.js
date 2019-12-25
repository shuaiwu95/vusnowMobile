import Vue from 'vue'
import App from './App.vue'
import Router from '@/router/index.js'
import Store from './store/index'
import config from '@/config'
Vue.config.productionTip = false
Vue.use(config)
new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app')
