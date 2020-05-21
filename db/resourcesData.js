const resources = 
  {
    forEach: {
      overview: `
 ## Overview
 Array.forEach allows you to iterate through an array. Where a normal 'for' loop is "iterative", forEach is more declarative or functional in nature.
     
 It is implemented as a method on your array instance.
     let myArray = ['a', 'b', 'c'];
     myArray.forEach( ... )
 
 It takes a callback as a parameter, which in turn receives the value and the iterator, and runs it on every element.
     
     let myArray = ['a','b','c'];
 
     myArray.forEach((value, i) => {
     console.log(i);       // 0, 1, 2
     console.log(value);   // a, b, c
     })
   
 ## Caveats and Notes
 - Applies the callback to each element
 - You cannot "return" a value
 - You cannot "break" or "continue" as you can with a for loop
 - By default, forEach does not mutate the array
 - If you mutate it in process, you will have interesting issues`.trim(),
      documentation:`
## Reference
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [ForEach vs For](https://codeburst.io/javascript-the-difference-between-foreach-and-for-in-992db038e4c2)`.trim(),
      video:`
## Video
Watch video from the [demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k){:target="_blank"}.`.trim(),
    },
    variables: {
      overview:`
# Variables: Value vs. Reference 

## Overview
Let's consider the humble variable. While you've surely used variables extensively in your code, today we will explore some nuances of how they work in JavaScript. 

Behold a simple line of code:
    let age = 37; // I'm 37, I'm not old! 

What is happening here? How would you describe it in plain English to someone not familiar with programming?
You might say (or you might even have been told) that "age" is like a bucket, and we put the number '37' in to that bucket. Later, we might change what's in the bucket. 

But that analogy breaks down pretty quickly if we think about what's really happening. The variable itself is not actually holding any information. It's more like a sign post, indicating where (in computer memory) to find the value in question. If we need to change it, we alter what it's pointing to, and assign it to indicate a new value. 

Remember, the '=' in JavaScript is the "assignment operator", that sets a label (a variable) to point at a specific value. When you 'assign' a literal value to a new variable, three things happen under the hood:

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
    let newVar = existingVar; // WHAT WILL JAVASCRIPT DO?? Assign a reference? Or a new copy? 

Well, it decides based on what kind of value is being assigned. 

1. If the value is large, complicated, or could change its memory footprint, it's assigned by reference, so no copy has to be made. The new variable points to the same place in memory as the source variable. 
1. If the value is unchangeable (immutable), fixed size, and easy to store, it's assigned by copy. The new variable points to a new spot in memory, that contains a fresh copy of the source value. We call this "assigned by value".

Thankfully, JavaScript only has a small handful of common data types, so we can make a short list to keep track. They exist in just two categories:

* Primitive types: booleans, numbers, strings, ...
* Objects: Arrays, functions, and of course object literals, or custom types (instantiated with 'new'), ...

Have you guessed? Primitive types are always passed by value, and Object types are always passed by reference. 

Let's look at some examples. 
    let line1 = "Where now?" // The string literal is immutable. The variable 'line1' points to it.

    let line2 = line1 // The string is copied to a new location in memory. The variable 'line2' points to the new string. 

    line1 = line1 + " Who now? When now?" // A new string is created. 'line1' is adjusted to point at the new string.

    console.log(line1) // "Where now? Who now? When now?"
    console.log(line2); // Has not changed, is still its own copy of "Where now?"

But if we work with Object types, it's a different story... 
    let obj1 = { bradbury: "It was a pleasure to burn."}; // Allocate, populate, assign. 
    let obj2 = obj1; // Simply point obj2 to the same spot in memory that holds obj1

    obj1.vonnegut = "All this happened, more or less." // Modify the object by adding a new property

    // Behold! The changes are reflected in obj2!! 
    console.log(obj2); // {bradbury: "It was a pleasure to burn", vonnegut: "All this happened, more or less."}

Special attention should be paid to function calls. When an argument is passed in to a function, it is assigned as a parameter in that function's code. Think of it as lining up each argument with each parameter, connected with an assignment operator. 

    function appendZero(list) {
        list.push(0); // We can modify the array passed in directly! No return value needed! 
    }

    let a = [1, 2, 3, 4];
    appendZero(a) // Passing this variable, is like saying 'list = a', so it's passed to the function by REFERENCE

    console.log(a) // [1, 2, 3, 4, 0] It now has the modification, changed from within the function. `.trim(),
      documentation: `
## References and Resources
* [MDN - JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
* [Grasp "By Reference", "By Value" in JavaScript](https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293)`.trim(),
      video: `
## Video
Watch a video from the [demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)`.trim()
    },

//Sample resource object
// ReplaceWithCategoryName: {
//     overview:``.trim(),
//     documentation: ``.trim(),
//     video: ``.trim()
//   }

  };

module.exports = resources;
