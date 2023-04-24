"use strict";

console.log("JS kører");

const endpoint = "https://api-project-pgj-2023-default-rtdb.firebaseio.com/";

window.addEventListener("load", initApp);

function initApp() {
  updatePostsGrid();
//   updateUserGrid();

  document
    .querySelector("#btn-create-post")
    .addEventListener("click", createPostClicked);
}

function createPostClicked() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  const title = `My Post Title Number ${randomNumber}`;
  const body = "Whatever";
  const image =
    "https://www.ringtv.com/wp-content/uploads/2014/03/George-Chuvalo-feature.jpg";

  createPost(title, body, image);
}

async function updatePostsGrid() {
  const listOfPosts = await getPosts();
  showPosts(listOfPosts);
}

async function getPosts() {
  const response = await fetch(`${endpoint}/posts.json`);
  const data = await response.json();
  const posts = preparePostData(data);
  console.log(posts);
  return posts;
}

function showPosts(listOfPosts) {
  document.querySelector("#posts").innerHTML = "";

  for (const post of listOfPosts) {
    showPost(post);
  }
}

function showPost(postObject) {
  const html =
    /*html*/
    `<article class="grid-item">
        <img src="${postObject.image}" />
        <h3>${postObject.title}</h3>
        <p>${postObject.body}</p>
        <div class= "btns">
            <button class="btn-delete">Delete</button>
            <button class="btn-update">Update</button>      
        </div>
    </article>
    `;
  document.querySelector("#posts").insertAdjacentHTML("beforeend", html);

  document
    .querySelector("#posts article:last-child .btn-delete")
    .addEventListener("click", () => deleteClicked(postObject.id));
  document
    .querySelector("#posts article:last-child .btn-update")
    .addEventListener("click", () => updateClicked(postObject.id));
}

async function createPost(title, body, image) {

    const elements = document.querySelector("#form").elements;

    const postObject = {
        title: elements.namedItem("title").value,
        body: elements.namedItem("body").value,
        image: elements.namedItem("body").value
    }
}






// Oprindelig kode
/*"use strict";

console.log("JS kører");

const endpoint = "https://api-project-pgj-2023-default-rtdb.firebaseio.com/";

window.addEventListener("load", initApp);

function initApp() {
  updatePostsGrid();
//   updateUserGrid();

  document
    .querySelector("#btn-create-post")
    .addEventListener("click", createPostClicked);
}

function createPostClicked() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  const title = `My Post Title Number ${randomNumber}`;
  const body = "Whatever";
  const image =
    "https://www.ringtv.com/wp-content/uploads/2014/03/George-Chuvalo-feature.jpg";

  createPost(title, body, image);
}

async function updatePostsGrid() {
  showPosts();
}

async function getPosts() {
  const response = await fetch(`${endpoint}/posts.json`);
  const data = await response.json();
  const posts = preparePostData(data);
  console.log(posts);
  return posts;
}

function showPosts(listOfPosts) {
  document.querySelector("#posts").innerHTML = "";

  for (const post of listOfPosts) {
    showPost(post);
  }
}

function showPost(postObject) {
  const html =
    /*html*/
/*    `<article class="grid-item">
        <img src="${postObject.image}" />
        <h3>${postObject.title}</h3>
        <p>${postObject.body}</p>
        <div class= "btns">
            <button class="btn-delete">Delete</button>
            <button class="btn-delete">Update</button>      
        </div>
    </article>
    `;
  document.querySelector("#posts").insertAdjacentHTML("beforeend", html);

  document
    .querySelector("#posts article: last-child .btn-delete")
    .addEventListener("click", deleteClicked);
  document
    .querySelector("#posts article: last-child .btn-update")
    .addEventListener("click", updateClicked);
}

async function createPost(title, body, image) {

    const elements = document.querySelector("#form").elements;

    const postObject = {
      title: elements.namedItem("title").value,
      body: elements.namedItem("body").value,
      image: elements.namedItem("image").value,
    };

    console.log(newPost);
    const postAsJson = JSON.stringify(postObject);
    const response = await fetch(`${endpoint}/posts.json`, {
      method: "POST",
      body: postAsJson,
    });
    const data = await response.json();
    console.log(data);
}

async function deletePost(id) {
  const response = await fetch(`${endpoint}/posts/${id}.json`, {
    method: "DELETE",
  });
  if (response.ok) {
    console.log("New post succesfully deleted from database");
    updatePostsGrid;
  }
}

function deleteClicked() {
  deletePost(postObject.id);
}

function updateClicked() {
  const title = `${postObject.title} updated`;
  const body = "Whatever";
  const image =
    "https://www.ringtv.com/wp-content/uploads/2014/03/George-Chuvalo-feature.jpg";

  updatePost(postObject, id, title, body, image);
}

async function updatePost(id, title, body, image) {
  const postToUpdate = { title, body, image };
  const json = JSON.stringify(postToUpdate);
  const response = await fetch(`${endpoint}/posts/${id}.json`, {
    method: "PUT",
    body: json,
  });

  if (response.ok) {
    console.log("Post succesfully updated in Firebase");
    updatePostsGrid;
  }
}

*/