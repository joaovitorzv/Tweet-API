const User = require('../models/User');
const Post = require('../models/Post');

module.exports = {
  async show(req, res) {
    const { user_id } = req.params;
    
    const user = await User.findOne({username: user_id});
    const posts = await Post.find({username: user_id})
  
    return res.json({user, posts});
  }
}