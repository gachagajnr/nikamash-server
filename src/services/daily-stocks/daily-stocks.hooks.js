const sanitizeDailyStock = require("../../hooks/sanitize-daily-stock");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [sanitizeDailyStock()],
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
