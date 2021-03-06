'use strict';

const addToBatch = require('./addToBatch');

const restrictToAdmin = require('./restrictToAdmin');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const populateStudents = hooks.populate('studentsDetails', {service: 'users', field: 'students'})


exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [restrictToAdmin()],
  update: [addToBatch()],
  patch: [addToBatch()],
  remove: []
};

exports.after = {
  all: [populateStudents],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
