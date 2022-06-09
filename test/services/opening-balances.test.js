const assert = require('assert');
const app = require('../../src/app');

describe('\'opening-balances\' service', () => {
  it('registered the service', () => {
    const service = app.service('opening-balances');

    assert.ok(service, 'Registered the service');
  });
});
