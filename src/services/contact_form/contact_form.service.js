// Initializes the `contact_form` service on path `/findc`
const createService = require('feathers-mongoose');
const createModel = require('../../models/contact_form.model');
const hooks = require('./contact_form.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/findc', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('findc');

  service.hooks(hooks);
};
