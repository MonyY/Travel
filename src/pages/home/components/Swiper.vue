<template lang='pug'>
  .wrapper
    swiper(:options='swiperOption')
      swiper-slide(v-for='item in swiperList', :key='item.id')
        img.swiper-img(:src='item.imgUrl')
      .swiper-pagination(slot="pagination")
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      swiperOption: {
        autoplay: 2000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/f5/ea83238744f31102.jpg_750x200_73b8477c.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/97/f282eaa627305102.jpg_750x200_bfa4f1aa.jpg'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/e5/fc2bfc8bfcccd402.jpg_750x200_1218ab5f.jpg'
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
.wrapper >>> .swiper-pagination-bullet-active
  background-color #fff
.wrapper
  width 100%
  height 0
  overflow hidden
  padding-bottom 30%
  .swiper-img
    width 100%
</style>
