const TYPE_DOG = 'dog';
const TYPE_CAT = 'cat';
const TYPE_BIRD = 'bird';

const animals = [
  { name: 'Rufus', type: TYPE_DOG, age: 2 },
  { name: 'Nala', type: TYPE_DOG, age: 2 },
  { name: 'Nabisco', type: TYPE_CAT, age: 4 },
  { name: 'Whoopi', type: TYPE_BIRD, age: 1 },
  { name: 'Zane', type: TYPE_CAT, age: 4 },
  { name: 'Yuri', type: TYPE_CAT, age: 1 },
];

// generic reusable
const getAllByTypeCallbackFn = (animals, type) => {
  return animals.filter((animal) => animal.type === type);
}

// with callback fn
const getAllCats = (animals, getAllByTypeCallbackFn) => {
  return getAllByTypeCallbackFn(animals,TYPE_CAT);
}

const getAllDogs = (animals, getAllByTypeCallbackFn) => {
  return getAllByTypeCallbackFn(animals, TYPE_DOG);
}

const getAllBirds = (animals, getAllByTypeCallbackFn) => {
  return getAllByTypeCallbackFn(animals, TYPE_BIRD);
}

// normal functions
const catsOnly = (animals) => {
  return animals.filter((animal) => animal.type === TYPE_CAT);
}

const dogsOnly = (animals) => {
  return animals.filter((animal) => animal.type === TYPE_DOG);
}

const birdsOnly = (animals) => {
  return animals.filter((animal) => animal.type === TYPE_BIRD);
}

// using reusable callback fn
console.log(getAllCats(animals, getAllByTypeCallbackFn));
console.log(getAllDogs(animals, getAllByTypeCallbackFn));
console.log(getAllBirds(animals, getAllByTypeCallbackFn));

const getAllByType = (animals, type) => {
  return animals.filter((animal) => animal.type === type);
}

// direct
console.log(getAllByType(animals, TYPE_CAT));
console.log(getAllByType(animals, TYPE_DOG));
console.log(getAllByType(animals, TYPE_BIRD));

// normal functions
console.log(catsOnly(animals));
console.log(dogsOnly(animals));
console.log(birdsOnly(animals));

// shortcut
console.log(animals.filter((animal) => animal.type === 'cat'));
console.log(animals.filter((animal) => animal.type === 'dog'));
console.log(animals.filter((animal) => animal.type === 'bird'));

