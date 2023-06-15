const express = require("express");
const {
  createBrand,
  getBrand,
  updateBrand,
  deleteBrand,
} = require("../controllers/brand.controller");

const route = express.Router();

route
  .route("/")
  .post(createBrand)
  .get(getBrand)
  .patch(updateBrand)
  .delete(deleteBrand);

module.exports = route;
