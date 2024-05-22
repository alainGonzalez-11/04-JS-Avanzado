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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            POSTS.push(post);
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Algo salió mal');
            }
          }, 2000);
    }); 
}


//createPost({title: "Post 3", body: "Este es el post número 3"}).then(getPost).catch((error) => console.log(error));


// Multiples promesas
const promesa1 = createPost({title: "Post 3", body: "Este es el post número 3"});
const promesa2 = createPost({title: "Post 4", body: "Este es el post número 4"})
const promesa3 = fetch('https://swapi.dev/api/people/11').then(res=>res.json());


Promise.all([promesa1, promesa2, promesa3]).then(getPost).catch((error) => console.log(error));