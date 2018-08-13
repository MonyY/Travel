<template lang='pug'>
  .Alphabet
    ul.list
      li.item(
        v-for="item in letter"
        :key="item"
        :ref="item"
        @click="letterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      ) {{item}}
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    list: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    letterClick(e) {
      this.$emit('changeLetter', e.target.innerText)
    },

    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      // 在右侧字母列表滑动时，左侧移动到对应区域
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letter.length) {
            this.$emit('changeLetter', this.letter[index])
          }
        }, 16)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  },
  computed: {
    letter() {
      return Object.keys(this.list)
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