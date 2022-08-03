const express = require("express");
const { RegisterUser, loginUser, LogOut, forgotPassword } = require("../controller/userController");
const router = express.Router();

router.post('/register', RegisterUser);
router.post('/loginUser', loginUser);
router.post('/password/forgot', forgotPassword)
router.get('/logout', LogOut);

module.exports = router;