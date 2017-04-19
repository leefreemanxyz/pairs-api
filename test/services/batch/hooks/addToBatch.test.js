'use strict';

const assert = require('assert');
const addToBatch = require('../../../../src/services/batch/hooks/addToBatch.js');

describe('batch addToBatch hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    addToBatch()(mockHook);

    assert.ok(mockHook.addToBatch);
  });
});
