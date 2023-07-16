let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true
};

//1
console.log(paris.temperature);
let city = {
  paris: {
    name: "Paris",
    country: "France",
    language: "French",
    temperature: 18,
    capitalCity: true
  },
  sydney: {
    name: "sydney",
    country: "australia",
    language: "english",
    temperature: 35,
    capitalCity: true
  }
};
console.log(city.sydney["temperature"] + "  JS Challenge 3 ");

//3
let Australia = {
  brisbane: {
    name: "Brisbane",
    country: "australia",
    language: "english",
    temperature: 30,
    capitalCity: true
  },
  sydney: {
    name: "sydney",
    country: "australia",
    language: "english",
    temperature: 35,
    capitalCity: true
  },
  Melbourne: {
    name: "Melbourne",
    country: "australia",
    language: "english",
    temperature: 33,
    capitalCity: true
  }
};

console.log(Australia);
