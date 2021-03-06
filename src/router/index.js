import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopcarContainer from '../components/tabbar/ShopcarContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import NewsList from '../components/news/NewsList'
import NewsInfo from '../components/news/NewsInfo'
import PhotoList from '../components/photos/PhotoList'
import PhotoInfo from '../components/photos/PhotoInfo'
import GoodsList from '../components/goods/GoodsList'
import GoodsInfo from '../components/goods/GoodsInfo'
import GoodsDesc from '../components/goods/GoodsDesc'
import GoodsComment from '../components/goods/GoodsComment'




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
  },
  {
    path: '/home/newslist',
    component: NewsList
  },
  {
    path: '/home/newsinfo/:id',
    component: NewsInfo
  },
  {
    path: '/home/photolist',
    component: PhotoList
  },
  {
    path: '/home/photoinfo:id',
    component: PhotoInfo
  },
  {
    path: '/home/goodslist',
    component: GoodsList
  },
  {
    path: '/home/goodsinfo/:id',
    component: GoodsInfo
  },
  {
    path: '/home/goodsdesc/:id',
    component: GoodsDesc,
    name: 'goodsdesc'
  },
  {
    path: '/home/goodscomment/:id',
    component: GoodsComment,
    name: 'goodscomment'
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'mui-active'
})

export default router
