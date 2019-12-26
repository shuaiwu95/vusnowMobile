import Vue from 'vue'
import App from './App.vue'
import Router from '@/router/index.js'
import Store from './store/index'
import config from '@/config'
import sys from '@/sys'
import tool from '@/plusTools'
Vue.config.productionTip = false
Vue.use(config)
Vue.use(sys)
Vue.use(tool)
new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app')
