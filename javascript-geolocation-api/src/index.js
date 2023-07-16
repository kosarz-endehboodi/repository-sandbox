function showposition(position) {
  // console.log(position.coords.latitude);
  // console.log(position.coords.longitude);
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let fixlola = `lat=${latitude}&lon=${longitude}`;

  let APIkey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
  let units = "metric";
  let APIurl = `https://api.openweathermap.org/data/2.5/weather?${fixlola}&appid=${APIkey}&units=${units}`;

  function showtemp(response) {
    console.log(response);
    // console.log(response.data.main.temp);
    let city = response.data.name;
    let temp = response.data.main.temp;
    //chllnge2
    temp = Math.round(response.data.main.temp);
    //challnge3

    let h1 = document.getElementById("showTempInfo");
    h1.innerText = `temp :${temp} degers
    in${city}`;
  }

  axios.get(APIurl).then(showtemp);
}
//challnge1
navigator.geolocation.getCurrentPosition(showposition);
