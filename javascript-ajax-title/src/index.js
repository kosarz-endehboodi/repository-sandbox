//challeng2
let jsonurl = "https://jsonplaceholder.typicode.com/todos";
console.log(jsonurl);

//challnge 3
let comment1 = "https://jsonplaceholder.typicode.com/todos/1";
console.log(comment1);

function mycomments(respose) {
  console.log(respose.data.title);

  let h1 = document.getElementById("showcomment");
  h1.innerHTML = `comments${respose.data.title}`;
}
axios.get(comment1).then(mycomments);
