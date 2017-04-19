'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('makeAdmin service', function() {
  it('registered the makeAdmins service', () => {
    assert.ok(app.service('makeAdmins'));
  });
});
