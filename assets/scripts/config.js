'use strict'

let apiUrl
const apiUrls = {
  production: 'https://desolate-refuge-14322.herokuapp.com',
  // development: 'http://localhost:4741'
  development: 'http://localhost:7165'

}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
