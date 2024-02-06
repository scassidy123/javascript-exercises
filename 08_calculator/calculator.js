const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	const arraySum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0)
    return arraySum
};

const multiply = function(arr) {
  let accumulator = 1
  for (let num of arr) {
    accumulator = num * accumulator
  }
  return accumulator
};

const power = function(num1, num2) {
  return num1 ** num2
};

const factorial = function(num) {
  if (num === 0 || num === 1) return 1

	let result = num
  while (num > 1) {
    num--
    result *= num
  }
  return result
};

// factorial(5)
// multiply([1,2,5])
// sum([1,2,3,4,5])
// add(2,2)
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
