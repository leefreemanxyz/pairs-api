'use strict';

// src/services/batch/hooks/addToBatch.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html
const errors = require('feathers-errors')

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    return hook.app.service('batches').get(hook.id)
      .then((batch) => {
        console.log(hook.data)
        const action = hook.data.add ? '$addToSet' : '$pull'
          let data = {}
          data[action] = { students: hook.data.students}
          hook.data = data;
        })
      }
  };
