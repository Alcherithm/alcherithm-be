/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named oddValues that, given an array of integers as input, uses filter to return an array containing only the odd integers.

For example, oddValues([1,2,3]) returns [1,3].
------------------------------------------------------------------------------------------------ */

export const oddValues = (arr) => {
  let odds = arr.filter ((val, idx) => {
    return (val % 2);
  });
  return odds;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named filterStringsWithVowels that, given an array of strings as input, uses filter to return an array with only words that contain vowels.

The callback function to filter should include or utilize a regular expression pattern.

For example, filterStringsWithVowels('gregor','hound','xyz') returns ['gregor', 'hound'].
------------------------------------------------------------------------------------------------ */


export const filterStringsWithVowels = (arr) => {
  const withVowels = arr.filter(word => {
    let regex = word.match(/\w*[aeiou]\w*/g);
    if(regex) {
      return word;
    }
  });
  return withVowels;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named notInFirstArray that, given two arrays as input, uses filter to return an array of all the elements in the second array that are not included in the first array.

For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].
------------------------------------------------------------------------------------------------ */

export const notInFirstArray = (forbiddenValues, arr) => {
  const notFirst = arr.filter(secondValue => {
    if(!forbiddenValues.includes(secondValue)) {
      return secondValue;
    }
  });
  return notFirst;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named getBaseStatGreaterThan that, given the snorlaxData, below, and an integer as input, uses filter to return an array containing all stats with a baseStat greater than the integer.

For example, getBaseStatGreaterThan(snorlaxData.stats, 50) will return an array containing the 'special-defense' and 'special-attack' objects.
------------------------------------------------------------------------------------------------ */

export const getBaseStatGreaterThan = (arr, minBaseStat) => {
  const newThing = arr.filter(anything => anything.baseStat > minBaseStat);
  // console.log(newThing);
  return newThing;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named getStatName that is an extension of your getBaseStatGreaterThan function from challenge 4. For this function, extend your solution from challenge 4 to only return the name of the stat, rather than the entire stat object.

For example, getStatName(snorlaxData.stats, 50) will return ['special-defense', 'special-attack'].
------------------------------------------------------------------------------------------------ */

export const getStatName = (arr, minBaseStat) => {
  const newThing = [];
  arr.filter(anything => {
    if(anything.baseStat > minBaseStat) {
      newThing.push(anything.stat.name);
    }
  });
  return newThing;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named getCharactersWithoutChildren that, given the array of characters, below, uses filter to return an array of all characters without children.
------------------------------------------------------------------------------------------------ */


export const getCharactersWithoutChildren = (arr) => {
  const noChildren = arr.filter(character => character.children === undefined);
  return noChildren;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named evenOddNumericValues that, given an array as input, uses filter to remove any non-numeric values, then uses map to generate a new array containing the string 'even' or 'odd', depending on the original value.

For example: evenOddNumericValues(['Gregor', 2, 4, 1]) returns ['even', 'even', 'odd'].
------------------------------------------------------------------------------------------------ */

export const evenOddNumericValues = (arr) => {
  const numArray = arr.filter((n) => {
    return typeof n === 'number';
  });
  return numArray.map(item => {
    if(item % 2) {
      return 'odd';
    } else {
      return 'even';
    }
  });
};