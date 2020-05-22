const User = require('../lib/models/User');
const Challenge = require('../lib/models/Challenge');
const challenges = require('./challenges-data');

module.exports = async() => {
  await Challenge.create(challenges);

  await User.create([{
    firstName: 'Charlotte',
    lastName: 'Katze',
    email: 'charlotte@domain.com',
    password: 'butters13',
    cohort: 'Winter 2020'
  }, {
    firstName: 'Wilmington',
    lastName: 'Katze',
    email: 'will@domain.com',
    password: 'char13',
    cohort: 'Winter 2020'
  }]);

  await Challenge.create(challenges);
};
