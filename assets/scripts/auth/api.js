'use strict'

const store = require('../store.js')

const signUp = (inputData) => {
  return $.ajax({
    // url: 'http://localhost:4741/sign-up',
    url: 'http://localhost:7165/sign-up',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signIn = (inputData) => {
  return $.ajax({
    // url: 'http://localhost:4741/sign-in',
    url: 'http://localhost:7165/sign-in',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const changePassword = (inputData) => {
  return $.ajax({
    // url: 'hhttp://localhost:4741/change-password',
    url: 'hhttp://localhost:7165/change-password',
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
    // url: 'http://localhost:4741/sign-out',
    url: 'http://localhost:7165/sign-out',
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
  signOut
  // board
}