import Vue from 'vue'
import Router from 'vue-router'
import { beforeEachFn } from './routerBeforeFn'
import Layout from '@/views/Layout'
import Login from '@/views/Login'
Vue.use(Router)
const routerInstance = new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      meta: {
        isCache: false,
        requireAuth: true
      },
      children: [

      ]
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        isCache: false,
        requireAuth: false
      }
    }
  ]
})
// 路由注入拦截器
routerInstance.beforeEach(beforeEachFn)
export default routerInstance
