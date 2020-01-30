const User = require('../models/User');

module.exports = {
  async index(req, res) {
    users = await User.find();
    return res.json(users);
  }
}