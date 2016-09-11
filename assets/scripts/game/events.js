'use strict';


const api = require('./api');
const ui = require('./ui');
const logic = require('./logic');

// gonna delete
// let currentPlayer = 'X';

const onNewGame = function () {
  ui.newGame();
  api.createGame();
};

const onShowStats = function () {
  ui.showStats();
  //api Index request then count "dones"
};

const onClickBoard = function (event) {
  let index = event.data.index;
  // //player = X for now
  // player = currentPlayer;
  // cell = this.id;
  // ui.updateBoard(player, cell);
  // logic.
  logic.executeTurn(index);
};

// const updateGame =

const addHandlers = () => {
  $('#new-game-btn').on('click', onNewGame);
  $('#show-stats-btn').on('click', onShowStats);
  $('#1').on('click', {index: 0}, onClickBoard);
  $('#2').on('click', {index: 1}, onClickBoard);
  $('#3').on('click', {index: 2}, onClickBoard);
  $('#4').on('click', {index: 3}, onClickBoard);
  $('#5').on('click', {index: 4}, onClickBoard);
  $('#6').on('click', {index: 5}, onClickBoard);
  $('#7').on('click', {index: 6}, onClickBoard);
  $('#8').on('click', {index: 7}, onClickBoard);
  $('#9').on('click', {index: 8}, onClickBoard);
};

module.exports = {
  addHandlers,
};
