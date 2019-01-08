import Vue from 'vue'
import Router from 'vue-router'
import ListSays from './views/ListSays.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListSays',
      component: ListSays
    }
  ]
})
