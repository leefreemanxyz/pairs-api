'use strict';

// pair-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pairSchema = new Schema({
  pairs: { type: Array, required: true },
  batch:  [Schema.Types.ObjectId] ,
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const pairModel = mongoose.model('pair', pairSchema);

module.exports = pairModel;
