'use strict';

const app = require('../app');

const createGameSuccess = function(data) {
    app.user.game = data.game;
};

const updateGameSuccess = function(data) {
    app.user.game = data.game;
};




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
  updateGameSuccess,
};
