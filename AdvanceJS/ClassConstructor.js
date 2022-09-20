class User {
  constructor(email, name){
    this.email = email;
    this.name = name;
  }
}

const userOne = new User('jelsosa@gmail.com', 'jel');
const userTwo = new User('test@gmail.com', 'test');

console.log(userOne);
console.log(userTwo);

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method