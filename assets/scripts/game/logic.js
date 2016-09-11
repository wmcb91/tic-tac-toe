'use strict';

const app = require('../app');
const ui = require('./ui');
const api = require('./api');
const render = require('../app/render');


// on click --> is move allowed?
// If the cell is occupied (get data from memory or server?)
// or If the game is over
  // Then the move is not allowed and nothing happens (console log)
// else
  // The move is allowed
  // Call UI function to update the board is called and an
  // Call API function is called to update the server

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
    console.log('allow move = true');
    return true;
  }
};

// Did the move win the game?
// Add the move to the current game data to check for winner
// If there are three cells in the same row, column or diagnal with the same value
  // Then the player with the value in those three cells has won the game.
  // Call UI function to prompt game over modal with Winner message
  // Call API function to PATCH game
// else
  // No one won on this turn, check if there are any empty cells

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
      //game is over
      // call ui function to display game winner
      // set game.over === true
      // call API function to patch 'over' to true
      console.log('Someone won');
      return true;
    }
    else {
      console.log('game won = false');
      return false;
    }
};

// Are there any empty cells left?
// Add the move to the current game data to check for empty cells
// If there are no empty cells (a nobody has won)
  // Then the game is a tie
  // Call UI Function to prompt game tie modal
  // Call API function to PATCH server to set 'Over' to true
// else
  // Do nothing, move on to see who's turn is next

const gameTied = function (index, value) {
  let cells = app.user.game.cells;
  cells[index] = value;

  if (cells.indexOf('') === -1) {
    console.log('Game ended in tie');
    // run UI function
    // set game.over === true
    // run API patch function
    return true;
  }
  else {
    console.log('no tie, keep playing');
    return false;
  }
};

// who's turn is it next?
// the opposite of the currentPlayer if move was allowed
// changePlayer
// If currentPlayer is X
  // then change the current player to O
  // Call UI function to display it is O's turn
// If the currentPlayer is O
  // then change the current player to X
  // Call UI function to display it is X's turn

const changePlayer = function (player) {
  // if (allowMove === false) {
  //   console.log('no player change, move not allowed');
  //   return;
  // }
  if (player === 'X') {
    console.log('next up is O');
    return currentPlayer === 'O';
  }
  else {
    console.log('next up is X');
    return currentPlayer === 'X';
  }
};

// compile information and send it to UI and API
// spitting in DRY's face...
const executeTurn = function (index) {
  let value = currentPlayer;
  console.log('current player is ', value);
  // is valid move?
  // call UI function to update game board
  if (allowMove(index) !== true) {
    console.log('invalid move');
    return;
  }

  if (allowMove(index) === true) {
    console.log('valid move');
    ui.updateBoard(index, value);
  }

  if (gameWon === true) {
    //create gameOver function and take argument player --> pass currentPlayer
    console.log('game won');
    ui.gameOver(currentPlayer);
    api.updateGame(index, value, true)
      .done(render.updateGameSuccess)
      .fail(render.updateGameFailure);
  }

  //to repeat less could I write code saying if gameWon or gameTied is true,
  // pass ui.gameOver a different argument depending on which is true??
  if (gameTied === true && gameWon === false) {
    //pass game tied to gameOver
    console.log('game tied');
    ui.gameOver(gameTied);
    api.updateGame(index, value, true)
      .done(render.updateGameSuccess)
      .fail(render.updateGameFailure);
  }
  else {
    console.log('next turn');
    api.updateGame(index, value, false)
      .done(render.updateGameSuccess)
      .fail(render.updateGameFailure);
    changePlayer(currentPlayer);
    console.log('player ' + currentPlayer + ' is up');
    return;
  }
};

module.exports = {
  executeTurn,
  // allowMove,
  // gameWon,
  // gameTied,
  // // gameOver,
  // changePlayer,
};
