'use strict';

const app = require('../app');
const ui = require('./ui');
const api = require('./api');
const render = require('../app/render');


const allowMove = function (index) {
  let game = app.user.game;
  if (game.over === true) {
    return false;
  }
  else if (game.cells[index] !== '') {
    return false;
  }
  else {
    return true;
  }
};

const gameWon = function (index, value) {
  let cells = app.user.game.cells;
  cells[index] = value;

  if ((cells[0] === cells[1] && cells[0] === cells[2] && cells[0] !== '') ||
      (cells[0] === cells[3] && cells[0] === cells[6] && cells[0] !== '') ||
      (cells[0] === cells[4] && cells[0] === cells[8] && cells[0] !== '') ||
      (cells[1] === cells[4] && cells[1] === cells[7] && cells[1] !== '') ||
      (cells[2] === cells[5] && cells[2] === cells[8] && cells[2] !== '') ||
      (cells[3] === cells[4] && cells[3] === cells[5] && cells[3] !== '') ||
      (cells[6] === cells[7] && cells[6] === cells[8] && cells[6] !== '') ||
      (cells[6] === cells[4] && cells[6] === cells[2] && cells[6] !== '')
    )
      {
      return true;
    }
    else {
      return false;
    }
};

const gameTied = function (index, value) {
  let cells = app.user.game.cells;
  cells[index] = value;

  if (cells.indexOf('') === -1) {
    return true;
  }
  else {
    return false;
  }
};

const changePlayer = function (player) {
  if (player === 'X') {
    app.activePlayer = 'O';
  }
  else {
    app.activePlayer = 'X';
  }
};

const executeTurn = function (index) {
  if (allowMove(index) !== true) {
    return;
  }

  let value = app.activePlayer;
  if (allowMove(index) === true) {
    ui.updateBoard(index, value);
  }

  if (gameWon(index, value) === true) {
    ui.gameOver(value, true);
    api.updateGame(index, value, true)
      .done(render.updateGameSuccess)
      .fail(render.updateGameFailure);
      return;
  }

  if (gameTied(index, value) === true && gameWon(index, value) === false) {
    ui.gameOver(gameTied);
    api.updateGame(index, value, true)
      .done(render.updateGameSuccess)
      .fail(render.updateGameFailure);
    return;
  }

  else {
    api.updateGame(index, value, false)
      .done(render.updateGameSuccess)
      .fail(render.updateGameFailure);
    changePlayer(app.activePlayer);
    return;
  }
};

module.exports = {
  executeTurn,
};
