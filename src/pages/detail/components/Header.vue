<template lang='pug'>
  .detailHeader
    router-link.header-abs(tag="div" to="/" v-show="showAbs")
      .iconfont.icon-fanhui.header-abs-back
    .header-fixed(
      v-show="!showAbs"
      :style="opacityStyle"
    )
      router-link(to="/")
        .iconfont.icon-fanhui.header-fixed-back
      |景点详情

</template>

<script>
export default {
  name: 'DetailHeader',
  components: {

  },
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    // 解绑全局事件
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style scoped lang='stylus'>
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .1rem
    top .1rem
    width .4rem
    height .4rem
    text-align center
    line-height .4rem
    border-radius .2rem
    background rgba(0,0,0,.6)
    .header-abs-back
      color #fff
      font-size .2rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    font-size .16rem
    background-color $bgColor
    z-index 9
    .header-fixed-back
      position absolute
      top 0
      left 0
      width .32rem
      text-align center
      font-size .16rem
      color #fff
</style>