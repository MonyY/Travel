<template lang='pug'>
  .Weekend
    .title 热门推荐
    ul
      li.item.border-bottom-1px(v-for='item in recommendList', :key='item.id')
        .item-img-wrapper
          img.item-img(:src='item.img')
        .item-info
          p.item-title {{item.title}}
          p.item-desc {{item.desc}}
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
          img: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
          title: '成都海昌极地海洋公园',
          desc: '16320条评论'
        },
        {
          id: '0002',
          img: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
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