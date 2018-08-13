<template lang='pug'>
  .list(ref="wrapper")
    div
      .area
        .title.border-topBottom 当前城市
        .button-list
          .button-wrapper
            .button 成都
          .button-wrapper
            .button 成都
          .button-wrapper
            .button 成都
          .button-wrapper
            .button 成都
          .button-wrapper
            .button 成都
      .area
        .title.border-topBottom 热门城市
        .button-list
          .button-wrapper
            .button 成都
          .button-wrapper
            .button 成都
          .button-wrapper
            .button 成都
          .button-wrapper
            .button 成都
          .button-wrapper
            .button 成都
      .area
        .title.border-topBottom A
        .item-list
          .item 阿拉尔
          .item 阿拉尔
          .item 阿拉尔
          .item 阿拉尔
          .item 阿拉尔
          .item 阿拉尔
          .item 阿拉尔
      .area
        .title.border-topBottom A
        .item-list
          .item 阿拉尔
          .item 阿拉尔
          .item 阿拉尔
          .item 阿拉尔
          .item 阿拉尔
          .item 阿拉尔
          .item 阿拉尔
      .area
      .title.border-topBottom A
      .item-list
        .item 阿拉尔
        .item 阿拉尔
        .item 阿拉尔
        .item 阿拉尔
        .item 阿拉尔
        .item 阿拉尔
        .item 阿拉尔
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  components: {

  },
  data () {
    return {

    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  methods: {
  }
}
</script>

<style scoped lang='stylus'>
  .border-topBottom
    border-bottom 1px solid #ccc
  .list
    position absolute
    top .79rem
    left 0
    right 0
    bottom 0
    overflow hidden
  .title
    line-height .27rem
    background #eee
    padding-left .1rem
    color #666
    font-size .13rem
  .button-list
    padding .05rem .3rem .05rem .05rem
    overflow hidden
    .button-wrapper
      float left
      width 33.33%
      .button
        margin .05rem
        padding .05rem 0
        text-align center
        border .01rem solid #ccc
        border-radius .03rem
  .item-list
    .item
      line-height .38rem
      color #666
      padding-left .1rem
      border-bottom 1px solid #ccc
</style>