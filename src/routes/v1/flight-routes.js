const { flightController } = require("../../controllers");
const { flightMiddleware } = require("../../middlewares");

const express = require("express");
const router = express.Router();

router.post(
  "/",
  flightMiddleware.validateCreateRequest,
  flightController.createFlight
);
module.exports = router;
