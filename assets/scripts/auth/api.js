'use strict';

const app = require('../app');

const index = function () {
  return $.ajax({
    url: app.host + '/users',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const signIn = function () {
  let num = Math.floor(Math.random() * 21).toString();
  let email = num + '@guest.com';
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: {
            "credentials": {
              "email": email,
              "password": "guest"
            }
          }
  });
};

module.exports = {
  signIn,
  index,
};
