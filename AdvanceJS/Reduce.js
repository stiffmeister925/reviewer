const numbers = [5, 1, 2, 3, 9];

// first argument is a callback function
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// // REMEMBER
// const fruits = ['Apple', 'Orange', 'Banana'];
// //                0         1         2
// // Filter and Map
// function callbackFnInFilterAndMap(element, index, array) {}
// // Reduce
// function callbackFn(acc, element, index, array) {

// }

// [].reduce()

// Goal: sum all elements

// console.log('FINAL OUTPUT:', array.reduce(callbackFn) === 20);
// Test Driven Development (TDD)
// Failed, Failed x 10
// Goal: Success


const array = [5, 1, 2, 3, 9]; // Sum of all: 20
let sum = 0;

for(let i = 0; i < array.length; i++) {
  // sa loob ng loop mag add ng arrays
  sum += array[i];
}

console.log(sum);

// reduce

const numbers = [5, 1, 2, 3, 9];

// first argument is a callback function
const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(total);

console.log(numbers.reduce((acc, elem) => acc + elem));

//
let records = [
  {name: 'ball',amount: 20},
  {name: 'toy',amount: 40},
  {name: 'book',amount: 30}
]

const amount = records.reduce((acc, curr) => {
    return acc + curr.amount;
}, 0);

console.log(amount);



const fruits = [ 
  ['Apple', 86],
  ['Orange', 86],
  ['Banana', 75],
  ['Strawberry', 92],
]

const basket = fruits.reduce((acc, curr) => {
  return curr.name;
}, []);

console.log(basket);

let newFruit = []

  //
const totalWater = fruits.reduce((acc, curr) => {
  return acc + curr[1];
}, 0);

const arrOfFruits = fruits.reduce(function (acc, cur) {
  acc.push(cur[0]);

  return acc;
}, []);
console.log(totalWater);

console.log(arrOfFruits);

function transformAvenger(avenger) {
  // Transform key value pair array into an object 👇
  // { name: 'steve rogers', heroName: 'captain america'}
  const [name, heroName] = avenger;

  return { name, heroName };
}

// //
// var objs = [
//   {name: "Peter", age: 35},
//   {name: "John", age: 27},
//   {name: "Jake", age: 28}
// ];

// objs.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue.age;
// }, 0); 


//
const arr = [
  {x:1},
  {x:2},
  {x:4}
];

arr.reduce(function (acc, curr) {
  return {x: acc.x + curr.x}; // returns object with property x
})

// ES6
console.log(arr.reduce((acc, curr) => ({x: acc.x + curr.x})));