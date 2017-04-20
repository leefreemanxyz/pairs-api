'use strict';
const publishedPair = require('./publishedPair');
const batch = require('./batch');
const pair = require('./pair');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(pair);
  app.configure(batch);
  app.configure(publishedPair);
};
