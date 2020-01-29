const User = require('../models/User');
const Post = require('../models/Post')

module.exports = {
  async index(req, res) {
    // Get Author from Cached Token
    const { tweet, likes, author } = req.body;
    const user = await User.findOne({ _id: author });
    user.posts.push({ tweet, likes, author });
    user.save();

    return res.json(user);
  } 
}