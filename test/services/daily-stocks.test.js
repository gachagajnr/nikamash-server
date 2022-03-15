const assert = require('assert');
const app = require('../../src/app');

describe('\'daily-stocks\' service', () => {
  it('registered the service', () => {
    const service = app.service('daily-stocks');

    assert.ok(service, 'Registered the service');
  });
});
