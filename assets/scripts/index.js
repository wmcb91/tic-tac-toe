'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');


const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js');
// const navEvents =
// require('./nav-events');

// On document ready
$(() => {
  // navEvents.addHandlers();
  authEvents.addHandlers();
  gameEvents.addHandlers();

  $('#sign-out').hide();
  $('#change-password').hide();
  $('#user-welcome').hide();
  $('#sign-in-warning').hide();
  $('#game-container').hide();
  // $('#player-turn').hide();
  // $('#game-board').hide();
  $('#sign-in-failure').hide();
});
