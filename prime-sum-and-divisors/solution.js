// Finds the sum of prime numbers up to N.

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

console.log(sumPrimesUpTo(11));
