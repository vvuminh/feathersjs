const assert = require('assert');
const app = require('../../src/app');

describe('\'contact_form\' service', () => {
  it('registered the service', () => {
    const service = app.service('findc');

    assert.ok(service, 'Registered the service');
  });
});
