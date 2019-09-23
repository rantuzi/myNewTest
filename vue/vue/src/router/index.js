import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ssr from '@/components/Ssr'
import WebApi from '@/components/WebApi'
import Echarts from '@/components/Echarts'
import Change from '@/components/Change'
import Chat from '@/components/Chat'
import nimChat from '@/components/nimChat'
import hehe from '@/components/hehe'

import ChatInit from '@/page/Chat/ChatInit'
import Register from '@/page/Chat/Register.vue'
import Login from '@/page/Chat/Login.vue'
import Msg from '@/page/Chat/Msg.vue'

import Canvas from '@/page/Canvas/canvas.vue'

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
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: Echarts
    },
    {
      path: '/chatInit',
      name: 'chatInit',
      component: ChatInit
    },
    {
      path: '/login',
      name:'login',
      component: Login
    },
    {
      path: '/msg',
      name:'msg',
      component: Msg,
      children: [
        {
          path: '/msg/register',
          name:'register',
          component: Register
        },
      ]
    },
    {
      path: '/change',
      name: 'change',
      component: Change
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/nimChat',
      name: 'nimChat',
      component: nimChat
    },
    {
      path: '/hehe',
      name: 'hehe',
      component: hehe
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: Canvas
    }
  ]
})
