/* Rules

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true,
otherwise return the string false.

u__hello_world123

*/

function validateUsr(username) {
  if (username.length >= 4 && username.length <= 25) {
    if (/^\p{L}/u.test(username)) {
      if (/^[\p{L}0-9_]+$/u.test(username)) {
        if (!/_$/.test(username)) {
          return true;
        }
      }
    }
  }

  return false;
}

console.log(validateUsr("u__hello_world123"));
