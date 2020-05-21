export const challenges = [
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
    resources: `
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
- If you mutate it in process, you will have interesting issues
    
## Reference
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [ForEach vs For](https://codeburst.io/javascript-the-difference-between-foreach-and-for-in-992db038e4c2)

## Video
Watch video from the [demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k){:target="_blank"}

## Demonstration
Look through [these sample problems.](DEMO.md){:target="_blank"}`.trim()
  }
];
