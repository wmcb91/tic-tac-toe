'use strict';

const api = require('./api');
const ui = require('./ui');
const logic = require('./logic');
const render = require('../app/render');

const onNewGame = function () {
  event.preventDefault();
  ui.newGame();
  api.createGame()
    .done(render.createGameSuccess)
    .fail(render.createGameFailure);
  // if statement
  // if board is not empty, clear board, start new game, or just clear board
};

const onShowStats = function () {
  event.preventDefault();
  ui.showStats();
  api.indexGames()
    .done(console.log('sent to api'))
    .fail(console.log('index request failed'));
  //api Index request then count "dones"
  //render.indexGamesSuccess; 
};

const onClickBoard = function (event) {
  event.preventDefault();
  let index = event.data.index;
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
