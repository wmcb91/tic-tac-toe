 'use strict';

const app = require('../app');

//sign in
const signInSuccess = (data) => {
  app.user = data.user;
  //UI response to sign in
  $('#sign-in-failure').hide();
};

const signInFailure = (error) => {
  $('#sign-in-failure').show();
  console.error(error);
  return error;
};

module.exports = {
  signInSuccess,
  signInFailure,
};
