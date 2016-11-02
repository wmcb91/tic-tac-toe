'use strict';

require('./example');


const authEvents = require('./auth/events');
const gameEvents = require('./game/events');
// const render = require('./app/render');
// const app = require('./app');

const setBackGround = () => {
  if ($(document).width() < 1025) {
    $(".background").html('');
    $(".background").html("<img class='background-vid' src='assets/upside-down-place.png' alt='ud'>");
  }
};

$(() => {
  $('#win-tie-message').hide();
  $('#pwd-change-msg').hide();
  $('#sign-out').hide();
  $('#user-welcome').hide();
  $('#game-container').hide();
  $('.new-game-btn').hide();
  gameEvents.addHandlers();
  setBackGround();
  document.body.className += 'loaded';
  setTimeout(function(){$('#new-game-btn').show();}, 9000);
  authEvents.onSignIn();
});
