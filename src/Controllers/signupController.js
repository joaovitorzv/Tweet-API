const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
  async store(req, res) {
    var { name, username, city, password } = req.body;

    // Hashing password
    const saltRounds = 10;
    var hash = await bcrypt.hash(password, saltRounds);

    // Verify if exists and save
    let usernameVerify = await User.findOne({ username });

    if(!usernameVerify) {
      user = await User.create({
        name,
        username,
        city,
        password: hash
      });
    } else {
      return res.json({ message: "this username already exists" });
    }

    return res.json(user);
  }
}
