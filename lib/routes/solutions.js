const { Router } = require('express');
const Solution = require('../models/Solution');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()
  .post('/', ensureAuth, (req, res, next) => {
    Solution
      .create({ ...req.body, userId: req.user._id })
      .then(solution => res.send(solution))
      .catch(next);
  })

  // since you have separate front-end services for all this data
  // its better to use different routes to segregate these calls
  // instead of if statements
  .get('/user/:userId', (req, res, next) => {
    Solution
      .getChallengesByUser(req.params.userId)
      .then(solutionData => res.send(solutionData))
      .catch(next);
  })

  .get('/challenge/:challengeId/user/:userId', (req, res, next) => {
    Solution
      .find(req.params)
      .select({ solution: true, createdAt: true, passed: true })
      .then(solutions => res.send(solutions))
      .catch(next);
  })

  .get('/challenge/:challengeId/passed', (req, res, next) => {
    Solution
      .find({ challengeId: req.query.challengeId, passed: true })
      .select({ solution: true })
      .then(solutions => res.send(solutions))
      .catch(next);
  })

  .get('/results/:id', (req, res, next) => {
    Solution.findById(req.params.id)
      .then(solution => {
        return Promise.all([
          Solution.find({ challengeId: solution.challengeId, userId: solution.userId }).lean(),
          Solution.findOne({ challengeId: solution.challengeId, userId: { $ne:solution.userId } }).lean()
        ]);
      })
      .then(([userSolutions, suggestedSolution]) => res.send({ userSolutions, suggestedSolution }))
      .catch(next);
  });
