'use strict';

const assert = require('assert');
const restrictCreateToAdmin = require('../../../../src/services/pair/hooks/restrictCreateToAdmin.js');

describe('pair restrictCreateToAdmin hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    restrictCreateToAdmin()(mockHook);

    assert.ok(mockHook.restrictCreateToAdmin);
  });
});
