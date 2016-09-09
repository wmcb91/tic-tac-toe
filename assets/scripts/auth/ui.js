'use strict';

const app = require('../app');

//sign in
const signInSuccess = (data) => {
  app.user = data.user;
  $('#sign-in-prompt').hide();
  $('#user-welcome').show();
  $('#sign-in-failure').hide();
  //code to show email in welcome
  $('#user-name-welcome').html(app.user.email);
};

const signInFailure = (error) => {
  $('#sign-in-failure').show();
  console.error(error);
};


//sign up
const signUpSuccess = (data) => {
  $('#signUpModal').modal('hide');
  $('#signUpSuccessModal').modal('show');

  console.log(data);
};

const signUpFailure = (error) => {
  console.error(error);
};


//sign out
const signOutSuccess = () => {
  console.log('Sign Out Successful');
  app.user=null;
  $('#user-welcome').hide();
  $('#game-container').hide();
  $('#sign-in-prompt').show();
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
