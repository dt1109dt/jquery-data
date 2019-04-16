// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入mintui
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

//引入mui样式表 icon图标表
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
/* eslint-disable no-new */

//引入mintui
import mintUi from 'mint-ui'
//注册mintui
Vue.use(mintUi)
//实例化vue对象
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
