'use strict';


// const api = require('./api');
const ui = require('./ui');

let currentPlayer = 'X';

const onNewGame = function () {
  ui.newGame();
};

const onUpdateBoard = function (player, cell) {
  //player = X for now
  player = currentPlayer;
  cell = this.id;
  ui.updateBoard(player, cell);
};


const addHandlers = () => {
  $('#new-game-btn').on('click', onNewGame);
  $('.game-board').on('click', '.game-cell', onUpdateBoard);
};

module.exports = {
  addHandlers,
};
