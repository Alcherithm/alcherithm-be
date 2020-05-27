const { Router } = require('express');
const User = require('../models/User');

module.exports = Router()

  .get('/', (req, res, next) => {
    User
      .find()
      .then(user => res.send(user))
      .catch(next);
  })

  .get('/:id/counts', (req, res, next) => {
    User
      .getChallengeCounts(req.params.id)
      .then(user => res.send(user))
      .catch(next);
  });



