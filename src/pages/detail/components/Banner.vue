<template lang='pug'>
  div
    .banner(@click="handleGallaryClick")
      img.banner-img(src="//img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_600x330_0046c90a.png")
      .banner-info
        .banner-title 成都欢乐谷(AAAA景区)
        .banner-number
          i.iconfont.icon-tupian.banner-icon
          | 39
    CommonGallary(
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    )
</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary'
export default {
  name: 'banner',
  components: {
    CommonGallary
  },
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1712/5d/5d4f18e64813d0f6a3.img.jpg_r_800x800_41a80401.jpg',
        'http://img1.qunarzz.com/sight/p0/1712/ed/edd5cde30ebe91d0a3.img.jpg_r_800x800_2595694d.jpg'

      ],
      showGallary: false
    }
  },
  created() {

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