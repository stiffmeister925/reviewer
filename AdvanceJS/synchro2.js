// This is our code
function greetInTagalog(name) {
  return `Kumusta ${name}!`;
}
function greetInEnglish(name) {
  return `Hi ${name}`;
}
function greetInBali(name) {
  return `Omsh ${name}`;
}

////////////////////////
// Not our code
function greet(name, callbackFn) {
  console.log(callbackFn(name));
}

greet('Mike', greetInEnglish);
