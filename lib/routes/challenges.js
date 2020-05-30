const { Router } = require('express');
const Challenge = require('../models/Challenge');

module.exports = Router()

  // better to use params here instead of query string
  // query strings are usually for filtering results
  .get('/user:/:userId', (req, res, next) => {
    Challenge
      .getAllChallengesWithUserData(req.params.userId)
      .then(challenges => res.send(challenges))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Challenge
      .findById(req.params.id)
      .then(challenge => res.send(challenge))
      .catch(next);
  });
