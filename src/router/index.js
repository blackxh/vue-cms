import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopcarContainer from '../components/tabbar/ShopcarContainer'
import SearchContainer from '../components/tabbar/SearchContainer'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomeContainer
  },
  {
    path: '/member',
    component: MemberContainer
  },
  {
    path: '/shopcar',
    component: ShopcarContainer
  },
  {
    path: '/search',
    component: SearchContainer
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'mui-active'
})

export default router
