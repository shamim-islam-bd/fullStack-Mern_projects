const express = require("express");
const { isAuthentication } = require("../controller/auth");
const { RegisterUser, loginUser, LogOut, forgotPassword, resetPassword, getUserDetails, updateUserPassword, updateProfile, getAllUsers, getSingleUser, updateRole, DeleteUser, createReview } = require("../controller/userController");
const router = express.Router();

router.post('/register', RegisterUser);
router.post('/loginUser', loginUser);
router.get('/myProfile', isAuthentication, getUserDetails);
router.put('/myProfile/update', isAuthentication, updateProfile);
router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword);
router.put('/password/update', isAuthentication, updateUserPassword);
router.get('/logout', LogOut);

router.put('/review', isAuthentication, createReview);

router.get('/admin/getAllUsers', isAuthentication, getAllUsers);
router.get('/admin/user/:id', isAuthentication, getSingleUser);
router.put('/admin/updateRole/:id', isAuthentication, updateRole);
router.delete('/admin/deleteUser/:id', isAuthentication, DeleteUser);

module.exports = router;