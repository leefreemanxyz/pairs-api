'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('batch service', function() {
  it('registered the batches service', () => {
    assert.ok(app.service('batches'));
  });
});
