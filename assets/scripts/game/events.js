'use strict';

const app = require('../app');

const clickNewGame = function () {
  if (app.user === null || app.user === undefined) {
    $('#sign-in-warning').show();
  }
  else {
    $('#game-board').show();
    $('#player-turn').show();
  }
};

const addHandlers = () => {
  $('#new-game').on('click', clickNewGame);
};

module.exports = {
  addHandlers,
};
