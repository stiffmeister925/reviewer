// stack of numbers, pushing and popping
// stacks = LIFO
// queues = FIFO
//this is how to create a stack
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    // adds item to the stack
    this.items.push(element);
  }

  pop() {
    // removes item to the stack
    this.items.pop();
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

const numberstack = new Stack();

numberstack.push(1); // [1]
numberstack.push(2); // [1, 2]
numberstack.push(3); // [1, 2, 3]

numberstack;
numberstack.pop(1); // [1, 2]
numberstack;
numberstack.peek(); // 2
numberstack.isEmpty(); // false

const months = new Stack();
months.push("january")
months
///////////////////////////////

function reverseString(str) {
  // loop str para makuha ung bawat character
  // for each character push sa isang stack
  // pop sa unang stack, push sa reversed stack
  // convert stack to string
 }


function reverse(str){ 

  //Creates a new stack
  let stack = new Stack();

  let i = 0;
  let reversedStr = "";

  //Adds all the characters to the stack.
  for(let i = 0; i < str.length; i++) {
    stack.push(str.charAt(i));
  }

  //Creates a reversed string by popping the stack.
  for(let i = 0; i < str.length; i++) {
    if(!stack.isEmpty()) {
      reversedStr += stack.pop();
    }
  }
  
  //returns the reversed string.
  return reversedStr;
}

//===================================================

// stacks = LIFO
// queues = FIFO
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    // adds item to the stack
    this.items.push(element);
  }

  pop() {
    // removes item to the stack
    return this.items.pop();
  }

  peek() {
    // return the top of the stack
    // this.items[-1];
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // return this.items === null;
    return this.items.length === 0;
  }

  toString() {
    // array to string conversion
    // return this.items.toString()
    return this.items.join("");
  }
}

function demo() {
  const numberstack = new Stack();

  numberstack.push(1); // [1]
  numberstack.push(2); // [1, 2]
  numberstack.push(3); // [1, 2, 3]

  numberstack;
  numberstack.pop(1); // [1, 2]
  numberstack;
  numberstack.peek(); // 2
  numberstack.isEmpty(); // false

  const months = new Stack();
  months.push("january");
  months.push("february");
  months.pop();
  months;
}

function reverseString(str) {
  // loop str para makuha ung bawat character
  // for each character push sa isang stack
  let initialStack = new Stack();
  let reverseStr = "";
  for (let i = 0; i < str.length; i++) {
    initialStack.push(str[i]);
  }
  initialStack;
  // pop sa unang stack, push sa reversed stack
  while (!initialStack.isEmpty()) {
    // reverseStr += initialStack.pop()
    reverseStack.push(initialStack.pop());
  }
  // convert stack to string
  reverseStr = reverseStack.toString();
  reverseStr;
}

reverseString("hello"); // "olleh"

