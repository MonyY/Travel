<template lang='pug'>
  .Alphabet
    ul.list
      li.item(
        v-for="(item, key) in list"
        :key="key"
      ) {{key}}
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    list: Object
  },
  data () {
    return {

    }
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