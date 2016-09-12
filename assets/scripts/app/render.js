'use strict';

const app = require('../app');

const createGameSuccess = function(data) {
    app.user.game = data.game;
    app.activePlayer = 'X';
    // console.log('app.user.game data is ', data);
    return app.activePlayer;
};

const createGameFailure = function(error) {
  return error;
    // console.log('createGameFailure');
    // console.log('error is ', error);
};

const updateGameSuccess = function(data) {
    app.user.game = data.game;
    // console.log('updated game data is ', data);
};

const updateGameFailure = function(error) {
    // console.log('updateGameFailure');
    // console.log('error is ', error);
    return error;
};


const indexGamesSuccess = function (data) {
  app.user.games = data.games;
  let gamesStarted = [];
  let gamesFinished = [];
  for (let i=0, max = data.games.length; i < max; i++) {
    gamesStarted.push(data.games[i].over);
  }
  // console.log('gamesStarted is ', gamesStarted);
  for (let i=0, max = data.games.length; i < max; i++) {
    if (gamesStarted[i] === true) {
      gamesFinished.push(data.games[i].over);
    }
  }
  // console.log('gamesFinished is ', gamesFinished);
  $('#games-played').text(gamesFinished.length);
  return gamesFinished;
};


// const makeStartArray = function() {
//   let gamesStarted = [];
// };

//
//   console.log(gamesFinished);
//   // console.log(data.games.over);
//   // console.table(data.games);
// };

const indexGamesFailure = function (error) {
  // console.log('indexGamesFailure');
  // console.log('error is ', error);
  return error;
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
