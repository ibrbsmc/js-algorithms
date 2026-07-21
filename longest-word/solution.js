// Finds the longest words in a string.

const str = "The quick brown fox jumped over the lazy dog";

function findLongestWords(str) {
  let words = str.trim().split(" ");
  let longestWord = words[0];
  let longestWords = [words[0]];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
      longestWords = [words[i]];
    } else if (words[i].length === longestWord.length) {
      longestWords.push(words[i]);
    }
  }

  return longestWords;
}

console.log(findLongestWords(str));
