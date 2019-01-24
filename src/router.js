import Vue from 'vue'
import Router from 'vue-router'

import ListSays from './views/ListSays.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ListSays',
      component: ListSays
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('./views/404.vue')
    },
    {
      path: '/projeto',
      beforeEnter(to, from, next) {
        window.open('https://github.com/projeto-pri/vprisays', '_blank').focus()
        next('/')
      }
    },
    {
      path: '/ajuda',
      name: 'Ajuda',
      component: () => import('./views/Ajuda.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
