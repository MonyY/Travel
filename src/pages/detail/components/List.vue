<template lang='pug'>
  .detailList
    .item(
      v-for="(item, index) in list"
      :key="index"
    )
      .item-title
        span.item-title-icon
        | {{item.title}}
      .item-children(v-if="item.children")
        DetailList(:list="item.children")
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  data () {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped lang='stylus'>
  .item-title
    line-height .4rem
    font-size .16rem
    padding 0 .1rem
    border-bottom 1px solid #eee
    .item-title-icon
      position relative
      left .03rem
      top .03rem
      display inline-block
      width .18rem
      height .18rem
      background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.225rem no-repeat
      margin-right .05rem
      background-size .2rem 1.5rem
  .item-children
    padding 0 .1rem
</style>