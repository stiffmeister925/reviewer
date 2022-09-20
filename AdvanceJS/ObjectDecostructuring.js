const personTwo = {
  name: 'Sally',
  age: 32,
  favoriteFood: 'Watermelon',
  address: {
  city: 'Somewhere else',
  state: 'Another one of them'
  }
}

// pag walang laman na property yung object ay ung default values sa destructuring yung mag aaply

const { name: firstName, ...rest } = personTwo

// this how to destructure a nested object
const { name: lastName, address: { street} } = personTwo

// this is how to combine two objects

const personThree = {...personOne, ...personTwo}

// best way to use
// - with additional property with default value sample

function printUser({name, age, favoriteFood = 'Watermelon'}) {
  console.log(`Name is: name. Age is age. Food is ${favoriteFood}`)
}

printUser(personOne)

