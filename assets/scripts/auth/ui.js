'use strict';

const app = require('../app');

//sign in
const signInSuccess = (data) => {
  //Stores current user data into app.user
  app.user = data.user;

  //UI response to sign in
  $('#sign-in-prompt').hide();
  $('#user-welcome').show();
  $('#sign-in-failure').hide();

  //code to show email in welcome
  $('#user-name-welcome').html(app.user.email);

  //debug
  console.log('data.user is', data.user);
};

const signInFailure = (error) => {
  $('#sign-in-failure').show();
  console.error(error);
};


//sign up
const signUpSuccess = (data) => {
  $('#signUpModal').modal('hide');
  $('#signUpSuccessModal').modal('show');

  //debug
  console.log('data is', data);
};

const signUpFailure = (error) => {
  console.error(error);
};


//sign out
const signOutSuccess = () => {
  app.user = null;
  $('#user-welcome').hide();
  $('#game-container').hide();
  $('#sign-in-prompt').show();

  //debug
  console.log('Sign Out Successful');
};

const signOutFailure = (error) => {
  console.error(error);
};


//change password
const changePasswordSuccess = () => {
  console.log('Change Successful');
};

const changePasswordFailure = (error) => {
  console.error(error);
};

//Show sign in modal and hide sign-in-failure message if displayed
const showSignUpModal = function() {
  $('#signUpModal').modal('show');
  $('#sign-in-failure').hide();
};

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  showSignUpModal,
};
