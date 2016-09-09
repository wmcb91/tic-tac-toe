'use strict';

// Sign in Event handler shit
// $('#sign-in').submit(function () {
//   event.preventDefault();
//   $('#sign-in-prompt').hide();
//   $('#user-welcome').show();
// });

// Sign up event handler shit
// Set both possible prompt links to open modal
$('#sign-up-link').on('click', function () {
  $('#signUpModal').modal('show');
});
$('#alert-sign-up').on('click', function () {
  $('#signUpModal').modal('show');
});

//Submitting sign up closes modal and changes sign-in to welcome
$('#sign-up').submit(function () {
  event.preventDefault();
  $('#sign-in-prompt').hide();
  $('#sign-up').hide();
  $('#signUpModal').modal('hide');
  $('#user-welcome').show();
});

//*** Need to change later to show #sign-in-warning if not logged in
// Show #game-board and #player-turn when new game button pressed
$('#new-game').on('click', function () {
  $('#game-board').show();
  $('#player-turn').show();
});
