const User = require('../models/User');
const Post = require('../models/Post');

module.exports = {
  async show(req, res) {
    const { username } = req.params;
    const user = await User.findOne(username);

    const posts = await Post.find(username)
    

    return res.json(posts);
  }
}