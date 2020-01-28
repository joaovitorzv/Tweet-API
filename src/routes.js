const express = require("express");
const router = express.Router();

const userController = require('./Controllers/signupController');
const authController = require('./Controllers/authControler');

router.post('/signup', userController.store);
router.post('/auth', authController.index);

module.exports = router;