const express = require("express");
const router = express.Router();
const verify = require('./token/verifyToken');

const userController = require('./Controllers/signupController');
const authController = require('./Controllers/authControler');

router.post('/signup', userController.store);
router.post('/auth', authController.index);
router.get('/', verify, (req, res) => {
  res.send(req.user);
})

module.exports = router;