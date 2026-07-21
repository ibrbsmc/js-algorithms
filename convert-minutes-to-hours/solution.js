// Converts minutes to hours and minutes.

const number = 90;

function convertMinutes(totalMinutes) {
  const hours = number / 60 - (number % 60) / 60; // Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { hours, minutes };
}

console.log(convertMinutes(number));
