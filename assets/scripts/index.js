'use strict';

require('./example');

const gameEvents = require('./game/events');

const setBackGround = () => {
  // NOTE: change to lower pixel for vertical ipad
  if ($(document).width() < 1025) {
    $(".background").html('');
    $(".background").html("<img class='background-vid' src='assets/upside-down-place.png' alt='ud'>");
  }
};

$(() => {
  $('.title').hide();
  $('.new-game-btn').hide();
  $('#game-container').hide();
  $('#win-tie-message').hide();
  $('.title').show();
  gameEvents.addHandlers();
  setBackGround();
  $('header').addClass('loaded');
  setTimeout(function(){$('#new-game-btn').show();}, 8000);
});
