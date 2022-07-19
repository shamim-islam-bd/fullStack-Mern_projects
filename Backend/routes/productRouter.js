const express = require('express');
const { getAllProducts } = require('../controller/ProductController');
const router = express.Router();


router.get("/", getAllProducts)

module.exports = router;