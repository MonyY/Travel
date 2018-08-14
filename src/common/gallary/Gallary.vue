<template lang='pug'>
  .container(@click="handlGallaryClick")
    .wrapper
      swiper(:options="swiperOptions")
        swiper-slide(v-for="(item, index) in imgs", :key="index")
          img.gallary-img(:src="item")
        .swiper-pagination(slot="pagination")
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true,
        loop: true
      }
    }
  },
  created() {

  },
  methods: {
    handlGallaryClick() {
      this.$emit('closeGallary')
    }
  }
}
</script>

<style scoped lang='stylus'>
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    z-index 9
    background-color #000
    .wrapper
      height 0
      width 100%
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-container
        overflow visible
        .swiper-pagination
          color #fff
          bottom -0.5rem
</style>