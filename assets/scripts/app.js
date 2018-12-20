'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const charEvents = require('./char/char-events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#enter-hp').on('submit', charEvents.onEnterHp)
  $('#charChange').on('submit', charEvents.onCharChange)
  $('#char-get').on('click', charEvents.onCharGet)
  $('.update-character').on('submit', charEvents.onCharUpdate)
  $('.content').on('submit', charEvents.onCharUpdate)
  $('.content').on('click', '.delete-character', charEvents.onCharDelete)
})
