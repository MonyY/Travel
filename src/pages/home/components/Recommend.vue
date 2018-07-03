<template lang='pug'>
  .Recommend
    .title 热门推荐
    ul
      li.item.border-bottom-1px(v-for='item in recommendList', :key='item.id')
        img.item-img(:src='item.img')
        .item-info
          p.item-title {{item.title}}
          p.item-desc {{item.desc}}
          button.item-btn 查看详情
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          img: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
          title: '成都海昌极地海洋公园',
          desc: '16320条评论'
        },
        {
          id: '0002',
          img: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
          title: '成都海昌极地海洋公园',
          desc: '1条评论'
        }
      ]
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped lang='stylus'>
  @import '~styles/mixins.styl';
  .title
    line-height .3rem
    background #eee
    text-indent .1rem
  .item
    display flex
    height .95rem
    overflow hidden
    .item-img
      width .85rem
      height .85rem
      padding .05rem
  .item-info
    flex 1
    padding .05rem
    min-width 0
    .item-title
      line-height .27rem
      font-size .16rem
      ellipsis()
    .item-desc
      font-size .12rem
      line-height .2rem
      color #ccc
    .item-btn
      line-height .22rem
      margin-top .1rem
      background #ff9300
      padding 0 .05rem
      border-radius .03rem
      color #fff
</style>