const User = require('../models/User');
const verify = require('../token/verifyToken');

module.exports = {
  async index(req, res) {

    const { tweet, likes } = req.body;
    // Get Author from Cached Token
    const author = (req.user._id);

    // Save post into array in user collection
    const user = await User.findOne({ _id: author });
    user.posts.push({ tweet, likes, author });
    user.save();

    return res.json(user);
  } 
}