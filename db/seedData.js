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
  },
  {
    category: 'For Each',
    number: 2, 
    description: `
Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

Then, write a function named addNumbers that takes in four arguments:
- A number to be added to an array
- An array into which the number should be added
- The number of times the number should be added
- A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.
Return the modified array.`.trim(),
    starterCode: `
export const addValues = (arr, value) => {
    // Solution code here...
};

export const addNumbers = (num, arr, times, callback) => {
    // Solution code here...
};`.trim(),
    test: `
test('It should add the number 8 to the array five times', assert => {
    const array = [];
    const result = addNumbers(8, array, 5, addValues);
    assert.equal(array, result);
    assert.deepEqual(array, [8, 8, 8, 8, 8]);
});`.trim(),
    resources: resources.forEach
  },
  {
    category: 'For Each',
    number: 3, 
    description: `
Write a function named removeOne that takes in a number and an array. If the number divided by three has a remainder of two, pop one element off of the array. Hint: you may want to look into the modulo operation.

Then, write a function named removeElements that takes in an array and a callback. This function should use a for loop to iterate over the array and invoke the callback once for each element in the array.
Return the modified array.`.trim(),
    starterCode: `
export const removeOne = (num, arr) => {
    // Solution code here...
};

export const removeElements = (arr, callback) => {
    // Solution code here...
};`.trim(),
    test: `
test('It should remove three elements from the array', assert => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = removeElements(array, removeOne);
    assert.equal(array, result);
    assert.deepEqual(array, [1, 2, 3, 4, 5, 6, 7]);
});`.trim(),
    resources: resources.forEach
  },
  {
    category: 'For Each',
    number: 4, 
    description: `
Write a function named removeWithForEach that takes in a number and an array. If the number divided by three has a remainder of two, pop one element off of the array. Hint: you may want to look into the modulo operation.

Then, write a function named removeElements that takes in an array and a callback. This function should use a forEach loop to iterate over the array and invoke the callback once for each element in the array.
Return the modified array.`.trim(),
    starterCode: `
export const removeWithForEach = (arr, callback) => {
    // Solution code here...
};`.trim(),
    test: `
test('It should remove three elements from the array', assert => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = removeWithForEach(array, removeOne);
    assert.equal(array, result);
    assert.deepEqual(array, [1, 2, 3, 4, 5, 6, 7]);
});`.trim(),
    resources: resources.forEach
  },
  {
    category: 'For Each',
    number: 5, 
    description: `
Write a function named removeWithAnon that produces the same output as challenges 3 and 4.

This function should use forEach again, but rather than taking in a callback as an argument, 
define an anonymous function as the argument to forEach. Essentially you should inline the code
in removeOne directly into this anonymous function.`.trim(),
    starterCode: `
export const removeWithAnon = (arr) => {
    // Solution code here...
};`.trim(),
    test: `
test('It should remove three elements from the array', assert => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = removeWithAnon(array);
    assert.equal(array, result);
    assert.deepEqual(array, [1, 2, 3, 4, 5, 6, 7]);
});`.trim(),
    resources: resources.forEach
  },
  {
    category: 'For Each',
    number: 6, 
    description: `
Write a function named createList that takes in an array of the current store inventory.
The inventory is formatted like this:
[
    { name: 'apples', available: true },
    { name: 'pears', available: true },
    { name: 'oranges', available: false },
    { name: 'bananas', available: true },
    { name: 'blueberries', available: false }
]
This function should create another new array (the grocery list) and then use forEach to populate your grocery list based on the`.trim(),
    starterCode: `
export const createList = (availableItems) => {
    // Solution code here...
};`.trim(),
    test: `
test('It should only add the available items to the list', assert => {
    const inventory = [
        { name: 'apples', available: true }, 
        { name: 'pears', available: true }, 
        { name: 'oranges', available: false }, 
        { name: 'bananas', available: true }, 
        { name: 'blueberries', available: false }
    ];
    const available = createList(inventory);
    assert.deepEqual(available, ['apples', 'pears', 'bananas']);
});`.trim(),
    resources: resources.forEach
  },
  {
    category: 'For Each',
    number: 7, 
    description: `
Write a function named fizzBuzz that takes in an array of numbers.

It should create another array (the output) to store the results. 

Iterate over the array of numbers using forEach to determine the output based on several rules:
- If a number is divisible by 3, add the word "Fizz" to the output array.
- If the number is divisible by 5, add the word "Buzz" to the output array.
- If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
- Otherwise, add the number to the output array.

Return the resulting output array.`.trim(),
    starterCode: `
export const fizzBuzz = (arr) => {
    // Solution code here...
};`.trim(),
    test: `
test('It should print out messages or numbers according to fizz buzz rules', assert => {
    const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const outputs = fizzBuzz(inputs);
    assert.deepEqual(outputs, [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
});`.trim(),
    resources: resources.forEach
  },
  {
    category: '',
    number: , 
    description: ``.trim(),
    starterCode: ``.trim(),
    test: ``.trim(),
    resources: 
  },
  {
    category: '',
    number: , 
    description: ``.trim(),
    starterCode: ``.trim(),
    test: ``.trim(),
    resources: 
  },
  {
    category: '',
    number: , 
    description: ``.trim(),
    starterCode: ``.trim(),
    test: ``.trim(),
    resources: 
  },
  {
    category: '',
    number: , 
    description: ``.trim(),
    starterCode: ``.trim(),
    test: ``.trim(),
    resources: 
  },
  {
    category: '',
    number: , 
    description: ``.trim(),
    starterCode: ``.trim(),
    test: ``.trim(),
    resources: 
  },
  
];

module.exports = challenges;
