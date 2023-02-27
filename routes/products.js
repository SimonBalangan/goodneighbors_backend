const express = require("express");
const firebaseUploader = require('../middleware/upload')
const router = express.Router();
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.route("/products").get(getAllProducts).post(firebaseUploader.single('image'), createProduct);

router
  .route("/products/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
