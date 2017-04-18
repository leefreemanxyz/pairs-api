'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('pairs service', function() {
  it('registered the pairs service', () => {
    assert.ok(app.service('pairs'));
  });
});
