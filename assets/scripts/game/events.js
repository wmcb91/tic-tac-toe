'use strict';

const ui = require('./ui');
const logic = require('./logic');
const render = require('../app/render');

const onClickNewGame = () => {
  ui.startFirstGame();
  render.createGame();
};

const onClickPlayAgain = () => {
  ui.newGame();
  render.createGame();
};

const onClickBoard = function (event) {
  event.preventDefault();
  let index = event.data.index;
  logic.executeTurn(index);
};

const addHandlers = () => {
  $('#new-game-btn').on('click', onClickNewGame);
  $('#play-again-btn').on('click', onClickPlayAgain);
  $('#0').on('click', {index: 0}, onClickBoard);
  $('#1').on('click', {index: 1}, onClickBoard);
  $('#2').on('click', {index: 2}, onClickBoard);
  $('#3').on('click', {index: 3}, onClickBoard);
  $('#4').on('click', {index: 4}, onClickBoard);
  $('#5').on('click', {index: 5}, onClickBoard);
  $('#6').on('click', {index: 6}, onClickBoard);
  $('#7').on('click', {index: 7}, onClickBoard);
  $('#8').on('click', {index: 8}, onClickBoard);
};

module.exports = {
  addHandlers,
  onClickNewGame,
  onClickPlayAgain
};
