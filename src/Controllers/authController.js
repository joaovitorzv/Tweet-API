const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  async store(req, res) {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send('This username not exists');
    
    const validPass = await bcrypt.compareSync(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Password incorrect');

    // create and assign token
    const token = jwt.sign({ _id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).json({token: token});
  }
}