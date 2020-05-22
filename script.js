require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');

const seed = require('./db/seed.js');

seed()
  .then(console.log)
  .catch(console.error)
  .finally(() => mongoose.connection.close());
