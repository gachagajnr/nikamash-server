// Initializes the `daily-stocks` service on path `/daily-stocks`
const { DailyStocks } = require('./daily-stocks.class');
const createModel = require('../../models/daily-stocks.model');
const hooks = require('./daily-stocks.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/daily-stocks', new DailyStocks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('daily-stocks');

  service.hooks(hooks);
};
