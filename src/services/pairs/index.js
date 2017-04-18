'use strict';

const service = require('feathers-mongoose');
const pairs = require('./pairs-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: pairs,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/pairs', service(options));

  // Get our initialize service to that we can bind hooks
  const pairsService = app.service('/pairs');

  // Set up our before hooks
  pairsService.before(hooks.before);

  // Set up our after hooks
  pairsService.after(hooks.after);
};
