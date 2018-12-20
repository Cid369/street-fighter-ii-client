'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./char-api.js')
const ui = require('./char-ui.js')

// characters events starts here
const onEnterHp = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.enterHp(userData)
    .then(ui.enterHpSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}

const onCharGet = (event) => {
  event.preventDefault()
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
  event.preventDefault()
  $('.content').on('submit', '.update-character', onCharUpdate)
  $('.content').on('click', '.delete-character', onCharDelete)
  $(event.target).trigger('reset')
}

module.exports = {
  onEnterHp,
  onCharGet,
  onCharUpdate,
  onCharDelete,
  addHandlers
}
