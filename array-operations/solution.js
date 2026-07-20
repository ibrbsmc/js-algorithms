// Array operations.

const numbersArr = [1, 2, 3, 4, 5];

function sumArray(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
}

function sumOddNumbers(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    if (number % 2 !== 0) {
      sum += number;
    }
  });
  return sum;
}

function sumEvenNumbers(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      sum += number;
    }
  });
  return sum;
}

function calculateOddAverage(numbers) {
  let sum = 0;
  let count = 0;
  numbers.forEach((number) => {
    if (number % 2 !== 0) {
      sum += number;
      count++;
    }
  });
  return count === 0 ? null : sum / count;
}

function findLargestNumber(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}
