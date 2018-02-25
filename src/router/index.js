import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Subscribe from '@/components/Subscribe'
import MainPage from '@/components/MainPage'

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
      path: '/main',
      name: 'MainPage',
      component: MainPage
    }
  ],
  mode: 'history'
})
