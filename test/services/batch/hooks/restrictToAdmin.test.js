'use strict';

const assert = require('assert');
const restrictToAdmin = require('../../../../src/services/batch/hooks/restrictToAdmin.js');

describe('batch restrictToAdmin hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    restrictToAdmin()(mockHook);

    assert.ok(mockHook.restrictToAdmin);
  });
});
