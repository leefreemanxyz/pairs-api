'use strict';

// batch-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const batchSchema = new Schema({
  startDate: {type:Date, required:true},
  endDate: {type:Date, required:true},
  students: [Schema.Types.ObjectId],
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const batchModel = mongoose.model('batch', batchSchema);

module.exports = batchModel;
