// Checks whether two characters occur equally often.

const str = "xoxoxoxo";

function haveEqualCharacterCounts(string, firstChar, secondChar) {
  if (string.length === 0) {
    throw new Error("String cannot be empty.");
  }

  let firstCount = 0;
  let secondCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === firstChar) {
      firstCount++;
    } else if (string[i] === secondChar) {
      secondCount++;
    }
  }

  return firstCount === secondCount;
}

console.log(haveEqualCharacterCounts(str, "x", "o"));
