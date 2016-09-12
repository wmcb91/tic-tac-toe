'use strict';

const app = require('../app');

const createGameSuccess = function(data) {
    app.user.game = data.game;
    app.activePlayer = 'X';
    console.log('app.user.game data is ', data);
    // console.log('First up is player ', app.activePlayer);
    return app.activePlayer;
};

const createGameFailure = function(error) {
    console.log('createGameFailure');
    console.log('error is ', error);
};

const updateGameSuccess = function(data) {
    app.user.game = data.game;
    console.log('updated game data is ', data);
};

const updateGameFailure = function(error) {
    console.log('updateGameFailure');
    console.log('error is ', error);
};

const indexGamesSuccess = function (data) {
  console.log('indexGamesSuccess');
  // app.user.game = data.games;
  console.table(data.games);
};

const indexGamesFailure = function (error) {
  console.log('indexGamesFailure');
  console.log('error is ', error);
};



module.exports = {
  // render,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  indexGamesSuccess,
  indexGamesFailure,
};
