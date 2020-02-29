const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
require('dotenv').config();
// opts.issuer = process.env.TOKEN_ISSUER;
// opts.audience = process.env.TOKEN_AUDIENCE;

const User = mongoose.model('user');
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_KEY;

const auth = (passport) => {
  const strategy = new JwtStrategy(opts, (payload, done) => {
    User.findById(payload.id, (err, user) => {
      if (err) return done (err);

      if (!user) return done(null, false, { message: 'Unauthorized' });

      passport.serializeUser((user, done) => {
        done (null, user);
      });

      return done(null, user);
    })
  })

  passport.use(strategy);
}

module.exports = auth;