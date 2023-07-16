function formatDate(timestamp) {
  let data = new Date(timestamp);
  let hour = data.getHours();
  let minutes = data.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let days = daysOfWeek[data.getDay()];
  return `${days} ${hour}:${minutes}`;
}
function displayTemp(response) {
  console.log(response.data);
  //varible
  let currentTempElement = document.querySelector("#currentTemp");
  let currentCity = document.querySelector("#city");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#windSpeed");
  let description = document.querySelector("#description");
  let currentDate = document.querySelector("#currentDate");
  let icon = document.querySelector("#icon");
  currentTempElement.innerHTML = Math.round(response.data.main.temp);
  //currentCity.innerHTML = `${}`;
  humidity.innerHTML = `${response.data.main.humidity}%`;
  windSpeed.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  description.innerHTML = response.data.weather[0].description;
  currentDate.innerHTML = formatDate(response.data.dt * 1000);
  icon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
//new var add
let inputCitySave = document.getElementById("btn-primary");
//eventlistner
inputCitySave.addEventListener("click", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  searchWeather(cityInput.value);
  currentCity.innerHTML = `${currentCity}`;
}
function searchWeather(city) {
  let apiKey = "51f128ddb960a0cbed5d6f3eea37ad01";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}
let form = document.getElementById("search-form");
form.addEventListener("submit", handleSubmit);
