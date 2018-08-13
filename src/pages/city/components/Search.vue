<template lang='pug'>
  .search
    input.search-input(type="text" placeholder="输入城市名或拼音")
</template>

<script>
export default {
  name: 'CitySearch',
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped lang='stylus'>
  @import '~styles/varibles.styl';
  .search
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
</style>