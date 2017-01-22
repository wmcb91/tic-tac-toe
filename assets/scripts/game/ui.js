'use strict';

const startFirstGame = () => {
  $('.title').fadeOut(600);
  $('.new-game-btn').fadeOut(600);
  $('#new-game-btn.btn-text').fadeOut(600);
  setTimeout(function(){$('#game-container').fadeIn(500);}, 600);
};

const newGame = function () {
  $('#win-tie-message').fadeOut(600);
  $('#play-again-btn').fadeOut(600);
  $('#play-again-btn.btn-text').fadeOut(600);
  $('.clicked').removeClass('clicked o x');
  setTimeout(function(){$('#game-container').fadeIn(500);}, 600);
  $('#game-board').find('.game-cell').text('');
};

const updateBoard = function (index, value) {
  let player = value;
  let cellId = '#' + index;
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
  setTimeout(function(){$('#game-container').fadeOut(2250);}, 300);

// NOTE: this animation looks best in Safari, check commented code below in Chrome
  setTimeout(function(){$('#win-tie-message').fadeIn(1000);}, 2600);
  setTimeout(function(){$('#play-again-btn').fadeIn(500);}, 3100);

  // setTimeout(function(){$('#win-tie-message').fadeIn(1500);}, 2600);
  // setTimeout(function(){$('#play-again-btn').fadeIn(1500);}, 2600);

  setTimeout(function(){$('.game-cell').removeClass('over');}, 3750);
  setTimeout(function(){$('.game-board').removeClass('over');}, 3750);
};

module.exports = {
  startFirstGame,
  newGame,
  updateBoard,
  gameOver,
};
