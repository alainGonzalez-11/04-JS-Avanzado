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
  
 async function iniciar(){
    await createPost({title: "Post 3", body: "Este es el post número 3"})
    getPost();
 }
 iniciar();


 async function fetchStarWars(){
    const respones = await fetch('https://swapi.dev/api/people/11');
    const data = respones.json();
    console.log(data);

 }

 fetchStarWars();