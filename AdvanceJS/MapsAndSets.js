//object
//Easier to write and access with dot or bracket notation
//Use when you need to include functions and work with JSON

//maps
//Easy to iterate
//Keys can have any data type
//Use when you need keys that are not strings and when you need to map key to value

//The big difference between them is that in maps, key can have any data type


// sample
const myArray = [1, 2, 3, 4, 5, 5, 5, 1, 2];
const mySet = new Set(myArray); // set remvoes all duplicate values from the array
// note pass an array parameter into the set

const uniqueArray = [...mySet];

console.log(myArray);
console.log(mySet);
console.log(uniqueArray);

const myArray2 = [1, 2, 3, 4, 5];
const mySet2 = new Set(myArray);

mySet2.add('6', 1, { channelName: 'JavaScript Mastery'}, [1, 2, 5]);

console.log(mySet2);

// how to delete
mySet.delete(3);

console.log(mySet);

// how to clear or remove all elements in the set
mySet.clear();

console.log(mySet);

// has is same as .includes
console.log(mySet2.has(5));

// size returns number of elements in the set
console.log(mySet2.size);

// IMPORTANT (AN ARRAY IS AN ORDERED LIST OF ELEMENTS)
// IMPORTANT ( SET IS AN UNORDERED)
// set is an additional support for an array
// set is used to avoid duplicate elements

//const myMap = new Map ([['name', 'john'], ['surname', 'Doe']]);

console.log(myMap);

// NOTE js object supports only 1 key object thats why we need to use map instead
//sample of object usage problem
// const myObject = {};

// // const a = {};
// // const b = {};

// myObject[a] = 'a';
// myObject[b] = 'b';

// console.log(myObject);
// //to solve this

// const a = {};
// const b = {};

// const myMap = new Map([[a, 'a'], [b, 'b']]);

// console.log(myMap);

// another sample
const myMap = new Map([[{}, 'a'], [{}, 'b']]);
myMap.set({}, 'c'); // adds another value to the set 
// NOTE {} is the data type followed by comma and value
// it can be string, numbers etc

console.log(myMap);

// how to delete in map
const myMap2 = new Map([ [1, 'one'] ]);
// NOTE [1 <-- is the key, 'one' <--- is the element value] 
myMap.delete(1);
console.log(myMap2);

// how to use has
// NOTE has search for key names not value
console.log(myMap.has(1));

//how to use size
console.log(myMap.size);

// how to use clear
myMap.clear();

console.log(myMap);


