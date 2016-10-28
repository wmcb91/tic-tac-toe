'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignIn = function () {
  api.signIn()
    .done(ui.signInSuccess)
    .fail(ui.signInFailure);
};

const addHandlers = function() {
  $('#new-game-btn').on('click', onSignIn);
};

module.exports = {
  addHandlers,
};
