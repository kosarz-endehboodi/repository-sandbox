// Challenge 1
// Log li with id special
let special = document.getElementById("special");
console.log(special);
// Challenge 2
// Log all li with class of country
let country = document.querySelectorAll(".country");
console.log(country);
// Challenge 3
// Add class special to the li with id special
let countrySpecial = document.getElementById("special");
countrySpecial.classList.add("special");
// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)
let changeText = document.querySelector("#special");
changeText.innerText = `iran`;
