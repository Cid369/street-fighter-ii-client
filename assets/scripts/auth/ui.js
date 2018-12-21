'use strict'

const store = require('../store.js')

const failure = (signUpFailureResponse) => {
  $('#message').html('You lose!!!')
  $('#message').addClass('error-message')
  $('#message').removeClass('success-message')
  $('#enter-hp-form').trigger('reset')
}

const signUpSuccess = (signUpResponse) => {
  $('#message').html('Here comes a new challenger!!!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#enter-hp-form').trigger('reset')
}

const signInSuccess = (signInResponse) => {
  // console.log('store object before adding user ', store)
  store.user = signInResponse.user
  // console.log(store.user)
  $('#message').html('Signed in! Select Your Fighter!')
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
  $('.content').addClass('hidden')
  $('#enter-hp-form').trigger('reset')
}

const changePasswordSuccess = (changePasswordResponse) => {
  // console.log('store object before adding user ', store)
  $('#message').html('You changed password successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#sign-up-form').addClass('hidden')
  $('#enter-hp-form').trigger('reset')
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
  $('#char-get').addClass('hidden')
  $('#change-password-form').trigger('reset')
  $('#enter-hp-form').trigger('reset')
  $('form').trigger('reset')
  $('.content').addClass('hidden')
}

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
