'use strict';

const app = require('../app');
const ui = require('./ui');


//allow game move to proceed if allowMove = true
const allowMove = function (index) {
  let game = app.user.game;
  // May delete if gameOver triggers event which wouldn't allow move anyway
  if (game.over === true) {
    console.log('Cannot move; game has ended');
    return false;
  }
  else if (game.cells[index] !== '') {
    console.log('Cell already occupied, try again');
    return false;
  }
  else {
    return true;
  }
};

const gameOver = function (index, value) {

};

module.export = {
  allowMove,
  gameOver
};
