'use strict';

const app = require('../app');

const newGame = function () {
  if (app.user === null || app.user === undefined) {
    console.log('app.user is null');
  }
  else {
    // $('.title').fadeOut(4000);
    $('#win-tie-message').fadeOut(600);
    $('.title').fadeOut(600);
    $('.new-game-btn').fadeOut(600);
    $('#new-game-btn.btn-text').fadeOut(600);
    // setTimeout(function(){$('#game-container').fadeIn(500);}, 4000);
    $('.clicked').removeClass('clicked o x');
    setTimeout(function(){$('#game-container').fadeIn(500);}, 600);
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
};

const gameOver = function (value, result) {
  console.log('game is over');
  let winner = value.toUpperCase();
  if (result === true) {
    $('.win-tie-message').text('Player ' + winner + ' won this game!');
  }
  else {
    $('.win-tie-message').text('Game ended in a tie');
  }
  $('.game-cell').addClass('over');
  setTimeout(function(){$('#game-container').fadeOut(3500);}, 600);
  setTimeout(function(){$('#win-tie-message').fadeIn(500);}, 3506);
  setTimeout(function(){$('#play-again-btn').fadeIn(500);}, 3506);
  setTimeout(function(){$('.game-cell').removeClass('over');}, 3506);
};

module.exports = {
  updateBoard,
  newGame,
  gameOver,
};
