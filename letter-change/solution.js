/*
Using the JavaScript, have the function LetterChanges(str) take
the str parameter being passed and modify it using the following
algorithm.

1 - Replace every letter in the string with the letter following
it in the alphabet (i.e. c becomes d, z becomes a).

2 - Then capitalize every vowel in this new string (a, e, i, o,
u) and finally return this modified string.
*/

function LetterChanges(str) {
  let newStr = "";

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char < "a" || char > "z") {
      newStr += char;
      continue;
    }

    if (char === "z") {
      char = "a";
    } else {
      char = String.fromCharCode(char.charCodeAt(0) + 1);
    }

    if ("aeiou".includes(char)) {
      char = char.toUpperCase();
    }

    newStr += char;
  }

  return newStr;
}

console.log(LetterChanges("hello")); // Ifmmp
console.log(LetterChanges("fun times!")); // gvO Ujnft!
