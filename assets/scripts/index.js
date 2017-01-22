'use strict';

require('./example');

const gameEvents = require('./game/events');

const setBackGround = () => {
  // NOTE: change to lower pixel for vertical ipad
  if ($(document).width() < 1025 || $(document).width() === 1366) {
    $(".background").html("<img class='background-vid' src='assets/upside-down-place.png' alt='ud'>");
  }
};

$(() => {
  setBackGround();
  $('#new-game-btn-text').html("NEW GAME");
  $('.new-game-btn').hide();
  $('#game-container').hide();
  $('#win-tie-message').hide();
  $('.title').show();
  $('#play-again-btn-text').html("PLAY AGAIN");
  setTimeout(function(){$('header').addClass('loaded');}, 1000);
  setTimeout(function(){$('#new-game-btn').show();}, 8000);
  gameEvents.addHandlers();
});
