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
export default {
  props: {
    city: String
  },
  data () {
    return {

    }
  },
  computed: {

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
      width .62rem
      text-align center
      line-height .43rem
      font-size .2rem
      color #fff
</style>
