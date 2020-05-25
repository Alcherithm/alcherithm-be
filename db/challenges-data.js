//NOTES FOR DATA INPUT: 
//challenges = [
//   {
//     category: '',
//     challengeNumber: , 
//     instructions: ``.trim(),
//     starterCode: ``.trim(),
//     qunitTest: ``.trim(),
//     resources: 
//   }
// ];

//NOTES: category = category name (each branch in the BC2 repo is a new category). Try to keep it short-one word preferred
//instructions, starterCode, and qunitTest all need to be wrapped in backticks and left justified. '.trim()' should be added after the backticks. 
//All tests should begin with 'QUnit.test'. There should be no skipped tests. 
//resources are in resourcesData.js and can be called in as an object- resources.CATEGORYNAME


const resources = require('./resources-data');

const challenges = [
  {
    category: 'forEach',
    challengeNumber: 1, 
    instructions: `
Write a function named greeting that takes in a string and returns the string in all uppercase letters.

Then, write a function named speaker that takes in a string and a callback function. The speaker function should return the string in all uppercase letters only by invoking the callback.`.trim(),   
    starterCode: `
const greeting = (word) => {
  // Solution code here...
};
    
const speaker = (message, callback) => {
  // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should return the message with all uppercase characters', assert => {
    const result = speaker('hello Bootcamp 2 students!', greeting);
    assert.equal(result, 'HELLO BOOTCAMP 2 STUDENTS!');
});`.trim(),
    resources: resources.forEach 
  },
  {
    category: 'forEach',
    challengeNumber: 2, 
    instructions: `
Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

Then, write a function named addNumbers that takes in four arguments:
- A number to be added to an array
- An array into which the number should be added
- The number of times the number should be added
- A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.
Return the modified array.`.trim(),
    starterCode: `
const addValues = (arr, value) => {
    // Solution code here...
};

const addNumbers = (num, arr, times, callback) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should add the number 8 to the array five times', assert => {
    const array = [];
    const result = addNumbers(8, array, 5, addValues);
    assert.equal(array, result);
    assert.deepEqual(array, [8, 8, 8, 8, 8]);
});`.trim(),
    resources: resources.forEach
  },
  {
    category: 'forEach',
    challengeNumber: 3, 
    instructions: `
Write a function named removeOne that takes in a number and an array. If the number divided by three has a remainder of two, pop one element off of the array. Hint: you may want to look into the modulo operation.

Then, write a function named removeElements that takes in an array and a callback. This function should use a for loop to iterate over the array and invoke the callback once for each element in the array.
Return the modified array.`.trim(),
    starterCode: `
const removeOne = (num, arr) => {
    // Solution code here...
};

const removeElements = (arr, callback) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should remove three elements from the array', assert => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = removeElements(array, removeOne);
    assert.equal(array, result);
    assert.deepEqual(array, [1, 2, 3, 4, 5, 6, 7]);
});`.trim(),
    resources: resources.forEach
  },
  {
    category: 'forEach',
    challengeNumber: 4, 
    instructions: `
Write a function named removeWithForEach that takes in a number and an array. If the number divided by three has a remainder of two, pop one element off of the array. Hint: you may want to look into the modulo operation.

Then, write a function named removeElements that takes in an array and a callback. This function should use a forEach loop to iterate over the array and invoke the callback once for each element in the array.
Return the modified array.`.trim(),
    starterCode: `
const removeWithForEach = (arr, callback) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should remove three elements from the array', assert => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = removeWithForEach(array, removeOne);
    assert.equal(array, result);
    assert.deepEqual(array, [1, 2, 3, 4, 5, 6, 7]);
});`.trim(),
    resources: resources.forEach
  },
  {
    category: 'forEach',
    challengeNumber: 5, 
    instructions: `
Write a function named removeWithAnon that produces the same output as challenges 3 and 4.

This function should use forEach again, but rather than taking in a callback as an argument, 
define an anonymous function as the argument to forEach. Essentially you should inline the code
in removeOne directly into this anonymous function.`.trim(),
    starterCode: `
const removeWithAnon = (arr) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should remove three elements from the array', assert => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = removeWithAnon(array);
    assert.equal(array, result);
    assert.deepEqual(array, [1, 2, 3, 4, 5, 6, 7]);
});`.trim(),
    resources: resources.forEach
  },
  {
    category: 'forEach',
    challengeNumber: 6, 
    instructions: `
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
const createList = (availableItems) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should only add the available items to the list', assert => {
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
    category: 'forEach',
    challengeNumber: 7, 
    instructions: `
Write a function named fizzBuzz that takes in an array of numbers.

It should create another array (the output) to store the results. 

Iterate over the array of numbers using forEach to determine the output based on several rules:
- If a number is divisible by 3, add the word "Fizz" to the output array.
- If the number is divisible by 5, add the word "Buzz" to the output array.
- If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
- Otherwise, add the number to the output array.

Return the resulting output array.`.trim(),
    starterCode: `
const fizzBuzz = (arr) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should print out messages or numbers according to fizz buzz rules', assert => {
    const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const outputs = fizzBuzz(inputs);
    assert.deepEqual(outputs, [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
});`.trim(),
    resources: resources.forEach
  },
  {
    category: 'variables',
    challengeNumber: 1, 
    instructions: `
Write a function that appends ' The end.' to a string, and returns the modified string. The original source string should not be modified.`.trim(),
    starterCode: `
const appendTheEnd = (str) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should append without modifying the original', (assert) => {
    const a = 'This is my story.';
    const b = appendTheEnd(a);

    assert.equal(a, 'This is my story.');
    assert.equal(b, 'This is my story. The end.');
});`.trim(),
    resources: resources.variables
  },
  {
    category: 'variables',
    challengeNumber: 2, 
    instructions: `
Write a function that accepts an array and copies the first element to the end of the array. The change should be reflected in the source array that was passed in to the function. That is, the function should modify the array 'in place'. Do not use a return statement.

For example:
    const a = [1, 2, 3];
    appendFirstToLast(a);
    console.log(a) prints [1, 2, 3, 1]`.trim(),
    starterCode: `
const appendFirstToLast = (arr) => {
    // Solution code here...
    };`.trim(),
    qunitTest: `
QUnit.test('It should append by modifying the original', (assert) => {
    const a = ['Yes', 'it', 'is'];
    appendFirstToLast(a);

    assert.deepEqual(a, ['Yes', 'it', 'is', 'Yes']);
});`.trim(),
    resources: resources.variables
  },
  {
    category: 'variables',
    challengeNumber: 3, 
    instructions: `
Write a function that accepts an object and an integer as arguments and adds a new property to the object called yearBorn. The value of the yearBorn property should be the integer that was passed in.

The change should be reflected in the source object that was passed in to the function. That is, the function should modify the object 'in place'.

Do not use a return statement.

For example:
const octavia = { fullName: 'Octavia Estelle Butler' };
addBirthYearProperty(octavia, 1947);
console.log(a) prints { fullName: 'Octavia Estelle Butler', yearBorn: 1947 }`.trim(),
    starterCode: `
const addBirthYearProperty = (obj, year) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should add a property to an object', (assert) => {
    const a = { fullName: 'Octavia Butler' };
    addBirthYearProperty(a, 1947);

    assert.equal(a.yearBorn, 1947);
});`.trim(),
    resources: resources.variables
  },
  {
    category: 'variables',
    challengeNumber: 4, 
    instructions: `
Write a function that accepts an array of people objects and adds a new property called isAuthor to each object in the list. Set the value of the new property to true.

The function should modify the object in place. Do not use a return statement.

For example:
const people = [{ fullName: 'Octavia Butler' }, { fullName: 'Ray Bradbury' }];
setStatusAsAuthor(people);
console.log(people[1].isAuthor) prints true`.trim(),
    starterCode: `
const setStatusAsAuthor = (people) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should add a property to every object in an array', (assert) => {
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
    category: 'variables',
    challengeNumber: 5, 
    instructions: `
Write a function that accepts two arrays. Append the values from the second array into the first,
maintaining the ordering.

The function should modify the first array in place. Do not use a return statement.

For example:
    const a = [1, 2]; NOTE: If you assign an array to a 'const', you can't re-assign it later, but you can change the values in the array.
    const b = [3, 4];
    append(a, b);
    console.log(a) prints [1, 2, 3, 4]`.trim(),
    starterCode: `
const append = (arr1, arr2) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should append the second array to the first', (assert) => {
    const a = [1, 2, 3, 4];
    const b = [5, 6, 7, 8];
    append(a, b);

    assert.deepEqual(a, [1, 2, 3, 4, 5, 6, 7, 8]);
});`.trim(),
    resources: resources.variables 
  },
  {
    category: 'sort',
    challengeNumber: 1,
    instructions: `
Write a function named sortBackwards that takes in an array of numbers and returns the same array, with the numbers sorted, highest to smallest.`.trim(),
    starterCode: `
const sortBackwards = (arr) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should sort high-to-low the numbers in an array', assert => {
    assert.deepEqual(sortBackwards([3, 4, 5, 6, 7]), [7, 6, 5, 4, 3]);
    assert.deepEqual(sortBackwards([3, 2, 1]), [3, 2, 1]);
    assert.deepEqual(sortBackwards([12, 20, 3]), [20, 12, 3]);
    assert.deepEqual(sortBackwards([]), []);
    assert.deepEqual(sortBackwards([1]), [1]);
});
    `.trim(),
    resources: resources.sort
  },
  {
    category: 'sort',
    challengeNumber: 2,
    instructions: `
Write a function named alphabetize that takes in an array of strings and returns the same array with the strings sorted alphabetically.

In this alphabetization, capital letters come before lower case letters.

For example, ['Alphabet', 'Zebra', 'alphabet', 'carrot'] is correctly sorted.`.trim(),
    starterCode: `
const alphabetize = (arr) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should sort strings alphabetically', assert => {
    assert.deepEqual(alphabetize(['alphabet', 'Zebra', 'Alphabet', 'carrot']), ['Alphabet', 'Zebra', 'alphabet', 'carrot']);
    assert.deepEqual(alphabetize(['alphabet', 'Alphabet', 'carrot']), ['Alphabet', 'alphabet', 'carrot']);
    assert.deepEqual(alphabetize([]), []);
});`.trim(),
    resources: resources.sort
  },
  {
    category: 'sort',
    challengeNumber: 3,
    instructions: `
Write a function named sortByLength that takes in an array of strings and returns the same array, with the strings sorted by their length, lowest to highest.`.trim(),
    starterCode: `
const sortByLength = (arr) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should sort strings by length', assert => {
    const ans = sortByLength(['alphabet', 'zebra', 'elephants', 'carrot']);
    assert.deepEqual(ans, ['zebra', 'carrot', 'alphabet', 'elephants']);
    assert.deepEqual(sortByLength(['a', 'bc', '']), ['', 'a', 'bc']);
    assert.deepEqual(sortByLength(['a']), ['a']);
    assert.deepEqual(sortByLength([]), []);
});`.trim(),
    resources: resources.sort
  },
  {
    category: 'sort',
    challengeNumber: 4,
    instructions: `
Write a function named alphabetizeBetter that takes in an array of strings and returns the same array, with the strings sorted alphabetically. Capitalization should not change the sort order of two strings.

For example, ['Alphabet', 'alphabet', 'carrot', 'Zebra'] is correctly sorted, and so is ['alphabet', 'Alphabet', 'carrot', 'Zebra'].`.trim(),
    starterCode: `
const alphabetizeBetter = (arr) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should alphabetize without regard to capitalization', assert => {
    const result = alphabetizeBetter(['Alice', 'apple', 'alert', 'Average']);
    assert.deepEqual(result, ['alert', 'Alice', 'apple', 'Average']);
    const result2 = alphabetizeBetter(['alphabet', 'Zebra', 'Alphabet', 'carrot']);
    assert.ok(result2[0] === 'Alphabet' || result2[0] === 'alphabet');
    assert.ok(result2[1] === 'Alphabet' || result2[1] === 'alphabet');
    assert.deepEqual(result2.slice(2), ['carrot', 'Zebra']);
});`.trim(),
    resources: resources.sort
  },
  {
    category: 'sort',
    challengeNumber: 5,
    instructions: `
Write a function named sortByPrice that takes in an array of objects, each of which has a 'price' property, and sorts those objects by price, lowest to highest, returning the same array.

Here is an example of the input:
[
    {name: 'Sweatshirt', price: 45},
    {name: 'Bookmark', price: 2.50},
    {name: 'Tote bag', price: 15}
];`.trim(),
    starterCode: `
const sortByPrice = (arr) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should sort items by their price', assert => {
    assert.deepEqual(sortByPrice([
        { name: 'Sweatshirt', price: 45 },
        { name: 'Bookmark', price: 2.50 },
        { name: 'Tote bag', price: 15 }
    ]), [
        { name: 'Bookmark', price: 2.50 },
        { name: 'Tote bag', price: 15 },
        { name: 'Sweatshirt', price: 45 },
    ]);
    assert.deepEqual(sortByPrice([{ price: 12 }, { price: 10 }]), [{ price: 10 }, { price: 12 }]);
    assert.deepEqual(sortByPrice([]), []);
});`.trim(),
    resources: resources.sort
  },
  {
    category: 'sort',
    challengeNumber: 6,
    instructions: `
Write a function named sortNumbersByLength that takes in an array of numbers and sorts those numbers by their length.

For example, [1, 14, 0.2, -281, 54782] is only correctly sorted in that order.`.trim(),
    starterCode: `
const sortNumbersByLength = (arr) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should sort numbers by their length', assert => {
    assert.deepEqual(sortNumbersByLength([10, 2.8, 1, -47.75]), [1, 10, 2.8, -47.75]);
    assert.deepEqual(sortNumbersByLength([100, 2.82, 1, -47.75]), [1, 100, 2.82, -47.75]);
    const sameLength = sortNumbersByLength([1, 2, 3]);
    assert.equal(sameLength[1, 2, 3]);
    assert.ok(sameLength.includes(1));
    assert.ok(sameLength.includes(2));
    assert.ok(sameLength.includes(3));
});`.trim(),
    resources: resources.sort
  },
  {
    category: 'sort',
    challengeNumber: 7,
    instructions: `
Write a function named sortPeople that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names. Do not worry about capitalization or first names.
    `.trim(),
    starterCode: `
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

const sortPeople = (arr) => {
    // Solution code here...
};`.trim(),
    qunitTest: `
QUnit.test('It should sort people by their last names', assert => {

const people = [
    new Person('Wes', 'Washington', 25),
    new Person('Casey', 'Carson', 38),
    new Person('Stan', 'Seattle', 67),
];

assert.deepEqual(sortPeople(people), [
    new Person('Casey', 'Carson', 38),
    new Person('Stan', 'Seattle', 67),
    new Person('Wes', 'Washington', 25),
]);

assert.deepEqual(
    sortPeople([{ lastName: 'banana' }, { lastName: 'apple' }]),
    [{ lastName: 'apple' }, { lastName: 'banana' }]
);
});`.trim(),
    resources: resources.sort
  },
  {
    category: 'sort',
    challengeNumber: 8,
    instructions: `
Write a function named sortPeopleBetter that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names.

If two people share the same last name, alphabetize on their first name.

If two people have the same full name, the younger one should come first. Do not worry about capitalization.`.trim(),
    starterCode: `
const sortPeopleBetter = (arr) => {
    // Solution code here...
};
`.trim(),
    qunitTest: `
QUnit.test('It should sort people with more strict ordering', assert => {

const family = [
    new Person('Casey', 'Casems', 55),
    new Person('Casey', 'Casems', 37),
    new Person('Charlie', 'Casems', 21),
    new Person('Charles', 'Casems', 29),
    new Person('Carol', 'Casem', 88),
];

assert.deepEqual(sortPeopleBetter(family), [
    new Person('Carol', 'Casem', 88),
    new Person('Casey', 'Casems', 37),
    new Person('Casey', 'Casems', 55),
    new Person('Charles', 'Casems', 29),
    new Person('Charlie', 'Casems', 21),
]);

assert.deepEqual(
    sortPeopleBetter([
        { firstName: 'andrew', lastName: 'apple' },
        { firstName: 'andre', lastName: 'apple' }
    ]),
    [
        { firstName: 'andre', lastName: 'apple' },
        { firstName: 'andrew', lastName: 'apple' }
    ]
);
});`.trim(),
    resources: resources.sort
  },
  //   {
  //     category: '',
  //     challengeNumber: , 
  //     instructions: ``.trim(),
  //     starterCode: ``.trim(),
  //     qunitTest: ``.trim(),
  //     resources: 
  //   },
  
];

module.exports = challenges;
