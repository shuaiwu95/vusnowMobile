import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
import Login from '@/views/Login'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      meta: {
        isCache: false
      },
      children: [

      ]
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        isCache: false
      }
    }
  ]
})
