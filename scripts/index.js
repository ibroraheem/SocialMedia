// Javascript
let form = document.getElementById("form");
var input = document.getElementById("input");
let posts = document.getElementById("posts");
var postArray = []
let postList = document.getElementById("post-list");



form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input === "") {
        alert("Please enter a post");
    } else {
        var inputValue = input.value
        postArray.push(input.value);
        inputValue = "";

        postList.innerHTML += ` <li>
        ${postArray[postArray.length - 1]}<span><i onClick="editPost(this)" class="fas fa-pen"></i> <i onClick="deletePost(this)" class="fas fa-trash"></i></span>
      </li>`
    }
});

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};




