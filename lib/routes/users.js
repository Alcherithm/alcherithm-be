const { Router } = require('express');
const Users = require('../models/Users');

module.exports = Router()

  .post('/', (req, res, next) => {
    Users
      .create(req.body)
      .then(users => res.send(users))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Users
      .find()
      .then(users => res.send(users))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Users
      .findById(req.params.id)
      .then(actor => res.send(actor))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Users
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(users => res.send(users))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Users
      .findByIdAndDelete(req.params.id)
      .then(users => res.send(users))
      .catch(next);
  });


