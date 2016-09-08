'use strict';

const app = require('../app');

const signInSuccess = (data) => {
  app.user = data.user;
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signOutSuccess = () => {
  console.log('Sign Out Successful');
  app.user=null;
};

const changePasswordSuccess = () => {
  console.log('Change Successful');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
