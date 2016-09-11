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


const updateBoard = function (player, cell) {
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
};
