const express = require('express');
const router = express.Router();
const { newOrder } = require("../controller/orderController");


router.post('/newOrder', newOrder);

module.exports = router;


// if didn't exports router it'll show this error
// error: Router.use() requires a middleware function but got a Object