<template lang='pug'>
  .header
    .header-left
      .iconfont.icon-fanhui
    .header-input
      i.iconfont.icon-sousuo
      | 输入城市/景点/游玩主题
    router-link(to="/city")
      .header-right
        | {{this.city}}
        i.iconfont.icon-jiantouxia
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['city'])
  },
  methods: {

  }
}
</script>

<style scoped lang='stylus'>
  @import '~styles/varibles.styl'
  .header
    display flex
    height .43rem
    background-color $bgColor
    color #fff
    .header-left
      float left
      width .32rem
      .icon-fanhui
        height 100%
        font-size .24rem
        line-height .43rem
    .header-input
      flex 1
      height .32rem
      line-height .32rem
      margin .06rem 0 0 .01rem
      background #fff
      border-radius .1rem
      color #ccc
      .icon-sousuo
        padding 0 .1rem
    .header-right
      float right
      min-width .52rem
      padding 0.1rem
      text-align center
      line-height .2rem
      font-size .15rem
      color #fff
</style>
