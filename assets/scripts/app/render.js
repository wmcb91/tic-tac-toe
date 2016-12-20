'use strict';

const app = require('../app');

const createGame = () => {
    app.game = {
      "cells": ["","","","","","","","",""],
      "over": false
    };
    app.activePlayer = 'x';
    return app.activePlayer;
};

module.exports = {
  createGame,
};
