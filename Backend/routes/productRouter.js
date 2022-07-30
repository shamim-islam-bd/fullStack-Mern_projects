const express = require('express');
const { isAuthentication , authorizationROle} = require('../controller/auth');
const router = express.Router();
const { getAllProducts, createProduct, updateProduct, deleteProduct,getSingleProduct } = require('../controller/productController');


router.get("/", isAuthentication, getAllProducts);
router.get("/:id", getSingleProduct);
router.post("/create-product", isAuthentication, authorizationROle("admin"), createProduct);
router.put("/:id", isAuthentication, authorizationROle("admin"), updateProduct);
router.delete("/:id", isAuthentication, authorizationROle("admin"), deleteProduct);


module.exports = router;