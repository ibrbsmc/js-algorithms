// Checks whether all characters in a string are unique.

function isUniqueCharacters(str) {
  if (str.length == 0) {
    throw new Error("String cannot be empty");
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isUniqueCharacters("hello")); // false
console.log(isUniqueCharacters("world")); // true
