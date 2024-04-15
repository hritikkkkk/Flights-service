const { flightController } = require("../../controllers");

const express = require("express");
const router = express.Router();

router.post("/", flightController.createFlight);
module.exports = router;
