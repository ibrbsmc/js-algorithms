const str = "the quick brown fox jumps over the lazy dog.";

// Capitalizes the first letter of a string.
function capitalizeFirstLetter(string) {
  const cleanedString = string.trim();

  return cleanedString.charAt(0).toUpperCase() + cleanedString.slice(1);
}

// Capitalizes the first letter of every word.
function capitalizeEachWord(string) {
  const words = string.trim().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

console.log(capitalizeFirstLetter(str));

console.log(capitalizeEachWord(str));
