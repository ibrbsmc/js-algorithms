// Calculates the factorial of a number.

function calculateFactorial(number) {
  if (!Number.isInteger(number) || number < 0) {
    throw new Error("The number must be a non-negative integer.");
  }

  let result = 1;

  for (let i = number; i > 0; i--) {
    result *= i;
  }

  return result;
}

console.log(calculateFactorial(0)); // 1
console.log(calculateFactorial(1)); // 1
console.log(calculateFactorial(2)); // 2
console.log(calculateFactorial(3)); // 6
console.log(calculateFactorial(4)); // 24
console.log(calculateFactorial(5)); // 120
