const express = require("express");
const router = express.Router();
const verify = require('./token/verifyToken');

const signupController = require('./Controllers/signupController');
const authController = require('./Controllers/authController');
const postsController = require('./Controllers/postsController');
const profileController = require('./Controllers/profileController');

router.post('/signup', signupController.store);
router.post('/auth', authController.store);
router.get('/home', verify, postsController.index);
/*
router.post('/home', verify, postsController.store);
router.get('/:id', profileController.show);*/

module.exports = router;