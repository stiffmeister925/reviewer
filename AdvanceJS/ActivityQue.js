// need to go back to the last position if they need more ticket
// each ticket needs 1 minute
// given an array and the tickets they will buy
// compute a function that will compute to the time to buy for the ticket
// parameter should be an array and your self


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

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// need to go back to the last position if they need more ticket
// each ticket needs 1 minute
// given an array and the tickets they will buy
// compute a function that will compute to the time to buy for the ticket
// parameter should be an array and your self
// [2, 5, 3, 4, 6, 2], 9
// [2, 5, 3, 4, 6, 2, 9] magiging gnto dapat

function queTime(arr, self) {
  let ticketBooth = new Queue();
  let time = 0;
  
  while(self !== 0) {
    for(let i = 0; i < arr.length; i++) {
      ticketBooth.enqueue(arr[i]);
      arr[i] -= 1;
      time += 1;
    }
    ticketBooth.enqueue(self);
    time += 1;
    self -= 1;
  }
  return time;
}

console.log(queTime([2, 3, 5, 4, 7], 4));