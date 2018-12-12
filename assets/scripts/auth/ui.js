'use strict'

const store = require('../store.js')

const failure = (signUpFailureResponse) => {
  $('#message').html('You lose!!!')
  $('#message').addClass('error-message')
  $('#message').removeClass('success-message')
}

const signUpSuccess = (signUpResponse) => {
  $('#message').html('Here comes a new chellenger!!!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const signInSuccess = (signInResponse) => {
  console.log('store object before adding user ', store)
  store.user = signInResponse.user
  $('#message').html('Select Your Fighter!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#enter-hp').removeClass('hidden')
  $('#change-hp').removeClass('hidden')
  $('.character-icon').removeClass('hidden')
  $('#char-select-enter').removeClass('hidden')
  $('#char-select-change').removeClass('hidden')
  $('#char-get').removeClass('hidden')
}

const changePasswordSuccess = (changePasswordResponse) => {
  console.log('store object before adding user ', store)
  $('#message').html('You changed password successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#sign-up-form').addClass('hidden')
}

const signOutSuccess = (signOutResponse) => {
  $('#message').html('Game Over!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('.character-icon').addClass('hidden')
  $('#enter-hp').addClass('hidden')
  $('#change-hp').addClass('hidden')
}

const enterHpSuccess = (enterHpResponse) => {
  console.log('store object before adding user ', store)
  store.user = enterHpResponse.user
  $('#message').html('HP enter successfully!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const changeHpSuccess = (changeHpResponse) => {
  console.log('store object before adding user ', store)
  $('#message').html('You changed HP successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const charGetSuccess = (charGetResponse) => {
  console.log('store object before adding user', store)
  $('#message').html('You got your fighters!')
}

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  enterHpSuccess,
  changeHpSuccess,
  charGetSuccess
}
