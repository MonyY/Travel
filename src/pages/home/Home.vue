<template lang="pug">
  .home
    HomeHeader
    HomeSwiper(:list="swiperList")
    HomeIcons(:list="iconList")
    Recommend(:list="recommendList")
    Weekend(:list="weekendList")
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/IconsLayout'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import {getHomeInfo} from '@/api/baseApi.js'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend,
    Weekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted() {
    this._getHomeInfo()
  },
  methods: {
    _getHomeInfo () {
      getHomeInfo((data) => {
        const res = data.data
        if (res.ret && res.data) {
          this.swiperList = res.data.swiperList
          this.iconList = res.data.iconList
          this.recommendList = res.data.recommendList
          this.weekendList = res.data.weekendList
        }
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="stylus">
</style>