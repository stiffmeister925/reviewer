const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

const [a,, c, ...rest] = alphabet
// - to skill b and get the rest value of the array

//===========================
adding array

const newArray = [...alphabet, ...numbers]
const newArray = alphabet.concat(numbers)
//==========================================
function sumAndMultiply(a, b) {
	return [a+b, a*b]
}

// how to destructure this
const array = sumAndMultiply(2, 3)

//into this
const [sum, multiply] = sumAndMultiply(2, 3)

// bonus adding new result with default value division

// 
const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3)

// but you need to add somethin in the function like this

function sumAndMultiply(a, b) {
	return [a+b, a*b, a/b]
}


//=========================================

