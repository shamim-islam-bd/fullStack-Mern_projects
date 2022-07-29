const express = require('express');
const { isAuthentication , authorizationROle} = require('../controller/auth');
const router = express.Router();
const { getAllProducts, createProduct, updateProduct, deleteProduct,getSingleProduct } = require('../controller/productController');


router.get("/", isAuthentication, authorizationROle("Admin"), getAllProducts);
router.get("/:id", getSingleProduct);
router.post("/create-product", isAuthentication, createProduct);
router.put("/:id", isAuthentication, updateProduct);
router.delete("/:id", isAuthentication, deleteProduct);


module.exports = router;