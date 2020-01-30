const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
      username: String,
      tweet: String,
      likes: Number,
      author: String
});

module.exports = mongoose.model('Post', PostSchema);