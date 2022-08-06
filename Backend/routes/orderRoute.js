const express = require('express');
const router = express.Router();
const { newOrder, getSingleOrder, getAllOrders, updateOrder, MyOrders, deleteOrder } = require("../controller/orderController");
const { isAuthentication , authorizationROle} = require('../controller/auth');

// User Deals--
router.post('/newOrder', isAuthentication, newOrder);
router.get('/myOrders', isAuthentication, MyOrders);
router.get('/:id', isAuthentication, getSingleOrder);

// Admin deals--
router.get('/admin/allOrders', isAuthentication, authorizationROle("Admin"), getAllOrders);
router.put('/admin/updateOrder/:id', isAuthentication, authorizationROle("Admin"), updateOrder);
router.delete('/admin/deleteOrder/:id', isAuthentication, authorizationROle("Admin"), deleteOrder);

module.exports = router;


// if didn't exports router it'll show this error
// error: Router.use() requires a middleware function but got a Object