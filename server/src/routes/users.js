const express = require('express');
const passport = require('passport');
const registerValidate = require('../validation/register');
const loginValidate = require('../validation/login');
const User = require('../models/User');
const config = require('../config/config');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { errors, isValid } = loginValidate(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);

    if (!user) return res.status(401).send({ error: 'Login failed! Check credentials' });

    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/all',
  (req, res, next) => {
    User.find({}, 'name')
      .then(data => res.json(data))
      .catch(next)
  }
);

router.post('/add',
  async (req, res) => {
    const { errors, isValid } = registerValidate(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    try {
      const user = new User(req.body);
      const roles = ['user'];
      if (user.isAdmin) {
        roles.push('admin');
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