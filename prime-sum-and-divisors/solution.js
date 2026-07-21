// Finds the prime sum up to N and its divisors.

function sumPrimesUpTo(limit) {
  let sum = 0;

  for (let number = 2; number <= limit; number++) {
    let isPrime = true;

    for (let divisor = 2; divisor < number; divisor++) {
      if (number % divisor === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sum += number;
    }
  }

  return sum;
}

function findDivisors(number) {
  const divisors = [];

  for (let divisor = 1; divisor <= number; divisor++) {
    if (number % divisor === 0) {
      divisors.push(divisor);
    }
  }

  return divisors;
}

const primeSum = sumPrimesUpTo(11);
const divisors = findDivisors(primeSum);

console.log(primeSum); // 28
console.log(divisors); // [1, 2, 4, 7, 14, 28]
