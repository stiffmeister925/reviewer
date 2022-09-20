// queues = FIFO
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const totalTime = (customer, staffCount) => {
  let timeCheck = new Queue();
  let time = 0;

  for(i = 0; i < customer.length; i++) {
    for(i = 0; i < staffCount; i ++) {
      time = timeCheck.enqueue(i);

    }
  }
}

const staffAttendees = (staffCount) => {
  let staffs = [];

  for(let i = 1; i < staffCount + 1; i++) {
    staffs.push(`staff`+ [i]);
  }
  return staffs;
}

// console.log(staffAttendees(2));

// const queueTime = (customerTimeList, counters) => {
//   let counterQueue = [];
//   let totalQueueTime = customerTimeList.reduce((totalTime, customerTime) => {
//     if(counterQueue.length < counters) {
//       counterQueue.push(customerTime);
//     }
//     if(counterQueue.length === counters) {
//       const minTime = counterQueue.sort((a,b)=>{return a-b}).shift();
//       counterQueue = counterQueue.map(counter => counter-= minTime);
//       totalTime += minTime;
//     }
//     return totalTime;
//   }, 0);
//   totalQueueTime += Math.max(...counterQueue, 0);
//   return totalQueueTime
// }

//

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
}

let staffs = [];
let customersQue = new Queue;

const queueTime = (customers, staff) => {
  
  // set que for customers
  for(let i = 0; i < customers.length; i++) {
    customersQue.enqueue(customers[i]);
  }
    // set initial customers to staffs
  for(let j = 0; j < staff; j++) {
    staffs.push(customersQue.dequeue(j));
  }
  // que customers to the most available staff
  while(!customersQue.isEmpty()) {
    const leastValue = Math.min(...staffs);
    const minIndex = staffs.findIndex(elem => elem === leastValue);
    staffs[minIndex] += customersQue.dequeue();
  }
  
  return Math.max(...staffs);
}