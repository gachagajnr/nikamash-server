// Initializes the `opening-balances` service on path `/opening-balances`
const { OpeningBalances } = require('./opening-balances.class');
const createModel = require('../../models/opening-balances.model');
const hooks = require('./opening-balances.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/opening-balances', new OpeningBalances(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('opening-balances');

  service.hooks(hooks);
};
