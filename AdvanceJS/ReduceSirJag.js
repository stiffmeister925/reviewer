// Fruit Name: Water Percentage
// Key value pair
const fruits = [
  ['Apple', 86], // {fruit: 'Apple', water: 86}
  ['Orange', 86],
  ['Banana', 75],
  ['Strawberry', 92],
];
// const fruits = [
//   { fruit: 'Apple', water: 86 },
//   { fruit: 'Orange', water: 86 },
//   { fruit: 'Banana', water: 75 },
//   { fruit: 'Strawberry', water: 92 },
// ];

// GOAL: Get all water percentage, all the fruits
// EO: { waterPercentage: 339, fruits: ['Apple', 'Orange', 'Banana', 'Strawberry'] }
// [✔] Get all water Percentage, using reduce
// [✔] Using reduce, return an array of fruits
// [ ] Using reduce, return the expected output
// Clue: .push()
const sumOfWater = fruits.reduce((acc, cur) => {
  return acc + parseInt(cur[1]);
}, 0);



// const totalWater = fruits.reduce((acc, curr) => {
//   return acc + curr[1];
// }, 0);
const arrOfFruits = fruits.reduce((acc, cur) => [...acc, cur[0]], []);
// const arrOfFruits = fruits.reduce(function (acc, cur) {
//   acc.push(cur.fruit);
const obj = {
  waterPercentage: sumOfWater,
  fruits: arrOfFruits, 
}
console.log(obj);
//   return acc;
// }, []);
console.log(arrOfFruits);

console.log(sumOfWater, totalWater);

const result = fruits.reduce(callbackFn);

console.log(result.water === 339);
