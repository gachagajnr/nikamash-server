const reduceAvailable = require("../../hooks/reduce-available");

const reduceProfit = require("../../hooks/reduce-profit");

const createStock = require("../../hooks/create-stock");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [reduceAvailable()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [reduceProfit(), createStock()],
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
