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

  .get('/', (req, res, next) => {
    if(!req.query.challengeId && req.query.userId) {
      return Solution
        .getChallengesByUser(req.query.userId)
        .then(solutionData => res.send(solutionData))
        .catch(next);
    }

    if(req.query.userId && req.query.challengeId) {
      return Solution
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
  })

// get all solutions by userId and challengeId - see line 22
//get a solution by challengeId - see line 29.

  .get('/results', (req, res, next) => {
    const solutionObj = {};
    Solution
      .find({ challengeId: req.query.challengeId, userId: req.query.userId })
      .select({ solution: true, createdAt: true, passed: true })
      .then(solution => {
        solutionObj['userSolutionArray'] = solution;
      })
      .then(() => {
        Solution
          .findById(req.params.id)
          .then(solution => {
            solutionObj['suggetedSolution'] = solution;
          });
      })
      .then(() => (res.send(solutionObj)))
      .catch(next);
  });
  
  
