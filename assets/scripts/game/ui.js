'use strict';

const app = require('../app');

const newGame = function () {
  if (app.user === null || app.user === undefined) {
  }
  else {
    $('#win-tie-message').fadeOut(600);
    $('.title').fadeOut(600);
    $('.new-game-btn').fadeOut(600);
    $('#new-game-btn.btn-text').fadeOut(600);
    $('.clicked').removeClass('clicked o x');
    setTimeout(function(){$('#game-container').fadeIn(500);}, 600);
    $('#game-board').find('.game-cell').text('');
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
  let winner = value;
  if (result === true) {
    $('.win-tie-message').text('Player ' + winner.toUpperCase() + ' wins!');
  }
  else {
    $('.win-tie-message').text('Game Tied');
  }
  $('.game-cell').addClass('over');
  $('.game-board').addClass('over');
  setTimeout(function(){$('#game-container').fadeOut(3500);}, 600);
  setTimeout(function(){$('#win-tie-message').fadeIn(1500);}, 4000);
  setTimeout(function(){$('#play-again-btn').fadeIn(1500);}, 4000);
  setTimeout(function(){$('.game-cell').removeClass('over');}, 3750);
  setTimeout(function(){$('.game-board').removeClass('over');}, 3750);
};

module.exports = {
  updateBoard,
  newGame,
  gameOver,
};
