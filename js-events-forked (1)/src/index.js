// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

let btnDegrees = document.querySelector("button");
btnDegrees.addEventListener("click", alertfun);

function alertfun(e) {
  alert("It is 18 degrees");

  //challenge2
  let showInfo = document.getElementById("showInfo");
  showInfo.innerText = `18 degrees`;
}

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’
