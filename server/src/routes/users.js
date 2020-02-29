const express = require('express');
const passport = require('passport');
const registerValidate = require('../validation/register');
const User = require('../models/User');
const config = require('../config/config');

const router = express.Router();

router.get('/all', passport.authenticate(config.configs.auth_strategy),
  (req, res, next) => {
    User.find({}, 'name email')
      .then(data => res.json(data))
      .catch(next)
  }
);

router.post('/add', passport.authenticate(config.configs.auth_strategy),
  async (req, res) => {
    const { errors, isValid } = registerValidate(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    try {
      const user = new User(req.body);

      const roles = ['User'];
      if (user.isAdmin) {
        roles.push('Admin');
      }
      user.roles = roles;

      await user.save();
      const token = await user.generateAuthToken();

      res.status(201).json({ user, token });
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

router.delete('/delete/:id', passport.authenticate(config.configs.auth_strategy),
  (req, res, next) => {
    User.findOneAndDelete({"_id": req.params.id})
      .then(data => res.json(data))
      .catch(next)
  }
);

module.exports = router;