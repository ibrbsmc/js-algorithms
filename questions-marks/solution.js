/*
Have the function QuestionsMarks(str) take the str string parameter,
which will contain single digit numbers, letters, and question marks,
and check if there are exactly 3 question marks between every pair of
two numbers that add up to 10. If so, then your program should return
the string true, otherwise it should return the string false. If
there aren't any two numbers that add up to 10 in the string, then
your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program
should return true because there are exactly 3 question marks between
6 and 4, and 3 question marks between 5 and 5 at the end of the
string.
*/

function QuestionsMarks(str) {
  let hasPair = false;

  for (let i = 0; i < str.length; i++) {
    // unicode control
    if (str[i] < "0" || str[i] > "9") {
      continue;
    }

    for (let j = i + 1; j < str.length; j++) {
      // unicode control
      if (str[j] < "0" || str[j] > "9") {
        continue;
      }

      const num1 = Number(str[i]);
      const num2 = Number(str[j]);

      if (num1 + num2 === 10) {
        hasPair = true;

        let questionCount = 0;

        for (let k = i + 1; k < j; k++) {
          if (str[k] === "?") {
            questionCount++;
          }
        }

        if (questionCount !== 3) {
          return false;
        }
      }
    }
  }

  return hasPair;
}

console.log(QuestionsMarks("aa6?9")); // false

console.log(QuestionsMarks("acc?7??sss?3rr1??????5")); // true

console.log(QuestionsMarks("arrb6???4xxbl5???eee5")); // true
