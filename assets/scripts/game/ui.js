'use strict';

const app = require('../app');
// const api = require('./api');

const newGame = function () {
  if (app.user === null || app.user === undefined) {
    $('#sign-in-warning').show();
  }
  else {
    $('#game-container').show();
  }
};

// const createGameSuccess = function(data) {
//     app.user.game = data.game;
// };


const showStats = function () {
  if (app.user === null || app.user === undefined) {
    $('#sign-in-warning').show();
  }
  else {
    $('#showStatsModal').modal('show');
    console.log('showing stats');
    // api.getStats();
    // jQuery to post stats
  }
};

// const


const updateBoard = function (index, value) {
  let player = value;
  let cell = (index + 1);
//  player = currentPlayer;
  console.log('update board memory');
  console.log(player);
  console.log(cell);
  let cellId = '#' + cell;
  $(cellId).text(player);
};








// const onSuccess = function (data) {
//   if (data.book) {
//     console.log(data.book);
//   } else {
//     console.table(data.books);
//   }
// };
//
// const onError = function (response) {
//   console.error(response);
// };

module.exports = {
  // onSuccess,
  // onError,
  updateBoard,
  newGame,
  showStats,
  // createGameSuccess,
};
