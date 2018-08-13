import axios from 'axios'

// 跨域带token
axios.defaults.withCredentials = true

export function getHomeInfo(req, cb, errCb) {
  axios.get('/api/index.json?city=' + req)
    .then((data) => cb(data))
    .catch((error) => errCb(error))
}

export function getCityInfo(cb, errCb) {
  axios.get('/api/city.json')
    .then((data) => cb(data))
    .catch((error) => errCb(error))
}