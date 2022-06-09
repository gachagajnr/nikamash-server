const { authenticate } = require("@feathersjs/authentication").hooks;

const processOpeningBalances = require("../../hooks/process-opening-balances");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processOpeningBalances()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
