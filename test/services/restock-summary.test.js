const assert = require('assert');
const app = require('../../src/app');

describe('\'restock-summary\' service', () => {
  it('registered the service', () => {
    const service = app.service('restock-summary');

    assert.ok(service, 'Registered the service');
  });
});
