const { Router } = require('express');
const User = require('../models/User');

module.exports = Router()

  .post('/', (req, res, next) => {
    User
      .create(req.body)
      .then(users => res.send(users))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    User
      .find()
      .then(users => res.send(users))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    User
      .findById(req.params.id)
      .then(actor => res.send(actor))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    User
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(users => res.send(users))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    User
      .findByIdAndDelete(req.params.id)
      .then(users => res.send(users))
      .catch(next);
  });


