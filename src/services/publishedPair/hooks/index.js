'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const populatePairs = hooks.populate('publishedPairsDetails', {service: 'users', field: 'publishedPairs'})


exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [populatePairs],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
