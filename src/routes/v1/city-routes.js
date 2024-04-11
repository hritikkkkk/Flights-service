const express = require("express");
const { cityController } = require("../../controllers");
const { cityMiddleware } = require("../../middlewares");
const router = express.Router();

router.post(
  "/",
  cityMiddleware.validateCreateRequest,
  cityController.createCity
);

module.exports = router;
