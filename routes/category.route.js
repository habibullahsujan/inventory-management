const express = require("express");
const {
  getCategory,
  updateCategory,
  deleteCategory,
  createCategory,
} = require("../controllers/category.controller");
const router = express.Router();

router
  .route("/")
  .get(getCategory)
  .post(createCategory)
  .patch(updateCategory)
  .delete(deleteCategory);

module.exports = router;
