const { Router } = require('express');
// const User = require('../models/User');
// const Challenge = require('../models/Challenge');
const Solution = require('../models/Solution');

module.exports = Router()
  .post('/', (req, res, next) => {
    Solution
      .create(req.body)
      .then(solution => res.send(solution))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    if(req.query.userId && !req.query.challengeId) {
      // Aggregation on Solution model that takes in userId and groups solutions by the challengeId. Needs to return the category, challengeNumber and instructions (and maybe starter code) from Challenge schema as well as corresponding solutions, dates of completion and passed/failed boolean. This may allow us to save the solutions in state and pass them to the pop up history component (making the function below unnecessary).
    }

    if(req.query.userId && req.query.challengeId) {
      Solution
        .find({ challengeId: req.query.challengeId, userId: req.query.userId })
        .select({ solution: true, createdAt: true, passed: true })
        .then(solutions => res.send(solutions))
        .catch(next);
    }
    
    Solution
      .find({ challengeId: req.query.challengeId, passed: true })
      .select({ solution: true })
      .then(solutions => res.send(solutions))
      .catch(next);
  });

