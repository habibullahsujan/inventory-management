const express = require("express");
const {
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplier.controller");

const router = express.Router();

router
  .route("/")
  .get(getSupplier)
  .post(createSupplier)
  .patch(updateSupplier)
  .delete(deleteSupplier);

module.exports = router;
