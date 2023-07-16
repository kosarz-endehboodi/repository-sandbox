//var
let clockHour = document.getElementById("hour");
let clockMin = document.getElementById("min");
let dayMM = document.getElementById("dayMM");
let daydgrs = document.getElementById("day");

let hour = new Date().getHours();
let min = new Date().getMinutes();
clockHour.innerText = `${hour}`;
clockMin.innerText = `${min}`;
if (hour < 10) {
  clockHour.innerText = `0${hour}`;
}
if (min < 10) {
  clockMin.innerText = `0${hour}`;
}

let date = new Date();
function formtDate() {
  let days = ["sun", "min", "tue", "wed", "thu", "fri", "sat"];
  let months = [
    "jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  let week = date.getDay();
  let month = date.getMonth();
  let day = date.getDate();
  let year = date.getFullYear();
  dayMM.innerText = `${days[week]} , ${months[month]} ${day} ,${year} `;

  //for dgrs
  daydgrs.innerText = `  ${days[week]}  `;
}
formtDate(date);

//chalenge 2

//var
let city = document.getElementById("cityName");
let cityform = document.getElementById("cityForm");
//event
cityform.addEventListener("submit", showcity);
function showcity(e) {
  e.preventDefault();
  let cityshow = city.value;
  let selectLocation = document.getElementById("showloc");
  selectLocation.innerText = `${cityshow}`;
}

//challnge3
//temp value

//console.log(temp);
//btns
let BTNTEMP = document.getElementById("tempbtn");
let BTNFAR = document.getElementById("farnbtn");

//set to far
BTNFAR.addEventListener("click", fhar);
function fhar(event) {
  event.preventDefault();
  let temp = document.getElementById("numberdgrs");
  temp.innerText = "22";
}

//set to temprature
BTNTEMP.addEventListener("click", temps);
function temps(event) {
  event.preventDefault();
  let temp = document.getElementById("numberdgrs");
  temp.innerText = "54";
}
