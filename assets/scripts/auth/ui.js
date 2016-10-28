 'use strict';

const app = require('../app');

//sign in
const signInSuccess = () => {
  //UI response to sign in
  $('#sign-in-failure').hide();

  //debug
  console.log('Sign in successful');
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
