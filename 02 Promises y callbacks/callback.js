const POSTS = [
  { title: "Post 1", body: "Este es el post número 1" },
  { title: "Post 2", body: "Este es el post número 2" },
];
function getPost() {
  setTimeout(() => {
    let output = "";
    POSTS.forEach((post, index) => {
      output += `<li>${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        POSTS.push(post);
        callback();
    }, 2000);
}

//getPost();
createPost({title: "Post 3", body: "Este es el post número 3"}, getPost);