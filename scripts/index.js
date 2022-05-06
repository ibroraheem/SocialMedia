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
        ${postArray[postArray.length - 1]}<span><i class="fas fa-pen"></i> <i class="fas fa-trash"></i></span>
      </li>`
    }
});

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};




