// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.styl'
// 解决移动端1px边框
import 'styles/border.styl'
import 'styles/iconfont/iconfont.css'
import fastClick from 'fastclick'

// 解决移动端点击300ms
fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})