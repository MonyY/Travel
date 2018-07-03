<template lang='pug'>
  .wrapper
    swiper(:options='swiperOption' v-if="showSwiper")
      swiper-slide(v-for='item in list', :key='item.id')
        img.swiper-img(:src='item.imgUrl')
      .swiper-pagination(slot="pagination")
</template>

<script>
export default {
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 2000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true
      }
    }
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  }
}
</script>

<style scoped lang='stylus'>
.wrapper >>> .swiper-pagination-bullet-active
  background-color #fff
.wrapper
  width 100%
  height 0
  overflow hidden
  padding-bottom 32%
  .swiper-img
    width 100%
</style>
