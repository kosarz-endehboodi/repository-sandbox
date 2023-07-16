//var
let clockHour = document.getElementById("hour");
let clockMin = document.getElementById("min");
let dayMM = document.getElementById("dayMM");
let daydgrs = document.getElementById("day");

let hour = new Date().getHours();
let min = new Date().getMinutes();
clockHour.innerText = `${hour}`;
clockMin.innerText = `${min}`;

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
cityform.addEventListener("click", showcity);

function showcity(e) {
  e = city.value;
  let selectLocation = document.getElementById("showloc");
  selectLocation.innerText = `${e}`;
}
showcity();

//challnge3
//temp value

//btns
let BTNTEMP = document.getElementById("tempnbtn");
let BTNFAR = document.getElementById("farnbtn");

//set to far
BTNFAR.addEventListener("click", far);
function far() {
  let temp = document.getElementById("numberdgrs");
  let tempfahr = Math.round((temp * 9) / 5 + 23);
  temp.innerText = `${tempfahr}`;
}
//set to temprature
// BTNTEMP.addEventListener("click", temps);
// function temps() {
//   let temp = document.getElementById("numberdgrs").value;
//   temp.innerText = `${temp}`;
// }
