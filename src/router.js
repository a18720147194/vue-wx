import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/classic' },
    {
      path: '/classic',
      name: 'home',
      component: Home
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('./views/books.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('./views/my.vue')
    }
  ]
})
