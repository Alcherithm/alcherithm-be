const { Router } = require('express');
const Challenge = require('../models/Challenge');

module.exports = Router()

  .get('/', (req, res, next) => {
    Challenge 
      .find()
      .then(challenge => res.send(challenge))
      .catch(next);
  });

