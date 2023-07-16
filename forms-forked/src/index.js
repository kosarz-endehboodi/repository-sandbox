//challenge1
//var
let specialbutton = document.getElementById("special-button");

//event
specialbutton.addEventListener("click", showHooray);
function showHooray() {
  alert("Hooray");
}

//challenge 2

//varible
let forms = document.getElementById("password-form");

//form
forms.addEventListener("submit", passinfo);

//function
function passinfo(e) {
  e.PreventDfault();
  let pass = document.getElementById("password-input");
  alert(`${pass}of the password`);
}

//challenge 3
let form2 = document.getElementById("signup-form");

form2.addEventListener("submit", showInfo);

function showInfo() {
  let user = document.getElementById("username-input");
  user = user.value;
  let email = document.getElementById("email-input");
  email = email.value;
  alert(`${user}
  ${email} 
  ok?`);
}
console.log(showInfo);
