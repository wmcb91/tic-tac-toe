'use strict';

const app = require('../app');
// const ui = require('./ui');


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

//switch player each turn
// const changePlayer = function (player) {
//   player =
// };

// const gameOver = function (index, value) {
//
// };







const gameOver = function () {

  if (('#1' === '#2' && '#1' === '#3' && '#1' !== '') ||
      ('#1' === '#4' && '#1' === '#7' && '#1' !== '') ||
      ('#1' === '#5' && '#1' === '#9' && '#1' !== '') ||
      ('#2' === '#5' && '#2' === '#8' && '#2' !== '') ||
      ('#3' === '#6' && '#6' === '#9' && '#3' !== '') ||
      ('#4' === '#5' && '#4' === '#6' && '#4' !== '') ||
      ('#7' === '#8' && '#7' === '#9' && '#7' !== '') ||
      ('#7' === '#5' && '#7' === '#3' && '#7' !== '')
    )
      {
      //game is over
      //some player won
      //display player won
      console.log('Someone won');
      return true;
    }
    else {
      console.log('keep playing');
      return false;
    }
};













module.export = {
  allowMove,
  // changePlayer,
  gameOver,
};
