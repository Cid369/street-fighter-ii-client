'use strict'

const store = require('../store.js')

const signUp = (inputData) => {
  return $.ajax({
    // url: 'https://desolate-refuge-14322.herokuapp.com/sign-up',
    url: 'http://localhost:4741/sign-up',
    // url: 'http://localhost:7165/sign-up',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signIn = (inputData) => {
  return $.ajax({
    // url: 'https://desolate-refuge-14322.herokuapp.com/sign-in',
    url: 'http://localhost:4741/sign-in',
    // url: 'http://localhost:7165/sign-in',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const changePassword = (inputData) => {
  return $.ajax({
    // url: 'https://desolate-refuge-14322.herokuapp.com/change-password',
    url: 'http://localhost:4741/change-password',
    // url: 'hhttp://localhost:7165/change-password',
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
    // url: 'https://desolate-refuge-14322.herokuapp.com/sign-out',
    url: 'http://localhost:4741/sign-out',
    // url: 'http://localhost:7165/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// Character editing starts Here
const enterHp = (inputData) => {
  return $.ajax({
    // url: 'https://desolate-refuge-14322.herokuapp.com/enter-hp',
    url: 'http://localhost:4741/characters',
    // url: 'http://localhost:7165/enter-hp',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}
const changeHp = (inputData) => {
  return $.ajax({
    // url: 'https://desolate-refuge-14322.herokuapp.com/change-hp',
    url: 'http://localhost:4741/change-hp',
    // url: 'hhttp://localhost:7165/change-hp',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const charEnter = (inputData) => {
  return $.ajax({
    url: 'http://localhost:4741/char-enter',
    methon: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringfy(inputData)
  })
}

const charChange = (inputData) => {
  return $.ajax({
    url: 'http://localhost:4741/char-change',
    methon: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringfy(inputData)
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  enterHp,
  changeHp,
  charEnter,
  charChange
}
