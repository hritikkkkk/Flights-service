const CrudRepository = require("./crud-repository");
const { Flight, Airplane, Airport } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }
}

module.exports = FlightRepository;
