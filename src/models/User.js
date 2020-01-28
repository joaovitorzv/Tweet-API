const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    unique: true,
    required: true
  },
  city: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);