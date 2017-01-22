'use strict';

const app = require('../app');
const ui = require('./ui');

const allowMove = function (index) {
  let game = app.game;
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
  let cells = app.game.cells;
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
  let cells = app.game.cells;
  cells[index] = value;

  if (cells.indexOf('') === -1) {
    return true;
  }
  else {
    return false;
  }
};

const changePlayer = function (player) {
  if (player === 'x') {
    app.activePlayer = 'o';
  }
  else {
    app.activePlayer = 'x';
  }
};

const executeTurn = function (index) {
  if (allowMove(index) !== true) {
    return;
  }

  let value = app.activePlayer;
  if (allowMove(index) === true) {
    ui.updateBoard(index, value);
    app.game.cells[index] = value;
  }

  if (gameWon(index, value) === true) {
    ui.gameOver(value, true);
    app.game.cells[index] = value;
    app.game.over = true;
    return;
  }

  if (gameTied(index, value) === true && gameWon(index, value) === false) {
    ui.gameOver(gameTied);
    app.game.cells[index] = value;
    app.game.over = true;
    return;
  }

  else {
    app.game.cells[index] = value;
    changePlayer(app.activePlayer);
    return;
  }
};

module.exports = {
  executeTurn,
};
