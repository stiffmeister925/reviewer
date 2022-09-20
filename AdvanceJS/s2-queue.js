// queues = FIFO
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  lastIndex() {
    return this.items.lastIndexOf();
  }
}

let customersQue = new Queue;
let timeCounter = 0;

const queueTime = (customers, self) => {
  
  // set que for customers
  for(let i = 0; i < customers.length; i++) {
    customersQue.enqueue(customers[i]);
    customersQue.enqueue(self);
  }
  // que customers to the most available staff
  while(customersQue.lastIndex(customersQue) !== 0) {
    for(let i = 0; i < customersQue.length; i++) {
      customersQue(i) - 1;
      timeCounter += 1;
      customersQue.enqueue(customersQue.dequeue());
    }
  }
  return timeCounter;
}
// const leastValue = Math.min(...staffs);
// const minIndex = staffs.findIndex(elem => elem === leastValue);
// staffs[minIndex] += customersQue.dequeue();
// // que customers to the most available staff
// while(!customersQue.isEmpty()) {
//   const leastValue = Math.min(...staffs);
//   const minIndex = staffs.findIndex(elem => elem === leastValue);
//   staffs[minIndex] += customersQue.dequeue();