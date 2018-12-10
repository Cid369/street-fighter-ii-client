'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.signUp(userData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
  // console.log('working?')
}

const onSignIn = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}

const onChangePassword = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.changePassword(userData)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}

const onSignOut = () => {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

// characters update starts here
const onEnterHp = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.enterHp(userData)
    .then(ui.enterHpSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}
const onChangeHp = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.changeHp(userData)
    .then(ui.changeHpSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onEnterHp,
  onChangeHp
}
