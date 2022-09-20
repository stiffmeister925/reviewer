const numbers = [5, 1, 2, 3, 9];

// first argument is a callback function
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);