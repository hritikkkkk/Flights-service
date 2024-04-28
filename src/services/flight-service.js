const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");

const AppError = require("../utils/errors/app-error");
const { Op } = require("sequelize");

const flightRepository = new FlightRepository();

const createFlight = async (data) => {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    if (
      error.name == "SequelizeValidationError" ||
      "SequelizeUniqueConstraintError" ||
      "SequelizeForeignKeyConstraintError" ||
      "SequelizeDatabaseError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Cannot create a new flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getAllFlights = async (query) => {
  let customFilter = {};
  let sortFilter = [];
  const endingTripTime = " 23:59:00";

  if (query.trips) {
    [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
  }
  if (query.price) {
    [minPrice, maxPrice] = query.price.split("-");
    customFilter.price = {
      [Op.between]: [minPrice, maxPrice == undefined ? 20000 : maxPrice],
    };
  }

  if (query.travellers) {
    customFilter.totalSeats = {
      [Op.gte]: query.travellers,
    };
  }

  if (query.tripDate) {
    customFilter.departureTime = {
      [Op.between]: [query.tripDate, query.tripDate + endingTripTime],
    };
  }

  if (query.sort) {
    const queryParams = query.sort.split(",");
    const sortFilters = queryParams.map((param) => param.split("_"));
    sortFilter = sortFilters;
  }

  try {
    const flights = await flightRepository.getAllFlights(
      customFilter,
      sortFilter
    );
    return flights;
  } catch (error) {
    throw new AppError(
      "cannot fetch the data of all the flights".StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getFlight = async (id) => {
  try {
    const flight = await flightRepository.get(id);
    return flight;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The flight you requested is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of the flight",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const updateSeats = async (data) => {
  try {
    const flight = await flightRepository.updateRemainingSeats(
      data.flightId,
      data.seats,
      data.dec
    );
    return flight;
  } catch (error) {
    throw new AppError(
      "cannot update the data of flight seats",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
  updateSeats,
};
