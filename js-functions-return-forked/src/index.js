// Challenge 1
// 1. Modify the function is Windy and return true if the speed is greater than 5 and false if not
// 2. Call the function and alert ‘It is windy’ if it is windy, Else, alert ‘It is not windy’

function isWindy(speed, unit, city) {
  if (speed > 5 && unit === "metric") {
    return true;
  } else {
    return false;
  }
}
if (isWindy(3, "metric", "tehran")) {
  alert(`It is windy`);
} else {
  alert(`It is not windy `);
}

// Challenge 2
// 1. Add unit parameter to isWindy
// 2. if greater than 5 and unit is metric, return true, else return false
// 3. Test both scenarios
// isWindy(2, 'imperial') should return false
// isWindy(20, 'metric') should return true

//false

//function sWindy(speed, unit, city) {
// city = prompt("enter your city");
// if (unit > 5) {
//  if (speed > 5) {
//    alert(`${city}  It is windy`);
//    return true;
//  }
// } else {
//  alert(`${city}  It is not windy`);
//  return false;
// }
//}
//sWindy(8, 3);
//sWindy(7, 7);
