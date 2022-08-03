const express = require("express");
const { isAuthentication } = require("../controller/auth");
const { RegisterUser, loginUser, LogOut, forgotPassword, resetPassword, getUserDetails, updateUserPassword, updateProfile } = require("../controller/userController");
const router = express.Router();

router.post('/register', RegisterUser);
router.post('/loginUser', loginUser);
router.get('/myProfile', isAuthentication, getUserDetails);
router.put('/myProfile/update', isAuthentication, updateProfile);
router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword);
router.put('/password/update', isAuthentication, updateUserPassword)
router.get('/logout', LogOut);

module.exports = router;