'use strict';

const app = require('../app');
// const api = require('./api');

const newGame = function () {
  if (app.user === null || app.user === undefined) {
    $('#sign-in-warning').show();
  }
  else {
    $('#game-container').show();
    $('#game-board').find('.game-cell').text('');
    $('#player-turn').text('Player X begins');
  }
};

const showStats = function () {
  if (app.user === null || app.user === undefined) {
    $('#sign-in-warning').show();
  }
  else {
    // countGames(user)
    $('#showStatsModal').modal('show');
    console.log('showing stats');
    // api.getStats();
    // jQuery to post stats
  }
};

// const countGames = function (data) {
//   console.table(data.games);
// };


const updateBoard = function (index, value) {
  let player = value;
  let cell = (index + 1);
  // console.log('update board memory');
  // console.log(player);
  // console.log(cell);
  let cellId = '#' + cell;
  $(cellId).text(player);
};

const gameOver = function (value, result) {
  let winner = value;
  if (result === true) {
    $('#gameResult').text('Player ' + winner + ' won this game!');
  }
  else {
    $('#gameResult').text('Game ended in a tie');
  }
  $('#gameOverModal').modal('show');
};

const showTurn = function (player) {
  player = app.activePlayer;
  $('#player-turn').text('Player ' + player + "'s turn");
};

module.exports = {
  updateBoard,
  newGame,
  showStats,
  gameOver,
  showTurn,
  // countGames,
};
