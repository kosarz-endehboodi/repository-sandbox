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
let i = weather.lenght;
if (weather[i] == city)
  alert(
    `It is currently ${weather[i]}°C (66°F) in Paris with a humidity of 80%`
  );
