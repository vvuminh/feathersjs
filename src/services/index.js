const contact = require('./contact/contact.service.js');
const abc = require('./abc/abc.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(contact);
  app.configure(abc);
};
