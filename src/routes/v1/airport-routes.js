const express = require("express");
const router = express.Router();

const { AirportController } = require("../../controllers");
const { airportMiddleware } = require("../../middlewares");

router.post(
  "/",
  airportMiddleware.validateCreateRequest,
  AirportController.createAirport
);

module.exports = router;
