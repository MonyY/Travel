<template lang='pug'>
  .Weekend
    .title 热门推荐
    ul
      li.item.border-bottom-1px(v-for='item in list', :key='item.id')
        .item-img-wrapper
          img.item-img(:src='item.imgUrl')
        .item-info
          p.item-title {{item.title}}
          p.item-desc {{item.desc}}
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>

<style scoped lang='stylus'>
  @import '~styles/mixins.styl';
  .title
    line-height .3rem
    background #eee
    text-indent .1rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 38%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .27rem
      font-size .16rem
      ellipsis()
    .item-desc
      font-size .12rem
      line-height .2rem
      color #ccc
</style>