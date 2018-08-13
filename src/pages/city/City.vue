<template lang='pug'>
  .city
    CityHeader
    CitySearch
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
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

</style>