//challeng2
let jsonurl = "https://jsonplaceholder.typicode.com/posts/1/comments";
console.log(jsonurl);

//challnge 3
let comment1 = "https://jsonplaceholder.typicode.com/posts/1/comments";
console.log(comment1);

function mycomments(respose) {
  console.log(respose.data.title);

  let h1 = document.getElementById("showcomment");
  h1.innerHTML = ` email:${respose.data[0].email}`;
}
axios.get(comment1).then(mycomments);
