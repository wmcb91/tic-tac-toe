'use strict';

// GET	/games	games#index
// POST	/games	games#create
// GET	/games/:id	games#show
// PATCH	/games/:id	games#update
// GET	/games/:id/watch	games#watch

const app = require('../app');

// need to include way to insert [?over=] query

const index = () => {
  console.log('index success');
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const create = () => {
  console.log('create success');
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: '',
  });
};

const show = (data) => {
  console.log(data);
  return $.ajax({
    //url app.game correct?
    url: app.host + '/games' + app.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const update = (data) => {
  console.log(data);
  return $.ajax({
    url: app.host + '/sign-up' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const watch = (data) => {
  console.log(data);
  return $.ajax({
    url: app.host + '/sign-up' + app.game.id/watch,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};


module.exports = {
  index,
  create,
  show,
  update,
  watch,
};
