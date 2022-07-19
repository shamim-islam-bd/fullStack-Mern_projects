const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct, updateProduct } = require('../controller/ProductController');


router.get("/", getAllProducts);
router.post("/create-product", createProduct);
router.put("/create-product/:id", updateProduct);


module.exports = router;