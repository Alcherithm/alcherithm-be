module.exports = (users, codeChallenges) => [{
  userId: users[0]._id,
  challengeId: codeChallenges[0]._id,
  passed: true,
  solution: `
const greeting = word => {
  return word.toUpperCase();
};

const speaker = (message, callback) => {
  return callback(message);
};`.trim()
},
{
  userId: users[3]._id,
  challengeId: codeChallenges[0]._id,
  passed: true,
  solution:`
const greeting = (word) => {
  return word.toUpperCase();
  };
  
const speaker = (message, callback) => {
  return callback(message);
};`.trim()
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[0]._id,
  passed: true,
  solution: `
const greeting = word => {
  return word.toUpperCase();
};

const speaker = (message, callback) => {
  return callback(message);
};
}`.trim()
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[1]._id,
  passed: true,
  solution: `
const addValues = (arr, value) => {
  arr.push(value);
};

const addNumbers = (num, arr, times, callback) => {
for(let i = 0; i < times; i++) {
  callback(arr, num);
}
return arr;
};`.trim()
},
{
  userId: users[2]._id,
  challengeId: codeChallenges[1]._id,
  passed: true,
  solution: `
const addValues = (arr, value) => {
arr.push(value);
};
  
const addNumbers = (num, arr, times, callback) => {
for(let i = 0; i < times; i++) {
  callback(arr, num);
}
return arr;
};`.trim()
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[2]._id,
  passed: true,
  solution: `
const removeOne = (num, arr) => {
if(num % 3 === 2) {
  arr.pop();  
}
};

const removeElements = (arr, callback) => {
for(let i = 0; i < arr.length; i++) {
  const arrayItem = arr[i];
  callback(arrayItem, arr);
}
return arr;
};`.trim()
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[2]._id,
  passed: true,
  solution: `
const removeOne = (num, arr) => {
  if(num % 3 === 2) {
  arr.pop();  
}
};

const removeElements = (arr, callback) => {
for(let i = 0; i < arr.length; i++) {
  const arrayItem = arr[i];
  callback(arrayItem, arr);
}
return arr;
};`.trim()
},
{
  userId: users[3]._id,
  challengeId: codeChallenges[2]._id,
  passed: true,
  solution: `
const removeOne = (num, arr) => {
  const result = num % 3;
  if(result === 2) {
  arr.pop();
  }
};
  
const removeElements = (arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
  callback(arr[i], arr);
}
return arr;
};`.trim()
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[3]._id,
  passed: true,
  solution: `
const removeWithForEach = (arr, callback) => {
  arr.forEach(element => {
  callback(arr[element], arr);
});
return arr;
};`.trim()
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[4]._id,
  passed: true,
  solution: `
const removeWithAnon = (arr) => {
  arr.forEach((num) => {
  const result = num % 3;
  if(result === 2) {
  arr.pop();
}
});
return arr;
};`.trim()
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[5]._id,
  passed: true,
  solution:`
const createList = (availableItems) => {
const newArray = [];
  availableItems.forEach((fruit) => {
  if(fruit.available) {
  newArray.push(fruit.name);
}
});
return newArray;
};`.trim()
},
{
  userId: users[3]._id,
  challengeId: codeChallenges[5]._id,
  passed: true,
  solution:`
const createList = (availableItems) => {
const newArray = [];
  availableItems.forEach((fruit) => {
  if(fruit.available) {
  newArray.push(fruit.name);
}
});
  return newArray;
};`.trim()
},
{
  userId: users[3]._id,
  challengeId: codeChallenges[6]._id,
  passed: true,
  solution:`
const fizzBuzz = (arr) => {
  arr.forEach((num, index) => {
  if(num % 3 === 0) {
    arr.splice(index, 1, 'Fizz');
  }
  if(num % 5 === 0) {
    arr.splice(index, 1, 'Buzz');
  }
  if(num % 3 === 0 && num % 5 === 0) {
    arr.splice(index, 1, 'Fizz Buzz');
  }
  });
  return arr;
};`.trim()
},
{
  userId: users[2]._id,
  challengeId: codeChallenges[7]._id,
  passed: true,
  solution:`
  const appendTheEnd = (str) => {
    return str + ' The end.';
  };
  `
},
{
  userId: users[2]._id,
  challengeId: codeChallenges[8]._id,
  passed: true,
  solution:`
  export const appendFirstToLast = (arr) => {
    arr.push(arr[0]);
  };`.trim()
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[9]._id,
  passed: true,
  solution: `
  export const addBirthYearProperty = (obj, year) => {
    obj.yearBorn = year;
  };`.trim()
},
{
  userId: users[3]._id,
  challengeId: codeChallenges[10]._id,
  passed: true,
  solution:`
  const setStatusAsAuthor = (people) => {
    people.forEach(person => {
      person.isAuthor = true;
    });
  };`.trim()
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[11]._id,
  passed: true,
  solution: `
  const append = (arr1, arr2) => {
    arr2.forEach(item => {
      arr1.push(item);
    });
  };`.trim()
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[12]._id,
  passed: true,
  solution: `
const sortBackwards = (arr) => {
return arr.sort((a, b) => {
  return b - a;
});
};`.trim()
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[12]._id,
  passed: true,
  solution:`
  export const sortBackwards = (arr) => {
    arr.sort((a, b) => {
      return b - a;
    });
    return arr;
  };`.trim()
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[13]._id,
  passed: true,
  solution: `
const alphabetize = (arr) => {
return arr.sort();
};`.trim()
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[14]._id,
  passed: true,
  solution: `
const sortByLength = (arr) => {
return arr.sort((a, b) => {
  return a.length - b.length;
});
};`.trim()
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[14]._id,
  passed: true,
  solution:`
  const sortByLength = (arr) => {
    arr.sort((a, b) => {
      return a.length - b.length;
    });
    return arr;
  };`.trim()
},
{
  userId: users[3]._id,
  challengeId: codeChallenges[15]._id,
  passed: true,
  solution: `
const alphabetizeBetter = (arr) => {
arr.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
return arr;
};`.trim(),
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[15]._id,
  passed: true,
  solution:`
const alphabetizeBetter = (arr) => {
  arr.sort((a, b) => {
      return a.localeCompare(b);
    });
    return arr;
  };`.trim()
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[16]._id,
  passed: true,
  solution: `
const sortByPrice = (arr) => {
return arr.sort((a, b) => a.price - b.price);
};`.trim(),
},
{
  userId: users[2]._id,
  challengeId: codeChallenges[16]._id,
  passed: true,
  solution: `
  export const sortByPrice = (arr) => {
    arr.sort((a, b) => {
      return a.price - b.price;
    });
    return arr;
  };`.trim()
},
{
  userId: users[3]._id,
  challengeId: codeChallenges[17]._id,
  passed: true,
  solution: `
const sortNumbersByLength = (arr) => {
arr.sort((a, b) => a.toString().length - b.toString().length);
return arr;
};`.trim(),
},
{
  userId: users[3]._id,
  challengeId: codeChallenges[17]._id,
  passed: true,
  solution:`
  const sortNumbersByLength = (arr) => {
    arr.sort(function(a, b) {
      return a.toString().length - b.toString().length;
    });
    return arr;
  };`.trim(),
},
{
  userId: users[2]._id,
  challengeId: codeChallenges[18]._id,
  passed: true,
  solution:`
  export class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  
  export const sortPeople = (arr) => {
    arr.sort((a, b) => {
      return a.lastName.localeCompare(b.lastName);
    });
    return arr;
  };`.trim()
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[18]._id,
  passed: true,
  solution: `
class Person {
constructor(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
}

const sortPeople = (arr) => {
arr.sort((a, b) => a.lastName < b.lastName ? -1 : 1);
return arr;
};`.trim(),
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[19]._id,
  passed: true,
  solution: `
const sortPeopleBetter = (arr) => {
arr.sort((a, b) => {
  if(a.lastName < b.lastName) return -1;
  if(a.lastName === b.lastName) {
      if(a.firstName < b.firstName) return -1;
  } 
  if((a.firstName + a.lastName) === (b.firstName + b.lastName)) return a.age - b.age;
}
);
return arr;
};`.trim(),
},
{
  userId: users[3]._id,
  challengeId: codeChallenges[19]._id,
  passed: true,
  solution: `
  const sortPeopleBetter = (arr) => {
    arr.sort(function(a, b) { 
  
      if(a.lastName < b.lastName) {
        return -1;
      } else if(a.lastName > b.lastName) {
        return 1;
      } else {
        if(a.firstName < b.firstName) {
          return -1;
        } else if(a.firstName > b.firstName) {
          return 1;
        } else {
          return a.age - b.age;
        }
      }
    });
    return arr;
  };`.trim()
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[20]._id,
  passed: true,
  solution:`
  const howMuchPencil = (str) => {
    let result = [];
    for(let i = 0; i <= str.length; i++) {
      result.push(str.slice(i));
    }
    return result;
  };`.trim()
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[20]._id,
  passed: true,
  solution: `
const howMuchPencil = (str) => {
  let result = [];
  for(let i = 0; i <= str.length; i++) {
      const word = str.slice(i);
      result.push(word);
  }
  return result;
};`.trim()
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[21]._id,
  passed: true,
  solution: `
const wordsToCharList = (str) => {
  let letters = str.split('');
  return letters;
};`.trim()
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[21]._id,
  passed: true,
  solution:`
  const wordsToCharList = (str) => {
    let result = str.split('');
    return result;
  };`.trim()
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[22]._id,
  passed: true,
  solution: `
const listFoods = (recipe) => {
  let result = [];
  recipe.ingredients.forEach(ingredient => {
      const index = ingredient.indexOf(' ', 3);
      const word = ingredient.slice(index + 1);
      result.push(word);
  });
  return result;
};`.trim(),
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[23]._id,
  passed: true,
  solution: `
const splitFoods = (recipe) => {
  let result = [];
  recipe.ingredients.forEach(ingredient => {
      const word = ingredient.split(' ', 2);
      result.push(word);
  });
  return result;
};`.trim(),
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[23]._id,
  passed: true,
  solution:`
  const splitFoods = (recipe) => {
    let result = [];
    let ingredientList = recipe.ingredients;
  
    for(let i = 0; i < ingredientList.length; i++) {
      const item = ingredientList[i].split(' ', ingredientList.length);
      const sliceThing = item.slice(2, item.length).join(' ');
      result.push(sliceThing);   
    }
  
    return result;
  };`.trim()
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[24]._id,
  passed: true,
  solution: `
const stepActions = (recipe) => {
  let result = [];
  recipe.steps.forEach(step => {
      const word = step.split(' ', 1);
      return word;
  }
  );
  return result.push();
};`.trim(),
},
{
  userId: users[1]._id,
  challengeId: codeChallenges[24]._id,
  passed: true,
  solution:`
  const stepActions = (recipe) => {
    let result = [];
    let steps = recipe.steps;
  
    for(let i = 0; i < steps.length; i++) {
      const item = steps[i].indexOf(' ', 0);
      const sliceThing = steps[i].slice(0, item);
      result.push(sliceThing);   
    }
    return result;
  };`.trim()
},
{
  userId: users[2]._id,
  challengeId: codeChallenges[25]._id,
  passed: true,
  solution: `
  const removeEvenValues = (arr) => {
    for(let i = 0; i < arr.length; i++) {
      while(arr[i] % 2 === 0) {
        arr.splice(i, 1);
      }
    }
    return arr;
  };`.trim()
},
{
  userId: users[2]._id,
  challengeId: codeChallenges[26]._id,
  passed: true,
  solution:`
  const removeLastCharacters = (str, numberOfCharacters) => {
    let name;
    const length = str.length;
    const diff = length - numberOfCharacters;
    const diffIn = diff - length;
    if(diff - length < 0) {
      name = str.slice(0, diffIn);
    } else {
      return str;
    }
    return name;
  };`.trim()
},
{
  userId: users[2]._id,
  challengeId: codeChallenges[27]._id,
  passed: true,
  solution:`
  const totalSumCSV = (str) => {
    let total = 0;
    const arr = str.split(',');
    arr.forEach(item => {
      total += +item;
    });
    return total;
  };`
},
{
  userId: users[2]._id,
  challengeId: codeChallenges[28]._id,
  passed: true,
  solution:`
  const removeVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
      
    return str.split('').filter((el) => {
      return vowels.indexOf(el) === -1;
    }).join('');
  };`.trim()
},
{
  userId: users[2]._id,
  challengeId: codeChallenges[29]._id,
  passed: true,
  solution:`
  const extractVowels = (str) => {
    let result = [];
    result[0] = str.replace(/[aeiou]/g, '');
    result[1] = str.split('').sort().join().replace(/[^aeiou]/g, '');
    return result;
  };`.trim()
},
{
  userId: users[2]._id,
  challengeId: codeChallenges[30]._id,
  passed: true,
  solution:`
  const getCourseKeys = (obj) => {
    return Object.keys(obj);
  };`.trim()
},
{
  userId: users[4]._id,
  challengeId: codeChallenges[31]._id,
  passed: true,
  solution:`
  export const getHouseNames = houses => {
    return Object.keys(houses);
};`.trim()
},
{
  userId: users[4]._id,
  challengeId: codeChallenges[32]._id,
  passed: true,
  solution:`
  const getHouseWords = houses => {
    let houseWords = [];
    Object.values(houses).forEach(house => {
        houseWords.push(house.words);
    });
    return houseWords;    
};`.trim()
},
{
  userId: users[4]._id,
  challengeId: codeChallenges[33]._id,
  passed: true,
  solution:`
  const getHouseSizes = houses => {
    let houseSize = [];
    Object.entries(houses).forEach(house => {
        const houseObj = {
            house: house[0],
            members: house[1].characters.length
        };
        houseSize.push(houseObj);
    });
    return houseSize;
};`.trim()
},
{
  userId: users[4]._id,
  challengeId: codeChallenges[34]._id,
  passed: true,
  solution:`
  const getHouseHead = (houses, houseToFind) => {
    let houseHead = '';
    Object.entries(houses).forEach(house => {
        if(house[0] === houseToFind){
            houseHead = (house[1].head);
        }
    });
    return houseHead;
};`.trim()
},
{
  userId: users[4]._id,
  challengeId: codeChallenges[35]._id,
  passed: true,
  solution:`
  const totalCharacters = houses => {
    let charCount = 0;
    Object.entries(houses).forEach(house => {
        charCount = charCount + (house[1].characters.length);
    });
    return charCount;
};`.trim()
},
{
  userId: users[4]._id,
  challengeId: codeChallenges[36]._id,
  passed: true,
  solution:`
  const getHouseWordsMapped = houses => {
    return Object.values(houses).map(house => {
        return house.words;
    });  
};`.trim()
},
{
  userId: users[4]._id,
  challengeId: codeChallenges[37]._id,
  passed: true,
  solution:`
  const totalCharactersReduced = houses => {
    return Object.values(houses).reduce((acc, value) => {
        acc = acc + value.characters.length;
        return acc;
    }, 0);
};`.trim()
},
{
  userId: users[4]._id,
  challengeId: codeChallenges[38]._id,
  passed: true,
  solution:`
  const forLoopTwoToThe = (arr) => {
    let i = 0;
    const result = [];
    for(i = 0; i < arr.length; i++){
      result.push(Math.pow(2, arr[i]));
    }
    return result;
  };`.trim()
},
{
  userId: users[3]._id,
  challengeId: codeChallenges[39]._id,
  passed: true,
  solution:`
  const forEachTwoToThe = (arr) => {
    const result = [];
    arr.forEach(el => {
      result.push(Math.pow(2, el));
    });
    return result;
  };`.trim()
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[40]._id,
  passed: true,
  solution:`
  const mapTwoToThe = (arr) => {
    return arr.map(el => Math.pow(2, el));
  };`.trim()
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[41]._id,
  passed: true,
  solution:`
  const charCode = (arr) => {
    return arr.map(el => el.charCodeAt(0));
  };`.trim()
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[42]._id,
  passed: true,
  solution:`
  const evenOdd = (arr) => {
    return arr.map(el => isNaN(el) ? 'N/A' :
      el % 2 === 0 ? 'even' : 'odd');
  };`.trim() 
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[43]._id,
  passed: true,
  solution:`
  const extractAbilities = (arr) => {
    return arr.map(el => el.ability.name);
  };`.trim() 
},
{
  userId: users[0]._id,
  challengeId: codeChallenges[44]._id,
  passed: true,
  solution:`
  const extractStats = (arr) => {
    return arr.map(el => {return { name: el.stat.name, total : el.effort + el.baseStat };});
  };`.trim()
},

];
