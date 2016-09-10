'use strict';

const app = require('../app');
// const ui = require('./ui');

let currentPlayer = 'X';


// on click --> is move allowed?
// If the cell is occupied (get data from memory or server?)
// or If the game is over
// Then the move is not allowed and nothing happens (console log)
// else
// The move is allowed and a UI function to update the board is called and an
// API function is called to update the server

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

// Did the move win the game?
// If there are three cells in the same row, column or diagnal with the same value
  // Then the player with the value in those three cells has won the game
// else
  // No one won on this turn, check if there are any empty cells

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


// who's turn is it next?
// the opposite of the currentPlayer
// changePlayer
// If currentPlayer is X
// then change the current player to O
// If the currentPlayer is O
// then change the current player to X




//switch player each turn
// const changePlayer = function (player) {
//   player =
// };

// const gameOver = function (index, value) {
//
// };
















module.export = {
  allowMove,
  // changePlayer,
  gameOver,
};
