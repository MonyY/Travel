<template lang="pug">
  .home
    HomeHeader
    HomeSwiper
    HomeIcons
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/IconsLayout'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
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