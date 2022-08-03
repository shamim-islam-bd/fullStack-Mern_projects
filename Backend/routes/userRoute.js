const express = require("express");
const { RegisterUser, loginUser, LogOut, forgotPassword, resetPassword } = require("../controller/userController");
const router = express.Router();

router.post('/register', RegisterUser);
router.post('/loginUser', loginUser);
router.post('/password/forgot', forgotPassword)
router.put('/password/reset/:token', resetPassword)
router.get('/logout', LogOut);

module.exports = router;