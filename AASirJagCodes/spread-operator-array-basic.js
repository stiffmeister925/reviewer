// Spread operator `...variable`
const weekends = ['Saturday', 'Sunday'];
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const week = [...weekdays, ...weekends];

// Mutation
weekends.pop();
// How to remove elements from array
// const week = weekdays.concat(weekends);

console.log(week);
console.log(weekends);
console.log(weekdays);