import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Battle from '@/components/Battle'
import Popular from '@/components/Popular'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/battle',
      name: 'Battle',
      component: Battle
    },
    {
      path: '/popular',
      name: 'Popular',
      component: Popular
    }
  ]
})
