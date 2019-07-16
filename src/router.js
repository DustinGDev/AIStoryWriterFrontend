import Vue from 'vue'
import Router from 'vue-router'
import Competitions from './components/contentComponents/Competitions';
import DashBoard from './components/contentComponents/DashBoard';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/competitions',
      name: 'competitions',
      component: Competitions
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    }
  ]
})
