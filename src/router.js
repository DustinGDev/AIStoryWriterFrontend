import Vue from 'vue'
import Router from 'vue-router'
import Competitions from './components/contentComponents/Competitions';
import DashBoard from './components/contentComponents/DashBoard';
import Welcome from './components/contentComponents/Welcome';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/competitions',
      name: 'competitions',
      component: Competitions
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '*',
      redirect: '/welcome'
    }
  ]
})
