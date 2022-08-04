const express = require('express');
const { isAuthentication , authorizationROle} = require('../controller/auth');
const router = express.Router();
const { getAllProducts, createProduct, updateProduct, deleteProduct,getSingleProduct } = require('../controller/productController');


router.get("/products", isAuthentication, getAllProducts);
router.get("/product/:id", getSingleProduct);
router.post("/admin/product/create-product", isAuthentication, authorizationROle("admin"), createProduct);
router.put("/admin/product/:id", isAuthentication, authorizationROle("admin"), updateProduct);
router.delete("/admin/product/:id", isAuthentication, authorizationROle("admin"), deleteProduct);

// router.route("/admin/product/:id")
//   .get(getSingleProduct)
//   .put(isAuthentication, authorizationROle("admin"), updateProduct)
//   .delete(isAuthentication, authorizationROle("admin"), deleteProduct)


module.exports = router;