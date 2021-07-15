

const reduceAvailable = require('../../hooks/reduce-available');

const reduceProfit = require('../../hooks/reduce-profit');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [reduceAvailable()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [reduceProfit()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
