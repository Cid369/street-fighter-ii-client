'use strict'
const config = require('../config.js')
const store = require('../store.js')

// Character editing starts Here
const enterHp = (inputData) => {
  return $.ajax({
    url: config.apiUrl + `/characters`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}
const charGet = (inputData) => {
  return $.ajax({
    url: config.apiUrl + `/characters`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const charUpdate = (inputData, id) => {
  return $.ajax({
    url: config.apiUrl + `/characters/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const charDelete = (id) => {
  return $.ajax({
    url: config.apiUrl + `/characters/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  enterHp,
  charUpdate,
  charGet,
  charDelete
}
