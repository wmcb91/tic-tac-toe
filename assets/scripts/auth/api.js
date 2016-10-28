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
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: {
            "credentials": {
              "email": "guest@guest.guest",
              "password": "guest"
            }
          }
  });
};

module.exports = {
  signIn,
  index,
};
