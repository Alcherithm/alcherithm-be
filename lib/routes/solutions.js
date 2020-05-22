const  { Router } = require('express');
const User = require('../models/User');
const Challenge = require('../models/Challenge');
const Solution = require('../models/Solution');

module.exports = Router();
  .post