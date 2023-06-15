const express = require("express");
const {
  createStock,
  getStock,
  updateStock,
  deleteStock,
  getAStock,
} = require("../controllers/stock.controller");
const router = express.Router();

router
  .route("/")
  .post(createStock)
  .get(getStock)
  .patch(updateStock)
  .delete(deleteStock);

router.route("/:id").get(getAStock);
module.exports = router;
