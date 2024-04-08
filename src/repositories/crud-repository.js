const { logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    
      const response = await this.model.create(data);
      return response;
    
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      logger.error("something went wrong in the crudRepo:destroy");
      throw error;
    }
  }
  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      logger.error("something went wrong in the crudRepo:get");
      throw error;
    }
  }
  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      logger.error("something went wrong in the crudRepo:getAll");
      throw error;
    }
  }
  async update(data, id) {
    //data should be an object
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      logger.error("something went wrong in the crudRepo:update");
      throw error;
    }
  }
}


module.exports = CrudRepository;