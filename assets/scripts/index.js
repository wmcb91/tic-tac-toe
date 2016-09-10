'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');


const authEvents = require('./auth/events');
const gameEvents = require('./game/events');
// const render = require('./app/render');
// const app = require('./app');


// On document ready
$(() => {
  // navEvents.addHandlers();
  // render(app);
  authEvents.addHandlers();
  gameEvents.addHandlers();

  $('#sign-out').hide();
  $('#change-password').hide();
  $('#user-welcome').hide();
  $('#sign-in-warning').hide();
  $('#game-container').hide();
  $('#sign-in-failure').hide();
});
