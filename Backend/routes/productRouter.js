const express = require('express');
const { isAuthentication } = require('../controller/auth');
const router = express.Router();
const { getAllProducts, createProduct, updateProduct, deleteProduct,getProduct } = require('../controller/productController');


router.get("/", isAuthentication, getAllProducts);
router.get("/:id", getProduct);
router.post("/create-product", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


module.exports = router;