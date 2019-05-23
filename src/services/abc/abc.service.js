// Initializes the `abc` service on path `/abc`
const createService = require('feathers-mongoose');
const createModel = require('../../models/abc.model');
const hooks = require('./abc.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/abc', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('abc');

  service.hooks(hooks);
};
