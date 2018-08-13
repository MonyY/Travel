<template lang='pug'>
  .list(ref="wrapper")
    div
      .area
        .title.border-topBottom 当前城市
        .button-list
          .button-wrapper
            .button {{this.city}}
      .area
        .title.border-topBottom 热门城市
        .button-list
          .button-wrapper(
            v-for="item in hot"
            :key="item.id"
            @click="handelCityClick(item.name)"
          )
            .button {{item.name}}
      .area(
        v-for="(item, key) in cities"
        :key="key"
        :ref="key"
      )
        .title.border-topBottom {{key}}
        .item-list
          .item(
            v-for="c in item"
            :key="c.id"
            @click="handelCityClick(c.name)"
          ) {{c.name}}
</template>

<script>
import Bscroll from 'better-scroll'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  components: {

  },
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  data () {
    return {

    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  methods: {
    handelCityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter() {
      if (this.letter) {
        const ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
      }
    }
  },
  computed: {
    ...mapGetters(['city'])
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