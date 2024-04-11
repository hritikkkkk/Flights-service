const { StatusCodes } = require("http-status-codes");
const { cityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

const createCity = async (req, res) => {
  try {
    const city = await cityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

async function getCities(req, res) {
  try {
    const city = await cityService.getCities();
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getCity(req, res) {
  try {
    const city = await cityService.getCity(req.params.id);
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  getCities,
  getCity,
};
