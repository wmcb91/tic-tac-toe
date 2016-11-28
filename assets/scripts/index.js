'use strict';

require('./example');


const authEvents = require('./auth/events');
const gameEvents = require('./game/events');

const setBackGround = () => {
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
  $('#pwd-change-msg').hide();
  $('#sign-out').hide();
  $('#user-welcome').hide();
  $('.title').show();
  gameEvents.addHandlers();
  setBackGround();
  $('header').addClass('loaded');
  setTimeout(function(){$('#new-game-btn').show();}, 9000);
  authEvents.onSignIn();
});
