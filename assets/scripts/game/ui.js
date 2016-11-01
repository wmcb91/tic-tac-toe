'use strict';

const app = require('../app');

const newGame = function () {
  if (app.user === null || app.user === undefined) {
    console.log('app.user is null');
  }
  else {
    // $('.title').fadeOut(4000);
    $('.title').fadeOut(4);
    $('.new-game-btn').fadeOut(2);
    $('.btn-text').fadeOut(2);
    // setTimeout(function(){$('#game-container').fadeIn(500);}, 4000);
    $('.clicked').removeClass('clicked o x');
    setTimeout(function(){$('#game-container').fadeIn(500);}, 6);
    $('#game-board').find('.game-cell').text('');
    // setTimeout(function(){$('#player-turn').text('Player X begins');}, 4000);
    // $('#game-container').show();
    // $('#game-board').find('.game-cell').text('');
    // $('#player-turn').text('Player X begins');
  }
};

const updateBoard = function (index, value) {
  let player = value;
  let cell = (index + 1);
  let cellId = '#' + cell;
  $(cellId).html(`<p>${player.toUpperCase()}</p>`);
  $(cellId).addClass(`clicked ${player}`);
  console.log("Doc width:", $(document).width());
  console.log("Doc height:", $(document).height());
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
  // $('#player-turn').text('Game Over');
};

// const showTurn = function (player) {
//   player = app.activePlayer;
//   $('#player-turn').text('Player ' + player + "'s turn");
// };

module.exports = {
  updateBoard,
  newGame,
  gameOver,
  // showTurn,
};
