'use strict';


const api = require('./api');
const ui = require('./ui');
const logic = require('./logic');

// gonna delete
let currentPlayer = 'X';

const onNewGame = function () {
  ui.newGame();
  api.createGame();
};

const onShowStats = function () {
  ui.showStats();
};

const onUpdateBoard = function (player, cell) {
  //player = X for now
  player = currentPlayer;
  cell = this.id;
  ui.updateBoard(player, cell);
  logic.gameOver();
};

const addHandlers = () => {
  $('#new-game-btn').on('click', onNewGame);
  $('#show-stats-btn').on('click', onShowStats);
  $('.game-board').on('click', '.game-cell', onUpdateBoard);

};

module.exports = {
  addHandlers,
};
