'use strict';

const app = require('../app');

const createGameSuccess = function(data) {
    app.user.game = data.game;
    app.activePlayer = 'x';
    return app.activePlayer;
};

const createGameFailure = function(error) {
  return error;
};

const updateGameSuccess = function(data) {
    app.user.game = data.game;
};

const updateGameFailure = function(error) {
    return error;
};

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
};
