'use strict';

const app = require('../app');
const api = require('./api');
// const ui = require('./ui');

const onNewGame = function () {
  if (app.user === null || app.user === undefined) {
    $('#sign-in-warning').show();
  }
  else {
    $('#game-container').show();
    api.index();
  }
};

const addHandlers = () => {
  $('#new-game-btn').on('click', onNewGame);
};





module.exports = {
  addHandlers,
};
