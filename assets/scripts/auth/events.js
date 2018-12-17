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
  $(event.target).trigger('reset')
}

// characters events starts here
const onEnterHp = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.enterHp(userData)
    .then(ui.enterHpSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}

const onCharEnter = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.charEnter(userData)
    .then(ui.charEnterSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}

const onCharChange = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.charChange(userData)
    .then(ui.charChangeSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}

const onCharGet = (event) => {
  api.charGet()
    .then(ui.charGetSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}
const onCharUpdate = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  const id = $(event.target).parent().data('id')

  api.charUpdate(userData, id)
    .then(ui.changeHpSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}

const onCharDelete = (event) => {
  event.preventDefault()
  console.log('working?')
  const id =
  $(event.target).closest('section').data('id')
  api.charDelete(id)
    .then(() => onCharGet(event))
    .catch(ui.failure)
  $(event.target).trigger('reset')
}

const addHandlers = () => {
  $('.content').on('submit', '.update-character', onCharUpdate)
  $('.content').on('click', '.delete-character', onCharDelete)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onEnterHp,
  onCharEnter,
  onCharChange,
  onCharGet,
  onCharUpdate,
  onCharDelete,
  addHandlers
}
