'use strict';

const app = require('../app');

const clickNewGame = function () {

  if (app.user === null || app.user === undefined) {
    $('#sign-in-warning').show();
  }
  else {
    $('#game-container').show();
  }
};

const addHandlers = () => {
  $('#new-game-btn').on('click', clickNewGame);
};

module.exports = {
  addHandlers,
};
