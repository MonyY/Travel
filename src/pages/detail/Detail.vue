<template lang='pug'>
  .detail
    DetailBanner
    DetailHeader
    .content
      DetailList(:list="list")
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人一馆联票'
        }, {
          title: '成人二馆联票'
        }, {
          title: '成人三馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped lang='stylus'>
  .content
    height 10rem
</style>