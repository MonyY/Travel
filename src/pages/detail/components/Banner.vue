<template lang='pug'>
  div
    .banner(@click="handleGallaryClick")
      img.banner-img(:src="bannerImg")
      .banner-info
        .banner-title {{this.sightName}}
        .banner-number
          i.iconfont.icon-tupian.banner-icon
          | {{this.bannerImgs.length}}
    FadeAnimation
      CommonGallary(
        :imgs="bannerImgs"
        v-show="showGallary"
        @closeGallary="handleGallaryClose"
      )
</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary'
import FadeAnimation from '../../../common/fade/Fade'
export default {
  name: 'banner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      showGallary: false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  methods: {
    handleGallaryClick() {
      this.showGallary = true
    },
    handleGallaryClose() {
      this.showGallary = false
    }
  }
}
</script>

<style scoped lang='stylus'>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      height .3rem
      color #fff
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
      .banner-title
        flex 1
        font-size .16rem
        padding 0 .1rem
      .banner-number
        margin-top .07rem
        padding 0 .2rem
        line-height .16rem
        height .16rem
        border-radius .1rem
        background-color rgba(0,0,0,.8)
        font-size .12rem
        .banner-icon
          font-size .12rem
</style>