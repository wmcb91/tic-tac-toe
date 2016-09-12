'use strict';

// GET	/games	games#index
// POST	/games	games#create
// GET	/games/:id	games#show
// PATCH	/games/:id	games#update
// GET	/games/:id/watch	games#watch

const app = require('../app');

// need to include way to insert [?over=] query

const indexGames = () => {
  console.log('index request success');
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


module.exports = {
  indexGames,
  createGame,
  // showGame,
  updateGame,
  // watch,
};
