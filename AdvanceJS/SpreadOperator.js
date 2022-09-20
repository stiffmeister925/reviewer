//add the elements of an existing array into a new array
var certsToAdd = ['Algorithms and Data Structures', 'Front End', 'Libraries'];
var certifications = ['Responsive Web Design', ...certsToAdd, 'Data Visualization',
'APIs and Microservices', 'Quality Assurance and Information Security'];
console.log(certifications);

// pass elements of an array as arguments to a function
function addThreeNumbers(x, y, z) {
  console.log(x + y + z) 
}
var args = [0, 1, 2, 3];
addThreeNumbers(...args);

// copy arrays
var arr = [1, 2, 3];
var arr2 = [...arr]; //like arr.slice()
arr.push(4);
console.log(arr);
console.log(arr2);

//concatenate arrays or add elements of the array
var arr = [1, 2, 3];
var arr2 = [3, 4, 5];
arr1.concat(arr2);
arr1 = [
  ...arr, 
  "freeCodeCamp",
  ...arr2
];

const allTier = [
  ...tierOneCardList,
  ...tierTwoCardList,
  ...tierThreeCardList,
  ...tierFourCardList,
  ...specialCardList,
  ...tierOneCardList,
  ...tierTwoCardList,
  ...tierThreeCardList,
  ...tierFourCardList,
  ...specialCardList
];

// REST: condense multiple elements into an array
function multiply(multiplier, ...theArgs) { // ...theArges means we can pass many arguments as we want
  return theArgs.map(function(element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr)
