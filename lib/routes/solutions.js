const  { Router } = require('express');
const User = require('../models/User');
const Challenge = require('../models/Challenge');
const Solution = require('../models/Solution');

module.exports = Router()
  .post('/', (req, res, next) => {
    Solution
      .create(req.body)
      .then(solution => res.send(solution))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Solution
      .find({ challengeId: req.body })
      .then(solutions => res.send(solutions))
      .catch(next); 
  });

