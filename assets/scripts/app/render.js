'use strict';

const app = require('../app');

const createGame = () => {
    app.user.game = {
      "cells": ["","","","","","","","",""],
      "over": false
    };
    app.activePlayer = 'x';
    return app.activePlayer;
};

// const createGameFailure = function(error) {
//   return error;
// };

// const updateGameSuccess = function(data) {
//     app.user.game = data.game;
// };

// const updateGameFailure = function(error) {
//     return error;
// };

module.exports = {
  createGame,
  // createGameFailure,
  // updateGameSuccess,
  // updateGameFailure,
};
