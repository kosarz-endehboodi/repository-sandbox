// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let weekdays = [
  "monday",
  "tuesday",
  "wedensday",
  "thursday",
  "fraiday",
  "saturday",
  "sunday"
];
console.log(weekdays);
// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekdays[0], weekdays[6]);
// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array
weekdays[6] = "funday";
console.log(weekdays);
// Challenge 4
// Remove Monday and Tuesday
// Log the array
weekdays.shift();
//last array
weekdays.pop();
console.log(weekdays);
// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’

function showDay(day) {
  console.log(`Temperature on ${day} is 18 degrees`);
}
weekdays.forEach(showDay);
