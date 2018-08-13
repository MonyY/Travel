let defaultCity = '成都'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {

}

const state = {
  city: defaultCity
}

export default state