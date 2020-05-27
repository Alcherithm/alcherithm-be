const User = require('../lib/models/User');
const Challenge = require('../lib/models/Challenge');
const Solution = require('../lib/models/Solution');
const challenges = require('./challenges-data');
const solutions = require('./solutions-data');

module.exports = async() => {
  const codeChallenges = await Challenge.create(challenges);

  const users = await User.create([{
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
  }, {
    firstName: 'Boo',
    lastName: 'Oflaherty',
    email: 'boo@domain.com',
    password: 'butters14',
    cohort: 'Spring 2020'
  }, {
    firstName: 'Ella',
    lastName: 'Oflaherty',
    email: 'ella@domain.com',
    password: 'char14',
    cohort: 'Spring 2020'
  }]);

  await Solution.create(solutions(users, codeChallenges));
};
