'use strict';
const makeAdmin = require('./makeAdmin');
const pairs = require('./pairs');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(pairs);
  app.configure(makeAdmin);
};
