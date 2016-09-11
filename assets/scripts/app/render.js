'use strict';

const app = require('../app');

const createGameSuccess = function(data) {
    app.user.game = data.game;
    console.log('data is ', data);
};

const createGameFailure = function(error) {
    console.log('createGameFailure');
    console.log('error is ', error);
};


const updateGameSuccess = function(data) {
    app.user.game = data.game;
    console.log('data is ', data);
};

const updateGameFailure = function(error) {
    console.log('updateGameFailure');
    console.log('error is ', error);
};

// let currentPlayer = 'X';



// Not ready
// const renderPlayerTurn = (player) => {
//   $('#player-turn').text("Player" + player + "'s turn'");
//
//   //debug
//   console.log('renderPlayerTurn success');
// };
//
// // const renderBoard = (item, id) => {
// //   $('.content > ul').append(
// //     `<li data-id=${id}>${item.text}</li>`
// //   );
// // };
//
// const render = (data) => {
//   renderPlayerTurn(data.player);
//   // data.list.items.forEach((item, index) => {
//   //   renderBoard(item, index);
//   // });
//
//   // debug
//   console.log('render success');
//   console.log('render is', render);
// };

module.exports = {
  // render,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,

};
