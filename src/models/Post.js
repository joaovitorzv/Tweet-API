const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  tweet: String,
  likes: Number,
  author: String
});

module.exports = mongoose.model('Post', PostSchema);