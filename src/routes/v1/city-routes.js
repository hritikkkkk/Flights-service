const express = require("express");
const { cityController } = require("../../controllers");
const { cityMiddleware } = require("../../middlewares");
const router = express.Router();

router.post(
  "/",
  cityMiddleware.validateCreateRequest,
  cityController.createCity
);

router.get("/", cityController.getCities);

router.get("/:id", cityController.getCity);

router.delete("/:id", cityController.destroyCity);

module.exports = router;
