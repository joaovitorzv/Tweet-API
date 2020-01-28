const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
  async index(req, res){
    

    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send('This username not exists');

    const validPass = await bcrypt.compareSync(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Password incorrect');

    res.send('Logged in');
  }
}