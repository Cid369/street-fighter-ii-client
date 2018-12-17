'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#enter-hp').on('submit', authEvents.onEnterHp)
  $('#change-hp').on('submit', authEvents.onChangeHp)
  $('#charEnter').on('submit', authEvents.onCharEnter)
  $('#charChange').on('submit', authEvents.onCharChange)
  $('#char-get').on('click', authEvents.onCharGet)
  $('.content').on('submit', authEvents.onCharUpdate)
  $('.content').on('click', '.delete-character', authEvents.onCharDelete)
})
