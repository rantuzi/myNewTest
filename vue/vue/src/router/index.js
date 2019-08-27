import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ssr from '@/components/Ssr'
import WebApi from '@/components/WebApi'

Vue.use(Router)

export default new Router({
  // mode: 'history', // hash 不会传给后台
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ssr',
      name: 'ssr',
      component: Ssr
    },
    {
      path: '/webApi',
      name: 'webapi',
      component: WebApi
    }
  ]
})
