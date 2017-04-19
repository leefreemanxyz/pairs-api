'use strict';

// src/services/user/hooks/makeAdmin.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html
const errors = require('feathers-errors');

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    if(!hook.params.user.admin){
      throw new errors.Forbidden('You need to be an admin to do that')
    }
    console.log(hook.params.user.admin)

  };
};
