'use strict';

const api = require('./api');
const gameEvents = require('../game/events');
const ui = require('./ui');

const onSignIn = function () {
  api.signIn()
    .done(ui.signInSuccess, gameEvents.onNewGame)
    .fail(ui.signInFailure);
};

const addHandlers = function() {
  $('#new-game-btn').on('click', onSignIn);
};

module.exports = {
  addHandlers,
};
