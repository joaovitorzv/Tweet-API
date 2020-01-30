const User = require('../models/User');
const Post = require('../models/Post');

module.exports = {
  async index(req, res) {
    const { tweet } = req.body;

    if(!tweet) {
      const posts = await Post.find();
      return res.json(posts);
    }else {
      // Get Author from Cached Token
      const author = (req.user._id);
      // On click count one like
      const likes = 0;
      // Save post into array in user collection
      const post = await Post.create({ tweet, likes, author });
      const posts = await Post.find();
      return res.json(posts);
    }
  }
}