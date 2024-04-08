const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");

class AirplaneRepository extends CrudRepository{
    constructor() {
        super(Airplane);
    }
    async createAirplane(data) {
        const response = await Airplane.create(data);
        return response;
   }
     
}

module.exports = AirplaneRepository;