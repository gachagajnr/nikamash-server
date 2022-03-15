// Initializes the `restock-summary` service on path `/restock-summary`
const { RestockSummary } = require('./restock-summary.class');
const createModel = require('../../models/restock-summary.model');
const hooks = require('./restock-summary.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/restock-summary', new RestockSummary(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('restock-summary');

  service.hooks(hooks);
};
