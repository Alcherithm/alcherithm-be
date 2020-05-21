const User = require('../lib/models/User');

module.exports = async() => {
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
};
