'use strict';

const assert = require('assert');
const makeAdmin = require('../../../../src/services/user/hooks/makeAdmin.js');

describe('user makeAdmin hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    makeAdmin()(mockHook);

    assert.ok(mockHook.makeAdmin);
  });
});
