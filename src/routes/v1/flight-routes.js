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

router.patch(
  "/:id/seats",
  flightMiddleware.validateUpdateSeatsRequest,
  flightController.updateSeats
);

module.exports = router;
