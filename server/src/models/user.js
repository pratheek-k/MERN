const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The name field is required'],
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: [true, 'The email field is required'],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'The password field is required'],
    minlength: 7,
    maxlength: 100
  },
  isDefaultPassword: Boolean,
  isAdmin: Boolean,
  roles: [String]
});

UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  const isPwd = await bcrypt.compare('Password', user.password);
  next();
});

UserSchema.methods.generateAuthToken = function () {
  const user = this;
  const userDetails = {
    id: user._id,
    name: user.name,
    email: user.email
  };

  const token = jwt.sign(userDetails, process.env.JWT_KEY, { expiresIn: 86400 });
  // user.tokens = user.tokens.concat({ token });
  return token;
}

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error({ email: 'Email not found' });

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) throw new Error('Invalid login credentials');

  return user;
}

module.exports = User = mongoose.model('user', UserSchema);

// TODO: Implement schema validation