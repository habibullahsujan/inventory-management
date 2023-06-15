const express = require("express");
const {
  createStore,
  getStore,
  updateStore,
  deleteStore,
} = require("../controllers/store.controller");
const router = express.Router();

router
  .route("/")
  .post(createStore)
  .get(getStore)
  .patch(updateStore)
  .delete(deleteStore);
module.exports = router;
