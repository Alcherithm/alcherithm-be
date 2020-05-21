const resources = require('./resourcesData');

const challenges = [
  {
    category: 'For Each',
    number: 1, 
    description: `
Write a function named greeting that takes in a string and returns the string in all uppercase letters.

Then, write a function named speaker that takes in a string and a callback function. The speaker function should return the string in all uppercase letters only by invoking the callback.`.trim(),   
    starterCode: `
export const greeting = (word) => {
  // Solution code here...
};
    
export const speaker = (message, callback) => {
    // Solution code here...
};`.trim(),
    test: `
test('It should return the message with all uppercase characters', assert => {
    const result = speaker('hello Bootcamp 2 students!', greeting);
    assert.equal(result, 'HELLO BOOTCAMP 2 STUDENTS!');
});`.trim(),
    resources: resources.forEach
  }
];

module.exports = challenges;
