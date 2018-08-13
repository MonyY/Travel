<template lang='pug'>
  .city
    CityHeader
    CitySearch
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
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

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
  methods: {
    _getCity() {
      axios.get('/api/city.json')
        .then(this.handleGetCitySucc)
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