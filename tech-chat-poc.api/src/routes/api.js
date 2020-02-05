const express = require ('express');
const User = require('../models/user');

const router = express.Router();

router.get('/users', (req, res, next) => {
  User.find({}, 'name')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/adduser', (req, res, next) => {
  if (req.body.name) {
    User.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  } else {
    res.json({
      error: "The name field is empty"
    })
  }
});

router.delete('/deleteuser/:id', (req, res, next) => {
  User.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;