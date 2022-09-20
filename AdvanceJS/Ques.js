// first in first out

// when we add/push enqeue, sa first lage add

// when we remove/pop deqeue, sa first dn remove

//peek ay ung index 0


// for balancing ginagamit ung que

// mas madalas gamitin que


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

const queueNumbers = new Queue();

queueNumbers.enqueue(1); // 1
queueNumbers.enqueue(2); // 1, 2
queueNumbers;
queueNumbers.peek(); // 1

queueNumbers.dequeue(); // 2
queueNumbers;

// you can buy ticket one at a time

// nababawasan ung ticket

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

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  length() {
    return this.items.length;
  }
}

function demo() {
  const queueNumbers = new Queue();

  queueNumbers.enqueue(1); // 1
  queueNumbers.enqueue(2); // 1, 2
  queueNumbers;
  queueNumbers.peek(); // 1

  queueNumbers.dequeue(); // 2
  queueNumbers;

  const monthsQ = new Queue();

  monthsQ.enqueue("Jan");
  monthsQ.enqueue("Feb");
  monthsQ.dequeue();
  monthsQ.dequeue();
  monthsQ.dequeue();

  monthsQ;
}

function queueTime(line, tickets) {
  // Build a function to compute how much time you need to queue for
  // queueTime([2, 3], 2);
  // initialize queue 2,3
  let queue = new Queue();
  for (let i = 0; i < line.length; i++) {
    queue.enqueue(line[i]);
  }
  // add ourselves, enqueue ourself 2,3,2
  queue.enqueue(tickets);
  queue;
  // track position sa queue, and time counter
  let myIndex = queue.length() - 1;
  myIndex;
  let timeCounter = 0;

  // loop and dequeue until our turn
  while (myIndex > 0) {
    const dequeued = queue.dequeue();
    if (dequeued > 1) queue.enqueue(dequeued - 1);
    myIndex--;
    queue;
    // if (myIndex === 0 && queue.peek() > 1) myIndex += queue.length();
  }
  // while looping, if dequeued > 1 , subtract 1 and then enqueue again 3,2,1 -> 2,1,2 -> 1,2,1
  // else if my ticket = 1, then return time
}

// queueTime([2, 5, 3, 4, 6], 2); // should return 12
queueTime([2, 3], 2); // should return 6

// k , a, r
// 2, 3, 2

// a, r, k
// 3, 2, 1

// r, k, a
// 2, 1, 2

// k, a, r
// 1, 2, 1

// a, r
// 2, 1

// r, a
// 1, 1

// a
// 1
