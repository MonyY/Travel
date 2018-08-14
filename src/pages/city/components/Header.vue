<template lang='pug'>
  .header
    | 城市选择
    router-link(to="/")
      .iconfont.icon-fanhui
</template>

<script>
export default {
  name: 'CityHeader',
  components: {

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
    position relative
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    font-size .2rem
    overflow hidden
    background-color $bgColor
    .icon-fanhui
      position absolute
      top 0
      left 0
      width .32rem
      text-align center
      font-size .2rem
      color #fff
</style>