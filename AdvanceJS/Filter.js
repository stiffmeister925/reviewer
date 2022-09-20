const number = [1, -1, 2, 3];

const filtered = number.filter ((number) => number >= 0);

console.log(filtered);

const techs = [
  'tech', 
  'nodejs', 
  'vue', 
  'angular', 
  'svelte', 
  'solidjs', 
  'tailwind'
];

function callbackFn(element) {
  return element.includes('js');

}

const testFiltered = techs.filter((techs) => techs.includes('js'));
const filteredTech = techs.filter(callbackFn);

console.log(techs);
console.log(filteredTech);

console.log(filteredTechIncludes = techs.includes('tech'));
console.log(testFiltered)
// includes checks every element, check the argument, return boolean
//filter also checks

/////////////////////////////////////////////////////////

const tech = [
  'react',
  'nodejs',
  'vue',
  'angular',
  'svelte',
  'solidjs',
  'tailwind',
];

// Functionality: Search: 'js' ← nodejs, solidjs
// element, index, array
// IF element has character on 'js'
//    RETURN ?? (What data type?) true
// ELSE
//    RETURN ?? (What data type?) false
function callbackFn(element) {
  return element.includes('js');
}
// const filteredTech = tech.filter(callbackFn);
// const filteredTech = tech.filter((element) => element.includes('js'));
const filteredTech = tech.filter(function (element) {
  return element.includes('js');
});
const filteredTechIncludes = tech.includes('js');
console.log(tech);
console.log(filteredTech);
console.log(filteredTechIncludes);
// Why `includes` returns false while filter returns an array of element, basically meron
// Extra steps with includes and filter
// INCLUDES checks every element, check the argument, return boolean
// FILTER also checks every element, you can add logic: callbackFn, return new array

// MAP
// callbackFn => new value (any data type) of the element





