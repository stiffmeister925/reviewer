// Spread operator `...variable`
const weekends = ['Saturday', 'Sunday'];
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const alienWeek = ['Redday', 'Blueday', 'Greenday', 'Unionday'];
// const week = weekdays
//   .concat(weekends)
//   .concat(alienWeek);
const week = [...weekdays, ...weekends, ...alienWeek, 'Moreday', 'Lessday', 'Happyday']

console.log(week);
console.log(weekdays);
