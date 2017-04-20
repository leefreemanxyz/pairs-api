'use strict';

// publishedPair-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publishedPairSchema = new Schema({
  publishedPairs: {type:Array, required:true},
  batch:  [Schema.Types.ObjectId],
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const publishedPairModel = mongoose.model('publishedPair', publishedPairSchema);

module.exports = publishedPairModel;
