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
}

// get sum of filtered array
const theSumOf = (arr) => {
  if(!(arr instanceof Array)) {
    throw 'Invalid argument'
  }

  const total = arr.filter((elem) => typeof elem === 'number')
  .reduce((sum, elem) => {
    return sum + elem;
  }, 0);

  return total;
}

const getHighestValue = (arr1, arr2, arr3) => {
  return Math.max(theSumOf(arr1),
  theSumOf(arr2),
  theSumOf(arr3));
}

const getMaxHeight = (arr1, arr2, arr3) => {
  let stack1 = new Stack();
  let stack2 = new Stack();
  let stack3 = new Stack();

  for(let i = 0; i < arr1.length; i++) {
    stack1.push(arr1[i]);
  }
  for(let i = 0; i < arr2.length; i++) {
    stack2.push(arr2[i]);
  }
  for(let i = 0; i < arr3.length; i++) {
    stack3.push(arr3[i]);
  }
  console.log(theSumOf(stack1.items))
  console.log(stack1);
  console.log(stack2);
  console.log(stack3);

  //while total value of arrays are not equal
  while (theSumOf(stack1.items) !== theSumOf(stack2.items) && theSumOf(stack1.items) !== theSumOf(stack3.items)) {
    if(theSumOf(stack1.items) === getHighestValue(stack1.items, stack2.items, stack3.items)) {
      stack1.pop();
    }
    if(theSumOf(stack2.items) === getHighestValue(stack1.items, stack2.items, stack3.items)) {
      stack2.pop();
    }
    if(theSumOf(stack3.items) === getHighestValue(stack1.items, stack2.items, stack3.items)) {
      stack3.pop();
    }
  }

  // since we know all values are the same just return any one the 3 stacks to get the max possible height
  return theSumOf(stack1.items);
}

console.log(getMaxHeight([1,1,1,2,3], [2,3,4], [1,4,1,1]));

