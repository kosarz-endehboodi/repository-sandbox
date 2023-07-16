//1 log the current date
let date = new Date();
console.log(date);
//2 Log the number of milliseconds in the current time
let mil = new Date().getMilliseconds();
console.log(mil);
//3 Log the current day

let day = new Date().getDay();
console.log(day);

//5 Log the current month

let month = new Date().getMonth();
console.log(month);

//6Display the current date following the following format: Today is Thursday, April 4, 2020
//let h2 = document.querySelector("h2");

//h2.innerHTML = `Today is Thursday, April 4, 2020`;

//7
function formtDate(date) {
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
  let year = date.getFullYear();
  let day = days[date.getDay()];
  let Month = months[date.getMonth()];
  let Dates = date.getDate();
  let showdate = `Today is ${day}, ${Month} ${Dates}, ${year}`;
  let h2 = document.querySelector("h2");
  h2.innerText = `${showdate}`;
  return showdate;
}
formtDate(date);
