const resources =
{
  forEach: {
    overview: `
### Array.forEach

#### Overview
\`Array.forEach\` allows you to iterate through an array. Where a normal \`for\` loop is "iterative", \`forEach\` is more declarative or functional in nature.
     
It is implemented as a method on your array instance.
\`\`\`js
  let myArray = ['a', 'b', 'c'];
  myArray.forEach( ... )
\`\`\`

It takes a callback as a parameter, which in turn receives the value and the iterator, and runs it on every element.
\`\`\`js
  let myArray = ['a','b','c'];

  myArray.forEach((value, i) => {
    console.log(i);       // 0, 1, 2
    console.log(value);   // a, b, c
  })
\`\`\`

#### Caveats and Notes
- Applies the callback to each element
- You cannot "return" a value
- You cannot "break" or "continue" as you can with a for loop
- By default, forEach does not mutate the array
- If you mutate it in process, you will have interesting issues

`.trim(),
    documentation: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach', 'https://codeburst.io/javascript-the-difference-between-foreach-and-for-in-992db038e4c2'],
    video: 'OYr_SaXiPy4'
  },
  variables: {
    overview: `
### Variables: Value vs. Reference 

#### Overview
Let's consider the humble variable. While you've surely used variables extensively in your code, today we will explore some nuances of how they work in JavaScript. 

Behold a simple line of code:
\`\`\`js
  let age = 37; // I'm 37, I'm not old! 
\`\`\`

What is happening here? How would you describe it in plain English to someone not familiar with programming? You might say (or you might even have been told) that "age" is like a bucket, and we put the number '37' in to that bucket. Later, we might change what's in the bucket. 

But that analogy breaks down pretty quickly if we think about what's really happening. The variable itself is not actually holding any information. It's more like a sign post, indicating where (in computer memory) to find the value in question. If we need to change it, we alter what it's pointing to, and assign it to indicate a new value. 

Remember, the \`=\` in JavaScript is the "assignment operator", that sets a label (a variable) to point at a specific value. When you 'assign' a literal value to a new variable, three things happen under the hood:

1. A certain amount of memory is allocated to hold the value.
1. The value is placed into that particular spot in memory.
1. The variable is set to point to that spot in memory.

But what happens when you assign a value that is already held in memory, to a new variable? The JavaScript interpreter has to make a choice. It can do one of 2 things:

1. It could simply set that new variable to point to the same spot in memory.
1. Or... it could repeat the process above: set aside more memory, copy in the value, and point the new variable to that spot.

These are often referred to, respectively, as "pass by reference" (because the location reference is transferred to the new variable), or "pass by value" (because a new value is added to memory, and indicated by the new variable). 

The first option here, pass by reference, is pretty efficient! No additional memory required, and it's just one step, instead of 3 steps. Yay! Additionally, assigning one variable to another would give us 2 different ways to access or change the same value. 

But the second option gives us more flexibility. If we pass by value, every time we assign a variable to another variable, we have a new copy, that can be independently modified. The price we pay for this flexibility is all the additional memory required to store all those copies. 

SO! How does JavaScript decide which method to use? 
\`\`\`js
  let newVar = existingVar; // WHAT WILL JAVASCRIPT DO?? Assign a reference? Or a new copy? 
\`\`\`

Well, it decides based on what kind of value is being assigned. 

1. If the value is large, complicated, or could change its memory footprint, it's assigned by reference, so no copy has to be made. The new variable points to the same place in memory as the source variable. 
1. If the value is unchangeable (immutable), fixed size, and easy to store, it's assigned by copy. The new variable points to a new spot in memory, that contains a fresh copy of the source value. We call this "assigned by value".

Thankfully, JavaScript only has a small handful of common data types, so we can make a short list to keep track. They exist in just two categories:

* Primitive types: booleans, numbers, strings, ...
* Objects: Arrays, functions, and of course object literals, or custom types (instantiated with 'new'), ...

Have you guessed? Primitive types are always passed by value, and Object types are always passed by reference. 

Let's look at some examples. 
\`\`\`js
  let line1 = "Where now?" // The string literal is immutable. The variable 'line1' points to it.

  let line2 = line1 // The string is copied to a new location in memory. The variable 'line2' points to the new string. 

  line1 = line1 + " Who now? When now?" // A new string is created. 'line1' is adjusted to point at the new string.

  console.log(line1) // "Where now? Who now? When now?"
  console.log(line2); // Has not changed, is still its own copy of "Where now?"
\`\`\`

But if we work with Object types, it's a different story... 
\`\`\`js
  let obj1 = { bradbury: "It was a pleasure to burn."}; // Allocate, populate, assign. 
  let obj2 = obj1; // Simply point obj2 to the same spot in memory that holds obj1

  obj1.vonnegut = "All this happened, more or less." // Modify the object by adding a new property

  // Behold! The changes are reflected in obj2!! 
  console.log(obj2); // {bradbury: "It was a pleasure to burn", vonnegut: "All this happened, more or less."}
\`\`\`

Special attention should be paid to function calls. When an argument is passed in to a function, it is assigned as a parameter in that function's code. Think of it as lining up each argument with each parameter, connected with an assignment operator. 
\`\`\`js
  function appendZero(list) {
      list.push(0); // We can modify the array passed in directly! No return value needed! 
  }

  let a = [1, 2, 3, 4];
  appendZero(a) // Passing this variable, is like saying 'list = a', so it's passed to the function by REFERENCE

  console.log(a) // [1, 2, 3, 4, 0] It now has the modification, changed from within the function. 
\`\`\`

`.trim(),
    documentation: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures', 'https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293'],
    video: '8lVbQYfS0Rg'
  },
  sort: {
    overview: `
### Array.sort

#### Overview
\`Array.sort(compareFunction)\` sorts an array in place, mutating the array. There is no return value.

The compareFunction is a function that is used by sort to evaluate sibling values in turn, and sort in the appropriate order.

- If \`compareFunction(a, b)\` is less than 0, sort a to an index lower than b, i.e. a comes first.
- If \`compareFunction(a, b)\` returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. 
- If \`compareFunction(a, b)\` is greater than 0, sort b to an index lower than a, i.e. b comes first.

#### Compare Function Setup
\`\`\`js
  function compare(a, b) {
    if (a is less than b by some ordering criterion) {
      return -1;
    }
    if (a is greater than b by the ordering criterion) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
\`\`\`

#### Sample Compare Function
\`\`\`js
  function compareNumbers(a, b) {
    return a - b;
  }
\`\`\`

#### In actual code ...
\`\`\`js
  function compareNumbers(a, b) {
    return a - b;
  }

  let array = [1,6,4,2,8,11,4,99,129];
  array.sort(compareNumbers);

// Or all in line:
  array.sort( (a,b) => { 
    return a - b; 
  });
\`\`\`

#### Caveats and Notes
- The speed and technique of the sort functionality internally is determined by JavaScript, so you can't depend on a consistent "complexity" or "time"
- compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined.`.trim(),
    documentation: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort'],
    video: 'nP5S2RhbaB8'
  },
  stringMethods: {
    overview: `
### String Methods

Fun with \`slice()\`, \`splice()\`, \`split()\`, \`join()\`!

#### Overview
**split()** -- Turning Strings into arrays
Using the \`split(separator)\` method on a string will quickly parse the string finding every instance of the \`separator\` character(s) that you identify, and where it finds them, "split" the string at that point and create an array element.
- The string is not modified
- The \`separator\` characters is removed as the string is "split" up based on it...

\`\`\`js
let str = 'This is a really cool thing';
let words = str.split(' ');
console.log(words);
  // prints out: [ 'This', 'is', 'a', 'really', 'cool', 'thing' ]

let iii = str.split('i');
console.log(iii);
  // prints out: [ 'Th', 's ', 's a really cool th', 'ng' ]
\`\`\`

**join()** -- Turning arrays into strings
The \`join(char)\` array method will iterate an array and create a string by concatenating the value of each element in the array with the \`char\` that you specify.
- The original array is not modified
- Given no \`char\`, join() will insert commas.

\`\`\`js
let arr = ['this','was','fun']
console.log( arr.join() ); // commas will be the default
  // prints out: this,was,fun
  
console.log( arr.join('') ); // one long word
  // prints out: thiswasfun
  
console.log( arr.join('.') ); // millenial advertising
  // prints out: this.was.fun.
  
console.log( arr.join('-') ); // kebab case
  // prints out: this-was-fun
  
console.log( arr.join('_') ); // snake case
  // prints out: this_was_fun
\`\`\`

**slice()** -- Find elements within an array
- The array is not modified
- Identify the start index and the end index (optional)
- Positive indexes start at the front of the array, negatives start at the end.

\`\`\`js
let arr = ['a','b','c','d','e'];

// Find 2 elements starting at position 0
console.log( arr.slice(0,2) );
  // output: [ 'a', 'b' ]

// Find 2 elements starting at position 2
console.log( arr.slice(2,4) );
  // output: [ 'c', 'd' ]

// Find 1 elements starting at position 4
console.log( arr.slice(3,4) );
  // output: [ 'd' ]

// Find 1 elements starting at position 0
console.log( arr.slice(0,1) );
  // output: [ 'a' ]

// Find the last element
console.log( arr.slice(arr.length-1) );
  // output: [ 'e' ]

// 2 from the front to the end ...
console.log( arr.slice(2) ); 
  // output: [ 'c', 'd', 'e' ]

// 2 from the end to the front ...
console.log( arr.slice(-2) );
  // output: [ 'd', 'e' ]
\`\`\`

**splice()** -- replace parts of an array with new values
- The array IS modified
- 3 parameters: Start Index, # of Elements to Remove, Replacement Value

\`\`\`js
let arr = ['a','b','c','d','e'];

// At arr index 1, replace 0 elements with 99
// This will INSERT a new element into the array
arr.splice(1,0,99)
console.log(arr);
  // output: [ 'a', 99, 'b', 'c', 'd', 'e' ]

// At arr index 1, replace 1 element with nothing
// This will DELETE an array element at a particlular index
arr.splice(1,1)
console.log(arr);
  // output: [ 'a', 'b', 'c', 'd', 'e' ]

// At arr index 2, replace 3 elements with 99
// This will shorten the array, but add a new value
arr.splice(2,3,99)
console.log(arr);
  // output: [ 'a', 'b', 99 ]
\`\`\`

`,
    documentation: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join'],
    video: 'vGtLUc5NUO4'
  },
  objectIteration: {
    overview:`
### Object Iteration

#### Overview
Just like with arrays, you'll often want to iterate over objects. But unlike arrays, objects have more than just one moving part ... and very often, they go deeper than just a single property.
  \`\`\`js
  let person = 
  {
    "name":"John",
    "role":"Dad",
    "interests": ["Coaching","Teaching"]
  };
  \`\`\`
    
To iterate over the properties of an object, there are various ways to iterate or traverse. These will only give you access to the current layer, however.  If you want to fully traverse the object and any sub-objects or arrays, you'll need to nest...

**for ... in** ... a looping method for objects that acts much like an old fashioned "for" loop. 
  \`\`\`js
  for( let property in person ) { 
    console.log(property, person[property]);
  }
  \`\`\`
    
**Object.keys** ... this is an Object constructor prototype method, which takes in an object as an argument and returns an array of keys (properties)
  \`\`\`js
  let properties = Object.keys(person);
  properties.forEach( property => {
    console.log(property, person[property]);
  })

// Or more succinctly
  Object.keys(person).forEach( property => {
    console.log(property, person[property]);
  })
  \`\`\`
    
**Object.values** - Returns an iterable array of just the values from the object.
  \`\`\`
  console.log(Object.values(person));
  // OUTPUT
      [ 
          'John', 
          'Dad', 
          [ 'Coaching', 'Teaching' ] 
      ]
      
  // To Iterate it ...
  Object.values(person).forEach(value => {
    console.log(value);
  })

  // OUTPUT
      John
      Dad
      ['Coaching', 'Teaching']
  \`\`\`
    
**Object.entries** - Returns an array of each "Entry" as an an array with a key and value
  \`\`\`
  Object.entries(person).forEach(entry => {
    console.log(entry);
  })

  // OUTPUT
  [
      [ 'name', 'John' ],
      [ 'role', 'Dad' ],
      [ 'interests', [ 'Coaching', 'Teaching' ] ],
  ]
  \`\`\`

`.trim(),
    documentation: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'],
    video: 'NGvpqw8PQZU'
  },
  map: {
    overview:`
### Array.map()

#### Overview
\`array.map( fn(v,i) {} )\` Much like\`array.forEach()\`, the \`array.map()\` function iterates over an array and runs a call back for each element. The callback receives the value and the index of the array element as a parameter.  

The difference is that \`.map()\` will always return you a **new array** of the **same length** as the original array comprised of your return values

#### Squaring a number
  \`\`\`js
  let numbers = [2,3,4,5];
  
  let squares = numbers.map( function(n,i) {
    return n * n;
  });
  
  // or as a snazzy arrow function ...
  // let squares = numbers.map( n => n * n );
  
  console.log(squares); // [ 4, 9, 16, 25 ]
  \`\`\`

#### Changing the data shape
  \`\`\`js
  let people = [
    { name: "John", role: "Dad" },
    { name: "Cathy", role: "Mom" },
    { name: "Zach", role: "Kid" },
    { name: "Allie", role: "Kid" },
  ];
  
  let folks = people.map( (person,i) => {
    return person.name;
  });
  
  console.log(folks); // [ "John", "Cathy", "Zach", "Allie" ]
  \`\`\`

**If you do nothing ... **
  
  \`\`\`js
  let numbers = [2,3,4,5];
  
  let squares = numbers.map( function(n,i) {
  });
  
  console.log(squares); // [undefined, undefined, undefined, undefined]
  \`\`\`

#### Caveats and Notes
- The original array is never mutated
- You always get back a new array
- The array returned is always the same length as the original

`.trim(),
    documentation: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map', 'https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c'],
    video: 'erLq0zb01y4'
  },
  filter: {
    overview:`
### Array.filter()
    
#### Overview

Similar to \`array.map()\`, the \`array.filter()\` function iterates over an array and runs a call back for each element. The callback receives the value and the index of the array element as a parameter.  

\`filter.()\` will always return you a **new array**, comprised of elements from the original array that match your criteria -- which elements in the array match the filter condition?

#### Even Numbers
  \`\`\`js
  let numbers = [2,3,4,5];
  
  let evens = numbers.filter( function(n,i) {
    return !(n % 2);
  });
  
  // or as a snazzy arrow function ...
  // let evens = numbers.filter( n => !(n % 2) );
  
  console.log(evens); // [ 2, 4, 6 ]
  \`\`\`

#### Object Values
  \`\`\`js
  let people = [
    { name: 'John', role: 'Dad' },
    { name: 'Cathy', role: 'Mom' },
    { name: 'Zach', role: 'Kid' },
    { name: 'Allie', role: 'Kid' },
  ];

  let parents = people.filter(person => person.role !== "Kid");
  console.log(parents);
   // [ { name:'John' ... }, {name:'Cathy', ...} ]
  \`\`\`

**If you do nothing** ... you'll get back an empty array
 
  \`\`\`js
  let numbers = [2,3,4,5];
  
  let evens = numbers.filter( function(n,i) {
  });
  
  console.log(evens); // []
  \`\`\`

#### Caveats and Notes
- The original array is never mutated
- You always get back a new array
- The array returned is built by pushing values that evaluate & return \`true\`

`.trim(),
    documentation: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter', 'https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c'],
    video: 'ZCeKemUErbY'
  },
  reduce: {
    overview:`
### Array.reduce()

#### Overview

\`\`\`js
const result = arr.reduce((accumulator, value, index) => {
  // ...
}, initialValue);
\`\`\` 

#### Basics

\`.reduce()\` iterates over an array and returns the last version of the "accumulator" ... in each iteration, based on the value and/or idx of the current element in the array, you have the opportunity to modify and return the accumulator. After the last iteration of the array, that accumulator value is returned to the caller. \`initialValue\` represents the value of the accumulator in the first iteration.

**Add up all the numbers in an array**

In this example, the accumulator starts out as 0 (the initial value) and for each iteration, we simply add onto it, and then return it.  That return value gets fed into the next iteration so that you can continually operate on it and return the final value.

\`\`\`js
const numbers = [1,2,3,4];
const sum = numbers.reduce((accumulator, value, idx) => {
  accumulator = accumulator + value;
  return accumulator;
}, 0);

// sum would be 10
\`\`\`

**Change the shape of your data**

In this example, we'll take an array of objects and return back an object, keyed by the 'name' property. The initial value is an empty object, and as we iterate, we create a new entry in it, returning it as we build on. 

  \`\`\`js
  const people = [
    { name:'Fred', role:'Developer' },
    { name:'Suzy', role:'Developer' },
    { name:'Gina', role:'Manager' },
    { name:'Jim', role:'Support' }
  ];
  
  const folks = people.reduce((accumulator, person, idx) => {
    accumulator[person.name] = person.role;
    return accumulator;
  }, {});
  
  // folks: 
  { 
    Fred: 'Developer',
    Suzy: 'Developer',
    Gina: 'Manager',
    Jim: 'Support'
  }
  
  \`\`\`

`.trim(),
    documentation: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce', 'https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c'],
    video: '_uICFozlNYE'
  },
  nestedForLoops: {
    overview:`
### Nested For Loops

#### Overview
We can use nested for loops to iterate over each element in another array.

For example, say you had a group of people, and you wanted to everyone to take turns shaking everyone's hand (other than themselves, of course). 

Visualize people sitting in a row.  The first person stands up, walks in front and shakes each of the other's hands, and then sits down at the end of the row. Then the next person gets up and does the same thing ... until everyone has gone through the process ...

\`\`\`js
let shakeHands = list => {
  for( let i = 0; i <= list.length - 1; i++ ) {
    for( let j = 0; j <= list.length - 1; j++ ) {
      if(list[i] !== list[j]) {
        console.log(list[i] + ' shakes ' + list[j] + ''s hand.');
      }
    }
  }
};

let people = ['Kookla', 'Fran', 'Ollie'];

shakeHands(people);

// Output:
Kookla shakes Fran's hand
Kookla shakes Ollie's hand
Fran shakes Kookla's hand
Fran shakes Ollie's hand
Ollie shakes Kookla's hand
Ollie shakes Fran's hand
\`\`\`

Alternatively, you can have 2 different arrays that loop over each other. Here, we'll create a simple grid, like a tic-tac-toe board.  First we'll iterate over the 'height' which creates the rows, and then over the 'width', to create the columns.  

\`\`\`js
let drawGrid = (height,width) => {
  for(let i = 1; i <= height; i++) {
    let row = [];
    let char = i === height ? ' ' : '_'; // On the bottom row, we need to use spaces instead of "_"
    for(let j = 1; j <= width; j++) {
      row.push(char);
    }
    console.log(row.join('|'));
  }
};
drawGrid(3,,3)

// Output:

_|_|_
_|_|_
 | | 

 \`\`\`

#### Caveats and Notes
- Looping an array over itself like the first example can lead to massive performance problems!
- Make sure that in your nested loops that you use unique and meaningful variable names.

### 2 Dimensional Arrays

#### Overview

One practical application of using nested for loops is working with multi-dimensional arrays. 

If that sounds scary, fear not! The wording may be unfamiliar to you, but the code is very similar to what you already know. 

A 2 Dimensional array is simply an array whose elements are also arrays. 

It is an array of arrays. That is, a list of lists. A box containing boxes that contain items. 

\`\`\`js
let a = [ [2,4,6,8], [1,3,7,9], [4,3,8,6] ];

// Many people visualize this as a grid, thinking of it as rows and columns...

let a = [
  [2,4,6,8],
  [1,3,7,9],
  [4,3,8,6]
];
\`\`\`

Lets loop over that and print out the grid ... the outer loop represents the elements in the array \`a\`, while the inner loop represents each item in the array found at each position in \`a\`

\`\`\`js
let drawTable = (table) => {
  for(let i = 0; i <= table.length - 1; i++) {
    let line = '';
    for(let j = 0; j <= table[i].length - 1; j++){
      line = line + table[i][j];
    }
    console.log(line);
  }
};
drawTable(a);

// Output: 

  2468
  1379
  4386
\`\`\`

In this example, we'll try and figure out which items in the arrays "touch" each other.  Look at the output from the previous example, and think about which numbers touch which each other (vertically, horizontally, and diagonally) when you visualize it as that grid.  By analyzing which are one above or below and one left or right, we can loop through and figure this out.

\`\`\`js
let touches = (table) => {
  for(let i = 0; i <= table.length - 1; i++) {
    for(let j = 0; j <= table[i].length - 1; j++){
      let touches = [];
      for(let x = i - 1; x <= i + 1; x++) {
        for(let z = j - 1; z <= j + 1; z++) {
          if(x === i && j === z) {continue;} // skip ourself
          table[x] && table[x][z] && touches.push(table[x][z]);
        }
      }
      console.log('table[i][j] + ' touches ' touches');
    }
  }
};

touches(a);

// OUTPUT:

    2 touches 4,1,3
    4 touches 2,6,1,3,7
    6 touches 4,8,3,7,9
    8 touches 6,7,9
    1 touches 2,4,3,4,3
    3 touches 2,4,6,1,7,4,3,8
    7 touches 4,6,8,3,9,3,8,6
    9 touches 6,8,7,8,6
    4 touches 1,3,3
    3 touches 1,3,7,4,8
    8 touches 3,7,9,3,6
    6 touches 7,9,8
    \`\`\`

`.trim(),
    documentation: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'],
    video: 'VgIJzgTTEq4'
  }

};
//Sample resource object
// ReplaceWithCategoryName: {
//     overview:``.trim(),
//     documentation: ['', ''],
//     video: ''
//   }

module.exports = resources;
