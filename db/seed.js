const User = require('../lib/models/User');
const Challenge = require('../lib/models/Challenge');
const Solution = require('../lib/models/Solution');
const challenges = require('./challenges-data');

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
  }]);

  await Solution.create([{
    userId: users[0]._id,
    challengeId: codeChallenges[0]._id,
    passed: true,
    solution: `
export const greeting = word => {
  return word.toUpperCase();
};

export const speaker = (message, callback) => {
  return callback(message);
  };
}`
  },
  {
    userId: users[0]._id,
    challengeId: codeChallenges[1]._id,
    passed: true,
    solution: `
export const addValues = (arr, value) => {
  arr.push(value);
};

export const addNumbers = (num, arr, times, callback) => {
  for(let i = 0; i < times; i++) {
      callback(arr, num);
  }
  return arr;
};`
  },
  {
    userId: users[0]._id,
    challengeId: codeChallenges[2]._id,
    passed: true,
    solution: `
export const removeOne = (num, arr) => {
  if(num % 3 === 2) {
      arr.pop();  
  }
};

export const removeElements = (arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
      const arrayItem = arr[i];
      callback(arrayItem, arr);
  }
  return arr;
};`
  },
  {
    userId: users[1]._id,
    challengeId: codeChallenges[0]._id,
    passed: true,
    solution: `
export const greeting = word => {
  return word.toUpperCase();
};

export const speaker = (message, callback) => {
  return callback(message);
  };
}`
  },
  {
    userId: users[1]._id,
    challengeId: codeChallenges[2]._id,
    passed: true,
    solution: `
export const removeOne = (num, arr) => {
  if(num % 3 === 2) {
      arr.pop();  
  }
};

export const removeElements = (arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
      const arrayItem = arr[i];
      callback(arrayItem, arr);
  }
  return arr;
};`
  }]);
