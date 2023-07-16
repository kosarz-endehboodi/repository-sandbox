let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

// write your code here

let city = prompt("Enter city:");
if (weather[city] !== undefined) {
  let temp = weather[city].temp;
  let humidity = weather[city].humidity;
  let tempround = Math.round(temp);
  let tempfahr = Math.round((temp * 9) / 5 + 23);

  alert(
    `It is currently ${tempround}°C ${tempfahr}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
