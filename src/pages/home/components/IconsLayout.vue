<template lang='pug'>
  .icons
    swiper(:options='swiperOption')
      swiper-slide(v-for='(page, index) in pages', :key='index')
        .icon(v-for='item in page', :key='item.id')
          img(:src='item.img')
          p.icon-desc {{item.desc}}
      .swiper-pagination(slot="pagination")
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true
      },
      iconData: [
        {
          id: '0001',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          desc: '水上乐园'
        },
        {
          id: '0003',
          img: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '必游榜单'
        },
        {
          id: '0004',
          img: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
          desc: '成都定制游'
        },
        {
          id: '0005',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          desc: '亲子游'
        },
        {
          id: '0006',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '蓉城七景'
        },
        {
          id: '0007',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
          desc: '成都周边'
        },
        {
          id: '0008',
          img: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
          desc: 'Q+精选'
        },
        {
          id: '0009',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
          desc: '演出'
        },
        {
          id: '0010',
          img: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          desc: '全部玩乐'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconData.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods: {

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
      padding-bottom 25%
      img
        display block
        margin 0 auto
        width 50%
      .icon-desc
        text-align: center
        color $darkFontColor
        ellipsis()
  .icons >>> .swiper-pagination-bullet-active
    background-color $bgColor
</style>