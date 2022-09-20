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

const reverseString = (str) => {
  let stack = new Stack();
  let reverseStack = new Stack();

  for(let i = 0; i < str.length; i++) {
    reverseStack += stack.pop();
  }
}

console.log(reverseString('hello'));