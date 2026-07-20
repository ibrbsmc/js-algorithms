// Finds duplicate numbers in an array.

let numbers = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1];

function findDuplicates(arr) {
  let duplicates = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}

console.log(findDuplicates(numbers));
