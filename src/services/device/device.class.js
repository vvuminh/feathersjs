/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    if (!options.Model || !options.Model.modelName) {
      throw new Error('You must provide a Mongoose Model');
    }
    this.options = options || {};
  }

  get Model () {
    return this.options.Model;
  }

  async find (params) {
    //const { filters, query, paginate } = this.filterQuery(params);
    console.log('afbcasdfl',params.query,params.provider,params.route);
    
    return this.Model.find({"contact.phone":"0918751454"});
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
