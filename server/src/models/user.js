const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create schema for user
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name text field is required']
  }
})

// create model for user
const User = mongoose.model('user', UserSchema);

module.exports = User;