// GOAL: Get all water percentage, all the fruits
// EO: { waterPercentage: 339, fruits: ['Apple', 'Orange', 'Banana', 'Strawberry'] }
// [✔] Get all water Percentage, using reduce
// [✔] Using reduce, return an array of fruits
// [✔] Using reduce, return the expected output
// Clue: .push()

const fruits = [
  ['Apple', 86], // {fruit: 'Apple', water: 86}
  ['Orange', 86],
  ['Banana', 75],
  ['Strawberry', 92],
];

// const sumOfWater = fruits.reduce((acc, cur) => {
//   return acc + parseInt(cur[1]);
// }, 0);

const arrOfFruits = fruits.reduce((acc, cur) => {
  const [fruit, waterPercentage] = cur; // current element
  acc.waterPercentage += waterPercentage; // add current water percent to initialized accumulated water property
  acc.fruits.push(fruit); // push the current fruit at the same time to the initialized array property in the object
  return acc; //return accumulated result
}, {waterPercentage: 0, fruits: []});

console.log(arrOfFruits);




