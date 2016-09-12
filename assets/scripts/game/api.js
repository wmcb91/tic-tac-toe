'use strict';

const app = require('../app');


const indexGames = () => {
  // console.log('index request success');
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const createGame = () => {
  // console.log('create success');
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: '',
  });
};

const updateGame = (index, value, over) => {
  // console.log(index, value, over);
  // console.log('update game has been reached');
  return $.ajax({
    url: app.host + '/games/' + app.user.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
          "game": {
            "cell": {
              "index": index,
              "value": value,
            },
            "over": over
            }
          }
        });
};

// const watchGame = (data) => {
//   console.log(data);
//   return $.ajax({
//     url: app.host + '/sign-up' + app.game.id/watch,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: data,
//   });
// };

// const showGame = (data) => {
//   console.log(data);
//   return $.ajax({
//     //url app.game correct?
//     url: app.host + '/games' + app.game.id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: data,
//   });
// };


module.exports = {
  indexGames,
  createGame,
  // showGame,
  updateGame,
  // watch,
};
