const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
require('dotenv').config();

const User = mongoose.model('user');
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.PASSPORT_KEY;
// opts.issuer = process.env.TOKEN_ISSUER;
// opts.audience = process.env.TOKEN_AUDIENCE;

const auth = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id, function (err, user) {
        if (err) return done(err);

        if (!user) return done(null, false, { message: 'Unauthorized' });

        return done(null, user);
      })
    })
  )
}

module.exports = auth;