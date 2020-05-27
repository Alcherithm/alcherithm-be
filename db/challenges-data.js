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

Then, write a function named speaker that takes in a string and a callback function. The speaker function should return the string in all uppercase letters only by invoking the callback.

`.trim(),   
    starterCode: `
const greeting = (word) => {
  // Solution code here...
};
    
const speaker = (message, callback) => {
  // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should return the message with all uppercase characters', assert => {
    const result = speaker('hello Bootcamp 2 students!', greeting);
    assert.equal(result, 'HELLO BOOTCAMP 2 STUDENTS!');
});

`.trim(),
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
Return the modified array.

`.trim(),
    starterCode: `
const addValues = (arr, value) => {
    // Solution code here...
};

const addNumbers = (num, arr, times, callback) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should add the number 8 to the array five times', assert => {
    const array = [];
    const result = addNumbers(8, array, 5, addValues);
    assert.equal(array, result);
    assert.deepEqual(array, [8, 8, 8, 8, 8]);
});

`.trim(),
    resources: resources.forEach
  },
  {
    category: 'forEach',
    challengeNumber: 3, 
    instructions: `
Write a function named removeOne that takes in a number and an array. If the number divided by three has a remainder of two, pop one element off of the array. Hint: you may want to look into the modulo operation.

Then, write a function named removeElements that takes in an array and a callback. This function should use a for loop to iterate over the array and invoke the callback once for each element in the array.
Return the modified array.

`.trim(),
    starterCode: `
const removeOne = (num, arr) => {
    // Solution code here...
};

const removeElements = (arr, callback) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should remove three elements from the array', assert => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = removeElements(array, removeOne);
    assert.equal(array, result);
    assert.deepEqual(array, [1, 2, 3, 4, 5, 6, 7]);
});

`.trim(),
    resources: resources.forEach
  },
  {
    category: 'forEach',
    challengeNumber: 4, 
    instructions: `
Write a function named removeWithForEach that takes in a number and an array. If the number divided by three has a remainder of two, pop one element off of the array. Hint: you may want to look into the modulo operation.

Then, write a function named removeElements that takes in an array and a callback. This function should use a forEach loop to iterate over the array and invoke the callback once for each element in the array.
Return the modified array.

`.trim(),
    starterCode: `
const removeWithForEach = (arr, callback) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should remove three elements from the array', assert => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = removeWithForEach(array, removeOne);
    assert.equal(array, result);
    assert.deepEqual(array, [1, 2, 3, 4, 5, 6, 7]);
});

`.trim(),
    resources: resources.forEach
  },
  {
    category: 'forEach',
    challengeNumber: 5, 
    instructions: `
Write a function named removeWithAnon that produces the same output as challenges 3 and 4.

This function should use forEach again, but rather than taking in a callback as an argument, 
define an anonymous function as the argument to forEach. Essentially you should inline the code
in removeOne directly into this anonymous function.

`.trim(),
    starterCode: `
const removeWithAnon = (arr) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should remove three elements from the array', assert => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = removeWithAnon(array);
    assert.equal(array, result);
    assert.deepEqual(array, [1, 2, 3, 4, 5, 6, 7]);
});

`.trim(),
    resources: resources.forEach
  },
  {
    category: 'forEach',
    challengeNumber: 6, 
    instructions: `
Write a function named createList that takes in an array of the current store inventory.
The inventory is formatted like this:
\`\`\`js
[
    { name: 'apples', available: true },
    { name: 'pears', available: true },
    { name: 'oranges', available: false },
    { name: 'bananas', available: true },
    { name: 'blueberries', available: false }
]
\`\`\`
This function should create another new array (the grocery list) and then use forEach to populate your grocery list based on the

`.trim(),
    starterCode: `
const createList = (availableItems) => {
    // Solution code here...
};

`.trim(),
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
});

`.trim(),
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

Return the resulting output array.

`.trim(),
    starterCode: `
const fizzBuzz = (arr) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should print out messages or numbers according to fizz buzz rules', assert => {
    const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const outputs = fizzBuzz(inputs);
    assert.deepEqual(outputs, [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
});

`.trim(),
    resources: resources.forEach
  },
  {
    category: 'variables',
    challengeNumber: 1, 
    instructions: `
Write a function that appends ' The end.' to a string, and returns the modified string. The original source string should not be modified.

`.trim(),
    starterCode: `
const appendTheEnd = (str) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should append without modifying the original', (assert) => {
    const a = 'This is my story.';
    const b = appendTheEnd(a);

    assert.equal(a, 'This is my story.');
    assert.equal(b, 'This is my story. The end.');
});

`.trim(),
    resources: resources.variables
  },
  {
    category: 'variables',
    challengeNumber: 2, 
    instructions: `
Write a function that accepts an array and copies the first element to the end of the array. The change should be reflected in the source array that was passed in to the function. That is, the function should modify the array 'in place'. Do not use a return statement.

For example:
    \`\`\`js
    const a = [1, 2, 3];
    appendFirstToLast(a);
    console.log(a) prints [1, 2, 3, 1]
    \`\`\`

`.trim(),
    starterCode: `
const appendFirstToLast = (arr) => {
    // Solution code here...
    };
    
`.trim(),
    qunitTest: `
QUnit.test('It should append by modifying the original', (assert) => {
    const a = ['Yes', 'it', 'is'];
    appendFirstToLast(a);

    assert.deepEqual(a, ['Yes', 'it', 'is', 'Yes']);
});

`.trim(),
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
\`\`\`js
const octavia = { fullName: 'Octavia Estelle Butler' };
addBirthYearProperty(octavia, 1947);
console.log(a) prints { fullName: 'Octavia Estelle Butler', yearBorn: 1947 }
\`\`\`

`.trim(),
    starterCode: `
const addBirthYearProperty = (obj, year) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should add a property to an object', (assert) => {
    const a = { fullName: 'Octavia Butler' };
    addBirthYearProperty(a, 1947);

    assert.equal(a.yearBorn, 1947);
});

`.trim(),
    resources: resources.variables
  },
  {
    category: 'variables',
    challengeNumber: 4, 
    instructions: `
Write a function that accepts an array of people objects and adds a new property called isAuthor to each object in the list. Set the value of the new property to true.

The function should modify the object in place. Do not use a return statement.

For example:
\`\`\`js
const people = [{ fullName: 'Octavia Butler' }, { fullName: 'Ray Bradbury' }];
setStatusAsAuthor(people);
console.log(people[1].isAuthor) prints true
\`\`\`

`.trim(),
    starterCode: `
const setStatusAsAuthor = (people) => {
    // Solution code here...
};

`.trim(),
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
});

`.trim(),
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
    \`\`\`js
    const a = [1, 2]; NOTE: If you assign an array to a 'const', you can't re-assign it later, but you can change the values in the array.
    const b = [3, 4];
    append(a, b);
    console.log(a) prints [1, 2, 3, 4]
    \`\`\`

`.trim(),
    starterCode: `
const append = (arr1, arr2) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should append the second array to the first', (assert) => {
    const a = [1, 2, 3, 4];
    const b = [5, 6, 7, 8];
    append(a, b);

    assert.deepEqual(a, [1, 2, 3, 4, 5, 6, 7, 8]);
});

`.trim(),
    resources: resources.variables 
  },
  {
    category: 'sort',
    challengeNumber: 1,
    instructions: `
Write a function named sortBackwards that takes in an array of numbers and returns the same array, with the numbers sorted, highest to smallest.

`.trim(),
    starterCode: `
const sortBackwards = (arr) => {
    // Solution code here...
};

`.trim(),
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

For example, ['Alphabet', 'Zebra', 'alphabet', 'carrot'] is correctly sorted.

`.trim(),
    starterCode: `
const alphabetize = (arr) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should sort strings alphabetically', assert => {
    assert.deepEqual(alphabetize(['alphabet', 'Zebra', 'Alphabet', 'carrot']), ['Alphabet', 'Zebra', 'alphabet', 'carrot']);
    assert.deepEqual(alphabetize(['alphabet', 'Alphabet', 'carrot']), ['Alphabet', 'alphabet', 'carrot']);
    assert.deepEqual(alphabetize([]), []);
});

`.trim(),
    resources: resources.sort
  },
  {
    category: 'sort',
    challengeNumber: 3,
    instructions: `
Write a function named sortByLength that takes in an array of strings and returns the same array, with the strings sorted by their length, lowest to highest.

`.trim(),
    starterCode: `
const sortByLength = (arr) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should sort strings by length', assert => {
    const ans = sortByLength(['alphabet', 'zebra', 'elephants', 'carrot']);
    assert.deepEqual(ans, ['zebra', 'carrot', 'alphabet', 'elephants']);
    assert.deepEqual(sortByLength(['a', 'bc', '']), ['', 'a', 'bc']);
    assert.deepEqual(sortByLength(['a']), ['a']);
    assert.deepEqual(sortByLength([]), []);
});

`.trim(),
    resources: resources.sort
  },
  {
    category: 'sort',
    challengeNumber: 4,
    instructions: `
Write a function named alphabetizeBetter that takes in an array of strings and returns the same array, with the strings sorted alphabetically. Capitalization should not change the sort order of two strings.

For example, ['Alphabet', 'alphabet', 'carrot', 'Zebra'] is correctly sorted, and so is ['alphabet', 'Alphabet', 'carrot', 'Zebra'].

`.trim(),
    starterCode: `
const alphabetizeBetter = (arr) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should alphabetize without regard to capitalization', assert => {
    const result = alphabetizeBetter(['Alice', 'apple', 'alert', 'Average']);
    assert.deepEqual(result, ['alert', 'Alice', 'apple', 'Average']);
    const result2 = alphabetizeBetter(['alphabet', 'Zebra', 'Alphabet', 'carrot']);
    assert.ok(result2[0] === 'Alphabet' || result2[0] === 'alphabet');
    assert.ok(result2[1] === 'Alphabet' || result2[1] === 'alphabet');
    assert.deepEqual(result2.slice(2), ['carrot', 'Zebra']);
});

`.trim(),
    resources: resources.sort
  },
  {
    category: 'sort',
    challengeNumber: 5,
    instructions: `
Write a function named sortByPrice that takes in an array of objects, each of which has a 'price' property, and sorts those objects by price, lowest to highest, returning the same array.

Here is an example of the input:
\`\`\`js
[
    {name: 'Sweatshirt', price: 45},
    {name: 'Bookmark', price: 2.50},
    {name: 'Tote bag', price: 15}
];
\`\`\`

`.trim(),
    starterCode: `
const sortByPrice = (arr) => {
    // Solution code here...
};

`.trim(),
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
});

`.trim(),
    resources: resources.sort
  },
  {
    category: 'sort',
    challengeNumber: 6,
    instructions: `
Write a function named sortNumbersByLength that takes in an array of numbers and sorts those numbers by their length.

For example, [1, 14, 0.2, -281, 54782] is only correctly sorted in that order.

`.trim(),
    starterCode: `
const sortNumbersByLength = (arr) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should sort numbers by their length', assert => {
    assert.deepEqual(sortNumbersByLength([10, 2.8, 1, -47.75]), [1, 10, 2.8, -47.75]);
    assert.deepEqual(sortNumbersByLength([100, 2.82, 1, -47.75]), [1, 100, 2.82, -47.75]);
    const sameLength = sortNumbersByLength([1, 2, 3]);
    assert.equal(sameLength[1, 2, 3]);
    assert.ok(sameLength.includes(1));
    assert.ok(sameLength.includes(2));
    assert.ok(sameLength.includes(3));
});

`.trim(),
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
};

`.trim(),
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
});

`.trim(),
    resources: resources.sort
  },
  {
    category: 'sort',
    challengeNumber: 8,
    instructions: `
Write a function named sortPeopleBetter that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names.

If two people share the same last name, alphabetize on their first name.

If two people have the same full name, the younger one should come first. Do not worry about capitalization.

`.trim(),
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
});

`.trim(),
    resources: resources.sort
  }, 
  {
    category: 'string methods',
    challengeNumber: 1,
    instructions: `
Write a function named howMuchPencil that takes in a string, as written on the side of a pencil.

As you sharpen the pencil, the string will become shorter and shorter, starting by removing the first letter.

Your function should use slice within a loop and return an array of each successive string result from losing letters to the sharpener, until nothing is left.

For example, if the input is \`'Welcome'\`, the output will be:
\`['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', '']\`.

`.trim(),
    starterCode: `
const howMuchPencil = (str) => {
    let result = [];
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should return a list of shortening words', assert => {
    assert.deepEqual(
        howMuchPencil('Welcome'), 
        ['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', '']
    );
    assert.deepEqual(howMuchPencil(''), ['']);
    assert.deepEqual(howMuchPencil('abc'), ['abc', 'bc', 'c', '']);
});

`.trim(),
    resources: resources.stringMethods
  },
  {
    category: 'string methods',
    challengeNumber: 2,
    instructions: `
Write a function name wordsToCharList that, given a string as input, returns a new array where every element is a character of the input string.

For example, \`wordsToCharList('gregor')\` returns \`['g','r','e','g','o','r']\`.

`.trim(),
    starterCode: `
const wordsToCharList = (str) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should return an array of individual letters', assert => {
    assert.deepEqual(wordsToCharList('Gregor'), ['G', 'r', 'e', 'g', 'o', 'r']);
    assert.deepEqual(wordsToCharList('hooray'), ['h', 'o', 'o', 'r', 'a', 'y']);
    assert.deepEqual(wordsToCharList(''), []);
});

`.trim(),
    resources: resources.stringMethods
  },
  {
    category: 'string methods',
    challengeNumber: 3,
    instructions: `
You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below. Rather than taking the entire recipe, you only want a list of the item names.

Write a function named listFoods that takes in the recipe and returns a new array of the food items without any amount or units. Just the name. For example, '1 cup flour' will return 'flour'.

Use slice for this function, maybe more than once. The .indexOf() method may also be helpful.

Do not use split for this function.

`.trim(),
    starterCode: `
const listFoods = (recipe) => {
    let result = [];
    // Solution code here...
};

`.trim(),
    qunitTest: `
const gruffaloCrumble = {
    name: 'How to make a Gruffalo Crumble',
    ingredients: [
        '1 medium-sized Gruffalo',
        '8 pounds oats',
        '2 pounds brown sugar',
        '4 pounds flour',
        '2 gallons pure maple syrup',
        '16 cups chopped nuts',
        '1 pound baking soda',
        '1 pound baking powder',
        '1 pound cinnamon',
        '6 gallons melted butter',
        '2 gallons fresh water',
    ],
    steps: [
        'Pre-heat a large oven to 375',
        'De-prickle the gruffalo',
        'Sprinkle with cinnamon, sugar, flour, and nuts',
        'Mix until evenly distributed',
        'Grease a 3-foot x 3-foot casserole dish',
        'Combine gruffalo compote with water to maintain moisture in the oven',
        'Fold together remaining ingredients to make the crisp',
        'Spread the crisp evenly over the gruffalo mixture',
        'Bake for 12-15 hours',
    ]
};

QUnit.test('It should return a list of foods', assert => {
    assert.deepEqual(
        listFoods(gruffaloCrumble), 
        ['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']
    );
});

`.trim(),
    resources: resources.stringMethods
  },
  {
    category: 'string methods',
    challengeNumber: 4,
    instructions: `
You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below. Rather than taking the entire recipe, you only want a list of the item names.

Write a function named splitFoods that takes in the recipe and uses split to return a new array of the food items without any amount or units. Just the name. For example, '1 cup flour' will return 'flour'.

You may also use other string or array methods.

`.trim(),
    starterCode: `
const splitFoods = (recipe) => {
    let result = [];
    // Solution code here...
};

`.trim(),
    qunitTest: `
const gruffaloCrumble = {
    name: 'How to make a Gruffalo Crumble',
    ingredients: [
        '1 medium-sized Gruffalo',
        '8 pounds oats',
        '2 pounds brown sugar',
        '4 pounds flour',
        '2 gallons pure maple syrup',
        '16 cups chopped nuts',
        '1 pound baking soda',
        '1 pound baking powder',
        '1 pound cinnamon',
        '6 gallons melted butter',
        '2 gallons fresh water',
    ],
    steps: [
        'Pre-heat a large oven to 375',
        'De-prickle the gruffalo',
        'Sprinkle with cinnamon, sugar, flour, and nuts',
        'Mix until evenly distributed',
        'Grease a 3-foot x 3-foot casserole dish',
        'Combine gruffalo compote with water to maintain moisture in the oven',
        'Fold together remaining ingredients to make the crisp',
        'Spread the crisp evenly over the gruffalo mixture',
        'Bake for 12-15 hours',
    ]
};

QUnit.test('It should return a list of foods', assert => {
    assert.deepEqual(
        splitFoods(gruffaloCrumble),
        ['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']
    );
});

`.trim(),
    resources: resources.stringMethods
  },
  {
    category: 'string methods',
    challengeNumber: 5,
    instructions: `
Write a function named stepAction that takes in the recipe and extracts the action verbs from the steps. Fortunately for you, the action verbs are the first word of each action.

Return a new array containing just the verbs. For example, \`['Mix until evenly distributed']\` returns \`['Mix']\`.

`.trim(),
    starterCode: `
const stepActions = (recipe) => {
    let result = [];
    // Solution code here...
};

`.trim(),
    qunitTest: `
const gruffaloCrumble = {
    name: 'How to make a Gruffalo Crumble',
    ingredients: [
        '1 medium-sized Gruffalo',
        '8 pounds oats',
        '2 pounds brown sugar',
        '4 pounds flour',
        '2 gallons pure maple syrup',
        '16 cups chopped nuts',
        '1 pound baking soda',
        '1 pound baking powder',
        '1 pound cinnamon',
        '6 gallons melted butter',
        '2 gallons fresh water',
    ],
    steps: [
        'Pre-heat a large oven to 375',
        'De-prickle the gruffalo',
        'Sprinkle with cinnamon, sugar, flour, and nuts',
        'Mix until evenly distributed',
        'Grease a 3-foot x 3-foot casserole dish',
        'Combine gruffalo compote with water to maintain moisture in the oven',
        'Fold together remaining ingredients to make the crisp',
        'Spread the crisp evenly over the gruffalo mixture',
        'Bake for 12-15 hours',
    ]
};

QUnit.test('It should return a list of recipe steps', assert => {
    assert.deepEqual(
        stepActions(gruffaloCrumble), 
        ['Pre-heat', 'De-prickle', 'Sprinkle', 'Mix', 'Grease', 'Combine', 'Fold', 'Spread', 'Bake']
    );
});

`.trim(),
    resources: resources.stringMethods
  },
  {
    category: 'string methods',
    challengeNumber: 6,
    instructions: `
Write a function named removeEvenValues that, given an array of integers as input, deletes all even values from the array, leaving no 'gaps' behind.

The array should be modified in-place.

For example:
\`\`\`js
    const integers = [1, 2, 3, 4, 5, 6];
    removeEvenValues(integers);
    console.log(integers) will print [1, 3, 5]
\`\`\`

`.trim(),
    starterCode: `
const removeEvenValues = (arr) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should remove the even numbers from the array', assert => {
    let list = [1, 2, 3, 4, 5, 6];
    removeEvenValues(list);
    assert.deepEqual(list, [1, 3, 5]);

    list = [6, 3, 19, 43, 12, 66, 43];
    removeEvenValues(list);
    assert.deepEqual(list, [3, 19, 43, 43]);
});

`.trim(),
    resources: resources.stringMethods
  },
  {
    category: 'string methods',
    challengeNumber: 7,
    instructions: `
Write a function named removeLastCharacters that takes in a string and a number. The numberOfCharacters argument determines how many characters will be removed from the end of the string. Return the resulting string.

If the numberOfCharacters argument is greater than the length of the input string, the function should return an empty string.

If the numberOfCharacters argument input is a negative number, the function should return the input string without any changes.

For example:
\`\`\`js
removeLastCharacters('Gregor', 2) returns 'Greg'
removeLastCharacters('Gregor', -2) returns 'Gregor'
removeLastCharacters('Gregor', 9) returns ''
\`\`\`

`.trim(),
    starterCode: `
const removeLastCharacters = (str, numberOfCharacters) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should shorten the string based on the first argument', assert => {
    assert.equal(removeLastCharacters('Gregor', 2), 'Greg');
});

QUnit.test('It should return the complete string when passed a negative number', assert => {
    assert.equal(removeLastCharacters('hello', -1), 'hello');
    assert.equal(removeLastCharacters('wowow', -700), 'wowow');
});

QUnit.test('It should return an empty string when called with a number larger than the string length', assert => {
    assert.equal(removeLastCharacters('hello', 12), '');
    assert.equal(removeLastCharacters('', 1), '');
    assert.equal(removeLastCharacters('a', 1), '');
});

`.trim(),
    resources: resources.stringMethods
  },
  {
    category: 'string methods',
    challengeNumber: 8,
    instructions: `
Write a function named totalSumCSV that, given a string of comma-separated values (CSV) as input. (e.g. "1,2,3"), returns the total sum of the numeric values (e.g. 6).

`.trim(),
    starterCode: `
const totalSumCSV = (str) => {
    let total = 0;
    // Solution code here...
    return total;
};

`.trim(),
    qunitTest: `
QUnit.test('It should add up the numbers contained within the string', assert => {
    assert.equal(totalSumCSV('1,4,5,7,2'), 19);
    assert.equal(totalSumCSV('147'), 147);
});

`.trim(),
    resources: resources.stringMethods
  },
  {
    category: 'string methods',
    challengeNumber: 9,
    instructions: `
Write a function named removeVowels that takes in a string and returns a new string where all the vowels of the original string have been removed.

For example, \`removeVowels('gregor')\` returns \`'grgr'\`.

`.trim(),
    starterCode: `
const removeVowels = (str) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should return the string without vowels', assert => {
    assert.equal(removeVowels('gregor'), 'grgr');
    assert.equal(removeVowels('asdf'), 'sdf');
    assert.equal(removeVowels('why'), 'why');
});

`.trim(),
    resources: resources.stringMethods

  },
  {
    category: 'string methods',
    challengeNumber: 10,
    instructions: `
Write a function named extractVowels that takes in a string and returns an array where the first element is the original string with all the vowels removed, and the second element is a string of all the vowels that were removed, in alphabetical order.

For example, \`extractVowels('gregor')\` returns \`['grgr', 'eo']\`.

Similarly, \`extractVowels('The quick brown fox')\` returns \`['Th qck brwn fx', 'eioou']\`

`.trim(),
    starterCode: `
const extractVowels = (str) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `    
QUnit.test('It should return the string without vowels', assert => {
    assert.deepEqual(extractVowels('gregor'), ['grgr', 'eo']);
    assert.deepEqual(extractVowels('The quick brown fox'), ['Th qck brwn fx', 'eioou']);
});

`.trim(),
    resources: resources.stringMethods
  },
  {
    category: 'object iteration',
    challengeNumber: 1, 
    instructions: `
Write a function named getCourseKeys that takes in the courseInfo object (see test) and returns an array containing the keys for the courseInfo object.

For example: (['name', 'duration', 'topics', 'finalExam']).

`.trim(),
    starterCode: `
export const getCourseKeys = obj => {
// Solution code here...
};

`.trim(),
    qunitTest: `
const courseInfo = {
    name: 'Bootcamp II', 
    duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks' },
    topics: ['CSS Grid', 'APIs', 'NodeJS', 'SQL', 'Components'],
    finalExam: true
};

QUnit.test('It should return the keys from an object', assert => {
assert.deepEqual(
    getCourseKeys(courseInfo), 
    ['name', 'duration', 'topics', 'finalExam']
);
});

`.trim(),
    resources: resources.objectIteration
  },
  {
    category: 'object iteration',
    challengeNumber: 2, 
    instructions: `
Use the characters data provided in the test.

Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.

`.trim(),
    starterCode: `
export const getHouseNames = houses => {
    // Solution code here...
};    

`.trim(),
    qunitTest: `
let houses = {
    Stark: {
        characters: ['Eddard', 'Catelyn', 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Benjen', 'John'],
        words: 'Winter Is Coming',
        head: 'Sansa',
        region: 'North'
    },
    Tyrell: {
        characters: ['Mace', 'Alerie', 'Margaery', 'Loras', 'Olenna'],
        words: 'Growing Strong',
        head: 'none',
        region: 'The Reach'
    },
    Arryn: {
        characters: ['Jon', 'Lysa', 'Robin'],
        words: 'A High as Honor',
        head: 'Robin',
        region: 'The Vale of Arryn'
    },
    Lannister: {
        characters: ['Cersei', 'Tyrion', 'Jaime', 'Tywin', 'Lancel', 'Reginald', 'Joffrey', 'Myrcella', 'Tommen'],
        words: 'Hear Me Roar!',
        head: 'Tyrion',
        region: 'The Westerlands'
    },
    Baratheon: {
        characters: ['Robert', 'Stannis', 'Renly', 'Gendry'],
        words: 'Ours is the Fury',
        head: 'Gendry',
        region: 'The Stormlands'
    },
    Targaryen: {
        characters: ['Daenarys', 'Viserys', 'Aerys'],
        words: 'Fire and Blood',
        head: 'none',
        region: 'The Crownlands'
    },
    Greyjoy: {
        characters: ['Balon', 'Theon', 'Asha'],
        words: 'We Do Not Sow',
        head: 'Yara',
        region: 'Iron Islands'
    }
};

QUnit.test('It should return an array of the names of the houses', assert => {
    assert.deepEqual(
        getHouseNames(houses), 
        ['Stark', 'Tyrell', 'Arryn', 'Lannister', 'Baratheon', 'Targaryen', 'Greyjoy']
    );
});
      
`.trim(),
    resources: resources.objectIteration
  },
  {
    category: 'object iteration',
    challengeNumber: 3, 
    instructions: `
Write a function named getHouseWords that uses Object.values to return a new array containing the words (mottos) of all of the houses in the data set provided in the test.

`.trim(),
    starterCode: `
export const getHouseWords = houses => {
    // Solution code here...
}; 

`.trim(),
    qunitTest: `
let houses = {
    Stark: {
        characters: ['Eddard', 'Catelyn', 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Benjen', 'John'],
        words: 'Winter Is Coming',
        head: 'Sansa',
        region: 'North'
    },
    Tyrell: {
        characters: ['Mace', 'Alerie', 'Margaery', 'Loras', 'Olenna'],
        words: 'Growing Strong',
        head: 'none',
        region: 'The Reach'
    },
    Arryn: {
        characters: ['Jon', 'Lysa', 'Robin'],
        words: 'A High as Honor',
        head: 'Robin',
        region: 'The Vale of Arryn'
    },
    Lannister: {
        characters: ['Cersei', 'Tyrion', 'Jaime', 'Tywin', 'Lancel', 'Reginald', 'Joffrey', 'Myrcella', 'Tommen'],
        words: 'Hear Me Roar!',
        head: 'Tyrion',
        region: 'The Westerlands'
    },
    Baratheon: {
        characters: ['Robert', 'Stannis', 'Renly', 'Gendry'],
        words: 'Ours is the Fury',
        head: 'Gendry',
        region: 'The Stormlands'
    },
    Targaryen: {
        characters: ['Daenarys', 'Viserys', 'Aerys'],
        words: 'Fire and Blood',
        head: 'none',
        region: 'The Crownlands'
    },
    Greyjoy: {
        characters: ['Balon', 'Theon', 'Asha'],
        words: 'We Do Not Sow',
        head: 'Yara',
        region: 'Iron Islands'
    }
};

QUnit.test('It should return an array of the words of all houses', assert => {
    assert.deepEqual(
        getHouseWords(houses), 
        [
            'Winter Is Coming',
            'Growing Strong',
            'A High as Honor',
            'Hear Me Roar!',
            'Ours is the Fury',
            'Fire and Blood',
            'We Do Not Sow'
        ]
    );
});

`.trim(),
    resources: resources.objectIteration
  },
  {
    category: 'object iteration',
    challengeNumber: 4, 
    instructions: `
Write a function named getHouseSizes that uses Object.entries to return a new array containing objects that each have the name of a house and the number of characters in the houses data set provided in the test.

`.trim(),
    starterCode: `
export const getHouseSizes = houses => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
let houses = {
    Stark: {
        characters: ['Eddard', 'Catelyn', 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Benjen', 'John'],
        words: 'Winter Is Coming',
        head: 'Sansa',
        region: 'North'
    },
    Tyrell: {
        characters: ['Mace', 'Alerie', 'Margaery', 'Loras', 'Olenna'],
        words: 'Growing Strong',
        head: 'none',
        region: 'The Reach'
    },
    Arryn: {
        characters: ['Jon', 'Lysa', 'Robin'],
        words: 'A High as Honor',
        head: 'Robin',
        region: 'The Vale of Arryn'
    },
    Lannister: {
        characters: ['Cersei', 'Tyrion', 'Jaime', 'Tywin', 'Lancel', 'Reginald', 'Joffrey', 'Myrcella', 'Tommen'],
        words: 'Hear Me Roar!',
        head: 'Tyrion',
        region: 'The Westerlands'
    },
    Baratheon: {
        characters: ['Robert', 'Stannis', 'Renly', 'Gendry'],
        words: 'Ours is the Fury',
        head: 'Gendry',
        region: 'The Stormlands'
    },
    Targaryen: {
        characters: ['Daenarys', 'Viserys', 'Aerys'],
        words: 'Fire and Blood',
        head: 'none',
        region: 'The Crownlands'
    },
    Greyjoy: {
        characters: ['Balon', 'Theon', 'Asha'],
        words: 'We Do Not Sow',
        head: 'Yara',
        region: 'Iron Islands'
    }
};

QUnit.test('It should return an array of the houses and number of characters', assert => {
    assert.deepEqual(
        getHouseSizes(houses), 
        [
            { house: 'Stark', members: 9 },
            { house: 'Tyrell', members: 5 },
            { house: 'Arryn', members: 3 },
            { house: 'Lannister', members: 9 },
            { house: 'Baratheon', members: 4 },
            { house: 'Targaryen', members: 3 },
            { house: 'Greyjoy', members: 3 }
        ]
    );
});

`.trim(),
    resources: resources.objectIteration
  },
  {
    category: 'object iteration',
    challengeNumber: 5, 
    instructions: `
Write a function named getHouseHead that uses a dynamic object 
property (obj[property]) to get the head of the specified house from the houses data set provided in the test.

This function should take in the house data and a house name and return a the name of the house head.

`.trim(),
    starterCode: `
export const getHouseHead = (houses, houseToFind) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
let houses = {
    Stark: {
        characters: ['Eddard', 'Catelyn', 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Benjen', 'John'],
        words: 'Winter Is Coming',
        head: 'Sansa',
        region: 'North'
    },
    Tyrell: {
        characters: ['Mace', 'Alerie', 'Margaery', 'Loras', 'Olenna'],
        words: 'Growing Strong',
        head: 'none',
        region: 'The Reach'
    },
    Arryn: {
        characters: ['Jon', 'Lysa', 'Robin'],
        words: 'A High as Honor',
        head: 'Robin',
        region: 'The Vale of Arryn'
    },
    Lannister: {
        characters: ['Cersei', 'Tyrion', 'Jaime', 'Tywin', 'Lancel', 'Reginald', 'Joffrey', 'Myrcella', 'Tommen'],
        words: 'Hear Me Roar!',
        head: 'Tyrion',
        region: 'The Westerlands'
    },
    Baratheon: {
        characters: ['Robert', 'Stannis', 'Renly', 'Gendry'],
        words: 'Ours is the Fury',
        head: 'Gendry',
        region: 'The Stormlands'
    },
    Targaryen: {
        characters: ['Daenarys', 'Viserys', 'Aerys'],
        words: 'Fire and Blood',
        head: 'none',
        region: 'The Crownlands'
    },
    Greyjoy: {
        characters: ['Balon', 'Theon', 'Asha'],
        words: 'We Do Not Sow',
        head: 'Yara',
        region: 'Iron Islands'
    }
};

QUnit.test('It should return head for a house', assert => {
    assert.equal(
        getHouseHead(houses, 'Stark'),
        'Sansa'
    );

    assert.equal(
        getHouseHead(houses, 'Tyrell'),
        'none'
    );

    assert.equal(
        getHouseHead(houses, 'Greyjoy'),
        'Yara'
    );
});

`.trim(),
    resources: resources.objectIteration
  },
  {
    category: 'object iteration',
    challengeNumber: 6, 
    instructions: `
Write a function named totalCharacters that takes in the house data provided in the test and returns a count of all characters in all houses. 

`.trim(),
    starterCode: `
export const totalCharacters = houses => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
let houses = {
    Stark: {
        characters: ['Eddard', 'Catelyn', 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Benjen', 'John'],
        words: 'Winter Is Coming',
        head: 'Sansa',
        region: 'North'
    },
    Tyrell: {
        characters: ['Mace', 'Alerie', 'Margaery', 'Loras', 'Olenna'],
        words: 'Growing Strong',
        head: 'none',
        region: 'The Reach'
    },
    Arryn: {
        characters: ['Jon', 'Lysa', 'Robin'],
        words: 'A High as Honor',
        head: 'Robin',
        region: 'The Vale of Arryn'
    },
    Lannister: {
        characters: ['Cersei', 'Tyrion', 'Jaime', 'Tywin', 'Lancel', 'Reginald', 'Joffrey', 'Myrcella', 'Tommen'],
        words: 'Hear Me Roar!',
        head: 'Tyrion',
        region: 'The Westerlands'
    },
    Baratheon: {
        characters: ['Robert', 'Stannis', 'Renly', 'Gendry'],
        words: 'Ours is the Fury',
        head: 'Gendry',
        region: 'The Stormlands'
    },
    Targaryen: {
        characters: ['Daenarys', 'Viserys', 'Aerys'],
        words: 'Fire and Blood',
        head: 'none',
        region: 'The Crownlands'
    },
    Greyjoy: {
        characters: ['Balon', 'Theon', 'Asha'],
        words: 'We Do Not Sow',
        head: 'Yara',
        region: 'Iron Islands'
    }
};

QUnit.test('It should return the number of characters in all houses', assert => {
    assert.equal(totalCharacters(houses), 36);
});

`.trim(),
    resources: resources.objectIteration
  },
  {
    category: 'object iteration',
    challengeNumber: 7, 
    instructions: `
Write a function named getHouseWordsMapped that uses Object.values and .map to return the array of all house words from the data set provided in the test.

`.trim(),
    starterCode: `
export const getHouseWordsMapped = houses => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
let houses = {
    Stark: {
        characters: ['Eddard', 'Catelyn', 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Benjen', 'John'],
        words: 'Winter Is Coming',
        head: 'Sansa',
        region: 'North'
    },
    Tyrell: {
        characters: ['Mace', 'Alerie', 'Margaery', 'Loras', 'Olenna'],
        words: 'Growing Strong',
        head: 'none',
        region: 'The Reach'
    },
    Arryn: {
        characters: ['Jon', 'Lysa', 'Robin'],
        words: 'A High as Honor',
        head: 'Robin',
        region: 'The Vale of Arryn'
    },
    Lannister: {
        characters: ['Cersei', 'Tyrion', 'Jaime', 'Tywin', 'Lancel', 'Reginald', 'Joffrey', 'Myrcella', 'Tommen'],
        words: 'Hear Me Roar!',
        head: 'Tyrion',
        region: 'The Westerlands'
    },
    Baratheon: {
        characters: ['Robert', 'Stannis', 'Renly', 'Gendry'],
        words: 'Ours is the Fury',
        head: 'Gendry',
        region: 'The Stormlands'
    },
    Targaryen: {
        characters: ['Daenarys', 'Viserys', 'Aerys'],
        words: 'Fire and Blood',
        head: 'none',
        region: 'The Crownlands'
    },
    Greyjoy: {
        characters: ['Balon', 'Theon', 'Asha'],
        words: 'We Do Not Sow',
        head: 'Yara',
        region: 'Iron Islands'
    }
};

QUnit.test('It should return an array of the words of all houses using map', assert => {
    assert.deepEqual(
        getHouseWordsMapped(houses), 
        [
            'Winter Is Coming',
            'Growing Strong',
            'A High as Honor',
            'Hear Me Roar!',
            'Ours is the Fury',
            'Fire and Blood',
            'We Do Not Sow'
        ]
    );
});

`.trim(),
    resources: resources.objectIteration
  },
  {
    category: 'object iteration',
    challengeNumber: 8, 
    instructions: `
Write a function named totalCharactersReduced that takes in the house data provided in the test and uses Object.values and .reduce to return the total character count of all characters in all houses.  

`.trim(),
    starterCode: `
export const totalCharactersReduced = houses => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
let houses = {
    Stark: {
        characters: ['Eddard', 'Catelyn', 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Benjen', 'John'],
        words: 'Winter Is Coming',
        head: 'Sansa',
        region: 'North'
    },
    Tyrell: {
        characters: ['Mace', 'Alerie', 'Margaery', 'Loras', 'Olenna'],
        words: 'Growing Strong',
        head: 'none',
        region: 'The Reach'
    },
    Arryn: {
        characters: ['Jon', 'Lysa', 'Robin'],
        words: 'A High as Honor',
        head: 'Robin',
        region: 'The Vale of Arryn'
    },
    Lannister: {
        characters: ['Cersei', 'Tyrion', 'Jaime', 'Tywin', 'Lancel', 'Reginald', 'Joffrey', 'Myrcella', 'Tommen'],
        words: 'Hear Me Roar!',
        head: 'Tyrion',
        region: 'The Westerlands'
    },
    Baratheon: {
        characters: ['Robert', 'Stannis', 'Renly', 'Gendry'],
        words: 'Ours is the Fury',
        head: 'Gendry',
        region: 'The Stormlands'
    },
    Targaryen: {
        characters: ['Daenarys', 'Viserys', 'Aerys'],
        words: 'Fire and Blood',
        head: 'none',
        region: 'The Crownlands'
    },
    Greyjoy: {
        characters: ['Balon', 'Theon', 'Asha'],
        words: 'We Do Not Sow',
        head: 'Yara',
        region: 'Iron Islands'
    }
};

QUnit.test('It should return the number of characters in all houses using reduce', assert => {
    assert.equal(totalCharactersReduced(houses), 36);
});

`.trim(),
    resources: resources.objectIteration 
  },
  {
    category: 'map',
    challengeNumber: 1, 
    instructions: `
Write a function named forLoopTwoToThe that, given an array of integers as input, iterates over the array and returns a new array. The returned array should contain the result of raising 2 to the power of the original input element.

You may choose to complete this challenge using a for loop, for...in syntax, or for...of syntax.

For example, twoToThe([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.

`.trim(),
    starterCode: `
export const forLoopTwoToThe = (arr) => {
    // Solution code here...
};

`.trim(),
    qunitTest: `
QUnit.test('It should return two raised to the power of the integer', assert => {
    assert.deepEqual(forLoopTwoToThe([0, 4, 5]), [1, 16, 32]);
}); 

`.trim(),
    resources: resources.map
  },
  {
    category: 'map',
    challengeNumber: 2, 
    instructions: `
Write a function named forEachTwoToThe that 
given an array of integers as input, iterates over the array and returns a new array. The returned array should contain the result of raising 2 to the power of the original input element.

Complete this challenge using a forEach loop.

For example, twoToThe([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.

`.trim(),
    starterCode: `
export const forEachTwoToThe = (arr) => {
    // Solution code here...
};

    `.trim(),
    qunitTest: `
QUnit.test('It should return two raised to the power of the integer', assert => {
    assert.deepEqual(forEachTwoToThe([0, 4, 5]), [1, 16, 32]);
});

    `.trim(),
    resources: resources.map
  },
  {
    category: 'map',
    challengeNumber: 3, 
    instructions: `
Write a function named mapTwoToThe that 
given an array of integers as input, iterates over the array and returns a new array. The returned array should contain the result of raising 2 to the power of the original input element.

Complete this challenge using map.

For example, twoToThe([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.

`.trim(),
    starterCode: `
export const mapTwoToThe = (arr) => {
    // Solution code here...
};
    
`.trim(),
    qunitTest: `
QUnit.test('It should return two raised to the power of the integer', assert => {
    assert.deepEqual(mapTwoToThe([0, 4, 5]), [1, 16, 32]);
});

`.trim(),
    resources: resources.map
  },
  {
    category: 'map',
    challengeNumber: 4, 
    instructions: `
Write a function named charCode that, given an array of letters as an input, uses map to return a new array where each element is the result of the \`charCodeAt\` method on the original array element.

Read the MDN documentation on String.charCodeAt() if necessary.

For example: charCode(['h','i']) returns [104, 105].

`.trim(),
    starterCode: `
export const charCode = (arr) => {
    // Solution code here...
};
    
`.trim(),
    qunitTest: `
QUnit.test('It should return an array containing the character code for each letter', assert => {
    assert.deepEqual(
        charCode(['C', 'o', 'd', 'e', '3', '0', '1']),
        [67, 111, 100, 101, 51, 48, 49]
    );
});

`.trim(),
    resources: resources.map
  },
  {
    category: 'map',
    challengeNumber: 5, 
    instructions: `
Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

For example: evenOdd([1,2,3]) returns ['odd','even','odd'].

`.trim(),
    starterCode: `
export const evenOdd = (arr) => {
    // Solution code here...
};
    
`.trim(),
    qunitTest: `
QUnit.test('It should return an array containing even or odd for each number', assert => {
    assert.deepEqual(
        evenOdd([5, 8, 2, 6, 9, 13, 542, 541]),
        ['odd', 'even', 'even', 'even', 'odd', 'odd', 'even', 'odd']
    );
});

`.trim(),
    resources: resources.map
  },
  {
    category: 'map',
    challengeNumber: 6, 
    instructions: `
Use the snorlaxAbilities data provided in the test for this challenge.

Write a function named extractAbilities that, given the array of abilities, uses map to create an array containing only the ability name.

Note: Because this function is expecting the array of abilities, it will be invoked as:
extractAbilities(snorlaxAbilities.abilities)

`.trim(),
    starterCode: `
export const extractAbilities = (arr) => {
    // Solution code here...
};
    
`.trim(),
    qunitTest: `
const snorlaxAbilities = {
    abilities: [
        {
            slot: 3,
            is_hidden: true,
            ability: {
                url: 'https://pokeapi.co/api/v2/ability/82/',
                name: 'gluttony',
            },
        },
        {
            slot: 2,
            is_hidden: false,
            ability: {
                url: 'https://pokeapi.co/api/v2/ability/56/',
                name: 'cute charm',
            },
        },
        {
            slot: 1,
            is_hidden: false,
            ability: {
                url: 'https://pokeapi.co/api/v2/ability/17/',
                name: 'immunity',
            },
        },
    ],
    name: 'snorlax',
    weight: 4600,
};

QUnit.test('It should return an array containing only the ability names', assert => {
    assert.deepEqual(
        extractAbilities(snorlaxAbilities.abilities),
        ['gluttony', 'cute charm', 'immunity']
    );
});

`.trim(),
    resources: resources.map
  },
  {
    category: 'map',
    challengeNumber: 7, 
    instructions: `
Use the snorlaxStats data provided in the test for this challenge.

Write a function named extractStats that, given an array of stats, uses map to return an array of objects containing the stat name and the total.

The total should be the sum of the effort and the baseStat.

Here is an example of a single array element: { name: 'speed', total: 35 }

`.trim(),
    starterCode: `
export const extractStats = (arr) => {
    // Solution code here...
};
    
`.trim(),
    qunitTest: `
const snorlaxStats = {
    stats: [
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/6/',
                name: 'speed',
            },
            effort: 5,
            baseStat: 30,
        },
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/5/',
                name: 'special-defense',
            },
            effort: 2,
            baseStat: 110,
        },
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/4/',
                name: 'special-attack',
            },
            effort: 9,
            baseStat: 65,
        },
    ],
    name: 'snorlax',
    weight: 4600,
};

QUnit.test('It should return an array containing objects with name and total values', assert => {
    assert.deepEqual(
        extractStats(snorlaxStats.stats),
        [
            { name: 'speed', total: 35, },
            { name: 'special-defense', total: 112, },
            { name: 'special-attack', total: 74, },
        ]
    );
});

`.trim(),
    resources: resources.map
  },
  {
    category: 'filter',
    challengeNumber: 1, 
    instructions: `
Write a function named oddValues that, given an array of integers as input, uses filter to return an array containing only the odd integers.

For example, oddValues([1,2,3]) returns [1,3].

    `.trim(),
    starterCode: `
export const oddValues = (arr) => {
    // Solution code here...
};
    
`.trim(),
    qunitTest: `
QUnit.test('It should return an array containing only odd integers', assert => {
    assert.deepEqual(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
    assert.deepEqual(oddValues([2, 3, 4, 179]), [3, 179]);
    assert.deepEqual(oddValues([2, 4, 6, 8]), []);
});

`.trim(),
    resources: resources.filter
  },
  {
    category: 'filter',
    challengeNumber: 2, 
    instructions: `
Write a function named filterStringsWithVowels that, given an array of strings as input, uses filter to return an array with only words that contain vowels.

The callback function to filter should include or utilize a regular expression pattern.

For example, filterStringsWithVowels('gregor','hound','xyz') returns ['gregor', 'hound'].

    `.trim(),
    starterCode: `
export const filterStringsWithVowels = (arr) => {
    // Solution code here...
};
    
`.trim(),
    qunitTest: `
QUnit.test('It should return an array containing only words that have vowels', assert => {
    assert.deepEqual(
        filterStringsWithVowels(['gregor', 'hound', 'xyz']),
        ['gregor', 'hound']
    );
    assert.deepEqual(
        filterStringsWithVowels(['a', 'b', 'cdefg']),
        ['a', 'cdefg']
    );
    assert.deepEqual(
        filterStringsWithVowels(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '']),
        ['a', 'e', 'i', 'o', 'u']
    );
});

    `.trim(),
    resources: resources.filter
  },
  {
    category: 'filter',
    challengeNumber: 3, 
    instructions: `
Write a function named notInFirstArray that, given two arrays as input, uses filter to return an array of all the elements in the second array that are not included in the first array.

For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].

`.trim(),
    starterCode: `
export const notInFirstArray = (forbiddenValues, arr) => {
    // Solution code here...
};
    
`.trim(),
    qunitTest: `
const firstNumbers = [1, 2, 3];
const secondNumbers = [1, 2, 3, 4];

QUnit.test('It should return an array that includes any elements not in the first array', assert => {
    assert.deepEqual(notInFirstArray(firstNumbers, secondNumbers), [4]);
});

`.trim(),
    resources: resources.filter
  },
  {
    category: 'filter',
    challengeNumber: 4, 
    instructions: `
Write a function named getBaseStatGreaterThan that, given the snorlaxData provided in the test and an integer as input, uses filter to return an array containing all stats with a baseStat greater than the integer.

For example, getBaseStatGreaterThan(snorlaxData.stats, 50) will return an array containing the 'special-defense' and 'special-attack' objects.

`.trim(),
    starterCode: `
export const getBaseStatGreaterThan = (arr, minBaseStat) => {
    // Solution code here...
};
    
`.trim(),
    qunitTest: `
const snorlaxData = {
    stats: [
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/6/',
                name: 'speed',
            },
            effort: 5,
            baseStat: 30,
        },
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/5/',
                name: 'special-defense',
            },
            effort: 2,
            baseStat: 110,
        },
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/4/',
                name: 'special-attack',
            },
            effort: 9,
            baseStat: 65,
        },
    ],
    name: 'snorlax',
    weight: 4600,
};

QUnit.test('It should return an array containing the stats that are greater than the input', assert => {
    assert.deepEqual(
        getBaseStatGreaterThan(snorlaxData.stats, 75),
        [{ stat: { url: 'https://pokeapi.co/api/v2/stat/5/', name: 'special-defense' }, effort: 2, baseStat: 110 }]
    );
    assert.deepEqual(getBaseStatGreaterThan(snorlaxData.stats, 110), []);
});

`.trim(),
    resources: resources.filter
  },
  {
    category: 'filter',
    challengeNumber: 5, 
    instructions: `
Write a function named getStatName that, given the snorlaxData provided in the test and an integer as input, uses filter to return an array containing just the name of the stat with a baseStat greater than the integer.

For example, getStatName(snorlaxData.stats, 50) will return ['special-defense', 'special-attack'].

`.trim(),
    starterCode: `
export const getStatName = (arr, minBaseStat) => {
    // Solution code here...
};
    
`.trim(),
    qunitTest: `
const snorlaxData = {
    stats: [
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/6/',
                name: 'speed',
            },
            effort: 5,
            baseStat: 30,
        },
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/5/',
                name: 'special-defense',
            },
            effort: 2,
            baseStat: 110,
        },
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/4/',
                name: 'special-attack',
            },
            effort: 9,
            baseStat: 65,
        },
    ],
    name: 'snorlax',
    weight: 4600,
};

QUnit.test('It should return the name of the stats that exceed that maximum', assert => {
    assert.deepEqual(getStatName(snorlaxData.stats, 50), ['special-defense', 'special-attack']);
});

`.trim(),
    resources: resources.filter
  },
  {
    category: 'filter',
    challengeNumber: 6, 
    instructions: `
Write a function named getCharactersWithoutChildren that, given the array of characters provided in the test, uses filter to return an array of all characters without children.

`.trim(),
    starterCode: `
export const getCharactersWithoutChildren = (arr) => {
    // Solution code here...
};
    
`.trim(),
    qunitTest: `
const characters = [
    {
        name: 'Eddard',
        spouse: 'Catelyn',
        children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
        house: 'Stark',
    },
    {
        name: 'Jon',
        spouse: 'Lysa',
        children: ['Robin'],
        house: 'Arryn',
    },
    {
        name: 'Cersei',
        spouse: 'Robert',
        children: ['Joffrey', 'Myrcella', 'Tommen'],
        house: 'Lannister',
    },
    {
        name: 'Daenarys',
        spouse: 'Khal Drogo',
        children: ['Drogon', 'Rhaegal', 'Viserion'],
        house: 'Targaryen',
    },
    {
        name: 'Mace',
        spouse: 'Alerie',
        children: ['Margaery', 'Loras'],
        house: 'Tyrell',
    },
    {
        name: 'Sansa',
        spouse: 'Tyrion',
        house: 'Stark',
    },
    {
        name: 'Jon',
        spouse: null,
        house: 'Snow',
    },
];

QUnit.test('It should return an array containing characters who do not have children', assert => {
    assert.deepEqual(
        getCharactersWithoutChildren(characters), 
        [
            { name: 'Sansa', spouse: 'Tyrion', house: 'Stark' }, 
            { name: 'Jon', spouse: null, house: 'Snow' }
        ]
    );
});

`.trim(),
    resources: resources.filter
  },
  {
    category: 'filter',
    challengeNumber: 7, 
    instructions: `
Write a function named evenOddNumericValues that, given an array as input, uses filter to remove any non-numeric values, then uses map to generate a new array containing the string 'even' or 'odd', depending on the original value.

For example: evenOddNumericValues(['Gregor', 2, 4, 1]) returns ['even', 'even', 'odd'].

`.trim(),
    starterCode: `
export const evenOddNumericValues = (arr) => {
    // Solution code here...
};
    
`.trim(),
    qunitTest: `
QUnit.test('It should remove non-integers and return "even" or "odd', assert => {
    assert.deepEqual(evenOddNumericValues(['Gregor', 2, 4, 1]), ['even', 'even', 'odd']);
    assert.deepEqual(evenOddNumericValues(['a', 'b', 'c']), []);
});

`.trim(),
    resources: resources.filter
  },
  {
    category: '',
    challengeNumber: , 
    instructions: ``.trim(),
    starterCode: ``.trim(),
    qunitTest: ``.trim(),
    resources: 
  },
];

module.exports = challenges;
