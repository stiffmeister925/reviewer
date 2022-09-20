const fruits = ['Apple', 'Orange', 'Papaya'];

// Callback Function
function biteFruit(fruit, index, array) {
  console.log(fruit.substring(1));
}

fruits.forEach(biteFruit);