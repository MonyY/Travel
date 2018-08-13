<template lang='pug'>
  .Alphabet
    ul.list
      li.item A
      li.item A
      li.item A
      li.item A
      li.item A
      li.item A
      li.item A
      li.item A
      li.item A
</template>

<script>
export default {
  name: 'CityAlphabet',
  components: {

  },
  data () {
    return {

    }
  },
  created: {

  },
  methods: {

  }
}
</script>

<style scoped lang='stylus'>
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top .79rem
    right 0
    bottom 0
    width .2rem
    .item
      text-align center
      color $bgColor
      line-height .2rem
</style>