<template lang='pug'>
  transition
    slot
</template>

<script>
export default {
  name: 'Fade',
  components: {

  },
  data () {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped lang='stylus'>
  .v-enter, .v-leave-to
    opacity 0
  .v-enter-active, .v-leave-active
    transition opacity .5s
</style>