// this refers to this class
// pag may constructor may 'new'
// factory function need ng return
//sa object pag same ung variablename at name di na need mag set ng keys
// if you use this. you need to use new

function Coffee(sugarCount, hasMilk = false) {
  return { sugarCount, hasMilk };
}

function Coffee2(sugarCount, hasMilk = false) {
  this.sugarCount = sugarCount;
  this.hasMilk = hasMilk;
}

class Coffee3 {
  constructor(sugarCount, hasMilk = false) {
    this.sugarCount = sugarCount;
    this.hasMilk = hasMilk;
  }
}

// Constructor uses `new` keyword
// Factory function, do not

// Factory Function
const coffee = Coffee(10);
const coffee2 = new Coffee2(10);
const coffee3 = coffee2;
const coffee4 = new Coffee3(10);
console.log(coffee instanceof Coffee);
console.log(coffee2);
console.log(coffee3 === coffee2);
console.log(coffee3 === coffee);
console.log(coffee4);
console.log(coffee4.sugarCount);
console.log(coffee2.sugarCount)