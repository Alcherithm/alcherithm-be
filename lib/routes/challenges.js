const { Router } = require('express');
const Challenge = require('../models/Challenge');

module.exports = Router()

  .get('/', (req, res, next) => {
    Challenge 
      .getChallengesWithUserData(req.query.userId)
      .then(challenges => res.send(challenges))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Challenge
      .findById(req.params.id)
      .then(challenge => res.send(challenge))
      .catch(next);
  });
