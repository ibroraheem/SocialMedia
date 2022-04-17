// Javascript
let form = document.getElementById("form");
let input = document.getElementById("input").value;
let posts = document.getElementById("posts");
let post = {};
let postList = document.getElementById("post-list");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input === "") {
        alert("Post Cannot be Empty!")

    } else {
        post['text'] = input;
        createPost();

    }
});


function createPost() {
    postList.innerHTML += `<li>
    ${post.text}
    <span
      ><i class="fas fa-pen"></i> <i class="fas fa-trash"></i
    ></span>
  </li>`;
    input = "";
}