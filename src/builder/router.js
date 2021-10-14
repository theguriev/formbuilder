import Vue from 'vue'
import Router from 'vue-router'
import page404 from '@/builder/views/404'
import Entries from '@/builder/views/entries'
import Entry from '@/builder/views/entry'
import Hello from '@/builder/views/hello'
import Builder from '@/builder/views/builder/index'
import Home from '@/builder/views/home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/builder/:id',
      name: 'builder',
      component: Builder
    },
    {
      path: '/entries/:id',
      name: 'entries',
      component: Entries
    },
    {
      path: '/entry/:id',
      name: 'entry',
      component: Entry
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '*',
      component: page404
    }
  ]
})

export default router
