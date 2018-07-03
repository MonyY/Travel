import axios from 'axios'

// 跨域带token
axios.defaults.withCredentials = true

export function getHomeInfo(cb, errCb) {
  axios.get('/api/index.json')
    .then((data) => cb(data))
    .catch((error) => errCb(error))
}