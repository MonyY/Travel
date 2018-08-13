<template lang='pug'>
  .search
    .search-box
      input.search-input(
        v-model="keyword"
        type="text"
        placeholder="输入城市名或拼音"
      )
    .search-content(ref="search" v-show="keyword")
      ul
        li.search-item(
          v-for="item in list"
          :key="item.id"
        ) {{item.name}}
        li.search-item(v-show="noData") 没有找到匹配数据
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword() {
      if (this.timer) clearTimeout(this.timer)
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach((val) => {
            if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
              result.push(val)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    noData() {
      return !this.list.length
    }
  }
}
</script>

<style scoped lang='stylus'>
  @import '~styles/varibles.styl';
  .search-box
    padding 0 .05rem
    height .36rem
    background-color $bgColor
    .search-input
      box-sizing border-box
      padding 0 .1rem
      height .32rem
      line-height .32rem
      width 100%
      text-align center
      border-radius .03rem
      color #666
  .search-content
    position absolute
    top 0.79rem
    left 0
    right 0
    bottom 0
    overflow hidden
    background-color #eee
    z-index 9
    .search-item
      line-height .31rem
      padding-left .1rem
      color #666
      background-color #fff
      border-bottom 1px solid #ccc
</style>