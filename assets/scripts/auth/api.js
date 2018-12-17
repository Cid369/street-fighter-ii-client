'use strict'
const config = require('../config.js')
const store = require('../store.js')

const signUp = (inputData) => {
  return $.ajax({
    url: config.apiUrl + `/sign-up`,
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signIn = (inputData) => {
  return $.ajax({
    url: config.apiUrl + `/sign-in`,
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const changePassword = (inputData) => {
  return $.ajax({
    url: config.apiUrl + `/change-password`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signOut = () => {
  return $.ajax({
    uurl: config.apiUrl + `/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// Character editing starts Here
const enterHp = (inputData) => {
  return $.ajax({
    url: config.apiUrl + `/characters/`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}
// const changeHp = (inputData) => {
//   return $.ajax({
//     // url: 'https://desolate-refuge-14322.herokuapp.com/change-hp',
//     url: config.apiUrl + `/characters/:id`,
//     // url: 'hhttp://localhost:7165/change-hp',
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     contentType: 'application/json',
//     data: JSON.stringify(inputData)
//   })
// }

const charEnter = (inputData) => {
  return $.ajax({
    url: config.apiUrl + `/char-enter`,
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
  signUp,
  signIn,
  changePassword,
  signOut,
  enterHp,
  charEnter,
  charUpdate,
  charGet,
  charDelete
}
