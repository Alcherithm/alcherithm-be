//NOTES for RESOURCES DATA
//Sample resource object
// CategoryName: {
//     overview:``.trim(),
//     documentation: ['', ''],
//     video: ''
//   }

//Resources can be found in the README.MD and the ASSIGNMENT.MD files in the src folder for each challenge. Look in both to find the overview, links to resources/documentation, and videos
//category name should match 'category' in resourcesData'
//Overview: should be in MD with backticks and left justified. Will need 'trim()' at the end after the backticks
//documentation: is an array of url strings
//video is a single url string


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
- If you mutate it in process, you will have interesting issues`.trim(),
    documentation: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach', 'https://codeburst.io/javascript-the-difference-between-foreach-and-for-in-992db038e4c2'],
    video: 'https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k'
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
    video: 'https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k'
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
    video: 'https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k'
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
\`\`\``,
    documentation: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join'],
    video: null
  }
};
//Sample resource object
// ReplaceWithCategoryName: {
//     overview:``.trim(),
//     documentation: ['', ''],
//     video: ''
//   }

module.exports = resources;
