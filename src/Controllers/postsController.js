const User = require('../models/User');
const Post = require('../models/Post');

module.exports = {
  async index(req, res) {
    const posts = await Post.find();
    return res.json(posts); 
  },

  async store(req, res) {
    const { tweet } = req.body;
     
    // Get Author from Cached Token
    const author = (req.user._id);
    // On click count one like
    const likes = 0;
    // Get username from user logged in
    user = await User.findOne({ _id:author });
      
    await Post.create({
      username: user.username, 
      tweet,
      likes, 
      author 
    });

    const posts = await Post.find();
    return res.json(posts);
  }
}