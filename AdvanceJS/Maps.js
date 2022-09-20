// process all elements, no skip
//callbackFn - element, index, array


const fruits = ['Apple', 'Orange', 'Banana', 'Grape', 'Mango', 'Raspberry'];


const upperFruits = fruits.map(transformToUppercase);

function transformToUppercase(stringValue) {
  return stringValue.toUpperCase();
}

console.log(fruits.map(transformToUppercase));

const cities = [
  { name: 'Quezon City', population: 10000 },
  { name: 'Rizal', population: 8000 },
  { name: 'Davao', population: 13400 },
  { name: 'Valenzuela', population: 14000 },
];

function transformCity({ name, population }) {
  if (population < 11000) {
    return `The ${name} has population of ${population}`;
  }
}

const summaries = cities.map(transformCity);

console.log(summaries);


// const avengers = [
//   ['steve rogers', 'captain america'],
//   ['tony stark', 'iron man'],
//   ['peter parker', 'spiderman'],
//   ['bruce banner', 'hulk'],
//   ['vic sotto', 'lastikman'],
// ];

// function transformAvenger(avenger) {
//   // { name: 'steve rogers', heroName: 'captain america'}
//   let obj = {};

//   for (var i = 0; i < avenger.length; ++i)
//   [obj.name, obj.heroName] = [avenger[0], avenger[1]];
//     return obj;
// }
// const toObj = avengers.map(transformAvenger);
// console.log(toObj);

///////////////////////////////////////////////////


// Key Value Pair array
const avengers = [
  // name             heroName
  ['steve rogers', 'captain america'],
  ['tony stark', 'iron man'],
  ['peter parker', 'spiderman'],
  ['bruce banner', 'hulk'],
  ['vic sotto', 'lastikman'],
];

// Callback function
function transformAvenger(avenger) {
  // Transform key value pair array into an object 👇
  // { name: 'steve rogers', heroName: 'captain america'}
  const [name, heroName] = avenger;

  return { name, heroName };
}

const newAvenger = avengers.map(transformAvenger);

console.log(newAvenger);
// console.log(transformAvenger(['steve rogers', 'captain america']));
//
// { name: 'steve rogers', heroName: 'captain america' }

// Refresher: Array Destructuring
const singleAvenger = ['steve rogers', 'captain america'];

//        LEFT                RIGHT
const [index0, index1] = singleAvenger;
// console.log(index0);
// console.log(index1);
// 👇 Convert these into destructuring syntax
const name = singleAvenger[0];
const heroName = singleAvenger[1];

// console.log(name);
// console.log(heroName);



