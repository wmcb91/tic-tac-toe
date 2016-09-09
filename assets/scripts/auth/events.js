'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const showSignUp = function (){
  $('#signUpModal').modal('show');
  $('#sign-in-failure').hide();
};

const onSignUp = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  $('#sign-in-warning').hide();

  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpfailure);
};

const onSignIn = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  $('#sign-in-warning').hide();

  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFailure);
};

const onChangePassword = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure);
};

const onSignOut = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-up-link').on('click', showSignUp);
  $('#alert-sign-up').on('click', showSignUp);
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};


module.exports = {
  addHandlers,
  // onSignUp,
};