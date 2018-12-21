'use strict'

const store = require('../store.js')

const showCharactersTemplate = require('../templates/char-listing.handlebars')

const failure = (signUpFailureResponse) => {
  $('#message').html('You lose!!!')
  $('#message').addClass('error-message')
  $('#message').removeClass('success-message')
  $('#enter-hp-form').trigger('reset')
}

// Character UI starts here.
const enterHpSuccess = (enterHpResponse) => {
  // console.log('store object before adding user ', store)
  store.characters = enterHpResponse.characters
  $('#message').html('HP enter successfully!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#enter-hp-form').trigger('clear')
}

const charGetSuccess = (charGetResponse) => {
  // console.log('store object before adding user', store)
  $('#message').html('You got your fighters!')
  const showCharactersHtml =
  showCharactersTemplate({ characters: charGetResponse.characters })
  $('.content').html(showCharactersHtml)
  $('.content').removeClass('hidden')
}

const charUpdateSuccess = (charUpdateResponse) => {
  // console.log('store object before adding user ', store)
  $('#message').html('You changed HP successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#enter-hp-form').trigger('reset')
}

const charDeleteSuccess = (charDeleteResponse) => {
  $('#message').html('Your fighter been defeated!')
  $('#enter-hp-form').trigger('reset')
}

module.exports = {
  failure,
  enterHpSuccess,
  charGetSuccess,
  charUpdateSuccess,
  charDeleteSuccess
}
