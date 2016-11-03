'use strict';

const app = require('../app');


const indexGames = () => {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const createGame = () => {
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

module.exports = {
  indexGames,
  createGame,
  updateGame,
};
