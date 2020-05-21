const resources = require('./resourcesData');

const challenges = [
  {
    category: 'ForEach',
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
QUnit.test('It should return the message with all uppercase characters', assert => {
    const result = speaker('hello Bootcamp 2 students!', greeting);
    assert.equal(result, 'HELLO BOOTCAMP 2 STUDENTS!');
});`.trim(),
    resources: resources.forEach
  },
  {
    category: 'ForEach',
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
    category: 'ForEach',
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
    category: 'ForEach',
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
    category: 'ForEach',
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
    category: 'ForEach',
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
    category: 'ForEach',
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
    category: 'Variables',
    number: 1, 
    description: `
Write a function that appends ' The end.' to a string, and returns the modified string. The original source string should not be modified.`.trim(),
    starterCode: `
export const appendTheEnd = (str) => {
    // Solution code here...
};`.trim(),
    test: `
test('It should append without modifying the original', (assert) => {
    const a = 'This is my story.';
    const b = appendTheEnd(a);

    assert.equal(a, 'This is my story.');
    assert.equal(b, 'This is my story. The end.');
});`.trim(),
    resources: resources.variables
  },
  {
    category: 'Variables',
    number: 2, 
    description: `
Write a function that accepts an array and copies the first element to the end of the array. The change should be reflected in the source array that was passed in to the function. That is, the function should modify the array 'in place'. Do not use a return statement.

For example:
    const a = [1, 2, 3];
    appendFirstToLast(a);
    console.log(a) prints [1, 2, 3, 1]`.trim(),
    starterCode: `
export const appendFirstToLast = (arr) => {
    // Solution code here...
    };`.trim(),
    test: `
test('It should append by modifying the original', (assert) => {
    const a = ['Yes', 'it', 'is'];
    appendFirstToLast(a);

    assert.deepEqual(a, ['Yes', 'it', 'is', 'Yes']);
});`.trim(),
    resources: resources.variables
  },
  {
    category: 'Variables',
    number: 3, 
    description: `
Write a function that accepts an object and an integer as arguments and adds a new property to the object called yearBorn. The value of the yearBorn property should be the integer that was passed in.

The change should be reflected in the source object that was passed in to the function. That is, the function should modify the object 'in place'.

Do not use a return statement.

For example:
const octavia = { fullName: 'Octavia Estelle Butler' };
addBirthYearProperty(octavia, 1947);
console.log(a) prints { fullName: 'Octavia Estelle Butler', yearBorn: 1947 }`.trim(),
    starterCode: `
export const addBirthYearProperty = (obj, year) => {
    // Solution code here...
};`.trim(),
    test: `
test('It should add a property to an object', (assert) => {
    const a = { fullName: 'Octavia Butler' };
    addBirthYearProperty(a, 1947);

    assert.equal(a.yearBorn, 1947);
});`.trim(),
    resources: resources.variables
  },
  {
    category: 'Variables',
    number: 4, 
    description: `
Write a function that accepts an array of people objects and adds a new property called isAuthor to each object in the list. Set the value of the new property to true.

The function should modify the object in place. Do not use a return statement.

For example:
const people = [{ fullName: 'Octavia Butler' }, { fullName: 'Ray Bradbury' }];
setStatusAsAuthor(people);
console.log(people[1].isAuthor) prints true`.trim(),
    starterCode: `
export const setStatusAsAuthor = (people) => {
    // Solution code here...
};`.trim(),
    test: `
test('It should add a property to every object in an array', (assert) => {
    const a = [
        { fullName: 'Octavia Butler' }, 
        { fullName: 'Ray Bradbury' }, 
        { fullName: 'Kurt Vonnegut' }
    ];
    setStatusAsAuthor(a);

    assert.equal(a[0].isAuthor, true);
    assert.equal(a[1].isAuthor, true);
    assert.equal(a[2].isAuthor, true);
});`.trim(),
    resources: resources.variables
  },
  {
    category: 'Variables',
    number: 5, 
    description: `
Write a function that accepts two arrays. Append the values from the second array into the first,
maintaining the ordering.

The function should modify the first array in place. Do not use a return statement.

For example:
    const a = [1, 2]; NOTE: If you assign an array to a 'const', you can't re-assign it later, but you can change the values in the array.
    const b = [3, 4];
    append(a, b);
    console.log(a) prints [1, 2, 3, 4]`.trim(),
    starterCode: `
export const append = (arr1, arr2) => {
    // Solution code here...
};`.trim(),
    test: `
test('It should append the second array to the first', (assert) => {
    const a = [1, 2, 3, 4];
    const b = [5, 6, 7, 8];
    append(a, b);

    assert.deepEqual(a, [1, 2, 3, 4, 5, 6, 7, 8]);
});`.trim(),
    resources: resources.variables 
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
