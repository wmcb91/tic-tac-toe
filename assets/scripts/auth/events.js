'use strict';

const api = require('./api');
const ui = require('./ui');

const onSignIn = function () {
  api.signIn()
    .done(ui.signInSuccess)
    .fail(ui.signInFailure);
};

module.exports = {
  onSignIn
};
