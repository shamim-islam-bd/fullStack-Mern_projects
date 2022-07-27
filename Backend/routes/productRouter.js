const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct, updateProduct, deleteProduct,getProduct } = require('../controller/productController');


router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/create-product", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


module.exports = router;