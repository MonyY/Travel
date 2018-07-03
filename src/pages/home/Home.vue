<template lang="pug">
  .home
    HomeHeader
    HomeSwiper
    HomeIcons
    Recommend
    Weekend
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/IconsLayout'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
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

    }
  },
  methods: {

  }
}
</script>

<style lang="stylus">
</style>