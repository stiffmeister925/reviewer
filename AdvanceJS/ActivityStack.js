class Stack {
  constructor() {
    this.items = []; 
  }

  push(items) {
    // adds item to the stack
    this.items.push(items) 
  }

  pop() {
    // removes item to the stack
    if(this.items.length === 0); 
        else return this.items.pop();
  }

  peek() {
    // return the top of the stack
    // this.items[-1];
    this.items[this.items.length - 1];
  }

  isEmpty() {
    // return this.items === null;
    return this.items.length === 0;
  }
}

function reverse(str){ 

  //Creates a new stack
  let stack = new Stack();

  
  let reversedStr = '';

  //Adds all the characters to the stack.
  for(let i = 0; i < str.length; i++) {
    stack.push(str.charAt(i));
  }

  //Creates a reversed string by popping the stack.
  // keep popping while the stack is not full empty
  for(let i = 0; i < str.length; i++) {
    if(!stack.isEmpty()) {
      reversedStr += stack.pop();
    }
  }
  
  //returns the reversed string.
  return reversedStr;
}

console.log(reverse('hello'));

console.log(reverse('abcde'));