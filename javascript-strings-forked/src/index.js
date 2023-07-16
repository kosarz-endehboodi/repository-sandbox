let country = "Guinea Bissau";
let city = " Sydney   ";
let place = "School";
let attraction = "Opera House";
//replace space to underline  1
country = country.replace(" ", "-");
console.log(country);
//remove  2
city = city.trim();
console.log(city + "hi");

//lower case 3
attraction = attraction.toLowerCase();
console.log(attraction);

//upper case 4
place = place.toUpperCase();
console.log(place);

//5
console.log(
  `I went to visit the ${attraction} in ${city} right next to my ${place}  Now, I'm getting ready for my trip to ${country} `
);
