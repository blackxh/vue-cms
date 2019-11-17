//入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

//导入、安装 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
//全局设置 post 时表单数据格式组织形式  application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true

//按需导入Mint-UI中的组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)

//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import 'mint-ui/lib/style.css'

//导入时间格式化的插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

//安装图片预览插件
import VuePreview from 'vue-preview'

// defalut install  默认安装
// Vue.use(VuePreview)

// with parameters install 带参数安装
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
