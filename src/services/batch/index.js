'use strict';

const service = require('feathers-mongoose');
const batch = require('./batch-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: batch,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/batches', service(options));

  // Get our initialize service to that we can bind hooks
  const batchService = app.service('/batches');

  // Set up our before hooks
  batchService.before(hooks.before);

  // Set up our after hooks
  batchService.after(hooks.after);
};
