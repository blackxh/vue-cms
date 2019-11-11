//入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

//导入、安装 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//按需导入Mint-UI中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import 'mint-ui/lib/style.css'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
