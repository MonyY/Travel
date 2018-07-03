<template lang='pug'>
  .icons
    swiper(:options='swiperOption')
      swiper-slide(v-for='(page, index) in pages', :key='page.id')
        .icon(v-for='item in page', :key='item.id')
          img(:src='item.imgUrl')
          p.icon-desc {{item.desc}}
      .swiper-pagination(slot="pagination" v-if='pages.length > 1')
</template>

<script>
export default {
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang='stylus'>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl';
  .icons
    overflow hidden
    height 0
    padding-bottom 50%
    .swiper-container
      padding .1rem 0
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .22rem
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 23%
      img
        display block
        margin 0 auto
        width 50%
      .icon-desc
        padding-top: .06rem;
        text-align: center
        color $darkFontColor
        font-size: .14rem;
        ellipsis()
  .icons >>> .swiper-pagination-bullet-active
    background-color $bgColor
</style>