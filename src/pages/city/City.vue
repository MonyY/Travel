<template lang='pug'>
  .city
    CityHeader
    CitySearch(
      :cities="cities"
    )
    CityList(
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    )
    CityAlphabet(
      :list="cities"
      @changeLetter="changeLetterHandle"
    )
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import { getCityInfo } from '@/api/baseApi.js'
import { mapGetters } from 'vuex'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  created() {
    this._getCity()
  },
  computed: {
    ...mapGetters(['city'])
  },
  methods: {
    _getCity() {
      getCityInfo((res) => {
        this.handleGetCitySucc(res)
      })
    },

    handleGetCitySucc(res) {
      let data = res.data
      if (data.ret && data) {
        this.cities = data.data.cities
        this.hotCities = data.data.hotCities
      }
    },

    // 接收右侧字母点击
    changeLetterHandle(letter) {
      this.letter = letter
    }
  }
}
</script>

<style scoped lang='stylus'>

</style>