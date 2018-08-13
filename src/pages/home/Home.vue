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
import { mapGetters } from 'vuex'

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
      preCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted() {
    this.preCity = this.city
    this._getHomeInfo()
  },
  computed: {
    ...mapGetters(['city'])
  },
  methods: {
    _getHomeInfo () {
      getHomeInfo(this.city, (data) => {
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
  },
  // keepAlive生效时的钩子函数
  activated() {
    if (this.preCity !== this.city) {
      this.preCity = this.city
      this._getHomeInfo()
    }
  }
}
</script>

<style lang="stylus">
</style>