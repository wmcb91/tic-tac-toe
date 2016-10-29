'use strict';

require('./example');


const authEvents = require('./auth/events');
const gameEvents = require('./game/events');
// const render = require('./app/render');
// const app = require('./app');

$(() => {
  authEvents.addHandlers();
  gameEvents.addHandlers();
  document.body.className += 'loaded';
  // $( ".title" ).animate({
  //   width: "70%",
  //   opacity: 0.4,
  //   marginLeft: "0.6in",
  //   fontSize: "3em",
  //   borderWidth: "10px"
  // }, 1500 );
  $('.new-game-btn').hide();
  setTimeout(function(){$('.new-game-btn').fadeIn(1000);}, 9000);
  $('#pwd-change-msg').hide();
  $('#sign-out').hide();
  $('#user-welcome').hide();
  $('#sign-in-warning').hide();
  $('#game-container').hide();
  $('#sign-in-failure').hide();
});
