const express = require("express");
const { RegisterUser, loginUser, LogOut } = require("../controller/userController");
const router = express.Router();

router.post('/register', RegisterUser);
router.post('/loginUser', loginUser);
router.get('/logout', LogOut);

module.exports = router;