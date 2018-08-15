// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'styles/reset.styl'
// 让低版本浏览器支持ES6
import 'babel-polyfill'
// 解决移动端1px边框
import 'styles/border.styl'
import 'styles/iconfont/iconfont.css'
import fastClick from 'fastclick'
// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

// 解决移动端点击300ms
fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})