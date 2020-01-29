const express = require("express");
const router = express.Router();
const verify = require('./token/verifyToken');

const userController = require('./Controllers/signupController');
const authController = require('./Controllers/authController');
const postsController = require('./Controllers/postsController');

router.post('/signup', userController.store);
router.post('/auth', authController.store);
router.post('/', verify, postsController.index);

module.exports = router;