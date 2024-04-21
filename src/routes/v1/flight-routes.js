const { flightController } = require("../../controllers");
const { flightMiddleware } = require("../../middlewares");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  flightMiddleware.validateCreateRequest,
  flightController.createFlight
);

router.get("/", flightController.getAllFlights);

router.get("/:id", flightController.getFlight);

module.exports = router;
