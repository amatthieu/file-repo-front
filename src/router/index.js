import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Subscribe from '@/components/Subscribe'
import FileRepo from '@/components/FileRepo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/subscribe',
      name: 'Subscribe',
      component: Subscribe
    },
    {
      path: '/home/:path*',
      name: 'FileRepo',
      component: FileRepo
    }
  ],
  mode: 'history'
})
