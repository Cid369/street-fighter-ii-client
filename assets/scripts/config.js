'use strict'

let apiUrl
const apiUrls = {
  production: 'postgres://mfyphfpfvhbeja:1f359975c50f90543764711aa4e97ed0b30cb2311e94725f09f7fc33b0970c53@ec2-174-129-41-12.compute-1.amazonaws.com:5432/d9aivs3ou7sj0f',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
