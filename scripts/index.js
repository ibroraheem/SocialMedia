// Javascript
let form = document.getElementById("form");
let input = document.getElementById("input").value;
let posts = document.getElementById("posts");
let post = {};
let postList = document.getElementById("post-list");
post['text'] = input;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("button clicked");

    if (input.value === "") {
        alert("Post Cannot be Empty!")

    } else {
        console.log(post.text);
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