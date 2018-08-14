<template lang='pug'>
  .detail
    DetailBanner(:sightName="sightName", :bannerImg="bannerImg", :bannerImgs="gallaryImgs")
    DetailHeader
    .content
      DetailList(:list="list")
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import { getDetailInfo } from '@/api/baseApi'
export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  created() {
    this._getDetailInfo()
  },
  activated() {
    this._getDetailInfo()
  },
  methods: {
    _getDetailInfo() {
      getDetailInfo(this.$route.params.id, (res) => {
        if (res.data.ret && res.data.data) {
          const data = res.data.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang='stylus'>
  .content
    height 10rem
</style>