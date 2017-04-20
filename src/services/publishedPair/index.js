'use strict';

const service = require('feathers-mongoose');
const publishedPair = require('./publishedPair-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: publishedPair,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/publishedPairs', service(options));

  // Get our initialize service to that we can bind hooks
  const publishedPairService = app.service('/publishedPairs');

  // Set up our before hooks
  publishedPairService.before(hooks.before);

  // Set up our after hooks
  publishedPairService.after(hooks.after);
};
