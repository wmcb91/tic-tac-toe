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
  $('#sign-up').hide();
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,

};
