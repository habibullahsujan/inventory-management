const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const uploader = require("../middleware/file.uploader");


router.post(
  "/file-upload",
  uploader.single("image"),
  productController.fileUpload
);

router.route("/bulkUpdate").patch(productController.bulkUpdateProducts);
router.route("/bulkDelete").delete(productController.bulkDeleteProduct);
router
  .route("/")
  .get(productController.getProduct)
  .post(productController.createProduct);
router
  .route("/:id")
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
