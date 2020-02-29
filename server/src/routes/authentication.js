const express = require('express');
const loginValidate = require('../validation/login');
const User = require('../models/User');

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

module.exports = router;