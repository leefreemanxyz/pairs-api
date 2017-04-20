'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('publishedPair service', function() {
  it('registered the publishedPairs service', () => {
    assert.ok(app.service('publishedPairs'));
  });
});
