'use strict';

require('./example');


const authEvents = require('./auth/events');
const gameEvents = require('./game/events');
// const render = require('./app/render');
// const app = require('./app');

$(() => {
  authEvents.addHandlers();
  gameEvents.addHandlers();

  $('#pwd-change-msg').hide();
  $('#sign-out').hide();
  $('#user-welcome').hide();
  $('#sign-in-warning').hide();
  $('#game-container').hide();
  $('#sign-in-failure').hide();
});
