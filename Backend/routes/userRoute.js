const express = require("express");
const { RegisterUser, loginUser } = require("../controller/userController");
const router = express.Router();

router.post('/register', RegisterUser);
router.post('/loginUser', loginUser);

module.exports = router;