// Challenge
// 1. Create a function isWindy
// 2. Add a speed parameter to the function
// 3. If speed is greater than 5, alert ‘It is windy’
// 4. Else, alert ‘It is not windy’
// 5. Call the function twice with different arguments to test both scenarios

function iswindy(city, speed) {
  // speed=prompt("enter speed")

  if (speed > 5) {
    alert(`It is windy ${city} & speed=${speed}`);
  } else {
    alert("It is not windy");
  }
}
iswindy("BUSHEHR", 3);
iswindy("BUSHEHR", 6);
