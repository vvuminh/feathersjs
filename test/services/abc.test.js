const assert = require('assert');
const app = require('../../src/app');

describe('\'abc\' service', () => {
  it('registered the service', () => {
    const service = app.service('abc');

    assert.ok(service, 'Registered the service');
  });
});
